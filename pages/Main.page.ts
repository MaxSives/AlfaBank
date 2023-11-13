import {waitForDisplayed} from "../helper/waitElement.helper";
import {$} from "@wdio/globals";

class MainPage {
    public async getTextButtonHome(): Promise<string> {
        const selector: ReturnType<WebdriverIO.Browser["$"]> = $("[testid=\"Home\"]");
        return waitForDisplayed(selector, selector.getText);
    }

    private get openSidebar(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[testid='button__sidebar']");
    }
}

export default new MainPage();
