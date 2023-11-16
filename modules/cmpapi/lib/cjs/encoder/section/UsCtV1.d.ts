import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
export declare class UsCtV1 extends AbstractEncodableSegmentedBitStringSection {
    static readonly ID = 12;
    static readonly VERSION = 1;
    static readonly NAME = "usctv1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedSection: string): void;
    getId(): number;
    getName(): string;
}
