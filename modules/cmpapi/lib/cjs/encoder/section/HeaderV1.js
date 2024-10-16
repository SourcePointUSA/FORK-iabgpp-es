"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderV1=void 0;const AbstractLazilyEncodableSection_js_1=require("./AbstractLazilyEncodableSection.js"),HeaderV1CoreSegment_js_1=require("../segment/HeaderV1CoreSegment.js");class HeaderV1 extends AbstractLazilyEncodableSection_js_1.AbstractLazilyEncodableSection{constructor(e){super(),e&&e.length>0&&this.decode(e)}getId(){return HeaderV1.ID}getName(){return HeaderV1.NAME}getVersion(){return HeaderV1.VERSION}initializeSegments(){let e=[];return e.push(new HeaderV1CoreSegment_js_1.HeaderV1CoreSegment),e}decodeSection(e){let t=this.initializeSegments();if(null!=e&&0!==e.length){let r=e.split(".");for(let e=0;e<t.length;e++)r.length>e&&t[e].decode(r[e])}return t}encodeSection(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];t.push(n.encode())}return t.join(".")}}exports.HeaderV1=HeaderV1,HeaderV1.ID=3,HeaderV1.VERSION=1,HeaderV1.NAME="header";