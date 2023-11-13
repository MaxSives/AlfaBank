import {authByAdmin} from "../../../../infrastructure/helper/adminRole.helper";

describe("AID", async (): Promise<void> => {

    before(async (): Promise<void> => await authByAdmin());

    it("AID create with valid data", async (): Promise<void> => {

    })
});