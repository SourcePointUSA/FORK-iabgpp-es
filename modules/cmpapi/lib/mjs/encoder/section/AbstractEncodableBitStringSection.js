export class AbstractEncodableBitStringSection {
    fields;
    fieldOrder;
    constructor(fields, fieldOrder) {
        this.fields = fields;
        this.fieldOrder = fieldOrder;
    }
    //Overriden
    hasField(fieldName) {
        return this.fields.has(fieldName);
    }
    //Overriden
    getFieldValue(fieldName) {
        if (this.fields.has(fieldName)) {
            return this.fields.get(fieldName).getValue();
        }
        else {
            return null;
        }
    }
    //Overriden
    setFieldValue(fieldName, value) {
        if (this.fields.has(fieldName)) {
            this.fields.get(fieldName).setValue(value);
        }
        else {
            throw new Error(fieldName + " not found");
        }
    }
    getFieldOrder() {
        return this.fieldOrder;
    }
    encodeToBitString() {
        let bitString = "";
        for (let i = 0; i < this.fieldOrder.length; i++) {
            let fieldName = this.fieldOrder[i];
            if (this.fields.has(fieldName)) {
                let field = this.fields.get(fieldName);
                bitString += field.encode();
            }
            else {
                throw new Error("Field not found: '" + fieldName + "'");
            }
        }
        return bitString;
    }
    decodeFromBitString(bitString) {
        let index = 0;
        for (let i = 0; i < this.fieldOrder.length; i++) {
            let fieldName = this.fieldOrder[i];
            if (this.fields.has(fieldName)) {
                let field = this.fields.get(fieldName);
                let substring = field.substring(bitString, index);
                field.decode(substring);
                index += substring.length;
            }
            else {
                throw new Error("Field not found: '" + fieldName + "'");
            }
        }
    }
    //Overriden
    toObj() {
        let obj = {};
        for (let i = 0; i < this.fieldOrder.length; i++) {
            let fieldName = this.fieldOrder[i];
            if (this.fields.has(fieldName)) {
                let field = this.fields.get(fieldName);
                let value = field.getValue();
                obj[fieldName] = value;
            }
        }
        return obj;
    }
}
