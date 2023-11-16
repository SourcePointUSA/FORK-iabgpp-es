import { FixedIntegerListEncoder } from "./encoder/FixedIntegerListEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFixedIntegerList extends AbstractEncodableBitStringDataType {
    elementBitStringLength;
    numElements;
    constructor(elementBitStringLength, value) {
        super();
        this.elementBitStringLength = elementBitStringLength;
        this.numElements = value.length;
        this.setValue(value);
    }
    encode() {
        return FixedIntegerListEncoder.encode(this.value, this.elementBitStringLength, this.numElements);
    }
    decode(bitString) {
        this.value = FixedIntegerListEncoder.decode(bitString, this.elementBitStringLength, this.numElements);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + this.elementBitStringLength * this.numElements);
    }
    // Overriden
    getValue() {
        return [...super.getValue()];
    }
    // Overriden
    setValue(value) {
        let v = [...value];
        for (let i = v.length; i < this.numElements; i++) {
            v.push(0);
        }
        if (v.length > this.numElements) {
            v = v.slice(0, this.numElements);
        }
        super.setValue(v);
    }
}
