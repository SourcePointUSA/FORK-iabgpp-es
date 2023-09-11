import { TcfCaV1Field } from "../field/TcfCaV1Field.js";
import { EncodableSegment } from "../segment/EncodableSegment.js";
import { TcfCaV1CoreSegment } from "../segment/TcfCaV1CoreSegment.js";
import { TcfCaV1PublisherPurposesSegment } from "../segment/TcfCaV1PublisherPurposesSegment.js";
import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";

export class TcfCaV1 extends AbstractLazilyEncodableSection {
  public static readonly ID = 5;
  public static readonly VERSION = 1;
  public static readonly NAME = "tcfcav1";

  constructor(encodedString?: string) {
    super();
    if (encodedString && encodedString.length > 0) {
      this.decode(encodedString);
    }
  }

  //Overriden
  public getId(): number {
    return TcfCaV1.ID;
  }

  //Overriden
  public getName(): string {
    return TcfCaV1.NAME;
  }

  //Override
  public getVersion(): number {
    return TcfCaV1.VERSION;
  }

  //Overriden
  protected initializeSegments(): EncodableSegment[] {
    let segments: EncodableSegment[] = [];
    segments.push(new TcfCaV1CoreSegment());
    segments.push(new TcfCaV1PublisherPurposesSegment());
    return segments;
  }

  //Overriden
  protected decodeSection(encodedString: string): EncodableSegment[] {
    let segments: EncodableSegment[] = this.initializeSegments();

    if (encodedString != null && encodedString.length !== 0) {
      let encodedSegments = encodedString.split(".");
      for (let i = 0; i < encodedSegments.length; i++) {
        /**
         * The first 3 bits contain the segment id. Rather than decode the entire string, just check the first character.
         *
         * A-H     = '000' = 0
         * Y-Z,a-f = '011' = 3
         *
         * Note that there is no segment id field for the core segment. Instead the first 6 bits are reserved
         * for the encoding version which only coincidentally works here because the version value is less than 8.
         */

        let encodedSegment: string = encodedSegments[i];
        if (encodedSegment.length !== 0) {
          let firstChar: string = encodedSegment.charAt(0);

          if (firstChar >= "A" && firstChar <= "H") {
            segments[0].decode(encodedSegments[i]);
          } else if ((firstChar >= "Y" && firstChar <= "Z") || (firstChar >= "a" && firstChar <= "f")) {
            segments[1].decode(encodedSegments[i]);
          }
        }
      }
    }

    return segments;
  }

  // Overriden
  protected encodeSection(segments: EncodableSegment[]): string {
    let encodedSegments: string[] = [];
    for (let i = 0; i < segments.length; i++) {
      let segment: EncodableSegment = segments[i];
      encodedSegments.push(segment.encode());
    }
    return encodedSegments.join(".");
  }

  //Overriden
  public setFieldValue(fieldName: string, value: any): void {
    super.setFieldValue(fieldName, value);

    if (fieldName !== TcfCaV1Field.CREATED && fieldName !== TcfCaV1Field.LAST_UPDATED) {
      let date = new Date();

      super.setFieldValue(TcfCaV1Field.CREATED, date);
      super.setFieldValue(TcfCaV1Field.LAST_UPDATED, date);
    }
  }
}
