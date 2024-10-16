"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DatetimeEncoder=void 0;const DecodingError_js_1=require("../../error/DecodingError.js"),FixedIntegerEncoder_js_1=require("./FixedIntegerEncoder.js");class DatetimeEncoder{static encode(e){return e?FixedIntegerEncoder_js_1.FixedIntegerEncoder.encode(Math.round(e.getTime()/100),36):FixedIntegerEncoder_js_1.FixedIntegerEncoder.encode(0,36)}static decode(e){if(!/^[0-1]*$/.test(e)||36!==e.length)throw new DecodingError_js_1.DecodingError("Undecodable Datetime '"+e+"'");return new Date(100*FixedIntegerEncoder_js_1.FixedIntegerEncoder.decode(e))}}exports.DatetimeEncoder=DatetimeEncoder;