"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderV1CoreSegment=void 0;const CompressedBase64UrlEncoder_js_1=require("../base64/CompressedBase64UrlEncoder.js"),BitStringEncoder_js_1=require("../bitstring/BitStringEncoder.js"),EncodableFibonacciIntegerRange_js_1=require("../datatype/EncodableFibonacciIntegerRange.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),DecodingError_js_1=require("../error/DecodingError.js"),EncodableBitStringFields_js_1=require("../field/EncodableBitStringFields.js"),HeaderV1Field_js_1=require("../field/HeaderV1Field.js"),HeaderV1Field_js_2=require("../field/HeaderV1Field.js"),HeaderV1_js_1=require("../section/HeaderV1.js"),AbstractLazilyEncodableSegment_js_1=require("./AbstractLazilyEncodableSegment.js");class HeaderV1CoreSegment extends AbstractLazilyEncodableSegment_js_1.AbstractLazilyEncodableSegment{constructor(e){super(),this.base64UrlEncoder=CompressedBase64UrlEncoder_js_1.CompressedBase64UrlEncoder.getInstance(),this.bitStringEncoder=BitStringEncoder_js_1.BitStringEncoder.getInstance(),e&&this.decode(e)}getFieldNames(){return HeaderV1Field_js_1.HEADER_CORE_SEGMENT_FIELD_NAMES}initializeFields(){let e=new EncodableBitStringFields_js_1.EncodableBitStringFields;return e.put(HeaderV1Field_js_2.HeaderV1Field.ID.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,HeaderV1_js_1.HeaderV1.ID)),e.put(HeaderV1Field_js_2.HeaderV1Field.VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,HeaderV1_js_1.HeaderV1.VERSION)),e.put(HeaderV1Field_js_2.HeaderV1Field.SECTION_IDS.toString(),new EncodableFibonacciIntegerRange_js_1.EncodableFibonacciIntegerRange([])),e}encodeSegment(e){let r=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(r)}decodeSegment(e,r){null!=e&&0!==e.length||this.fields.reset(r);try{let d=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(d,this.getFieldNames(),r)}catch(r){throw new DecodingError_js_1.DecodingError("Unable to decode HeaderV1CoreSegment '"+e+"'")}}}exports.HeaderV1CoreSegment=HeaderV1CoreSegment;