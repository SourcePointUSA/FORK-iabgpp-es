import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
export declare class TcfCaV1 extends AbstractEncodableSegmentedBitStringSection {
    static readonly ID = 5;
    static readonly VERSION = 1;
    static readonly NAME = "tcfcav1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedSection: string): void;
    setFieldValue(fieldName: string, value: any): void;
    getId(): number;
    getName(): string;
}
