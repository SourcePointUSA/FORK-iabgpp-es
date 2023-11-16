import { CmpApiContext } from "../CmpApiContext";
import { CmpStatus, CmpDisplayStatus } from "../status";
import { SignalStatus } from "../status/SignalStatus";
export declare class PingData {
    gppVersion: string;
    cmpStatus: CmpStatus;
    cmpDisplayStatus: CmpDisplayStatus;
    signalStatus: SignalStatus;
    supportedAPIs: string[];
    cmpId: number;
    sectionList: number[];
    applicableSections: number[];
    gppString: string;
    parsedSections: any;
    constructor(cmpApiContext: CmpApiContext);
}
