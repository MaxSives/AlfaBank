import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager"
import {expect} from "@wdio/globals";
import MainPage from "../../pages/Main.page";
import {CommonExpectEnv} from "../../environment/commonExpect.env";
import {CommonExpects} from "../../expected/CommonExpects";

describe.skip("Test case 1", async (): Promise<void> => {

    before(async (): Promise<void> => await LoginPage.login(AuthManager.getInstance.getUser));

    it("Transition to an empty basket", async (): Promise<void> => {
        expect(await MainPage.getUserName()).toBe(CommonExpectEnv.USER_NAME);
        expect(await MainPage.getCountGoods()).toBe(CommonExpectEnv.EMPTY_BASKET);

        await MainPage.clickDropDownBasket();
        await MainPage.clickButtonGoBasket();
        await CommonExpects.checkCorrectnessUrl();
    })
});