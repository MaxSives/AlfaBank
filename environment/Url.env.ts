import {BASE_WEB_URL} from "../../config";

export class UrlEnv {
    static readonly MAIN_PAGE_URL: string = `${BASE_WEB_URL}/dashboard`;

    static readonly LOGIN_PAGE_URL: string = `${BASE_WEB_URL}/login`;

    static readonly TERMINAL_TYPE_LIST_URL: string = `${BASE_WEB_URL}/terminal-type/list`;
    static readonly CREATE_TERMINAL_TYPE_URL: string = `${BASE_WEB_URL}/terminal-type/list/add`;

    static readonly TERMINAL_LIST_URL: string = `${BASE_WEB_URL}/terminal/list`;
    static readonly CREATE_TERMINAL_URL: string = `${BASE_WEB_URL}/terminal/list/add`;

    static readonly BIN_RANGE_LIST_URL: string = `${BASE_WEB_URL}/bin-range/list`;
    static readonly CREATE_BIN_RANGE_URL: string = `${BASE_WEB_URL}/bin-range/list/add`;

    static readonly USER_LIST_URL: string = `${BASE_WEB_URL}/user/list`;
    static readonly USER_CREATE_URL: string = `${BASE_WEB_URL}/user/list/add`;

    static readonly CURRENCY_LIST_URL: string = `${BASE_WEB_URL}/currency/list`;
    static readonly CURRENCY_CREATE_URL: string = `${BASE_WEB_URL}/currency/list/add`;

    static readonly CARD_RANGES_LIST_URL: string = `${BASE_WEB_URL}/card-range/list`;
    static readonly CARD_RANGES_CREATE_URL: string = `${BASE_WEB_URL}/card-range/list/add`;

    static readonly LIMITS_LIST_URL: string = `${BASE_WEB_URL}/limit/list`;
    static readonly LIMITS_CREATE_URL: string = `${BASE_WEB_URL}/limit/list/add`;

    static readonly AID_LIST_URL: string = `${BASE_WEB_URL}/aid/list`;
    static readonly AID_CREATE_URL: string = `${BASE_WEB_URL}/aid/list/add`;

    static readonly AID_KEY_LIST_URL: string = `${BASE_WEB_URL}/aid-key/list`;
    static readonly AID_KEY_CREATE_URL: string = `${BASE_WEB_URL}/aid-key/list/add`;

    static readonly AID_LIMITS_LIST_URL: string = `${BASE_WEB_URL}/aid-limit/list`;
    static readonly AID_LIMITS_CREATE_URL: string = `${BASE_WEB_URL}/aid-limit/list/add`;

    static readonly CONFIGURATIONS_LIST_URL: string = `${BASE_WEB_URL}/configuration/list`;
    static readonly CONFIGURATIONS_CREATE_URL: string = `${BASE_WEB_URL}/configuration/list/add`;

    static readonly MERCHANTS_LIST_URL: string = `${BASE_WEB_URL}/merchant/list`;
    static readonly MERCHANTS_CREATE_URL: string = `${BASE_WEB_URL}/merchant/list/add`;

    static readonly AUTO_RECONCILIATION_GROUP_LIST_URL: string = `${BASE_WEB_URL}/auto-reconciliation-group/list`;
    static readonly AUTO_RECONCILIATION_GROUP_CREATE_URL: string = `${BASE_WEB_URL}/auto-reconciliation-group/list/add`;

    static readonly FINANCIAL_INSTITUTES_LIST_URL: string = `${BASE_WEB_URL}/financial-institute/list`;
    static readonly FINANCIAL_INSTITUTES_CREATE_URL: string = `${BASE_WEB_URL}/financial-institute/list/add`;

    static readonly OPERATIONS_LIST_URL: string = `${BASE_WEB_URL}/operation/list`;

    static readonly PAYMENT_INSTRUMENTS_LIST_URL: string = `${BASE_WEB_URL}/payment-instrument/list`;
}