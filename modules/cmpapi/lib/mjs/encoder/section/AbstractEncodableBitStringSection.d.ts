import { AbstractEncodableBitStringDataType } from "../datatype/AbstractEncodableBitStringDataType.js";
import { EncodableSection } from "./EncodableSection.js";
export declare abstract class AbstractEncodableBitStringSection implements EncodableSection {
    protected fields: Map<string, AbstractEncodableBitStringDataType<any>>;
    protected fieldOrder: string[];
    constructor(fields: Map<string, AbstractEncodableBitStringDataType<any>>, fieldOrder: string[]);
    hasField(fieldName: string): boolean;
    getFieldValue(fieldName: string): any;
    setFieldValue(fieldName: string, value: any): void;
    getFieldOrder(): string[];
    encodeToBitString(): string;
    decodeFromBitString(bitString: string): void;
    toObj(): any;
    abstract encode(): string;
    abstract decode(encodedString: string): void;
    abstract getId(): number;
    abstract getName(): string;
}
