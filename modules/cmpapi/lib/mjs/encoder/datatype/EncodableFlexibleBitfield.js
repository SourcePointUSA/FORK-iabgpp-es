import { FixedBitfieldEncoder } from "./encoder/FixedBitfieldEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableFlexibleBitfield extends AbstractEncodableBitStringDataType {
    getLength;
    constructor(getLength, value) {
        super();
        this.getLength = getLength;
        this.setValue(value);
    }
    encode() {
        return FixedBitfieldEncoder.encode(this.value, this.getLength());
    }
    decode(bitString) {
        this.value = FixedBitfieldEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + this.getLength());
    }
    // Overriden
    getValue() {
        return [...super.getValue()];
    }
    // Overriden
    setValue(value) {
        let numElements = this.getLength();
        let v = [...value];
        for (let i = v.length; i < numElements; i++) {
            v.push(false);
        }
        if (v.length > numElements) {
            v = v.slice(0, numElements);
        }
        super.setValue([...v]);
    }
}
