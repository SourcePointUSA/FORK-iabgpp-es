import { AbstractEncodableBitStringDataType } from "../datatype/AbstractEncodableBitStringDataType.js";
import { EncodableSection } from "./EncodableSection.js";
export declare abstract class AbstractEncodableSegmentedBitStringSection implements EncodableSection {
    protected fields: Map<string, AbstractEncodableBitStringDataType<any>>;
    protected segments: string[][];
    constructor(fields: Map<string, AbstractEncodableBitStringDataType<any>>, segments: string[][]);
    hasField(fieldName: string): boolean;
    getFieldValue(fieldName: string): any;
    setFieldValue(fieldName: string, value: any): void;
    getSegments(): string[][];
    encodeSegmentsToBitStrings(): string[];
    decodeSegmentsFromBitStrings(segmentBitStrings: string[]): void;
    toObj(): any;
    abstract encode(): string;
    abstract decode(encodedString: string): void;
    abstract getId(): number;
    abstract getName(): string;
}
