"use strict";

export enum BrowserType {
    Chromium,
    Firefox,
    Unknown
}

export async function getBrowserType() {
    // Firefox: Use chrome.runtime.getBrowserInfo() if available
    // (Firefox supports the chrome.* namespace in MV3)
    const getBrowserInfo = (chrome.runtime as any).getBrowserInfo as (() => Promise<any>) | undefined;

    if (getBrowserInfo) {
        try {
            const browserInfo = await getBrowserInfo();
            switch (browserInfo.name.toLowerCase()) {
                case "firefox":
                    return BrowserType.Firefox;
                default:
                    return BrowserType.Unknown;
            }
        } catch (e) {
            // getBrowserInfo may fail or not exist; fall back to Chromium
            return BrowserType.Chromium;
        }
    }

    return BrowserType.Chromium;
}

export function getMinutesInMs(minutes: number) {
    return minutes * 60 * 1000;
}
