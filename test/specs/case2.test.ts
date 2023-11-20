import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager"
import {expect} from "@wdio/globals";
import MainPage from "../../pages/Main.page";
import {CommonExpectEnv} from "../../environment/commonExpect.env";

describe.skip("Test case 2", async (): Promise<void> => {

    before(async (): Promise<void> => {
        await LoginPage.login(AuthManager.getInstance.getUser);
        await MainPage.clearAllGoodsInBasket();
    });

    it("Go to the shopping cart with 1 inactive item", async (): Promise<void> => {
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.EMPTY_BASKET);

        await MainPage.clickButtonByBookFullPrice();
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.ONE_BOOK_IN_BASKET);

        await MainPage.clickDropDownBasket();
        expect(await MainPage.getTitleBook()).toBe("Блокнот в точку");
        expect(await MainPage.getItemPrice()).toBe("- 400 р.");
        expect(await MainPage.getCommonPrice()).toBe("400");


        await MainPage.clickButtonGoBasket();
        const url: string = await browser.getUrl();
        console.log(url)
        expect(url).toBe(CommonExpectEnv.URL_BASKET_PAGE);
    })
});