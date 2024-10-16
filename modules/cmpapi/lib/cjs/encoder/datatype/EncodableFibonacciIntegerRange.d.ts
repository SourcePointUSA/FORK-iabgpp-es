import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
export declare class EncodableFibonacciIntegerRange extends AbstractEncodableBitStringDataType<number[]> {
    constructor(value: number[], hardFailIfMissing?: boolean);
    encode(): string;
    decode(bitString: string): void;
    substring(bitString: string, fromIndex: number): string;
    getValue(): number[];
    setValue(value: number[]): void;
}