import {browser} from "@wdio/globals";

export async function unauthorized(): Promise<void> {
    await browser.executeScript("window.sessionStorage.clear()", []);
}

export async function getUrl(): Promise<string> {
    return await browser.getUrl();
}

export async function pause(): Promise<void> {
    await browser.pause(500);
}

export async function saveScreenshot(path: string): Promise<void> {
    await browser.pause(2000);
    await browser.saveScreenshot(path);
}
