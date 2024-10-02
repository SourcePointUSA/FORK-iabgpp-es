import { TcfEuV2 } from "./TcfEuV2.js";
import { TcfCaV1 } from "./TcfCaV1.js";
import { UspV1 } from "./UspV1.js";
import { UsNat } from "./UsNat.js";
import { UsCa } from "./UsCa.js";
import { UsVa } from "./UsVa.js";
import { UsCo } from "./UsCo.js";
import { UsUt } from "./UsUt.js";
import { UsCt } from "./UsCt.js";
import { UsFl } from "./UsFl.js";
import { UsMt } from "./UsMt.js";
import { UsOr } from "./UsOr.js";
import { UsTx } from "./UsTx.js";
export class Sections {
    static SECTION_ID_NAME_MAP = new Map([
        [TcfEuV2.ID, TcfEuV2.NAME],
        [TcfCaV1.ID, TcfCaV1.NAME],
        [UspV1.ID, UspV1.NAME],
        [UsNat.ID, UsNat.NAME],
        [UsCa.ID, UsCa.NAME],
        [UsVa.ID, UsVa.NAME],
        [UsCo.ID, UsCo.NAME],
        [UsUt.ID, UsUt.NAME],
        [UsCt.ID, UsCt.NAME],
        [UsFl.ID, UsFl.NAME],
        [UsMt.ID, UsMt.NAME],
        [UsOr.ID, UsOr.NAME],
        [UsTx.ID, UsTx.NAME],
    ]);
    static SECTION_ORDER = [
        TcfEuV2.NAME,
        TcfCaV1.NAME,
        UspV1.NAME,
        UsNat.NAME,
        UsCa.NAME,
        UsVa.NAME,
        UsCo.NAME,
        UsUt.NAME,
        UsCt.NAME,
        UsFl.NAME,
        UsMt.NAME,
        UsOr.NAME,
        UsTx.NAME,
    ];
}
