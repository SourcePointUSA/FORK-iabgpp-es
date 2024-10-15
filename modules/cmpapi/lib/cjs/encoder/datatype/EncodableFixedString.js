"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EncodableFixedString=void 0;const FixedStringEncoder_js_1=require("./encoder/FixedStringEncoder.js"),AbstractEncodableBitStringDataType_js_1=require("./AbstractEncodableBitStringDataType.js"),EncodingError_js_1=require("../error/EncodingError.js"),DecodingError_js_1=require("../error/DecodingError.js"),SubstringError_js_1=require("./SubstringError.js"),StringUtil_js_1=require("../util/StringUtil.js");class EncodableFixedString extends AbstractEncodableBitStringDataType_js_1.AbstractEncodableBitStringDataType{constructor(r,e,t=!0){super(t),this.stringLength=r,this.setValue(e)}encode(){try{return FixedStringEncoder_js_1.FixedStringEncoder.encode(this.value,this.stringLength)}catch(r){throw new EncodingError_js_1.EncodingError(r)}}decode(r){try{this.value=FixedStringEncoder_js_1.FixedStringEncoder.decode(r)}catch(r){throw new DecodingError_js_1.DecodingError(r)}}substring(r,e){try{return StringUtil_js_1.StringUtil.substring(r,e,e+6*this.stringLength)}catch(r){throw new SubstringError_js_1.SubstringError(r)}}}exports.EncodableFixedString=EncodableFixedString;