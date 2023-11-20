import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager";
import MainPage from "../../pages/Main.page";
import {expect} from "@wdio/globals";
import {CommonExpectEnv} from "../../environment/commonExpect.env";

describe.skip("Test case 5", async (): Promise<void> => {

    before(async (): Promise<void> => {
        await LoginPage.login(AuthManager.getInstance.getUser);
        await MainPage.clearAllGoodsInBasket();
    });

    it("Transfer to the basket with 9 promotional items of the same name", async (): Promise<void> => {
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.EMPTY_BASKET);

        await MainPage.selectNineBooksWithDiscount();
        expect(await MainPage.getCountGoods()).toBe("9");

        await MainPage.clickDropDownBasket();

        await MainPage.clickButtonGoBasket();
        const url: string = await browser.getUrl();
        console.log(url)
    })
});