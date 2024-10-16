import { CompressedBase64UrlEncoder } from "../base64/CompressedBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { DecodingError } from "../error/DecodingError.js";
import { ValidationError } from "../error/ValidationError.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { USUT_CORE_SEGMENT_FIELD_NAMES } from "../field/UsUtField.js";
import { UsUtField } from "../field/UsUtField.js";
import { UsUt } from "../section/UsUt.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";
export class UsUtCoreSegment extends AbstractLazilyEncodableSegment {
    base64UrlEncoder = CompressedBase64UrlEncoder.getInstance();
    bitStringEncoder = BitStringEncoder.getInstance();
    constructor(encodedString) {
        super();
        if (encodedString) {
            this.decode(encodedString);
        }
    }
    // overriden
    getFieldNames() {
        return USUT_CORE_SEGMENT_FIELD_NAMES;
    }
    // overriden
    initializeFields() {
        const nullableBooleanAsTwoBitIntegerValidator = new (class {
            test(n) {
                return n >= 0 && n <= 2;
            }
        })();
        const nonNullableBooleanAsTwoBitIntegerValidator = new (class {
            test(n) {
                return n >= 1 && n <= 2;
            }
        })();
        const nullableBooleanAsTwoBitIntegerListValidator = new (class {
            test(l) {
                for (let i = 0; i < l.length; i++) {
                    let n = l[i];
                    if (n < 0 || n > 2) {
                        return false;
                    }
                }
                return true;
            }
        })();
        let fields = new EncodableBitStringFields();
        fields.put(UsUtField.VERSION.toString(), new EncodableFixedInteger(6, UsUt.VERSION));
        fields.put(UsUtField.SHARING_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.TARGETED_ADVERTISING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.SENSITIVE_DATA_PROCESSING.toString(), new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(nullableBooleanAsTwoBitIntegerListValidator));
        fields.put(UsUtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 1).withValidator(nonNullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsUtField.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        return fields;
    }
    // overriden
    encodeSegment(fields) {
        let bitString = this.bitStringEncoder.encode(fields, this.getFieldNames());
        let encodedString = this.base64UrlEncoder.encode(bitString);
        return encodedString;
    }
    // overriden
    decodeSegment(encodedString, fields) {
        if (encodedString == null || encodedString.length === 0) {
            this.fields.reset(fields);
        }
        try {
            let bitString = this.base64UrlEncoder.decode(encodedString);
            this.bitStringEncoder.decode(bitString, this.getFieldNames(), fields);
        }
        catch (e) {
            throw new DecodingError("Unable to decode UsUtCoreSegment '" + encodedString + "'");
        }
    }
    // overriden
    validate() {
        let saleOptOutNotice = this.fields.get(UsUtField.SALE_OPT_OUT_NOTICE).getValue();
        let saleOptOut = this.fields.get(UsUtField.SALE_OPT_OUT).getValue();
        let targetedAdvertisingOptOutNotice = this.fields
            .get(UsUtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
            .getValue();
        let targetedAdvertisingOptOut = this.fields.get(UsUtField.TARGETED_ADVERTISING_OPT_OUT).getValue();
        let mspaServiceProviderMode = this.fields.get(UsUtField.MSPA_SERVICE_PROVIDER_MODE).getValue();
        let mspaOptOutOptionMode = this.fields.get(UsUtField.MSPA_OPT_OUT_OPTION_MODE).getValue();
        if (saleOptOutNotice == 0) {
            if (saleOptOut != 0) {
                throw new ValidationError("Invalid usut sale notice / opt out combination: {" + saleOptOutNotice + " / " + saleOptOut + "}");
            }
        }
        else if (saleOptOutNotice == 1) {
            if (saleOptOut != 1 && saleOptOut != 2) {
                throw new ValidationError("Invalid usut sale notice / opt out combination: {" + saleOptOutNotice + " / " + saleOptOut + "}");
            }
        }
        else if (saleOptOutNotice == 2) {
            if (saleOptOut != 1) {
                throw new ValidationError("Invalid usut sale notice / opt out combination: {" + saleOptOutNotice + " / " + saleOptOut + "}");
            }
        }
        if (targetedAdvertisingOptOutNotice == 0) {
            if (targetedAdvertisingOptOut != 0) {
                throw new ValidationError("Invalid usut targeted advertising notice / opt out combination: {" +
                    targetedAdvertisingOptOutNotice +
                    " / " +
                    targetedAdvertisingOptOut +
                    "}");
            }
        }
        else if (targetedAdvertisingOptOutNotice == 1) {
            if (saleOptOut != 1 && saleOptOut != 2) {
                throw new ValidationError("Invalid usut targeted advertising notice / opt out combination: {" +
                    targetedAdvertisingOptOutNotice +
                    " / " +
                    targetedAdvertisingOptOut +
                    "}");
            }
        }
        else if (targetedAdvertisingOptOutNotice == 2) {
            if (saleOptOut != 1) {
                throw new ValidationError("Invalid usut targeted advertising notice / opt out combination: {" +
                    targetedAdvertisingOptOutNotice +
                    " / " +
                    targetedAdvertisingOptOut +
                    "}");
            }
        }
        if (mspaServiceProviderMode == 0) {
            if (saleOptOutNotice != 0) {
                throw new ValidationError("Invalid usut mspa service provider mode / sale opt out notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    saleOptOutNotice +
                    "}");
            }
        }
        else if (mspaServiceProviderMode == 1) {
            if (mspaOptOutOptionMode != 2) {
                throw new ValidationError("Invalid usut mspa service provider / opt out option modes combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    mspaServiceProviderMode +
                    "}");
            }
            if (saleOptOutNotice != 0) {
                throw new ValidationError("Invalid usut mspa service provider mode / sale opt out notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    saleOptOutNotice +
                    "}");
            }
        }
        else if (mspaServiceProviderMode == 2) {
            if (mspaOptOutOptionMode != 1) {
                throw new ValidationError("Invalid usut mspa service provider / opt out option modes combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    mspaOptOutOptionMode +
                    "}");
            }
        }
    }
}