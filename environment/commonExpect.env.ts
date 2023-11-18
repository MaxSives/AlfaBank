import {AuthEnv} from "./auth.env";

export class CommonExpectEnv {

    static readonly USER_NAME: string = AuthEnv.LOGIN.toUpperCase();
    static readonly EMPTY_BASKET: string = "0";
    static readonly URL_BASKET_PAGE: string = "https://enotes.pointschool.ru/basket";
    static readonly ONE_BOOK_IN_BASKET: string = "1";
}