import { FibonacciIntegerRangeEncoder } from "./encoder/FibonacciIntegerRangeEncoder.js";
import { FixedIntegerEncoder } from "./encoder/FixedIntegerEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFibonacciIntegerRange extends AbstractEncodableBitStringDataType {
    constructor(value) {
        super();
        this.setValue(value);
    }
    encode() {
        return FibonacciIntegerRangeEncoder.encode(this.value);
    }
    decode(bitString) {
        this.value = FibonacciIntegerRangeEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: add some validation
        let count = FixedIntegerEncoder.decode(bitString.substring(fromIndex, fromIndex + 12));
        let index = fromIndex + 12;
        for (let i = 0; i < count; i++) {
            if (bitString.charAt(index) === "1") {
                index = bitString.indexOf("11", bitString.indexOf("11", index + 1) + 2) + 2;
            }
            else {
                index = bitString.indexOf("11", index + 1) + 2;
            }
        }
        return bitString.substring(fromIndex, index);
    }
    // Overriden
    getValue() {
        return [...super.getValue()];
    }
    // Overriden
    setValue(value) {
        super.setValue(Array.from(new Set(value)).sort((n1, n2) => n1 - n2));
    }
}
