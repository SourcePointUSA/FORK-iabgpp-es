export class AbstractEncodableSegmentedBitStringSection {
    fields;
    segments;
    constructor(fields, segments) {
        this.fields = fields;
        this.segments = segments;
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
    getSegments() {
        return this.segments;
    }
    encodeSegmentsToBitStrings() {
        let segmentBitStrings = [];
        for (let i = 0; i < this.segments.length; i++) {
            let segmentBitString = "";
            for (let j = 0; j < this.segments[i].length; j++) {
                let fieldName = this.segments[i][j];
                if (this.fields.has(fieldName)) {
                    try {
                        let field = this.fields.get(fieldName);
                        segmentBitString += field.encode();
                    }
                    catch (e) {
                        throw new Error("Unable to encode " + fieldName);
                    }
                }
                else {
                    throw new Error("Field not found: '" + fieldName + "'");
                }
            }
            segmentBitStrings.push(segmentBitString);
        }
        return segmentBitStrings;
    }
    decodeSegmentsFromBitStrings(segmentBitStrings) {
        for (let i = 0; i < this.segments.length && i < segmentBitStrings.length; i++) {
            let segmentBitString = segmentBitStrings[i];
            if (segmentBitString && segmentBitString.length > 0) {
                let index = 0;
                for (let j = 0; j < this.segments[i].length; j++) {
                    let fieldName = this.segments[i][j];
                    if (this.fields.has(fieldName)) {
                        try {
                            let field = this.fields.get(fieldName);
                            let substring = field.substring(segmentBitString, index);
                            field.decode(substring);
                            index += substring.length;
                        }
                        catch (e) {
                            throw new Error("Unable to decode " + fieldName);
                        }
                    }
                    else {
                        throw new Error("Field not found: '" + fieldName + "'");
                    }
                }
            }
        }
    }
    //Overriden
    toObj() {
        let obj = {};
        for (let i = 0; i < this.segments.length; i++) {
            for (let j = 0; j < this.segments[i].length; j++) {
                let fieldName = this.segments[i][j];
                if (this.fields.has(fieldName)) {
                    let field = this.fields.get(fieldName);
                    let value = field.getValue();
                    obj[fieldName] = value;
                }
            }
        }
        return obj;
    }
}
