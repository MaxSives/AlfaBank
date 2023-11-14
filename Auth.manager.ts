import { AuthEnv } from "./environment/auth.env";
import { AuthModel } from "./model/Auth.model";

export default class AuthManager {
    private static instance: AuthManager;
    private readonly user: AuthModel;

    private constructor() {
        this.user = new AuthModel()
            .setLogin(process.env.LOGIN || AuthEnv.LOGIN)
            .setPassword(process.env.PASSWORD || AuthEnv.PASSWORD);
    }

    public static get getInstance(): AuthManager {
        if (!AuthManager.instance) {
            AuthManager.instance = new AuthManager();
        }

        return AuthManager.instance;
    }

    public get getUser(): AuthModel {
        return this.user;
    }
}
