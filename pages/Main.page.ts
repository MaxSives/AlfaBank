import { waitForClickable, waitForDisplayed } from "../helper/waitElement.helper";
import { $ } from "@wdio/globals";

class MainPage {

    public async getUserName(): Promise<string> {
        const selector: ReturnType<WebdriverIO.Browser["$"]> = $("div[class='text-uppercase']");
        return waitForDisplayed(selector, selector.getText)
    }

    public async getCountGoods(): Promise<string> {
        const selector: ReturnType<WebdriverIO.Browser["$"]> = $("span[class='basket-count-items badge badge-primary']");
        return waitForDisplayed(selector, selector.getText)
    }

    public async clickDropDownBasket(): Promise<void> {
        const selector = $("id=['dropdownBasket']");
        await waitForClickable(selector, selector.click);
    }

    public async getWindowBasket(): Promise<void> {
        await this.dropDownBacket
            .waitForDisplayed({ timeout: 5000, timeoutMsg: "The element is not dispalyed" });
    }

    public async clickButtonGoBasket(): Promise<void> {
        const selector = $("href=['/basket']");
        await waitForClickable(selector, selector.click);
    };

    public async clearAllGoodsInBacket(): Promise<void> {
        await waitForClickable(this.dropDownBacket, this.dropDownBacket.click);
        const buttonClearBacket = $("//*[@id="basketContainer"]/div[2]/div[3]/a");
        await waitForClickable(buttonClearBacket, buttonClearBacket.click);
    };

    public async clickButtonByBookFullPrice() {
        const selector = $("/html/body/div/div[1]/div/div[2]/div[2]/div/div[2]/button")
        await waitForClickable(selector, selector.click);
    }

    public async getTitleBook(): Promise<string> {
        const selector = $("span[class='basket-item-title']");
        return waitForDisplayed(selector, selector.getText);
    }

    public async getItemPrice(): Promise<string> {
        const selector = $("span[class='basket-item-price']");
        return waitForDisplayed(selector, selector.getText);
    }

    public async getCommonPrice(): Promise<string> {
        const selector = $("span[class='basket_price']");
        return waitForDisplayed(selector, selector.getText);
    }

    private get dropDownBacket(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("aria-labelledby=['dropdownBasket']");
    }
}

export default new MainPage();
