import {AuthEnv} from "./environment/Auth.env";
import {AuthModel} from "../application/models/Auth.model";
import {BASE_API_URL, BASE_CORE_URL} from "../config";

export default class AuthManager {
    private static instance: AuthManager;

    private readonly admin: AuthModel;
    private readonly userWithInvalidLogin: AuthModel;
    private readonly userWithInvalidPassword: AuthModel;
    private readonly baseUrlApi: string;
    private readonly baseCoreUr: string;
    private readonly user: AuthModel;

    private constructor() {
        this.admin = new AuthModel()
            .setLogin(process.env.USER_NAME || AuthEnv.SUPER_USER_NAME)
            .setPassword(process.env.PASSWORD || AuthEnv.PASSWORD);

        this.userWithInvalidLogin = new AuthModel()
            .setLogin(process.env.INVALID_USER_NAME || AuthEnv.INVALID_USER_NAME)
            .setPassword(process.env.PASSWORD || AuthEnv.PASSWORD);

        this.userWithInvalidPassword = new AuthModel()
            .setLogin(process.env.SUPER_USER_NAME || AuthEnv.SUPER_USER_NAME)
            .setPassword(process.env.INVALID_PASSWORD || AuthEnv.INVALID_PASSWORD);

        this.user = new AuthModel()
            .setLogin(process.env.USER_NAME || AuthEnv.USER_NAME)
            .setPassword(process.env.PASSWORD || AuthEnv.PASSWORD);

        this.baseUrlApi = BASE_API_URL;

        this.baseCoreUr = BASE_CORE_URL;
    }

    public static get getInstance(): AuthManager {
        if (!AuthManager.instance) {
            AuthManager.instance = new AuthManager();
        }

        return AuthManager.instance;
    }

    public get getAdmin(): AuthModel {
        return this.admin;
    }

    public get getInvalidUserName(): AuthModel {
        return this.userWithInvalidLogin;
    }

    public get getInvalidPassword(): AuthModel {
        return this.userWithInvalidPassword;
    }

    public get getBaseUrlApi(): string {
        return this.baseUrlApi;
    }

    public get getUser(): AuthModel {
        return this.user;
    }

    public get getBaseCoreUrl(): string {
        return this.baseCoreUr;
    }
}
