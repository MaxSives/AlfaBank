import {waitForClickable, waitForDisplayed} from "../helper/waitElement.helper";
import {$} from "@wdio/globals";

class MainPage {

    public async getUserName(): Promise<string> {
        const selector: ReturnType<WebdriverIO.Browser["$"]> = $("div[class='text-uppercase']");
        return waitForDisplayed(selector, selector.getText)
    }

    public async getCountGoods(): Promise<string> {
        const selector: ReturnType<WebdriverIO.Browser["$"]> = $("/html/body/div/nav/div/div/ul/li[2]/span");
        return waitForDisplayed(selector, selector.getText)
    }

    public async clickDropDownBasket(): Promise<void> {
        const selector = $("[id='dropdownBasket']");
        await waitForClickable(selector, selector.click);
    }

    public async clickButtonGoBasket(): Promise<void> {
        const selector = $("[href='/basket']");
        await waitForClickable(selector, selector.click);
        await browser.pause(2000);
    };

    public async clearAllGoodsInBasket(): Promise<void> {
        await browser.pause(2000);
        await waitForClickable(this.dropDownBacket, this.dropDownBacket.click);
        await browser.pause(2000);
        const buttonClearBasket = $("/html/body/div/nav/div/div/ul/li[2]/div[2]/div[3]/a");
        await buttonClearBasket.click();
    };

    public async clickButtonByBookFullPrice() {
        const selector = $("/html/body/div/div[1]/div/div[2]/div[2]/div/div[2]/button")
        await waitForClickable(selector, selector.click);
        await browser.refresh();
    }

    public async getTitleBook(): Promise<string> {
        const selector = $("[class='basket-item-title']");
        return waitForDisplayed(selector, selector.getText);
    }

    public async getItemPrice(): Promise<string> {
        const selector = $("[class='basket-item-price']");
        return waitForDisplayed(selector, selector.getText);
    }

    public async getCommonPrice(): Promise<string> {
        const selector = $("[class='basket_price']");
        return waitForDisplayed(selector, selector.getText);
    }

    public async showDiscountGoods(): Promise<void> {
        const selector = $("[id='gridCheck']");
        await waitForClickable(selector, selector.click)
    }

    public async selectFirstDiscountBook(): Promise<void> {
        const selector = $("/html/body/div/div[1]/div/div[2]/div[1]/div/div[2]/button");
        await waitForClickable(selector, selector.click);
        await browser.refresh();
    }

    public async selectEightGoods(): Promise<void> {
        for (let i: number = 1; i === 9; i++) {
            let selector = $("/html/body/div/div[1]/div/div[2]/div[${i}]/div/div[2]/button");
            await waitForClickable(selector, selector.click);
        }
    }

    public async selectNineBooksWithDiscount(): Promise<void> {
        const setCount = $("[name='product-enter-count']");
        await waitForClickable(setCount, setCount.setValue, "9");
        await this.selectFirstDiscountBook();
    }

    private get dropDownBacket(): ReturnType<WebdriverIO.Browser["$"]> {
            return $("[id='dropdownBasket']");
    }
}

export default new MainPage();
