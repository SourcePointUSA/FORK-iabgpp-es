import { EncodableSection } from "./EncodableSection.js";
export declare class UspV1 implements EncodableSection {
    static readonly ID = 6;
    static readonly VERSION = 1;
    static readonly NAME = "uspv1";
    protected fields: Map<String, any>;
    constructor(encodedString?: string);
    hasField(fieldName: string): boolean;
    getFieldValue(fieldName: string): any;
    setFieldValue(fieldName: string, value: any): void;
    toObj(): any;
    encode(): string;
    decode(encodedString: string): void;
    getId(): number;
    getName(): string;
}
