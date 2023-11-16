import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
export declare class UsCaV1 extends AbstractEncodableSegmentedBitStringSection {
    static readonly ID = 8;
    static readonly VERSION = 1;
    static readonly NAME = "uscav1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedSection: string): void;
    getId(): number;
    getName(): string;
}
