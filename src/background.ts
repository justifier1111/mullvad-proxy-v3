"use strict";

import logger from "./lib/logger";
import options from "./lib/options";

import * as utils from "./lib/utils";
import * as mullvadApi from "./lib/mullvadApi";

import localStorage from "./localStorage";
import messages from "./messages";

const _ = chrome.i18n.getMessage;

chrome.runtime.onInstalled.addListener(async details => {
    switch (details.reason) {
        case "install": {
            await options.setAll();
            init().catch(err => console.error("Init failed:", err));
            break;
        }
        case "update": {
            await options.update();
            break;
        }
    }
});

type CreateNotificationOptions =
    chrome.notifications.NotificationOptions<true>;

const notifConnectionSucceeded = (
    host = "host"
): CreateNotificationOptions => ({
    title: _("notificationConnectionSucceededTitle"),
    message: _("notificationConnectionSucceededMessage", host),
    type: "basic",
    iconUrl: "icons/icons8-ok-120.png"
});

const notifConnectionFailed = (host = "host"): CreateNotificationOptions => ({
    title: _("notificationConnectionFailedTitle"),
    message: _("notificationConnectionFailedMessage", host),
    type: "basic",
    iconUrl: "icons/icons8-warn-120.png"
});

const notifConnectionFailedNonMullvad = (): CreateNotificationOptions => ({
    title: _("notificationConnectionFailedTitle"),
    message: _("notificationConnectionFailedMessageNonMullvad"),
    type: "basic",
    iconUrl: "icons/icons8-warn-120.png"
});

const notifConnectionDisconnected = (
    host = "host"
): CreateNotificationOptions => ({
    title: _("notificationConnectionDisconnectedTitle"),
    message: _("notificationConnectionDisconnectedMessage", host),
    type: "basic",
    iconUrl: "icons/icons8-cancel-120.png"
});

let lastNotificationId: string = "";

async function showNotification(createOptions: CreateNotificationOptions): Promise<string> {
    const { enableNotifications, enableNotificationsOnlyErrors } =
        await options.getAll();

    if (!enableNotifications) {
        return "";
    }

    if (
        enableNotificationsOnlyErrors &&
        createOptions.title !== _("notificationConnectionFailedTitle")
    ) {
        return "";
    }

    if (lastNotificationId) {
        chrome.notifications.clear(lastNotificationId);
    }

    return new Promise<string>((resolve) => {
        const id = Math.random().toString(36).substr(2, 9);
        chrome.notifications.create(id, createOptions, () => {
            lastNotificationId = id;
            resolve(id);
        });
    });
}

let isChromium: boolean;

let proxy: { type: string; host: string; port: number; proxyDNS: boolean } | null = null;
let proxyConnecting = false;
let proxyAbortController = new AbortController();

let excludeList: string[] = [];

options.addEventListener("changed", async ev => {
    if (
        ev.detail.includes("enableExcludeList") ||
        ev.detail.includes("excludeList")
    ) {
        const opts = await options.getAll();

        if (opts.enableExcludeList) {
            excludeList = opts.excludeList;
            return;
        }

        excludeList = [];
    }
});

/**
 * Set SOCKS5 proxy via chrome.proxy.settings (MV3 compatible)
 */
function setProxySettings(host: string, port: number): void {
    const proxyConfig = {
        mode: "fixed_servers" as const,
        rules: {
            singleProxy: {
                scheme: "socks5",
                host: host,
                port: port
            },
            bypassList: excludeList
        }
    };

    chrome.proxy.settings.set(
        { value: proxyConfig, scope: "regular" },
        (): void => {
            if (chrome.runtime.lastError) {
                console.error("Proxy set error:", chrome.runtime.lastError);
            } else {
                logger.info(`SOCKS5 proxy set to ${host}:${port}`);
            }
        }
    );
}

/**
 * Clear proxy settings and restore direct connection
 */
function clearProxySettings(): void {
    const proxyConfig = {
        mode: "direct" as const
    };

    chrome.proxy.settings.set(
        { value: proxyConfig, scope: "regular" },
        (): void => {
            if (chrome.runtime.lastError) {
                console.error("Proxy clear error:", chrome.runtime.lastError);
            } else {
                logger.info("Proxy cleared, direct connection restored");
            }
        }
    );
}

function onProxyError(...args: any[]) {
    logger.error("Proxy error!", args);
    if (proxy) {
        showNotification(notifConnectionFailed(proxy.host));
    } else {
        showNotification(notifConnectionFailed("unknown"));
    }
    disableProxy();
}

/**
 * Checks current connection is valid and sets up proxy via chrome.proxy.settings.
 * If client isn't connected via Mullvad, proxy connection is
 * aborted and user is notified.
 */
async function enableProxy(
    host: string,
    details: mullvadApi.ConnectionDetails
) {
    if (proxyConnecting) {
        return;
    }

    logger.info("Connecting...");

    proxy = {
        type: "socks5",
        host: host,
        port: typeof mullvadApi.SOCKS_PORT === "string" ? parseInt(mullvadApi.SOCKS_PORT, 10) : mullvadApi.SOCKS_PORT,
        proxyDNS: await options.get("proxyDns")
    };

    proxyConnecting = true;

    if (!details.mullvad_exit_ip) {
        logger.error("Not connected via Mullvad!");
        showNotification(notifConnectionFailedNonMullvad());
        await disableProxy();
        return;
    }

    try {
        logger.info("Proxy registered", proxy);

        setProxySettings(proxy.host, proxy.port);

        const address = await mullvadApi.fetchIpAddress(
            mullvadApi.EndpointVariant.IPv4,
            {
                signal: proxyAbortController.signal
            }
        );

        logger.info(`IP address: ${address}`);

        if (proxy) {
            showNotification(notifConnectionSucceeded(proxy.host));
        }

        chrome.action.setIcon({
            path: {
                16: "icons/locked-16.png",
                24: "icons/locked-24.png",
                32: "icons/locked-32.png"
            }
        });

        proxyConnecting = false;
    } catch (err) {
        if (proxy?.host === host) {
            logger.error("Proxy request failed!", err);
            if (proxy) {
                showNotification(notifConnectionFailed(proxy.host));
            }

            await disableProxy();
        }
    }
}

/**
 * Clears proxy configuration and resets UI.
 */
async function disableProxy(notify = false) {
    if (notify) {
        showNotification(notifConnectionDisconnected(proxy?.host ?? "unknown"));
    }

    clearProxySettings();

    chrome.action.setIcon({
        path: {
            "16": "icons/unlocked-16.png",
            "24": "icons/unlocked-24.png",
            "32": "icons/unlocked-32.png"
        }
    });

    chrome.action.setBadgeText({
        text: ""
    });

    proxy = null;
    proxyConnecting = false;
    proxyAbortController.abort();
    proxyAbortController = new AbortController();
}

function updateBadgeText(countryCode?: string) {
    if (proxy && !proxyConnecting) {
        chrome.action.setBadgeText({
            text: countryCode?.toUpperCase() ?? ""
        });
    }
}

chrome.runtime.onConnect.addListener(port => {
    if (port.name !== "background") {
        return;
    }

    let isPortConnected = true;
    port.onDisconnect.addListener(() => {
        isPortConnected = false;
    });

    function sendPopupUpdate() {
        if (!isPortConnected) {
            return;
        }

        port.postMessage({
            subject: "popup:/update",
            data: {
                isConnected: !!proxy && !proxyConnecting,
                isConnecting: proxyConnecting,
                host: proxy?.host
            }
        });
    }

    port.onMessage.addListener(async message => {
        switch (message.subject) {
            case "background:/connect": {
                const IP_ADDR_REGEX = /(?:\d{1,3}\.){3}\d{1,3}/;
                const host = IP_ADDR_REGEX.test(message.data.proxyHost)
                    ? message.data.proxyHost
                    : mullvadApi.getFullSocksHost(message.data.proxyHost);

                if (isPortConnected) {
                    port.postMessage({
                        subject: "popup:/update",
                        data: {
                            isConnected: false,
                            isConnecting: true
                        }
                    });
                }

                await enableProxy(host, message.data.details);
                sendPopupUpdate();
                break;
            }

            case "background:/disconnect": {
                await disableProxy(true);
                sendPopupUpdate();
                break;
            }

            case "background:/updateConnectionDetails": {
                updateBadgeText(
                    message.data.details.mullvad_exit_ip_hostname?.slice(0, 2)
                );
                break;
            }
        }
    });

    sendPopupUpdate();
});

let isInitialized = false;

async function init() {
    if (isInitialized) {
        return;
    }

    const opts = await options.getAll();
    if (!opts) {
        return;
    }

    isInitialized = true;

    if (opts.enableExcludeList) {
        excludeList = opts.excludeList;
    }

    const browserType = await utils.getBrowserType();
    switch (browserType) {
        case utils.BrowserType.Chromium: {
            isChromium = true;
            await disableProxy();
            break;
        }

        case utils.BrowserType.Firefox: {
            chrome.action.setBadgeBackgroundColor({
                color: "#294d73"
            });
            break;
        }
    }

    if (opts.autoConnect) {
        const connectionDetails = await mullvadApi.fetchConnectionDetails();

        if (opts.rememberConnectedServer) {
            const { recentServers } = await localStorage.get("recentServers");
            if (recentServers?.length) {
                const recentServer = recentServers[0];
                await enableProxy(
                    mullvadApi.getFullSocksHost(recentServer.socks_name),
                    connectionDetails
                );
                updateBadgeText(recentServer.country_code);
            } else {
                logger.error("Could not find last connected server.");
            }
        } else {
            let currentRegionProxyHost = mullvadApi.SOCKS_ADDRESS;
            if (connectionDetails.mullvad_server_type === "wireguard") {
                currentRegionProxyHost = mullvadApi.SOCKS_ADDRESS_WG;
            }

            await enableProxy(currentRegionProxyHost, connectionDetails);
            updateBadgeText(
                connectionDetails.mullvad_exit_ip_hostname?.slice(0, 2)
            );
        }
    }
}

init().catch(err => console.error("Init failed:", err));
