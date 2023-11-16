import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
export declare class TcfEuV2 extends AbstractEncodableSegmentedBitStringSection {
    static readonly ID = 2;
    static readonly VERSION = 2;
    static readonly NAME = "tcfeuv2";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedSection: string): void;
    setFieldValue(fieldName: string, value: any): void;
    getId(): number;
    getName(): string;
}
