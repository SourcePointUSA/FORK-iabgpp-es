import { AbstractEncodableBitStringSection } from "./AbstractEncodableBitStringSection.js";
export declare class HeaderV1 extends AbstractEncodableBitStringSection {
    static readonly ID = 3;
    static readonly VERSION = 1;
    static readonly NAME = "header";
    private base64UrlEncoder;
    constructor(encodedString?: string);
    encode(): string;
    decode(encodedString: string): void;
    getId(): number;
    getName(): string;
}
