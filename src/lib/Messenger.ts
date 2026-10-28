"use strict";

import { TypedPort } from "./TypedPort";

interface RuntimeConnectInfo {
    name: string;
}
interface TabConnectInfo {
    name: string;
    frameId: number;
}

export default class Messenger<T> {
    connect(connectInfo: RuntimeConnectInfo) {
        return chrome.runtime.connect(connectInfo) as unknown as TypedPort<T>;
    }

    connectTab(tabId: number, connectInfo: TabConnectInfo) {
        return chrome.tabs.connect(
            tabId,
            connectInfo
        ) as unknown as TypedPort<T>;
    }

    onConnect = {
        addListener(cb: (port: TypedPort<T>) => void) {
            chrome.runtime.onConnect.addListener(cb as any);
        },
        removeListener(cb: (port: TypedPort<T>) => void) {
            chrome.runtime.onConnect.removeListener(cb as any);
        },
        hasListener(cb: (port: TypedPort<T>) => void) {
            return chrome.runtime.onConnect.hasListener(cb as any);
        }
    };
}
