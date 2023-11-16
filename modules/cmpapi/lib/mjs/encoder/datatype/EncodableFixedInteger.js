import { FixedIntegerEncoder } from "./encoder/FixedIntegerEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFixedInteger extends AbstractEncodableBitStringDataType {
    bitStringLength;
    constructor(bitStringLength, value) {
        super();
        this.bitStringLength = bitStringLength;
        this.setValue(value);
    }
    encode() {
        return FixedIntegerEncoder.encode(this.value, this.bitStringLength);
    }
    decode(bitString) {
        this.value = FixedIntegerEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + this.bitStringLength);
    }
}
