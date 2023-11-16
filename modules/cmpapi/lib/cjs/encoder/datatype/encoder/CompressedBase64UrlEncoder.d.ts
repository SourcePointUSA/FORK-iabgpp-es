import { AbstractBase64UrlEncoder } from "./AbstractBase64UrlEncoder.js";
export declare class CompressedBase64UrlEncoder extends AbstractBase64UrlEncoder {
    protected pad(bitString: string): string;
}
