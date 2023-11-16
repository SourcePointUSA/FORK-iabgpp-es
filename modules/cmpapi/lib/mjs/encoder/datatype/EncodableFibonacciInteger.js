import { FibonacciIntegerEncoder } from "./encoder/FibonacciIntegerEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFibonacciInteger extends AbstractEncodableBitStringDataType {
    constructor(value) {
        super();
        this.setValue(value);
    }
    encode() {
        return FibonacciIntegerEncoder.encode(this.value);
    }
    decode(bitString) {
        this.value = FibonacciIntegerEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        let index = bitString.indexOf("11", fromIndex);
        if (index > 0) {
            return bitString.substring(fromIndex, index + 2);
        }
        else {
            return bitString;
        }
    }
}
