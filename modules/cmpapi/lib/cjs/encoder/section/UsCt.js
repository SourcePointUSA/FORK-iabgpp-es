"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsCt=void 0;const UsCtField_js_1=require("../field/UsCtField.js"),UsCtCoreSegment_js_1=require("../segment/UsCtCoreSegment.js"),UsCtGpcSegment_js_1=require("../segment/UsCtGpcSegment.js"),AbstractLazilyEncodableSection_js_1=require("./AbstractLazilyEncodableSection.js");class UsCt extends AbstractLazilyEncodableSection_js_1.AbstractLazilyEncodableSection{constructor(e){super(),e&&e.length>0&&this.decode(e)}getId(){return UsCt.ID}getName(){return UsCt.NAME}getVersion(){return UsCt.VERSION}initializeSegments(){let e=[];return e.push(new UsCtCoreSegment_js_1.UsCtCoreSegment),e.push(new UsCtGpcSegment_js_1.UsCtGpcSegment),e}decodeSection(e){let t=this.initializeSegments();if(null!=e&&0!==e.length){let s=e.split(".");s.length>0&&t[0].decode(s[0]),s.length>1?(t[1].setFieldValue(UsCtField_js_1.UsCtField.GPC_SEGMENT_INCLUDED,!0),t[1].decode(s[1])):t[1].setFieldValue(UsCtField_js_1.UsCtField.GPC_SEGMENT_INCLUDED,!1)}return t}encodeSection(e){let t=[];return e.length>=1&&(t.push(e[0].encode()),e.length>=2&&!0===e[1].getFieldValue(UsCtField_js_1.UsCtField.GPC_SEGMENT_INCLUDED)&&t.push(e[1].encode())),t.join(".")}}exports.UsCt=UsCt,UsCt.ID=12,UsCt.VERSION=1,UsCt.NAME="usct";