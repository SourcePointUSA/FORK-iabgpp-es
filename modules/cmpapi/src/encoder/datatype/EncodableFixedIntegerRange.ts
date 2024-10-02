import { FixedIntegerEncoder } from "./encoder/FixedIntegerEncoder.js";
import { FixedIntegerRangeEncoder } from "./encoder/FixedIntegerRangeEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
import { EncodingError } from "../error/EncodingError.js";
import { DecodingError } from "../error/DecodingError.js";
import { SubstringError } from "./SubstringError.js";
import { StringUtil } from "../util/StringUtil.js";

export class EncodableFixedIntegerRange extends AbstractEncodableBitStringDataType<number[]> {
  constructor(value: number[], hardFailIfMissing: boolean = true) {
    super(hardFailIfMissing);
    this.setValue(value);
  }

  public encode(): string {
    try {
      return FixedIntegerRangeEncoder.encode(this.value);
    } catch (e) {
      throw new EncodingError(e);
    }
  }

  public decode(bitString: string) {
    try {
      this.value = FixedIntegerRangeEncoder.decode(bitString);
    } catch (e) {
      throw new DecodingError(e);
    }
  }

  public substring(bitString: string, fromIndex: number): string {
    try {
      let count = FixedIntegerEncoder.decode(StringUtil.substring(bitString, fromIndex, fromIndex + 12));
      let index = fromIndex + 12;
      for (let i = 0; i < count; i++) {
        if (bitString.charAt(index) === "1") {
          index += 33;
        } else {
          index += 17;
        }
      }
      return StringUtil.substring(bitString, fromIndex, index);
    } catch (e) {
      throw new SubstringError(e);
    }
  }

  // Overriden
  public getValue(): number[] {
    return [...super.getValue()];
  }

  // Overriden
  public setValue(value: number[]) {
    super.setValue(Array.from(new Set(value)).sort((n1, n2) => n1 - n2));
  }
}
