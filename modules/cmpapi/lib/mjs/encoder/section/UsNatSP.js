import { UsNat as UsNatBase } from "./UsNat.js";
import { UsNatCoreSegment } from "../segment/UsNatCoreSegmentSP.js";
import { UsNatGpcSegment } from "../segment/UsNatGpcSegment.js";
export class UsNat extends UsNatBase {
    static ID = 7;
    static NAME = "usnat";
    version = UsNat.VERSION;
    constructor(encodedString, version = 2) {
        super();
        this.version = version;
        // need to do this again now that we've set the version unfortunately
        this.segments = this.initializeSegments();
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Override
    getVersion() {
        return this.version;
    }
    //Overriden
    initializeSegments() {
        let segments = [];
        segments.push(new UsNatCoreSegment(undefined, this.version));
        segments.push(new UsNatGpcSegment());
        return segments;
    }
}
