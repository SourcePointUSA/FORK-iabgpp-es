"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TcfEuV2=void 0;const EncodableBoolean_js_1=require("../datatype/EncodableBoolean.js"),EncodableDatetime_js_1=require("../datatype/EncodableDatetime.js"),EncodableFlexibleBitfield_js_1=require("../datatype/EncodableFlexibleBitfield.js"),EncodableFixedBitfield_js_1=require("../datatype/EncodableFixedBitfield.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),EncodableFixedString_js_1=require("../datatype/EncodableFixedString.js"),AbstractEncodableSegmentedBitStringSection_js_1=require("./AbstractEncodableSegmentedBitStringSection.js"),EncodableFixedIntegerRange_js_1=require("../datatype/EncodableFixedIntegerRange.js"),EncodableOptimizedFixedRange_js_1=require("../datatype/EncodableOptimizedFixedRange.js"),DecodingError_js_1=require("../error/DecodingError.js"),TcfEuV2Field_js_1=require("../field/TcfEuV2Field.js"),TraditionalBase64UrlEncoder_js_1=require("../datatype/encoder/TraditionalBase64UrlEncoder.js");class TcfEuV2 extends AbstractEncodableSegmentedBitStringSection_js_1.AbstractEncodableSegmentedBitStringSection{constructor(e){let E=new Map,i=new Date;E.set(TcfEuV2Field_js_1.TcfEuV2Field.VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,TcfEuV2.VERSION)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.CREATED.toString(),new EncodableDatetime_js_1.EncodableDatetime(i)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.LAST_UPDATED.toString(),new EncodableDatetime_js_1.EncodableDatetime(i)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.CMP_ID.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(12,0)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.CMP_VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(12,0)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.CONSENT_SCREEN.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,0)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.CONSENT_LANGUAGE.toString(),new EncodableFixedString_js_1.EncodableFixedString(2,"EN")),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDOR_LIST_VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(12,0)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.POLICY_VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,2)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.IS_SERVICE_SPECIFIC.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.USE_NON_STANDARD_STACKS.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.SPECIAL_FEATURE_OPTINS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PURPOSE_CONSENTS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PURPOSE_ONE_TREATMENT.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_COUNTRY_CODE.toString(),new EncodableFixedString_js_1.EncodableFixedString(2,"AA")),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDOR_CONSENTS.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_RESTRICTIONS.toString(),new EncodableFixedIntegerRange_js_1.EncodableFixedIntegerRange([])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_PURPOSES_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(3,3)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_CONSENTS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_LEGITIMATE_INTERESTS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));let d=new EncodableFixedInteger_js_1.EncodableFixedInteger(6,0);E.set(TcfEuV2Field_js_1.TcfEuV2Field.NUM_CUSTOM_PURPOSES.toString(),d),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_CUSTOM_CONSENTS.toString(),new EncodableFlexibleBitfield_js_1.EncodableFlexibleBitfield((()=>d.getValue()),[])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS.toString(),new EncodableFlexibleBitfield_js_1.EncodableFlexibleBitfield((()=>d.getValue()),[])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_ALLOWED_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(3,2)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_ALLOWED.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(3,1)),E.set(TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_DISCLOSED.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),super(E,[[TcfEuV2Field_js_1.TcfEuV2Field.VERSION.toString(),TcfEuV2Field_js_1.TcfEuV2Field.CREATED.toString(),TcfEuV2Field_js_1.TcfEuV2Field.LAST_UPDATED.toString(),TcfEuV2Field_js_1.TcfEuV2Field.CMP_ID.toString(),TcfEuV2Field_js_1.TcfEuV2Field.CMP_VERSION.toString(),TcfEuV2Field_js_1.TcfEuV2Field.CONSENT_SCREEN.toString(),TcfEuV2Field_js_1.TcfEuV2Field.CONSENT_LANGUAGE.toString(),TcfEuV2Field_js_1.TcfEuV2Field.VENDOR_LIST_VERSION.toString(),TcfEuV2Field_js_1.TcfEuV2Field.POLICY_VERSION.toString(),TcfEuV2Field_js_1.TcfEuV2Field.IS_SERVICE_SPECIFIC.toString(),TcfEuV2Field_js_1.TcfEuV2Field.USE_NON_STANDARD_STACKS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.SPECIAL_FEATURE_OPTINS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PURPOSE_CONSENTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PURPOSE_ONE_TREATMENT.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_COUNTRY_CODE.toString(),TcfEuV2Field_js_1.TcfEuV2Field.VENDOR_CONSENTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_RESTRICTIONS.toString()],[TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_PURPOSES_SEGMENT_TYPE.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_CONSENTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_LEGITIMATE_INTERESTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.NUM_CUSTOM_PURPOSES.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_CUSTOM_CONSENTS.toString(),TcfEuV2Field_js_1.TcfEuV2Field.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS.toString()],[TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_ALLOWED_SEGMENT_TYPE.toString(),TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_ALLOWED.toString()],[TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(),TcfEuV2Field_js_1.TcfEuV2Field.VENDORS_DISCLOSED.toString()]]),this.base64UrlEncoder=new TraditionalBase64UrlEncoder_js_1.TraditionalBase64UrlEncoder,e&&e.length>0&&this.decode(e)}encode(){let e=this.encodeSegmentsToBitStrings(),E=[];return E.push(this.base64UrlEncoder.encode(e[0])),this.getFieldValue(TcfEuV2Field_js_1.TcfEuV2Field.IS_SERVICE_SPECIFIC.toString())?e[1]&&e[1].length>0&&E.push(this.base64UrlEncoder.encode(e[1])):(e[2]&&e[2].length>0&&E.push(this.base64UrlEncoder.encode(e[2])),e[3]&&e[3].length>0&&E.push(this.base64UrlEncoder.encode(e[3]))),E.join(".")}decode(e){let E=e.split("."),i=[];for(let e=0;e<E.length;e++){let d=this.base64UrlEncoder.decode(E[e]);switch(d.substring(0,3)){case"000":i[0]=d;break;case"001":i[3]=d;break;case"010":i[2]=d;break;case"011":i[1]=d;break;default:throw new DecodingError_js_1.DecodingError("Unable to decode segment '"+E[e]+"'")}}this.decodeSegmentsFromBitStrings(i)}setFieldValue(e,E){if(super.setFieldValue(e,E),e!==TcfEuV2Field_js_1.TcfEuV2Field.CREATED.toString()&&e!==TcfEuV2Field_js_1.TcfEuV2Field.LAST_UPDATED.toString()){const e=new Date,E=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()));this.setFieldValue(TcfEuV2Field_js_1.TcfEuV2Field.CREATED.toString(),E),this.setFieldValue(TcfEuV2Field_js_1.TcfEuV2Field.LAST_UPDATED.toString(),E)}}getId(){return TcfEuV2.ID}getName(){return TcfEuV2.NAME}}exports.TcfEuV2=TcfEuV2,TcfEuV2.ID=2,TcfEuV2.VERSION=2,TcfEuV2.NAME="tcfeuv2";