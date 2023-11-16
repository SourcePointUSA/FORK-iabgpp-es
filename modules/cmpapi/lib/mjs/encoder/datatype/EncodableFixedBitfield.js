import { FixedBitfieldEncoder } from "./encoder/FixedBitfieldEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFixedBitfield extends AbstractEncodableBitStringDataType {
    numElements;
    constructor(value) {
        super();
        this.numElements = value.length;
        this.setValue(value);
    }
    encode() {
        return FixedBitfieldEncoder.encode(this.value, this.numElements);
    }
    decode(bitString) {
        this.value = FixedBitfieldEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + this.numElements);
    }
    // Overriden
    getValue() {
        return [...super.getValue()];
    }
    // Overriden
    setValue(value) {
        let v = [...value];
        for (let i = v.length; i < this.numElements; i++) {
            v.push(false);
        }
        if (v.length > this.numElements) {
            v = v.slice(0, this.numElements);
        }
        super.setValue(v);
    }
}
