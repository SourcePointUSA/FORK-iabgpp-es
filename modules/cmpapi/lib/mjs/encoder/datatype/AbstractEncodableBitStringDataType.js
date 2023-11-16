export class AbstractEncodableBitStringDataType {
    value;
    hasValue() {
        return this.value !== undefined && this.value !== null;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
