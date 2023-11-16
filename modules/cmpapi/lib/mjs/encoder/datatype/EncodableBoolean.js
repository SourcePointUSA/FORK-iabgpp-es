import { BooleanEncoder } from "./encoder/BooleanEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableBoolean extends AbstractEncodableBitStringDataType {
    constructor(value) {
        super();
        this.setValue(value);
    }
    encode() {
        return BooleanEncoder.encode(this.value);
    }
    decode(bitString) {
        this.value = BooleanEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + 1);
    }
}
