import { UsNat as UsNatBase } from "./UsNat.js";
import { EncodableSegment } from "../segment/EncodableSegment.js";
export declare class UsNat extends UsNatBase {
    static readonly ID = 7;
    static readonly NAME = "usnat";
    version: number;
    constructor(encodedString?: string, version?: number);
    getVersion(): number;
    protected initializeSegments(): EncodableSegment[];
}
