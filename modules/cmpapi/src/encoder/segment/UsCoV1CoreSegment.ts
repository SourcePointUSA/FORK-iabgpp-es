import { AbstractBase64UrlEncoder } from "../base64/AbstractBase64UrlEncoder.js";
import { CompressedBase64UrlEncoder } from "../base64/CompressedBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { USCOV1_CORE_SEGMENT_FIELD_NAMES } from "../field/UsCoV1Field.js";
import { UsCoV1Field } from "../field/UsCoV1Field.js";
import { UsCoV1 } from "../section/UsCoV1.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";

export class UsCoV1CoreSegment extends AbstractLazilyEncodableSegment<EncodableBitStringFields> {
  private base64UrlEncoder: AbstractBase64UrlEncoder = CompressedBase64UrlEncoder.getInstance();
  private bitStringEncoder: BitStringEncoder = BitStringEncoder.getInstance();

  constructor(encodedString?: string) {
    super();
    if (encodedString) {
      this.decode(encodedString);
    }
  }

  // overriden
  public getFieldNames(): string[] {
    return USCOV1_CORE_SEGMENT_FIELD_NAMES;
  }

  // overriden
  protected initializeFields(): EncodableBitStringFields {
    let fields: EncodableBitStringFields = new EncodableBitStringFields();
    fields.put(UsCoV1Field.VERSION.toString(), new EncodableFixedInteger(6, UsCoV1.VERSION));
    fields.put(UsCoV1Field.SHARING_NOTICE.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0));
    fields.put(
      UsCoV1Field.SENSITIVE_DATA_PROCESSING.toString(),
      new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0])
    );
    fields.put(UsCoV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0));
    fields.put(UsCoV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0));
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
