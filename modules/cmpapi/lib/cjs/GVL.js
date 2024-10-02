"use strict";var __awaiter=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GVL=exports.GVLUrlConfig=void 0;const JsonHttpClient_js_1=require("./gvl/client/JsonHttpClient.js"),GVLError_js_1=require("./gvl/error/GVLError.js"),ConsentLanguages_js_1=require("./gvl/gvlmodel/ConsentLanguages.js");class GVLUrlConfig{}exports.GVLUrlConfig=GVLUrlConfig;class GVL{constructor(){this.consentLanguages=new ConsentLanguages_js_1.ConsentLanguages,this.language=GVL.DEFAULT_LANGUAGE,this.ready=!1,this.languageFilename="purposes-[LANG].json"}static fromVendorList(e){let t=new GVL;return t.populate(e),t}static fromUrl(e){return __awaiter(this,void 0,void 0,(function*(){let t=e.baseUrl;if(!t||0===t.length)throw new GVLError_js_1.GVLError("Invalid baseUrl: '"+t+"'");if(/^https?:\/\/vendorlist\.consensu\.org\//.test(t))throw new GVLError_js_1.GVLError("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");t.length>0&&"/"!==t[t.length-1]&&(t+="/");let s=new GVL;if(s.baseUrl=t,e.languageFilename?s.languageFilename=e.languageFilename:s.languageFilename="purposes-[LANG].json",e.version>0){let r=e.versionedFilename;r||(r="archives/vendor-list-v[VERSION].json");let n=t+r.replace("[VERSION]",String(e.version));s.populate(yield JsonHttpClient_js_1.JsonHttpClient.fetch(n))}else{let r=e.latestFilename;r||(r="vendor-list.json");let n=t+r;s.populate(yield JsonHttpClient_js_1.JsonHttpClient.fetch(n))}return s}))}changeLanguage(e){return __awaiter(this,void 0,void 0,(function*(){const t=e.toUpperCase();if(!this.consentLanguages.has(t))throw new GVLError_js_1.GVLError(`unsupported language ${e}`);if(t!==this.language){this.language=t;const s=this.baseUrl+this.languageFilename.replace("[LANG]",e);try{this.populate(yield JsonHttpClient_js_1.JsonHttpClient.fetch(s))}catch(e){throw new GVLError_js_1.GVLError("unable to load language: "+e.message)}}}))}getJson(){return JSON.parse(JSON.stringify({gvlSpecificationVersion:this.gvlSpecificationVersion,vendorListVersion:this.vendorListVersion,tcfPolicyVersion:this.tcfPolicyVersion,lastUpdated:this.lastUpdated,purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,dataCategories:this.dataCategories,vendors:this.fullVendorList}))}isVendorList(e){return void 0!==e&&void 0!==e.vendors}populate(e){this.purposes=e.purposes,this.specialPurposes=e.specialPurposes,this.features=e.features,this.specialFeatures=e.specialFeatures,this.stacks=e.stacks,this.dataCategories=e.dataCategories,this.isVendorList(e)&&(this.gvlSpecificationVersion=e.gvlSpecificationVersion,this.tcfPolicyVersion=e.tcfPolicyVersion,this.vendorListVersion=e.vendorListVersion,this.lastUpdated=e.lastUpdated,"string"==typeof this.lastUpdated&&(this.lastUpdated=new Date(this.lastUpdated)),this.vendors=e.vendors,this.fullVendorList=e.vendors,this.mapVendors(),this.ready=!0)}mapVendors(e){this.byPurposeVendorMap={},this.bySpecialPurposeVendorMap={},this.byFeatureVendorMap={},this.bySpecialFeatureVendorMap={},Object.keys(this.purposes).forEach((e=>{this.byPurposeVendorMap[e]={legInt:new Set,impCons:new Set,consent:new Set,flexible:new Set}})),Object.keys(this.specialPurposes).forEach((e=>{this.bySpecialPurposeVendorMap[e]=new Set})),Object.keys(this.features).forEach((e=>{this.byFeatureVendorMap[e]=new Set})),Object.keys(this.specialFeatures).forEach((e=>{this.bySpecialFeatureVendorMap[e]=new Set})),Array.isArray(e)||(e=Object.keys(this.fullVendorList).map((e=>+e))),this.vendorIds=new Set(e),this.vendors=e.reduce(((e,t)=>{const s=this.vendors[String(t)];return s&&void 0===s.deletedDate&&(s.purposes.forEach((e=>{this.byPurposeVendorMap[String(e)].consent.add(t)})),s.specialPurposes.forEach((e=>{this.bySpecialPurposeVendorMap[String(e)].add(t)})),s.legIntPurposes&&s.legIntPurposes.forEach((e=>{this.byPurposeVendorMap[String(e)].legInt.add(t)})),s.impConsPurposes&&s.impConsPurposes.forEach((e=>{this.byPurposeVendorMap[String(e)].impCons.add(t)})),s.flexiblePurposes&&s.flexiblePurposes.forEach((e=>{this.byPurposeVendorMap[String(e)].flexible.add(t)})),s.features.forEach((e=>{this.byFeatureVendorMap[String(e)].add(t)})),s.specialFeatures.forEach((e=>{this.bySpecialFeatureVendorMap[String(e)].add(t)})),e[t]=s),e}),{})}getFilteredVendors(e,t,s,r){const n=e.charAt(0).toUpperCase()+e.slice(1);let i;const o={};return i="purpose"===e&&s?this["by"+n+"VendorMap"][String(t)][s]:this["by"+(r?"Special":"")+n+"VendorMap"][String(t)],i.forEach((e=>{o[String(e)]=this.vendors[String(e)]})),o}getVendorsWithConsentPurpose(e){return this.getFilteredVendors("purpose",e,"consent")}getVendorsWithLegIntPurpose(e){return this.getFilteredVendors("purpose",e,"legInt")}getVendorsWithFlexiblePurpose(e){return this.getFilteredVendors("purpose",e,"flexible")}getVendorsWithSpecialPurpose(e){return this.getFilteredVendors("purpose",e,void 0,!0)}getVendorsWithFeature(e){return this.getFilteredVendors("feature",e)}getVendorsWithSpecialFeature(e){return this.getFilteredVendors("feature",e,void 0,!0)}narrowVendorsTo(e){this.mapVendors(e)}get isReady(){return this.ready}static isInstanceOf(e){return"object"==typeof e&&"function"==typeof e.narrowVendorsTo}}exports.GVL=GVL,GVL.DEFAULT_LANGUAGE="EN";