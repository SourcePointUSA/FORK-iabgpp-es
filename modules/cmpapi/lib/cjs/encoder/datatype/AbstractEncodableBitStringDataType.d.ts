export declare abstract class AbstractEncodableBitStringDataType<T> {
    protected value: T;
    hasValue(): boolean;
    getValue(): T;
    setValue(value: T): void;
    abstract encode(): string;
    abstract decode(bitString: string): void;
    abstract substring(bitString: string, fromIndex: number): string;
}
