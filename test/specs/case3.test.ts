import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager";
import MainPage from "../../pages/Main.page";
import {expect} from "@wdio/globals";
import {CommonExpectEnv} from "../../environment/commonExpect.env";
import {CommonExpects} from "../../expected/CommonExpects";

describe.skip("Test case 3", async (): Promise<void> => {

    before(async (): Promise<void> => {
        await LoginPage.login(AuthManager.getInstance.getUser);
        await MainPage.clearAllGoodsInBasket();
    });

    it("Go to the shopping cart with 1 promotional item", async (): Promise<void> => {
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.EMPTY_BASKET);
        await MainPage.showDiscountGoods();

        await MainPage.selectFirstDiscountBook();
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.ONE_BOOK_IN_BASKET);

        await MainPage.clickDropDownBasket();
        expect(await MainPage.getTitleBook()).toBe("Творческий беспорядок");
        expect(await MainPage.getItemPrice()).toBe("- 400 р.");
        expect(await MainPage.getCommonPrice()).toBe("400");

        await MainPage.clickButtonGoBasket();
        await CommonExpects.checkCorrectnessUrl();
    })
});