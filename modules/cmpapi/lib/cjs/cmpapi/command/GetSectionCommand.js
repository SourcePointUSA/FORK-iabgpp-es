"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GetSectionCommand=void 0;const Command_js_1=require("./Command.js");class GetSectionCommand extends Command_js_1.Command{respond(){if(!this.parameter||0===this.parameter.length)throw new Error("<section> parameter required");let e=null;this.cmpApiContext.gppModel.hasSection(this.parameter)&&(e=this.cmpApiContext.gppModel.getSection(this.parameter)),this.invokeCallback(e)}}exports.GetSectionCommand=GetSectionCommand;