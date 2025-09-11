import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";
import { UsNat as UsNatBase } from "./UsNat.js";
import { EncodableSegment } from "../segment/EncodableSegment.js";
import { UsNatCoreSegment } from "../segment/UsNatCoreSegmentSP.js";
import { UsNatGpcSegment } from "../segment/UsNatGpcSegment.js";

export class UsNat extends UsNatBase {
  public static readonly ID = 7;
  public static readonly NAME = "usnat";

  public version = UsNat.VERSION;

  constructor(encodedString?: string, version: number = 2) {
    super();

    this.version = version;
    // need to do this again now that we've set the version unfortunately
    this.segments = this.initializeSegments();

    if (encodedString && encodedString.length > 0) {
      this.decode(encodedString);
    }
  }

  //Override
  public getVersion(): number {
    return this.version;
  }

  //Overriden
  protected initializeSegments(): EncodableSegment[] {
    let segments: EncodableSegment[] = [];
    segments.push(new UsNatCoreSegment(undefined, this.version));
    segments.push(new UsNatGpcSegment());
    return segments;
  }
}
