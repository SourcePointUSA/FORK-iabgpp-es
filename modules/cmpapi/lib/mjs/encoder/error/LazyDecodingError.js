import { DecodingError } from "./DecodingError.js";
/**
 * class for decoding errors
 *
 * @extends {DecodingError}
 */
class LazyDecodingError extends DecodingError {
    /**
     * constructor - constructs an DecodingError
     *
     * @param {string} msg - Decoding Error Message
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = "LazyDecodingError";
    }
}
export { LazyDecodingError };
