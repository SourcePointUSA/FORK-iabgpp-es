"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnencodableInteger=void 0;class UnencodableInteger{constructor(e,t){this.value=null,this.validator=t||new class{test(e){return!0}},this.setValue(e)}hasValue(){return null!=this.value}getValue(){return this.value}setValue(e){this.value=e}}exports.UnencodableInteger=UnencodableInteger;