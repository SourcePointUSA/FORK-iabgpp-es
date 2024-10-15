"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TcfCaV1=void 0;const TcfCaV1Field_js_1=require("../field/TcfCaV1Field.js"),TcfCaV1CoreSegment_js_1=require("../segment/TcfCaV1CoreSegment.js"),TcfCaV1PublisherPurposesSegment_js_1=require("../segment/TcfCaV1PublisherPurposesSegment.js"),TcfCaV1DisclosedVendorsSegment_js_1=require("../segment/TcfCaV1DisclosedVendorsSegment.js"),AbstractLazilyEncodableSection_js_1=require("./AbstractLazilyEncodableSection.js"),DecodingError_js_1=require("../error/DecodingError.js");class TcfCaV1 extends AbstractLazilyEncodableSection_js_1.AbstractLazilyEncodableSection{constructor(e){super(),e&&e.length>0&&this.decode(e)}getId(){return TcfCaV1.ID}getName(){return TcfCaV1.NAME}getVersion(){return TcfCaV1.VERSION}initializeSegments(){let e=[];return e.push(new TcfCaV1CoreSegment_js_1.TcfCaV1CoreSegment),e.push(new TcfCaV1PublisherPurposesSegment_js_1.TcfCaV1PublisherPurposesSegment),e.push(new TcfCaV1DisclosedVendorsSegment_js_1.TcfCaV1DisclosedVendorsSegment),e}decodeSection(e){let s=this.initializeSegments();if(null!=e&&0!==e.length){let t=e.split(".");for(let e=0;e<t.length;e++){let c=t[e];if(0!==c.length){let r=c.charAt(0);if(r>="A"&&r<="H")s[0].decode(t[e]);else if(r>="I"&&r<="P")s[2].decode(t[e]);else{if(!(r>="Y"&&r<="Z"||r>="a"&&r<="f"))throw new DecodingError_js_1.DecodingError("Unable to decode TcfCaV1 segment '"+c+"'");s[1].decode(t[e])}}}}return s}encodeSection(e){let s=[];return s.push(e[0].encode()),s.push(e[1].encode()),this.getFieldValue(TcfCaV1Field_js_1.TcfCaV1Field.DISCLOSED_VENDORS).length>0&&s.push(e[2].encode()),s.join(".")}setFieldValue(e,s){if(super.setFieldValue(e,s),e!==TcfCaV1Field_js_1.TcfCaV1Field.CREATED&&e!==TcfCaV1Field_js_1.TcfCaV1Field.LAST_UPDATED){let e=new Date;super.setFieldValue(TcfCaV1Field_js_1.TcfCaV1Field.CREATED,e),super.setFieldValue(TcfCaV1Field_js_1.TcfCaV1Field.LAST_UPDATED,e)}}}exports.TcfCaV1=TcfCaV1,TcfCaV1.ID=5,TcfCaV1.VERSION=1,TcfCaV1.NAME="tcfcav1";