import { AbstractEncodableBitStringSection } from "./AbstractEncodableBitStringSection.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { UsVaV1Field } from "../field/UsVaV1Field.js";
import { CompressedBase64UrlEncoder } from "../datatype/encoder/CompressedBase64UrlEncoder.js";
export class UsVaV1 extends AbstractEncodableBitStringSection {
    static ID = 9;
    static VERSION = 1;
    static NAME = "usvav1";
    base64UrlEncoder = new CompressedBase64UrlEncoder();
    constructor(encodedString) {
        let fields = new Map();
        // core section
        fields.set(UsVaV1Field.VERSION.toString(), new EncodableFixedInteger(6, UsVaV1.VERSION));
        fields.set(UsVaV1Field.SHARING_NOTICE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.SENSITIVE_DATA_PROCESSING.toString(), new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0, 0]));
        fields.set(UsVaV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsVaV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0));
        let fieldOrder = [
            UsVaV1Field.VERSION.toString(),
            UsVaV1Field.SHARING_NOTICE.toString(),
            UsVaV1Field.SALE_OPT_OUT_NOTICE.toString(),
            UsVaV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
            UsVaV1Field.SALE_OPT_OUT.toString(),
            UsVaV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(),
            UsVaV1Field.SENSITIVE_DATA_PROCESSING.toString(),
            UsVaV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
            UsVaV1Field.MSPA_COVERED_TRANSACTION.toString(),
            UsVaV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(),
            UsVaV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(),
        ];
        super(fields, fieldOrder);
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    encode() {
        return this.base64UrlEncoder.encode(this.encodeToBitString());
    }
    //Overriden
    decode(bitString) {
        this.decodeFromBitString(this.base64UrlEncoder.decode(bitString));
    }
    //Overriden
    getId() {
        return UsVaV1.ID;
    }
    //Overriden
    getName() {
        return UsVaV1.NAME;
    }
}
