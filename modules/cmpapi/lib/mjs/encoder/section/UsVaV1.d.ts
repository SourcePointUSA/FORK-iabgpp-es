import { AbstractEncodableBitStringSection } from "./AbstractEncodableBitStringSection.js";
export declare class UsVaV1 extends AbstractEncodableBitStringSection {
    static readonly ID = 9;
    static readonly VERSION = 1;
    static readonly NAME = "usvav1";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(bitString: string): void;
    getId(): number;
    getName(): string;
}
