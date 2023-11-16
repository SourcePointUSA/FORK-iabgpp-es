import { CompressedBase64UrlEncoder } from "../datatype/encoder/CompressedBase64UrlEncoder.js";
import { EncodableFibonacciIntegerRange } from "../datatype/EncodableFibonacciIntegerRange.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { HeaderV1Field } from "../field/HeaderV1Field.js";
import { AbstractEncodableBitStringSection } from "./AbstractEncodableBitStringSection.js";
export class HeaderV1 extends AbstractEncodableBitStringSection {
    static ID = 3;
    static VERSION = 1;
    static NAME = "header";
    base64UrlEncoder = new CompressedBase64UrlEncoder();
    constructor(encodedString) {
        let fields = new Map();
        fields.set(HeaderV1Field.ID.toString(), new EncodableFixedInteger(6, HeaderV1.ID));
        fields.set(HeaderV1Field.VERSION.toString(), new EncodableFixedInteger(6, HeaderV1.VERSION));
        fields.set(HeaderV1Field.SECTION_IDS.toString(), new EncodableFibonacciIntegerRange([]));
        let fieldOrder = [
            HeaderV1Field.ID.toString(),
            HeaderV1Field.VERSION.toString(),
            HeaderV1Field.SECTION_IDS.toString(),
        ];
        super(fields, fieldOrder);
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    encode() {
        let bitString = this.encodeToBitString();
        let encodedString = this.base64UrlEncoder.encode(bitString);
        return encodedString;
    }
    //Overriden
    decode(encodedString) {
        let bitString = this.base64UrlEncoder.decode(encodedString);
        this.decodeFromBitString(bitString);
    }
    //Overriden
    getId() {
        return HeaderV1.ID;
    }
    //Overriden
    getName() {
        return HeaderV1.NAME;
    }
}
