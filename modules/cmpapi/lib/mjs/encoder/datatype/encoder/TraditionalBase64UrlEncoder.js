import { AbstractBase64UrlEncoder } from "./AbstractBase64UrlEncoder.js";
export class TraditionalBase64UrlEncoder extends AbstractBase64UrlEncoder {
    // Overriden
    pad(bitString) {
        while (bitString.length % 24 > 0) {
            bitString += "0";
        }
        return bitString;
    }
}
