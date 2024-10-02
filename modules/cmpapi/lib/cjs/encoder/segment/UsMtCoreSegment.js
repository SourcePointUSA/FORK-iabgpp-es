"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsMtCoreSegment=void 0;const CompressedBase64UrlEncoder_js_1=require("../base64/CompressedBase64UrlEncoder.js"),BitStringEncoder_js_1=require("../bitstring/BitStringEncoder.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),EncodableFixedIntegerList_js_1=require("../datatype/EncodableFixedIntegerList.js"),DecodingError_js_1=require("../error/DecodingError.js"),ValidationError_js_1=require("../error/ValidationError.js"),EncodableBitStringFields_js_1=require("../field/EncodableBitStringFields.js"),UsMtField_js_1=require("../field/UsMtField.js"),UsMtField_js_2=require("../field/UsMtField.js"),UsMt_js_1=require("../section/UsMt.js"),AbstractLazilyEncodableSegment_js_1=require("./AbstractLazilyEncodableSegment.js");class UsMtCoreSegment extends AbstractLazilyEncodableSegment_js_1.AbstractLazilyEncodableSegment{constructor(e){super(),this.base64UrlEncoder=CompressedBase64UrlEncoder_js_1.CompressedBase64UrlEncoder.getInstance(),this.bitStringEncoder=BitStringEncoder_js_1.BitStringEncoder.getInstance(),e&&this.decode(e)}getFieldNames(){return UsMtField_js_1.USMT_CORE_SEGMENT_FIELD_NAMES}initializeFields(){const e=new class{test(e){return e>=0&&e<=2}},t=new class{test(e){return e>=1&&e<=2}},i=new class{test(e){for(let t=0;t<e.length;t++){let i=e[t];if(i<0||i>2)return!1}return!0}};let r=new EncodableBitStringFields_js_1.EncodableBitStringFields;return r.put(UsMtField_js_2.UsMtField.VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,UsMt_js_1.UsMt.VERSION)),r.put(UsMtField_js_2.UsMtField.SHARING_NOTICE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.SALE_OPT_OUT_NOTICE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.SALE_OPT_OUT.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.TARGETED_ADVERTISING_OPT_OUT.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.SENSITIVE_DATA_PROCESSING.toString(),new EncodableFixedIntegerList_js_1.EncodableFixedIntegerList(2,[0,0,0,0,0,0,0,0]).withValidator(i)),r.put(UsMtField_js_2.UsMtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new EncodableFixedIntegerList_js_1.EncodableFixedIntegerList(2,[0,0,0]).withValidator(i)),r.put(UsMtField_js_2.UsMtField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.MSPA_COVERED_TRANSACTION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,1).withValidator(t)),r.put(UsMtField_js_2.UsMtField.MSPA_OPT_OUT_OPTION_MODE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r.put(UsMtField_js_2.UsMtField.MSPA_SERVICE_PROVIDER_MODE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(2,0).withValidator(e)),r}encodeSegment(e){let t=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(t)}decodeSegment(e,t){null!=e&&0!==e.length||this.fields.reset(t);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),t)}catch(t){throw new DecodingError_js_1.DecodingError("Unable to decode UsMtCoreSegment '"+e+"'")}}validate(){let e=this.fields.get(UsMtField_js_2.UsMtField.SALE_OPT_OUT_NOTICE).getValue(),t=this.fields.get(UsMtField_js_2.UsMtField.SALE_OPT_OUT).getValue(),i=this.fields.get(UsMtField_js_2.UsMtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE).getValue(),r=this.fields.get(UsMtField_js_2.UsMtField.TARGETED_ADVERTISING_OPT_OUT).getValue(),s=this.fields.get(UsMtField_js_2.UsMtField.MSPA_SERVICE_PROVIDER_MODE).getValue(),n=this.fields.get(UsMtField_js_2.UsMtField.MSPA_OPT_OUT_OPTION_MODE).getValue();if(0==e){if(0!=t)throw new ValidationError_js_1.ValidationError("Invalid usct sale notice / opt out combination: {"+e+" / "+t+"}")}else if(1==e){if(1!=t&&2!=t)throw new ValidationError_js_1.ValidationError("Invalid usct sale notice / opt out combination: {"+e+" / "+t+"}")}else if(2==e&&1!=t)throw new ValidationError_js_1.ValidationError("Invalid usct sale notice / opt out combination: {"+e+" / "+t+"}");if(0==i){if(0!=r)throw new ValidationError_js_1.ValidationError("Invalid usct targeted advertising notice / opt out combination: {"+i+" / "+r+"}")}else if(1==i){if(1!=t&&2!=t)throw new ValidationError_js_1.ValidationError("Invalid usct targeted advertising notice / opt out combination: {"+i+" / "+r+"}")}else if(2==i&&1!=t)throw new ValidationError_js_1.ValidationError("Invalid usct targeted advertising notice / opt out combination: {"+i+" / "+r+"}");if(0==s){if(0!=e)throw new ValidationError_js_1.ValidationError("Invalid usct mspa service provider mode / sale opt out notice combination: {"+s+" / "+e+"}")}else if(1==s){if(2!=n)throw new ValidationError_js_1.ValidationError("Invalid usct mspa service provider / opt out option modes combination: {"+s+" / "+s+"}");if(0!=e)throw new ValidationError_js_1.ValidationError("Invalid usct mspa service provider mode / sale opt out notice combination: {"+s+" / "+e+"}")}else if(2==s&&1!=n)throw new ValidationError_js_1.ValidationError("Invalid usct mspa service provider / opt out option modes combination: {"+s+" / "+n+"}")}}exports.UsMtCoreSegment=UsMtCoreSegment;