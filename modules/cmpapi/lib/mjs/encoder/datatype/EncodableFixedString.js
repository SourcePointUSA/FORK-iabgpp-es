import { FixedStringEncoder } from "./encoder/FixedStringEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFixedString extends AbstractEncodableBitStringDataType {
    stringLength;
    constructor(stringLength, value) {
        super();
        this.stringLength = stringLength;
        this.setValue(value);
    }
    encode() {
        return FixedStringEncoder.encode(this.value, this.stringLength);
    }
    decode(bitString) {
        this.value = FixedStringEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + this.stringLength * 6);
    }
}
