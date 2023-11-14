export class UserModel {

    readonly login: string;
    readonly password: string;

    constructor(
        login: string,
        password: string,
    ) {
        this.login = login;
        this.password = password;
    }
}