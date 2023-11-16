import { DatetimeEncoder } from "./encoder/DatetimeEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export class EncodableDatetime extends AbstractEncodableBitStringDataType {
    constructor(value) {
        super();
        this.setValue(value);
    }
    encode() {
        return DatetimeEncoder.encode(this.value);
    }
    decode(bitString) {
        this.value = DatetimeEncoder.decode(bitString);
    }
    substring(bitString, fromIndex) {
        //TODO: validate
        return bitString.substring(fromIndex, fromIndex + 36);
    }
}
