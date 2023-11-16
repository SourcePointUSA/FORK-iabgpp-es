import { PingData } from "./PingData";
export declare class EventData {
    eventName: string;
    listenerId: number;
    data: any;
    pingData: PingData;
    constructor(eventName: string, listenerId: number, data: any, pingData: PingData);
}
