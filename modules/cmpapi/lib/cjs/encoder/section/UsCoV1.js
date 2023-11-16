"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsCoV1=void 0;const AbstractEncodableSegmentedBitStringSection_js_1=require("./AbstractEncodableSegmentedBitStringSection.js"),EncodableBoolean_js_1=require("../datatype/EncodableBoolean.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),EncodableFixedIntegerList_js_1=require("../datatype/EncodableFixedIntegerList.js"),DecodingError_js_1=require("../error/DecodingError.js"),UsCoV1Field_js_1=require("../field/UsCoV1Field.js"),CompressedBase64UrlEncoder_js_1=require("../datatype/encoder/CompressedBase64UrlEncoder.js");class UsCoV1 extends AbstractEncodableSegmentedBitStringSection_js_1.AbstractEncodableSegmentedBitStringSection{constructor(e){let s=new Map;s.set(UsCoV1Field_js_1.UsCoV1Field.VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,UsCoV1.VERSION)),s.set(UsCoV1Field_js_1.UsCoV1Field.SHARING_NOTICE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.SALE_OPT_OUT_NOTICE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.SALE_OPT_OUT.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.SENSITIVE_DATA_PROCESSING.toString(),new EncodableFixedIntegerList_js_1.EncodableFixedIntegerList(2,[0,0,0,0,0,0,0])),s.set(UsCoV1Field_js_1.UsCoV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.MSPA_COVERED_TRANSACTION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0)),s.set(UsCoV1Field_js_1.UsCoV1Field.GPC_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,1)),s.set(UsCoV1Field_js_1.UsCoV1Field.GPC_SEGMENT_INCLUDED.toString(),new EncodableBoolean_js_1.EncodableBoolean(!0)),s.set(UsCoV1Field_js_1.UsCoV1Field.GPC.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),super(s,[[UsCoV1Field_js_1.UsCoV1Field.VERSION.toString(),UsCoV1Field_js_1.UsCoV1Field.SHARING_NOTICE.toString(),UsCoV1Field_js_1.UsCoV1Field.SALE_OPT_OUT_NOTICE.toString(),UsCoV1Field_js_1.UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),UsCoV1Field_js_1.UsCoV1Field.SALE_OPT_OUT.toString(),UsCoV1Field_js_1.UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT.toString(),UsCoV1Field_js_1.UsCoV1Field.SENSITIVE_DATA_PROCESSING.toString(),UsCoV1Field_js_1.UsCoV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),UsCoV1Field_js_1.UsCoV1Field.MSPA_COVERED_TRANSACTION.toString(),UsCoV1Field_js_1.UsCoV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(),UsCoV1Field_js_1.UsCoV1Field.MSPA_SERVICE_PROVIDER_MODE.toString()],[UsCoV1Field_js_1.UsCoV1Field.GPC_SEGMENT_TYPE.toString(),UsCoV1Field_js_1.UsCoV1Field.GPC.toString()]]),this.base64UrlEncoder=new CompressedBase64UrlEncoder_js_1.CompressedBase64UrlEncoder,e&&e.length>0&&this.decode(e)}encode(){let e=this.encodeSegmentsToBitStrings(),s=[];if(s.push(this.base64UrlEncoder.encode(e[0])),e[1]&&e[1].length>0){!0===this.fields.get(UsCoV1Field_js_1.UsCoV1Field.GPC_SEGMENT_INCLUDED).getValue()&&s.push(this.base64UrlEncoder.encode(e[1]))}return s.join(".")}decode(e){let s=e.split("."),o=[],t=!1;for(let e=0;e<s.length;e++){let d=this.base64UrlEncoder.decode(s[e]);switch(d.substring(0,2)){case"00":o[0]=d;break;case"01":t=!0,o[1]=d;break;default:throw new DecodingError_js_1.DecodingError("Unable to decode segment '"+s[e]+"'")}}this.decodeSegmentsFromBitStrings(o),this.fields.get(UsCoV1Field_js_1.UsCoV1Field.GPC_SEGMENT_INCLUDED).setValue(t)}getId(){return UsCoV1.ID}getName(){return UsCoV1.NAME}}exports.UsCoV1=UsCoV1,UsCoV1.ID=10,UsCoV1.VERSION=1,UsCoV1.NAME="uscov1";