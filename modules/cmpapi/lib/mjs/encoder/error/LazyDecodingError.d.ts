import { DecodingError } from "./DecodingError.js";
/**
 * class for decoding errors
 *
 * @extends {DecodingError}
 */
declare class LazyDecodingError extends DecodingError {
    /**
     * constructor - constructs an DecodingError
     *
     * @param {string} msg - Decoding Error Message
     * @return {undefined}
     */
    constructor(msg: string);
}
export { LazyDecodingError };
