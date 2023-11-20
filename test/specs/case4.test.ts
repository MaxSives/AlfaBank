import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager";
import MainPage from "../../pages/Main.page";
import {expect} from "@wdio/globals";
import {CommonExpectEnv} from "../../environment/commonExpect.env";
import {CommonExpects} from "../../expected/CommonExpects";

describe.skip("Test case 4", async (): Promise<void> => {

    before(async (): Promise<void> => {
        await LoginPage.login(AuthManager.getInstance.getUser);
    });

    it("Go to the shopping cart with 9 different products", async (): Promise<void> => {
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.EMPTY_BASKET);

        await MainPage.selectEightGoods();
        expect(await MainPage.getCountGoods()).toBe("9");

        await MainPage.clickDropDownBasket();
        expect(await MainPage.getCommonPrice()).toBe("400");

        await MainPage.clickButtonGoBasket();
        await CommonExpects.checkCorrectnessUrl();
    })
});