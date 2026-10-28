/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/defaultOptions.ts"
/*!*******************************!*\
  !*** ./src/defaultOptions.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    autoConnect: false,
    rememberConnectedServer: false,
    proxyDns: true,
    enableNotifications: true,
    enableIpv6Lookups: false,
    enableNotificationsOnlyErrors: false,
    enableDebugInfo: false,
    enableExcludeList: false,
    excludeList: []
});


/***/ },

/***/ "./src/lib/TypedEventTarget.ts"
/*!*************************************!*\
  !*** ./src/lib/TypedEventTarget.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedEventTarget: () => (/* binding */ TypedEventTarget)
/* harmony export */ });

class TypedEventTarget extends EventTarget {
    addEventListener(type, listener) {
        super.addEventListener(type, listener);
    }
    removeEventListener(type, listener) {
        super.removeEventListener(type, listener);
    }
    dispatchEvent(ev) {
        return super.dispatchEvent(ev);
    }
}


/***/ },

/***/ "./src/lib/TypedStorageArea.ts"
/*!*************************************!*\
  !*** ./src/lib/TypedStorageArea.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedStorageArea: () => (/* binding */ TypedStorageArea)
/* harmony export */ });

class TypedStorageArea {
    constructor(storageArea) {
        this.storageArea = storageArea;
    }
    async get(keys) {
        return await this.storageArea.get(keys);
    }
    async getBytesInUse(keys) {
        return await this.storageArea.getBytesInUse(keys);
    }
    async set(keys) {
        await this.storageArea.set(keys);
    }
    async remove(keys) {
        await this.storageArea.remove(keys);
    }
    async clear() {
        await this.storageArea.clear();
    }
}


/***/ },

/***/ "./src/lib/logger.ts"
/*!***************************!*\
  !*** ./src/lib/logger.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Logger {
    constructor(prefix) {
        this.prefix = prefix;
    }
    log(message, data) {
        const formattedMessage = `${this.prefix} (Log): ${message}`;
        if (data) {
            console.log(formattedMessage, data);
        }
        else {
            console.log(formattedMessage);
        }
    }
    info(message, data) {
        const formattedMessage = `${this.prefix} (Info): ${message}`;
        if (data) {
            console.info(formattedMessage, data);
        }
        else {
            console.info(formattedMessage);
        }
    }
    error(message, data) {
        const formattedMessage = `${this.prefix} (Error): ${message}`;
        if (data) {
            console.error(formattedMessage, data);
        }
        else {
            console.error(formattedMessage);
        }
        return new Error(formattedMessage);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Logger("mullvad"));


/***/ },

/***/ "./src/lib/mullvadApi.ts"
/*!*******************************!*\
  !*** ./src/lib/mullvadApi.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECK_URL: () => (/* binding */ CHECK_URL),
/* harmony export */   EndpointVariant: () => (/* binding */ EndpointVariant),
/* harmony export */   SOCKS_ADDRESS: () => (/* binding */ SOCKS_ADDRESS),
/* harmony export */   SOCKS_ADDRESS_WG: () => (/* binding */ SOCKS_ADDRESS_WG),
/* harmony export */   SOCKS_PORT: () => (/* binding */ SOCKS_PORT),
/* harmony export */   fetchConnectionDetails: () => (/* binding */ fetchConnectionDetails),
/* harmony export */   fetchIpAddress: () => (/* binding */ fetchIpAddress),
/* harmony export */   fetchPortDetails: () => (/* binding */ fetchPortDetails),
/* harmony export */   fetchServerList: () => (/* binding */ fetchServerList),
/* harmony export */   getFullSocksHost: () => (/* binding */ getFullSocksHost),
/* harmony export */   getServerIdFromHost: () => (/* binding */ getServerIdFromHost),
/* harmony export */   getShortSocksName: () => (/* binding */ getShortSocksName)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/lib/logger.ts");


const logger = new _logger__WEBPACK_IMPORTED_MODULE_0__.Logger("mullvadApi");
const AIM_HOST = "am.i.mullvad.net";
const ENDPOINT_AIM = `https://${AIM_HOST}`;
const IPV4_ENDPOINT_AIM = `https://ipv4.${AIM_HOST}`;
const IPV6_ENDPOINT_AIM = `https://ipv6.${AIM_HOST}`;
var EndpointVariant;
(function (EndpointVariant) {
    EndpointVariant[EndpointVariant["IPv4"] = 0] = "IPv4";
    EndpointVariant[EndpointVariant["IPv6"] = 1] = "IPv6";
})(EndpointVariant || (EndpointVariant = {}));
function getVariantEndpoints(variant) {
    let endpoint;
    switch (variant) {
        case EndpointVariant.IPv4:
            endpoint = IPV4_ENDPOINT_AIM;
            break;
        case EndpointVariant.IPv6:
            endpoint = IPV6_ENDPOINT_AIM;
            break;
        default:
            throw new Error("Invalid endpoint variant");
    }
    return {
        endpointAimIp: `${endpoint}/ip`,
        endpointAimDetails: `${endpoint}/json`
    };
}
const ENDPOINT_AIM_PORT = `${ENDPOINT_AIM}/port`;
const ENDPOINT_RELAYS = "https://api.mullvad.net/www/relays/wireguard/";
const SOCKS_ADDRESS = "10.8.0.1";
const SOCKS_ADDRESS_WG = "10.64.0.1";
const SOCKS_PORT = "1080";
function getFullSocksHost(serverName) {
    if (serverName.endsWith("mullvad.net")) {
        return serverName;
    }
    return `${serverName}.mullvad.net`;
}
function getShortSocksName(socksName) {
    if (socksName.endsWith(".socks5.relays.mullvad.net")) {
        return socksName.slice(0, -26);
    }
    return socksName;
}
const CHECK_URL = "https://mullvad.net/check";
async function fetchIpAddress(variant = EndpointVariant.IPv4, init) {
    logger.info("Fetching IP address...");
    const { endpointAimIp } = getVariantEndpoints(variant);
    const res = await fetch(endpointAimIp, init);
    return (await res.text()).trim();
}
async function fetchConnectionDetails(variant = EndpointVariant.IPv4, init) {
    logger.info("Fetching connection details...");
    const { endpointAimDetails } = getVariantEndpoints(variant);
    const res = await fetch(endpointAimDetails, init);
    const json = await res.json();
    json.mullvad_server_type = json.mullvad_server_type?.toLowerCase();
    return json;
}
async function fetchPortDetails(port, init) {
    if (port < 1 || port > 65536) {
        throw new Error("Invalid port!");
    }
    logger.info("Fetching port details...");
    let json;
    try {
        const res = await fetch(`${ENDPOINT_AIM_PORT}/${port}`, init);
        json = await res.json();
    }
    catch (err) {
        throw logger.error("Failed to fetch port details", err);
    }
    return json;
}
async function fetchServerList(init) {
    logger.info("Fetching server list...");
    let json;
    try {
        const res = await fetch(ENDPOINT_RELAYS, init);
        json = await res.json();
    }
    catch (err) {
        throw logger.error("Failed to fetch server list", err);
    }
    return json;
}
function getServerIdFromHost(hostname) {
    return parseInt(hostname.slice(2, hostname.indexOf("-")));
}


/***/ },

/***/ "./src/lib/options.ts"
/*!****************************!*\
  !*** ./src/lib/options.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultOptions */ "./src/defaultOptions.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/logger.ts");
/* harmony import */ var _TypedEventTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TypedEventTarget */ "./src/lib/TypedEventTarget.ts");
/* harmony import */ var _TypedStorageArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypedStorageArea */ "./src/lib/TypedStorageArea.ts");





const storageArea = new _TypedStorageArea__WEBPACK_IMPORTED_MODULE_3__.TypedStorageArea(chrome.storage.sync);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new (class extends _TypedEventTarget__WEBPACK_IMPORTED_MODULE_2__.TypedEventTarget {
    constructor() {
        super();
        this.onStorageChanged = this.onStorageChanged.bind(this);
        chrome.storage.onChanged.addListener(this.onStorageChanged);
    }
    onStorageChanged(changes, areaName) {
        if (areaName !== "sync") {
            return;
        }
        if ("options" in changes) {
            const { oldValue, newValue } = changes.options;
            const changedKeys = [];
            for (const key of Object.keys(newValue)) {
                if (oldValue) {
                    if (!(key in oldValue)) {
                        continue;
                    }
                    const oldKeyValue = oldValue[key];
                    const newKeyValue = newValue[key];
                    if (oldKeyValue === newKeyValue) {
                        continue;
                    }
                    if (oldKeyValue instanceof Array &&
                        newKeyValue instanceof Array) {
                        if (oldKeyValue.length === newKeyValue.length &&
                            oldKeyValue.every((value, index) => value === newKeyValue[index])) {
                            continue;
                        }
                    }
                }
                changedKeys.push(key);
            }
            this.dispatchEvent(new CustomEvent("changed", {
                detail: changedKeys
            }));
        }
    }
    async getAll() {
        const { options } = await storageArea.get("options");
        return options;
    }
    async setAll(options = _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        return storageArea.set({ options });
    }
    async get(name) {
        const options = await this.getAll();
        if (options.hasOwnProperty(name)) {
            return options[name];
        }
        else {
            throw _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error(`Failed to find option ${name} in storage.`);
        }
    }
    async set(name, value) {
        const options = await this.getAll();
        options[name] = value;
        return this.setAll(options);
    }
    async update(defaults = _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        const newOpts = await this.getAll();
        if (!newOpts) {
            this.setAll();
        }
        for (const [optName, optVal] of Object.entries(defaults)) {
            if (!newOpts.hasOwnProperty(optName)) {
                newOpts[optName] = optVal;
            }
        }
        return this.setAll(newOpts);
    }
})());


/***/ },

/***/ "./src/lib/utils.ts"
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserType: () => (/* binding */ BrowserType),
/* harmony export */   getBrowserType: () => (/* binding */ getBrowserType),
/* harmony export */   getMinutesInMs: () => (/* binding */ getMinutesInMs)
/* harmony export */ });

var BrowserType;
(function (BrowserType) {
    BrowserType[BrowserType["Chromium"] = 0] = "Chromium";
    BrowserType[BrowserType["Firefox"] = 1] = "Firefox";
    BrowserType[BrowserType["Unknown"] = 2] = "Unknown";
})(BrowserType || (BrowserType = {}));
async function getBrowserType() {
    const getBrowserInfo = chrome.runtime.getBrowserInfo;
    if (getBrowserInfo) {
        try {
            const browserInfo = await getBrowserInfo();
            switch (browserInfo.name.toLowerCase()) {
                case "firefox":
                    return BrowserType.Firefox;
                default:
                    return BrowserType.Unknown;
            }
        }
        catch (e) {
            return BrowserType.Chromium;
        }
    }
    return BrowserType.Chromium;
}
function getMinutesInMs(minutes) {
    return minutes * 60 * 1000;
}


/***/ },

/***/ "./src/localStorage.ts"
/*!*****************************!*\
  !*** ./src/localStorage.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_TypedStorageArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/TypedStorageArea */ "./src/lib/TypedStorageArea.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _lib_TypedStorageArea__WEBPACK_IMPORTED_MODULE_0__.TypedStorageArea(chrome.storage.local));


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/logger */ "./src/lib/logger.ts");
/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/options */ "./src/lib/options.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/mullvadApi */ "./src/lib/mullvadApi.ts");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.ts");






const _ = chrome.i18n.getMessage;
chrome.runtime.onInstalled.addListener(async (details) => {
    switch (details.reason) {
        case "install": {
            await _lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].setAll();
            init().catch(err => console.error("Init failed:", err));
            break;
        }
        case "update": {
            await _lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].update();
            break;
        }
    }
});
const notifConnectionSucceeded = (host = "host") => ({
    title: _("notificationConnectionSucceededTitle"),
    message: _("notificationConnectionSucceededMessage", host),
    type: "basic",
    iconUrl: "icons/icons8-ok-120.png"
});
const notifConnectionFailed = (host = "host") => ({
    title: _("notificationConnectionFailedTitle"),
    message: _("notificationConnectionFailedMessage", host),
    type: "basic",
    iconUrl: "icons/icons8-warn-120.png"
});
const notifConnectionFailedNonMullvad = () => ({
    title: _("notificationConnectionFailedTitle"),
    message: _("notificationConnectionFailedMessageNonMullvad"),
    type: "basic",
    iconUrl: "icons/icons8-warn-120.png"
});
const notifConnectionDisconnected = (host = "host") => ({
    title: _("notificationConnectionDisconnectedTitle"),
    message: _("notificationConnectionDisconnectedMessage", host),
    type: "basic",
    iconUrl: "icons/icons8-cancel-120.png"
});
let lastNotificationId = "";
async function showNotification(createOptions) {
    const { enableNotifications, enableNotificationsOnlyErrors } = await _lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();
    if (!enableNotifications) {
        return "";
    }
    if (enableNotificationsOnlyErrors &&
        createOptions.title !== _("notificationConnectionFailedTitle")) {
        return "";
    }
    if (lastNotificationId) {
        chrome.notifications.clear(lastNotificationId);
    }
    return new Promise((resolve) => {
        const id = Math.random().toString(36).substr(2, 9);
        chrome.notifications.create(id, createOptions, () => {
            lastNotificationId = id;
            resolve(id);
        });
    });
}
let isChromium;
let proxy = null;
let proxyConnecting = false;
let proxyAbortController = new AbortController();
let excludeList = [];
_lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener("changed", async (ev) => {
    if (ev.detail.includes("enableExcludeList") ||
        ev.detail.includes("excludeList")) {
        const opts = await _lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();
        if (opts.enableExcludeList) {
            excludeList = opts.excludeList;
            return;
        }
        excludeList = [];
    }
});
function setProxySettings(host, port) {
    const proxyConfig = {
        mode: "fixed_servers",
        rules: {
            singleProxy: {
                scheme: "socks5",
                host: host,
                port: port
            },
            bypassList: excludeList
        }
    };
    chrome.proxy.settings.set({ value: proxyConfig, scope: "regular" }, () => {
        if (chrome.runtime.lastError) {
            console.error("Proxy set error:", chrome.runtime.lastError);
        }
        else {
            _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].info(`SOCKS5 proxy set to ${host}:${port}`);
        }
    });
}
function clearProxySettings() {
    const proxyConfig = {
        mode: "direct"
    };
    chrome.proxy.settings.set({ value: proxyConfig, scope: "regular" }, () => {
        if (chrome.runtime.lastError) {
            console.error("Proxy clear error:", chrome.runtime.lastError);
        }
        else {
            _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].info("Proxy cleared, direct connection restored");
        }
    });
}
function onProxyError(...args) {
    _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Proxy error!", args);
    if (proxy) {
        showNotification(notifConnectionFailed(proxy.host));
    }
    else {
        showNotification(notifConnectionFailed("unknown"));
    }
    disableProxy();
}
async function enableProxy(host, details) {
    if (proxyConnecting) {
        return;
    }
    _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].info("Connecting...");
    proxy = {
        type: "socks5",
        host: host,
        port: typeof _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.SOCKS_PORT === "string" ? parseInt(_lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.SOCKS_PORT, 10) : _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.SOCKS_PORT,
        proxyDNS: await _lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].get("proxyDns")
    };
    proxyConnecting = true;
    if (!details.mullvad_exit_ip) {
        _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Not connected via Mullvad!");
        showNotification(notifConnectionFailedNonMullvad());
        await disableProxy();
        return;
    }
    try {
        _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].info("Proxy registered", proxy);
        setProxySettings(proxy.host, proxy.port);
        const address = await _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.fetchIpAddress(_lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.EndpointVariant.IPv4, {
            signal: proxyAbortController.signal
        });
        _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].info(`IP address: ${address}`);
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
    }
    catch (err) {
        if (proxy?.host === host) {
            _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Proxy request failed!", err);
            if (proxy) {
                showNotification(notifConnectionFailed(proxy.host));
            }
            await disableProxy();
        }
    }
}
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
function updateBadgeText(countryCode) {
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
    port.onMessage.addListener(async (message) => {
        switch (message.subject) {
            case "background:/connect": {
                const IP_ADDR_REGEX = /(?:\d{1,3}\.){3}\d{1,3}/;
                const host = IP_ADDR_REGEX.test(message.data.proxyHost)
                    ? message.data.proxyHost
                    : _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.getFullSocksHost(message.data.proxyHost);
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
                updateBadgeText(message.data.details.mullvad_exit_ip_hostname?.slice(0, 2));
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
    const opts = await _lib_options__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();
    if (!opts) {
        return;
    }
    isInitialized = true;
    if (opts.enableExcludeList) {
        excludeList = opts.excludeList;
    }
    const browserType = await _lib_utils__WEBPACK_IMPORTED_MODULE_2__.getBrowserType();
    switch (browserType) {
        case _lib_utils__WEBPACK_IMPORTED_MODULE_2__.BrowserType.Chromium: {
            isChromium = true;
            await disableProxy();
            break;
        }
        case _lib_utils__WEBPACK_IMPORTED_MODULE_2__.BrowserType.Firefox: {
            chrome.action.setBadgeBackgroundColor({
                color: "#294d73"
            });
            break;
        }
    }
    if (opts.autoConnect) {
        const connectionDetails = await _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.fetchConnectionDetails();
        if (opts.rememberConnectedServer) {
            const { recentServers } = await _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].get("recentServers");
            if (recentServers?.length) {
                const recentServer = recentServers[0];
                await enableProxy(_lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.getFullSocksHost(recentServer.socks_name), connectionDetails);
                updateBadgeText(recentServer.country_code);
            }
            else {
                _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Could not find last connected server.");
            }
        }
        else {
            let currentRegionProxyHost = _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.SOCKS_ADDRESS;
            if (connectionDetails.mullvad_server_type === "wireguard") {
                currentRegionProxyHost = _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_3__.SOCKS_ADDRESS_WG;
            }
            await enableProxy(currentRegionProxyHost, connectionDetails);
            updateBadgeText(connectionDetails.mullvad_exit_ip_hostname?.slice(0, 2));
        }
    }
}
init().catch(err => console.error("Init failed:", err));

})();

/******/ })()
;
//# sourceMappingURL=background.bundle.js.map