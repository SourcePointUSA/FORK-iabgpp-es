import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
export declare class UsCoV1 extends AbstractEncodableSegmentedBitStringSection {
    static readonly ID = 10;
    static readonly VERSION = 1;
    static readonly NAME = "uscov1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedSection: string): void;
    getId(): number;
    getName(): string;
}
