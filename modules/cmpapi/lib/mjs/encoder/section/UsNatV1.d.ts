import { AbstractEncodableSegmentedBitStringSection } from "./AbstractEncodableSegmentedBitStringSection.js";
export declare class UsNatV1 extends AbstractEncodableSegmentedBitStringSection {
    static readonly ID = 7;
    static readonly VERSION = 1;
    static readonly NAME = "usnatv1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedSection: string): void;
    getId(): number;
    getName(): string;
}
