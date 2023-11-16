import { InvalidFieldError } from "../error/InvalidFieldError.js";
import { UspV1Field } from "../field/UspV1Field.js";
// Deprecated
export class UspV1 {
    static ID = 6;
    static VERSION = 1;
    static NAME = "uspv1";
    fields;
    constructor(encodedString) {
        this.fields = new Map();
        this.fields.set(UspV1Field.VERSION.toString(), UspV1.VERSION);
        this.fields.set(UspV1Field.NOTICE.toString(), "-");
        this.fields.set(UspV1Field.OPT_OUT_SALE.toString(), "-");
        this.fields.set(UspV1Field.LSPA_COVERED.toString(), "-");
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    hasField(fieldName) {
        return this.fields.has(fieldName);
    }
    //Overriden
    getFieldValue(fieldName) {
        if (this.fields.has(fieldName)) {
            return this.fields.get(fieldName);
        }
        else {
            return null;
        }
    }
    //Overriden
    setFieldValue(fieldName, value) {
        if (this.fields.has(fieldName)) {
            this.fields.set(fieldName, value);
        }
        else {
            throw new InvalidFieldError(fieldName + " not found");
        }
    }
    //Overriden
    toObj() {
        let obj = {};
        for (const fieldName of this.fields.keys()) {
            let value = this.fields.get(fieldName);
            obj[fieldName.toString()] = value;
        }
        return obj;
    }
    //Overriden
    encode() {
        let str = "";
        str += this.getFieldValue(UspV1Field.VERSION.toString());
        str += this.getFieldValue(UspV1Field.NOTICE.toString());
        str += this.getFieldValue(UspV1Field.OPT_OUT_SALE.toString());
        str += this.getFieldValue(UspV1Field.LSPA_COVERED.toString());
        return str;
    }
    //Overriden
    decode(encodedString) {
        //TODO: validate
        this.setFieldValue(UspV1Field.VERSION.toString(), parseInt(encodedString.charAt(0)));
        this.setFieldValue(UspV1Field.NOTICE.toString(), encodedString.charAt(1));
        this.setFieldValue(UspV1Field.OPT_OUT_SALE.toString(), encodedString.charAt(2));
        this.setFieldValue(UspV1Field.LSPA_COVERED.toString(), encodedString.charAt(3));
    }
    //Overriden
    getId() {
        return UspV1.ID;
    }
    //Overriden
    getName() {
        return UspV1.NAME;
    }
}
