import { AbstractEncodableBitStringSection } from "./AbstractEncodableBitStringSection.js";
export declare class UsUtV1 extends AbstractEncodableBitStringSection {
    static readonly ID = 11;
    static readonly VERSION = 1;
    static readonly NAME = "usutv1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(bitString: string): void;
    getId(): number;
    getName(): string;
}
