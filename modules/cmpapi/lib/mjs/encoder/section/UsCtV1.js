import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
import { EncodableBoolean } from "../datatype/EncodableBoolean.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { DecodingError } from "../error/DecodingError.js";
import { UsCtV1Field } from "../field/UsCtV1Field.js";
import { CompressedBase64UrlEncoder } from "../datatype/encoder/CompressedBase64UrlEncoder.js";
export class UsCtV1 extends AbstractEncodableSegmentedBitStringSection {
    static ID = 12;
    static VERSION = 1;
    static NAME = "usctv1";
    base64UrlEncoder = new CompressedBase64UrlEncoder();
    constructor(encodedString) {
        let fields = new Map();
        // core section
        fields.set(UsCtV1Field.VERSION.toString(), new EncodableFixedInteger(6, UsCtV1.VERSION));
        fields.set(UsCtV1Field.SHARING_NOTICE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.SENSITIVE_DATA_PROCESSING.toString(), new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0, 0]));
        fields.set(UsCtV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedIntegerList(2, [0, 0, 0]));
        fields.set(UsCtV1Field.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0));
        fields.set(UsCtV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0));
        // gpc segment
        fields.set(UsCtV1Field.GPC_SEGMENT_TYPE.toString(), new EncodableFixedInteger(2, 1));
        fields.set(UsCtV1Field.GPC_SEGMENT_INCLUDED.toString(), new EncodableBoolean(true));
        fields.set(UsCtV1Field.GPC.toString(), new EncodableBoolean(false));
        let coreSegment = [
            UsCtV1Field.VERSION.toString(),
            UsCtV1Field.SHARING_NOTICE.toString(),
            UsCtV1Field.SALE_OPT_OUT_NOTICE.toString(),
            UsCtV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
            UsCtV1Field.SALE_OPT_OUT.toString(),
            UsCtV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(),
            UsCtV1Field.SENSITIVE_DATA_PROCESSING.toString(),
            UsCtV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
            UsCtV1Field.MSPA_COVERED_TRANSACTION.toString(),
            UsCtV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(),
            UsCtV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(),
        ];
        let gpcSegment = [UsCtV1Field.GPC_SEGMENT_TYPE.toString(), UsCtV1Field.GPC.toString()];
        let segments = [coreSegment, gpcSegment];
        super(fields, segments);
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    encode() {
        let segmentBitStrings = this.encodeSegmentsToBitStrings();
        let encodedSegments = [];
        encodedSegments.push(this.base64UrlEncoder.encode(segmentBitStrings[0]));
        if (segmentBitStrings[1] && segmentBitStrings[1].length > 0) {
            let gpcSegmentIncluded = this.fields.get(UsCtV1Field.GPC_SEGMENT_INCLUDED).getValue();
            if (gpcSegmentIncluded === true) {
                encodedSegments.push(this.base64UrlEncoder.encode(segmentBitStrings[1]));
            }
        }
        return encodedSegments.join(".");
    }
    //Overriden
    decode(encodedSection) {
        let encodedSegments = encodedSection.split(".");
        let segmentBitStrings = [];
        let gpcSegmentIncluded = false;
        for (let i = 0; i < encodedSegments.length; i++) {
            /**
             * first char will contain 6 bits, we only need the first 2.
             * There is no segment type for the CORE string. Instead the first 6 bits are reserved for the
             * encoding version, but because we're only on a maximum of encoding version 2 the first 2 bits in
             * the core segment will evaluate to 0.
             */
            let segmentBitString = this.base64UrlEncoder.decode(encodedSegments[i]);
            switch (segmentBitString.substring(0, 2)) {
                // unfortuCtely, the segment ordering doesn't match the segment ids
                case "00": {
                    segmentBitStrings[0] = segmentBitString;
                    break;
                }
                case "01": {
                    gpcSegmentIncluded = true;
                    segmentBitStrings[1] = segmentBitString;
                    break;
                }
                default: {
                    throw new DecodingError("Unable to decode segment '" + encodedSegments[i] + "'");
                }
            }
        }
        this.decodeSegmentsFromBitStrings(segmentBitStrings);
        this.fields.get(UsCtV1Field.GPC_SEGMENT_INCLUDED).setValue(gpcSegmentIncluded);
    }
    //Overriden
    getId() {
        return UsCtV1.ID;
    }
    //Overriden
    getName() {
        return UsCtV1.NAME;
    }
}
