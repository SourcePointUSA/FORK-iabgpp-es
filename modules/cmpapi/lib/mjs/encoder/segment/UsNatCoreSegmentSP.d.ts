import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { UsNatCoreSegment as UsNatCoreSegmentBase } from "./UsNatCoreSegment";
export declare class UsNatCoreSegment extends UsNatCoreSegmentBase {
    private base64UrlEncoderSP;
    private bitStringEncoderSP;
    constructor(encodedString?: string, version?: number);
    protected initializeFieldsV1(): EncodableBitStringFields;
    protected decodeSegment(encodedString: string, fields: EncodableBitStringFields): void;
}
