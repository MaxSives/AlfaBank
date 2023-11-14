import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager"
import { expect } from "@wdio/globals";
import MainPage from "../../pages/Main.page";
import { getUrl } from "../../helper/browser.helper"

describe("Test case 1", async (): Promise<void> => {

    before(async (): Promise<void> => await LoginPage.login(AuthManager.getInstance.getUser));

    it("Transition to an empty basket", async (): Promise<void> => {
        expect(await MainPage.getUserName()).toBe("TEST");
        expect(await MainPage.getCountGoods()).toBe("0");

        await MainPage.clickDropDownBasket();
        expect(await MainPage.getWindowBasket()).toBeDisabled();

        await MainPage.clickButtonGoBasket();
        expect(getUrl()).toBe("https://enotes.pointschool.ru/basket");
    })
});