import {AuthModel} from "../models/Auth.model";
import {waitForClickable} from "../helper/waitElement.helper";
import {$} from "@wdio/globals";

class LoginPage {
    public async login(superUser: AuthModel): Promise<void> {
        await waitForClickable(this.inputUsername, this.inputUsername.setValue, superUser.login);
        await waitForClickable(this.inputPassword, this.inputPassword.setValue, superUser.password);
        await waitForClickable(this.inputLogin, this.inputLogin.click);
    }

    private get inputUsername(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[testid=\"input__login\"]");
    }

    private get inputPassword(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[testid=\"input__password\"]");
    }

    private get inputLogin(): ReturnType<WebdriverIO.Browser["$"]> {
        return $("[testid=\"submit__login\"]");
    }
}

export default new LoginPage();
