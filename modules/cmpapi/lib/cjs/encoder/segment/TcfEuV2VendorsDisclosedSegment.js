"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TcfEuV2VendorsDisclosedSegment=void 0;const TraditionalBase64UrlEncoder_js_1=require("../base64/TraditionalBase64UrlEncoder.js"),BitStringEncoder_js_1=require("../bitstring/BitStringEncoder.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),EncodableOptimizedFixedRange_js_1=require("../datatype/EncodableOptimizedFixedRange.js"),DecodingError_js_1=require("../error/DecodingError.js"),EncodableBitStringFields_js_1=require("../field/EncodableBitStringFields.js"),TcfEuV2Field_js_1=require("../field/TcfEuV2Field.js"),TcfEuV2Field_js_2=require("../field/TcfEuV2Field.js"),AbstractLazilyEncodableSegment_js_1=require("./AbstractLazilyEncodableSegment.js");class TcfEuV2VendorsDisclosedSegment extends AbstractLazilyEncodableSegment_js_1.AbstractLazilyEncodableSegment{constructor(e){super(),this.base64UrlEncoder=TraditionalBase64UrlEncoder_js_1.TraditionalBase64UrlEncoder.getInstance(),this.bitStringEncoder=BitStringEncoder_js_1.BitStringEncoder.getInstance(),e&&this.decode(e)}getFieldNames(){return TcfEuV2Field_js_1.TCFEUV2_VENDORS_DISCLOSED_SEGMENT_FIELD_NAMES}initializeFields(){let e=new EncodableBitStringFields_js_1.EncodableBitStringFields;return e.put(TcfEuV2Field_js_2.TcfEuV2Field.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(3,1)),e.put(TcfEuV2Field_js_2.TcfEuV2Field.VENDORS_DISCLOSED.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),e}encodeSegment(e){let i=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(i)}decodeSegment(e,i){null!=e&&0!==e.length||this.fields.reset(i);try{let t=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(t,this.getFieldNames(),i)}catch(i){throw new DecodingError_js_1.DecodingError("Unable to decode TcfEuV2VendorsDisclosedSegment '"+e+"'")}}}exports.TcfEuV2VendorsDisclosedSegment=TcfEuV2VendorsDisclosedSegment;