"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsMtGpcSegment=void 0;const CompressedBase64UrlEncoder_js_1=require("../base64/CompressedBase64UrlEncoder.js"),BitStringEncoder_js_1=require("../bitstring/BitStringEncoder.js"),EncodableBoolean_js_1=require("../datatype/EncodableBoolean.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),DecodingError_js_1=require("../error/DecodingError.js"),EncodableBitStringFields_js_1=require("../field/EncodableBitStringFields.js"),UsMtField_js_1=require("../field/UsMtField.js"),UsMtField_js_2=require("../field/UsMtField.js"),AbstractLazilyEncodableSegment_js_1=require("./AbstractLazilyEncodableSegment.js");class UsMtGpcSegment extends AbstractLazilyEncodableSegment_js_1.AbstractLazilyEncodableSegment{constructor(e){super(),this.base64UrlEncoder=CompressedBase64UrlEncoder_js_1.CompressedBase64UrlEncoder.getInstance(),this.bitStringEncoder=BitStringEncoder_js_1.BitStringEncoder.getInstance(),e&&this.decode(e)}getFieldNames(){return UsMtField_js_1.USMT_GPC_SEGMENT_FIELD_NAMES}initializeFields(){let e=new EncodableBitStringFields_js_1.EncodableBitStringFields;return e.put(UsMtField_js_2.UsMtField.GPC_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,1)),e.put(UsMtField_js_2.UsMtField.GPC_SEGMENT_INCLUDED.toString(),new EncodableBoolean_js_1.EncodableBoolean(!0)),e.put(UsMtField_js_2.UsMtField.GPC.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),e}encodeSegment(e){let t=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(t)}decodeSegment(e,t){null!=e&&0!==e.length||this.fields.reset(t);try{let s=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(s,this.getFieldNames(),t)}catch(t){throw new DecodingError_js_1.DecodingError("Unable to decode UsMtGpcSegment '"+e+"'")}}}exports.UsMtGpcSegment=UsMtGpcSegment;