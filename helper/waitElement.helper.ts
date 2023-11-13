export async function waitForClickable(
    selector: ReturnType<WebdriverIO.Browser["$"]>,
    afterClickCallback: Function,
    value?: string | number
): Promise<void> {
    await selector.waitForClickable({timeout: 5000, timeoutMsg: "The element is not clickable"})
        .then(() => afterClickCallback(value))
        .catch(err => console.log(err));
}

export async function waitForDisplayed(
    selector: ReturnType<WebdriverIO.Browser["$"]>,
    afterDisplayedCallback: Function
): Promise<string> {
    return await selector.waitForDisplayed({timeout: 5000, timeoutMsg: "The element was not displayed"})
        .then(() => afterDisplayedCallback())
        .catch(err => console.log(err));
}