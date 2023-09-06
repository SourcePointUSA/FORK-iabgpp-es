import { AbstractBase64UrlEncoder } from "../base64/AbstractBase64UrlEncoder.js";
import { TraditionalBase64UrlEncoder } from "../base64/TraditionalBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableOptimizedFixedRange } from "../datatype/EncodableOptimizedFixedRange.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES } from "../field/TcfEuV2Field.js";
import { TcfEuV2Field } from "../field/TcfEuV2Field.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";

export class TcfEuV2VendorsAllowedSegment extends AbstractLazilyEncodableSegment<EncodableBitStringFields> {
  private base64UrlEncoder: AbstractBase64UrlEncoder = TraditionalBase64UrlEncoder.getInstance();
  private bitStringEncoder: BitStringEncoder = BitStringEncoder.getInstance();

  constructor(encodedString?: string) {
    super();
    if (encodedString) {
      this.decode(encodedString);
    }
  }

  // overriden
  public getFieldNames(): string[] {
    return TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES;
  }

  // overriden
  protected initializeFields(): EncodableBitStringFields {
    let fields: EncodableBitStringFields = new EncodableBitStringFields();
    fields.put(TcfEuV2Field.VENDORS_ALLOWED_SEGMENT_TYPE.toString(), new EncodableFixedInteger(3, 2));
    fields.put(TcfEuV2Field.VENDORS_ALLOWED.toString(), new EncodableOptimizedFixedRange([]));
    return fields;
  }

  // overriden
  protected encodeSegment(fields: EncodableBitStringFields): string {
    let bitString: string = this.bitStringEncoder.encode(fields, this.getFieldNames());
    let encodedString: string = this.base64UrlEncoder.encode(bitString);
    return encodedString;
  }

  // overriden
  protected decodeSegment(encodedString: string, fields: EncodableBitStringFields): void {
    if (encodedString == null || encodedString.length === 0) {
      this.fields.reset(fields);
    }
    let bitString: string = this.base64UrlEncoder.decode(encodedString);
    this.bitStringEncoder.decode(bitString, this.getFieldNames(), fields);
  }
}
