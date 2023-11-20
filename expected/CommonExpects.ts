import {expect} from "@wdio/globals";
import {CommonExpectEnv} from "../environment/commonExpect.env";

export class CommonExpects {

    public static async checkCorrectnessUrl(): Promise<void> {
        const url: string = await browser.getUrl();
        expect(url).toBe(CommonExpectEnv.URL_BASKET_PAGE);
    }
}