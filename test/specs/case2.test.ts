import LoginPage from "../../pages/Login.page";
import AuthManager from "../../Auth.manager"
import { expect } from "@wdio/globals";
import MainPage from "../../pages/Main.page";
import { getUrl } from "../../helper/browser.helper"

describe("Test case 1", async (): Promise<void> => {

    before(async (): Promise<void> => {
        await LoginPage.login(AuthManager.getInstance.getUser);
        await MainPage.clearAllGoodsInBacket();
    });

    it("Transition to an empty basket", async (): Promise<void> => {
        expect(await MainPage.getCountGoods()).toBe("0");

        await MainPage.clickButtonByBookFullPrice();
        expect(await MainPage.getCountGoods()).toBe("1");

        await MainPage.clickDropDownBasket();
        expect(await MainPage.getWindowBasket()).toBeDisabled();
        expect(await MainPage.getTitleBook()).toBe("Блокнот в точку");
        expect(await MainPage.getItemPrice()).toBe(" - 400 р.");
        expect(await MainPage.getCommonPrice()).toBe("400");


        await MainPage.clickButtonGoBasket();
        expect(getUrl()).toBe("https://enotes.pointschool.ru/basket");
    })
});