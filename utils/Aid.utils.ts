import {AidEnv} from "../environment/Aid.env";
import {expect} from "@wdio/globals";

export class AidUtils {
    public static CREATE: string = "AID created";
    public static UPDATE: string = "AID updated";
    public static DELETE: string = "AID deleted";

    public static async expectedResultOfTheCaseCreate(): Promise<void> {
        expect(await CommonPage.getSuccessAlert()).toHaveTextContaining(this.CREATE);
    }


    public static async expectedResultOfTheCaseValidationOfRequiredFields(): Promise<Array<void>> {
        return Promise.all([
            expect(await AidPage.validationFiField()).toBe(CommonUtils.REQUIRED_FIELD),
            expect(await AidPage.validationRidField()).toBe(CommonUtils.REQUIRED_FIELD),
            expect(await AidPage.validationTavField()).toBe(CommonUtils.REQUIRED_FIELD),
            expect(await AidPage.validationLavField()).toBe(CommonUtils.REQUIRED_FIELD),
            expect(await AidPage.validationPidxField()).toBe(CommonUtils.REQUIRED_FIELD),
            expect(await AidPage.validationAsfField()).toBe(CommonUtils.REQUIRED_FIELD),
        ]);
    }
}