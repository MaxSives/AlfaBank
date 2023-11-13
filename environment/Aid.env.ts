export class AidEnv {
    static readonly RID: string = "B000025963";
    static readonly TAV: string = "019E";
    static readonly LAV: string = "3099";
    static readonly PIX: string = "015201";
    static readonly TAC_DENIAL: string = "0210080000";
    static readonly TAC_ONLINE: string = "DC4004F687";
    static readonly TAC_DEFAULT: string = "BC40ACA069";
    static readonly PRIORITY_INDEX: string = "00";
    static readonly SELECTION_FLAGS: string = "01";
    static readonly TERMINAL_CAPABILITIES_FOR_ALL_OPERATIONS: string = "E0F8C8";
    static readonly TERMINAL_CAPABILITIES_FOR_REFUND: string = "E0F8C8";
    static readonly TERMINAL_TRANSACTION_QUALIFIERS: string = "50242051";
    static readonly TERMINAL_TRANSACTION_QUALIFIERS_FOR_REFUND: string = "1209A4A0";
    static readonly TRUSTED_PLATFORM_MODULE_CAPABILITIES: string = "B2AB";
    static readonly TRUSTED_PLATFORM_MODULE_CAPABILITIES_FOR_REFUND: string = "B0E2";
    static readonly ENHANCED_CONTACTLESS_READER_CAPABILITIES: string = "B0986090";
    static readonly ENHANCED_CONTACTLESS_READER_CAPABILITIES_FOR_REFUND: string = "50505090";

    static id: string;
    static financialInstituteId: string;

    static readonly ODD_VALUES: string = "1";

    static readonly NOT_SUPPORTED_LETTERS: string = "vY";

    static readonly BIG_VALUE: string = "123456789012345678901234567890123";

    static readonly RID_UPDATE: string = "B001125963";
    static readonly TAV_UPDATE: string = "019C";
    static readonly LAV_UPDATE: string = "3091";
    static readonly PIX_UPDATE: string = "016901";
    static readonly TAC_DENIAL_UPDATE: string = "0210085500";
    static readonly TAC_ONLINE_UPDATE: string = "DC4004F667";
    static readonly TAC_DEFAULT_UPDATE: string = "BC40ACA055";
    static readonly PRIORITY_INDEX_UPDATE: string = "01";
    static readonly SELECTION_FLAGS_UPDATE: string = "02";
    static readonly TERMINAL_CAPABILITIES_FOR_ALL_OPERATIONS_UPDATE: string = "E0F4C4";

    static readonly TERMINAL_CAPABILITIES_FOR_REFUND_UPDATE: string =
        this.TERMINAL_CAPABILITIES_FOR_ALL_OPERATIONS_UPDATE;

    static readonly TERMINAL_TRANSACTION_QUALIFIERS_UPDATE: string = "50242099";
    static readonly TERMINAL_TRANSACTION_QUALIFIERS_FOR_REFUND_UPDATE: string = "1309A4A0";
    static readonly TRUSTED_PLATFORM_MODULE_CAPABILITIES_UPDATE: string = "B4AB";
    static readonly TRUSTED_PLATFORM_MODULE_CAPABILITIES_FOR_REFUND_UPDATE: string = "B0E4";
    static readonly ENHANCED_CONTACTLESS_READER_CAPABILITIES_UPDATE: string = "B0226090";
    static readonly ENHANCED_CONTACTLESS_READER_CAPABILITIES_FOR_REFUND_UPDATE: string = "50645090";
}
