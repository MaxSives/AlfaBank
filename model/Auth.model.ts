export class AuthModel {
    login: string | undefined;
    password: string | undefined;

    public setLogin(login: string): AuthModel {
        this.login = login;
        return this;
    }

    public setPassword(password: string): AuthModel {
        this.password = password;
        return this;
    }
}