"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CompressedBase64UrlEncoder=void 0;const AbstractBase64UrlEncoder_js_1=require("./AbstractBase64UrlEncoder.js");class CompressedBase64UrlEncoder extends AbstractBase64UrlEncoder_js_1.AbstractBase64UrlEncoder{constructor(){super()}static getInstance(){return this.instance}pad(e){for(;e.length%8>0;)e+="0";for(;e.length%6>0;)e+="0";return e}}exports.CompressedBase64UrlEncoder=CompressedBase64UrlEncoder,CompressedBase64UrlEncoder.instance=new CompressedBase64UrlEncoder;