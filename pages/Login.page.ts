import {AuthModel} from "../model/Auth.model";
import {waitForClickable} from "../helper/waitElement.helper";
import {$, browser} from "@wdio/globals";
import {AuthEnv} from "../environment/auth.env";

class LoginPage {

    public async login(superUser: AuthModel): Promise<void> {
        await browser.navigateTo(AuthEnv.LOGIN_PAGE_URL);
        await waitForClickable(this.inputUsername, this.inputUsername.setValue, superUser.login);
        await waitForClickable(this.inputPassword, this.inputPassword.setValue, superUser.password);
        await waitForClickable(this.inputLogin, this.inputLogin.click);
    }

    private get inputUsername(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[id='loginform-username']");
    }

    private get inputPassword(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[id='loginform-password']");
    }

    private get inputLogin(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[name='login-button']");
    }
}

export default new LoginPage();