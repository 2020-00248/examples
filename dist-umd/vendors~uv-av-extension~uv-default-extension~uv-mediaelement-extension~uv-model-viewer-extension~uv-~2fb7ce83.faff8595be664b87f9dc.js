(window["webpackJsonpUV"] = window["webpackJsonpUV"] || []).push([["vendors~uv-av-extension~uv-default-extension~uv-mediaelement-extension~uv-model-viewer-extension~uv-~2fb7ce83"],{

/***/ "./node_modules/@edsilv/key-codes/dist-esmodule/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@edsilv/key-codes/dist-esmodule/index.js ***!
  \***************************************************************/
/*! exports provided: KeyDown, KeyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyDown", function() { return KeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyPress", function() { return KeyPress; });
var KeyDown;
(function (KeyDown) {
    KeyDown[KeyDown["Backspace"] = 8] = "Backspace";
    KeyDown[KeyDown["Tab"] = 9] = "Tab";
    KeyDown[KeyDown["Enter"] = 13] = "Enter";
    KeyDown[KeyDown["Shift"] = 16] = "Shift";
    KeyDown[KeyDown["Ctrl"] = 17] = "Ctrl";
    KeyDown[KeyDown["Alt"] = 18] = "Alt";
    KeyDown[KeyDown["PauseBreak"] = 19] = "PauseBreak";
    KeyDown[KeyDown["CapsLock"] = 20] = "CapsLock";
    KeyDown[KeyDown["Escape"] = 27] = "Escape";
    KeyDown[KeyDown["Spacebar"] = 32] = "Spacebar";
    KeyDown[KeyDown["PageUp"] = 33] = "PageUp";
    KeyDown[KeyDown["PageDown"] = 34] = "PageDown";
    KeyDown[KeyDown["End"] = 35] = "End";
    KeyDown[KeyDown["Home"] = 36] = "Home";
    KeyDown[KeyDown["LeftArrow"] = 37] = "LeftArrow";
    KeyDown[KeyDown["UpArrow"] = 38] = "UpArrow";
    KeyDown[KeyDown["RightArrow"] = 39] = "RightArrow";
    KeyDown[KeyDown["DownArrow"] = 40] = "DownArrow";
    KeyDown[KeyDown["PrintScrn"] = 44] = "PrintScrn";
    KeyDown[KeyDown["Insert"] = 45] = "Insert";
    KeyDown[KeyDown["Delete"] = 46] = "Delete";
    KeyDown[KeyDown["Zero"] = 48] = "Zero";
    KeyDown[KeyDown["One"] = 49] = "One";
    KeyDown[KeyDown["Two"] = 50] = "Two";
    KeyDown[KeyDown["Three"] = 51] = "Three";
    KeyDown[KeyDown["Four"] = 52] = "Four";
    KeyDown[KeyDown["Five"] = 53] = "Five";
    KeyDown[KeyDown["Six"] = 54] = "Six";
    KeyDown[KeyDown["Seven"] = 55] = "Seven";
    KeyDown[KeyDown["Eight"] = 56] = "Eight";
    KeyDown[KeyDown["Nine"] = 57] = "Nine";
    KeyDown[KeyDown["a"] = 65] = "a";
    KeyDown[KeyDown["b"] = 66] = "b";
    KeyDown[KeyDown["c"] = 67] = "c";
    KeyDown[KeyDown["d"] = 68] = "d";
    KeyDown[KeyDown["e"] = 69] = "e";
    KeyDown[KeyDown["f"] = 70] = "f";
    KeyDown[KeyDown["g"] = 71] = "g";
    KeyDown[KeyDown["h"] = 72] = "h";
    KeyDown[KeyDown["i"] = 73] = "i";
    KeyDown[KeyDown["j"] = 74] = "j";
    KeyDown[KeyDown["k"] = 75] = "k";
    KeyDown[KeyDown["l"] = 76] = "l";
    KeyDown[KeyDown["m"] = 77] = "m";
    KeyDown[KeyDown["n"] = 78] = "n";
    KeyDown[KeyDown["o"] = 79] = "o";
    KeyDown[KeyDown["p"] = 80] = "p";
    KeyDown[KeyDown["q"] = 81] = "q";
    KeyDown[KeyDown["r"] = 82] = "r";
    KeyDown[KeyDown["s"] = 83] = "s";
    KeyDown[KeyDown["t"] = 84] = "t";
    KeyDown[KeyDown["u"] = 85] = "u";
    KeyDown[KeyDown["v"] = 86] = "v";
    KeyDown[KeyDown["w"] = 87] = "w";
    KeyDown[KeyDown["x"] = 88] = "x";
    KeyDown[KeyDown["y"] = 89] = "y";
    KeyDown[KeyDown["z"] = 90] = "z";
    KeyDown[KeyDown["LeftWindowKey"] = 91] = "LeftWindowKey";
    KeyDown[KeyDown["RightWindowKey"] = 92] = "RightWindowKey";
    KeyDown[KeyDown["SelectKey"] = 93] = "SelectKey";
    KeyDown[KeyDown["Numpad0"] = 96] = "Numpad0";
    KeyDown[KeyDown["Numpad1"] = 97] = "Numpad1";
    KeyDown[KeyDown["Numpad2"] = 98] = "Numpad2";
    KeyDown[KeyDown["Numpad3"] = 99] = "Numpad3";
    KeyDown[KeyDown["Numpad4"] = 100] = "Numpad4";
    KeyDown[KeyDown["Numpad5"] = 101] = "Numpad5";
    KeyDown[KeyDown["Numpad6"] = 102] = "Numpad6";
    KeyDown[KeyDown["Numpad7"] = 103] = "Numpad7";
    KeyDown[KeyDown["Numpad8"] = 104] = "Numpad8";
    KeyDown[KeyDown["Numpad9"] = 105] = "Numpad9";
    KeyDown[KeyDown["Multiply"] = 106] = "Multiply";
    KeyDown[KeyDown["NumpadPlus"] = 107] = "NumpadPlus";
    KeyDown[KeyDown["NumpadMinus"] = 109] = "NumpadMinus";
    KeyDown[KeyDown["DecimalPoint"] = 110] = "DecimalPoint";
    KeyDown[KeyDown["Divide"] = 111] = "Divide";
    KeyDown[KeyDown["F1"] = 112] = "F1";
    KeyDown[KeyDown["F2"] = 113] = "F2";
    KeyDown[KeyDown["F3"] = 114] = "F3";
    KeyDown[KeyDown["F4"] = 115] = "F4";
    KeyDown[KeyDown["F5"] = 116] = "F5";
    KeyDown[KeyDown["F6"] = 117] = "F6";
    KeyDown[KeyDown["F7"] = 118] = "F7";
    KeyDown[KeyDown["F8"] = 119] = "F8";
    KeyDown[KeyDown["F9"] = 120] = "F9";
    KeyDown[KeyDown["F10"] = 121] = "F10";
    KeyDown[KeyDown["F11"] = 122] = "F11";
    KeyDown[KeyDown["F12"] = 123] = "F12";
    KeyDown[KeyDown["NumLock"] = 144] = "NumLock";
    KeyDown[KeyDown["ScrollLock"] = 145] = "ScrollLock";
    KeyDown[KeyDown["Semicolon"] = 186] = "Semicolon";
    KeyDown[KeyDown["Equals"] = 187] = "Equals";
    KeyDown[KeyDown["Comma"] = 188] = "Comma";
    KeyDown[KeyDown["LessThan"] = 188] = "LessThan";
    KeyDown[KeyDown["Dash"] = 189] = "Dash";
    KeyDown[KeyDown["Period"] = 190] = "Period";
    KeyDown[KeyDown["GreaterThan"] = 190] = "GreaterThan";
    KeyDown[KeyDown["ForwardSlash"] = 191] = "ForwardSlash";
    KeyDown[KeyDown["QuestionMark"] = 191] = "QuestionMark";
    KeyDown[KeyDown["GraveAccent"] = 192] = "GraveAccent";
    KeyDown[KeyDown["Tilde"] = 192] = "Tilde";
    KeyDown[KeyDown["OpenCurlyBracket"] = 219] = "OpenCurlyBracket";
    KeyDown[KeyDown["OpenSquareBracket"] = 219] = "OpenSquareBracket";
    KeyDown[KeyDown["BackSlash"] = 220] = "BackSlash";
    KeyDown[KeyDown["VerticalPipe"] = 220] = "VerticalPipe";
    KeyDown[KeyDown["CloseCurlyBracket"] = 221] = "CloseCurlyBracket";
    KeyDown[KeyDown["CloseSquareBracket"] = 221] = "CloseSquareBracket";
    KeyDown[KeyDown["Quote"] = 222] = "Quote";
    KeyDown[KeyDown["CommandFF"] = 224] = "CommandFF";
})(KeyDown || (KeyDown = {}));
var KeyPress;
(function (KeyPress) {
    KeyPress[KeyPress["Backspace"] = 8] = "Backspace";
    KeyPress[KeyPress["Enter"] = 13] = "Enter";
    KeyPress[KeyPress["Spacebar"] = 32] = "Spacebar";
    KeyPress[KeyPress["Hash"] = 35] = "Hash";
    KeyPress[KeyPress["GraveAccent"] = 39] = "GraveAccent";
    KeyPress[KeyPress["DoubleQuote"] = 34] = "DoubleQuote";
    KeyPress[KeyPress["Asterisk"] = 42] = "Asterisk";
    KeyPress[KeyPress["Plus"] = 43] = "Plus";
    KeyPress[KeyPress["Comma"] = 44] = "Comma";
    KeyPress[KeyPress["Minus"] = 45] = "Minus";
    KeyPress[KeyPress["Period"] = 46] = "Period";
    KeyPress[KeyPress["ForwardSlash"] = 47] = "ForwardSlash";
    KeyPress[KeyPress["Zero"] = 48] = "Zero";
    KeyPress[KeyPress["One"] = 49] = "One";
    KeyPress[KeyPress["Two"] = 50] = "Two";
    KeyPress[KeyPress["Three"] = 51] = "Three";
    KeyPress[KeyPress["Four"] = 52] = "Four";
    KeyPress[KeyPress["Five"] = 53] = "Five";
    KeyPress[KeyPress["Six"] = 54] = "Six";
    KeyPress[KeyPress["Seven"] = 55] = "Seven";
    KeyPress[KeyPress["Eight"] = 56] = "Eight";
    KeyPress[KeyPress["Nine"] = 57] = "Nine";
    KeyPress[KeyPress["Colon"] = 58] = "Colon";
    KeyPress[KeyPress["Semicolon"] = 59] = "Semicolon";
    KeyPress[KeyPress["LessThan"] = 60] = "LessThan";
    KeyPress[KeyPress["Equals"] = 61] = "Equals";
    KeyPress[KeyPress["GreaterThan"] = 62] = "GreaterThan";
    KeyPress[KeyPress["QuestionMark"] = 63] = "QuestionMark";
    KeyPress[KeyPress["At"] = 64] = "At";
    KeyPress[KeyPress["OpenSquareBracket"] = 91] = "OpenSquareBracket";
    KeyPress[KeyPress["BackSlash"] = 92] = "BackSlash";
    KeyPress[KeyPress["CloseSquareBracket"] = 93] = "CloseSquareBracket";
    KeyPress[KeyPress["a"] = 97] = "a";
    KeyPress[KeyPress["b"] = 98] = "b";
    KeyPress[KeyPress["c"] = 99] = "c";
    KeyPress[KeyPress["d"] = 100] = "d";
    KeyPress[KeyPress["e"] = 101] = "e";
    KeyPress[KeyPress["f"] = 102] = "f";
    KeyPress[KeyPress["g"] = 103] = "g";
    KeyPress[KeyPress["h"] = 104] = "h";
    KeyPress[KeyPress["i"] = 105] = "i";
    KeyPress[KeyPress["j"] = 106] = "j";
    KeyPress[KeyPress["k"] = 107] = "k";
    KeyPress[KeyPress["l"] = 108] = "l";
    KeyPress[KeyPress["m"] = 109] = "m";
    KeyPress[KeyPress["n"] = 110] = "n";
    KeyPress[KeyPress["o"] = 111] = "o";
    KeyPress[KeyPress["p"] = 112] = "p";
    KeyPress[KeyPress["q"] = 113] = "q";
    KeyPress[KeyPress["r"] = 114] = "r";
    KeyPress[KeyPress["s"] = 115] = "s";
    KeyPress[KeyPress["t"] = 116] = "t";
    KeyPress[KeyPress["u"] = 117] = "u";
    KeyPress[KeyPress["v"] = 118] = "v";
    KeyPress[KeyPress["w"] = 119] = "w";
    KeyPress[KeyPress["x"] = 120] = "x";
    KeyPress[KeyPress["y"] = 121] = "y";
    KeyPress[KeyPress["z"] = 122] = "z";
    KeyPress[KeyPress["OpenCurlyBracket"] = 123] = "OpenCurlyBracket";
    KeyPress[KeyPress["VerticalPipe"] = 124] = "VerticalPipe";
    KeyPress[KeyPress["CloseCurlyBracket"] = 125] = "CloseCurlyBracket";
    KeyPress[KeyPress["Tilde"] = 126] = "Tilde";
})(KeyPress || (KeyPress = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@iiif/iiif-metadata-component/dist-umd/IIIFMetadataComponent.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@iiif/iiif-metadata-component/dist-umd/IIIFMetadataComponent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! fetch-cookie/node-fetch */ "./node_modules/fetch-cookie/node-fetch.js"),__webpack_require__(/*! form-data */ "./node_modules/@iiif/iiif-metadata-component/node_modules/form-data/lib/browser.js"),__webpack_require__(/*! node-fetch */ "node-fetch"),__webpack_require__(/*! url */ "./node_modules/url/url.js")):undefined}("undefined"!=typeof self?self:this,(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(2),s=n(7),u=n(8);!function(e){e.LINES="lines",e.CHARS="chars"}(o=t.LimitType||(t.LimitType={}));var c=function(e){function t(t){var n=e.call(this,t)||this;return n._data=n.data(),n._data=n.options.data,n._init(),n._resize(),n}return i(t,e),t.prototype._init=function(){return e.prototype._init.call(this),this._$element=$(this.el),this._$metadataGroupTemplate=$('<div class="group">          <div class="header"></div>          <div class="items"></div>      </div>'),this._$metadataItemTemplate=$('<div class="item">          <div class="label"></div>          <div class="values"></div>      </div>'),this._$metadataItemValueTemplate=$('<div class="value"></div>'),this._$metadataItemURIValueTemplate=$('<a class="value" href="" target="_blank"></a>'),this._$copyTextTemplate=$('<div class="copyText" alt="'+this.options.data.content.copyToClipboard+'" title="'+this.options.data.content.copyToClipboard+'">        <div class="copiedText">'+this.options.data.content.copiedToClipboard+" </div>        </div>"),this._$metadataGroups=$('<div class="groups"></div>'),this._$element.append(this._$metadataGroups),this._$noData=$('<div class="noData">'+this.options.data.content.noData+"</div>"),this._$element.append(this._$noData),!0},t.prototype.data=function(){return{aggregateValues:"",canvases:null,canvasDisplayOrder:"",metadataGroupOrder:"",canvasExclude:"",canvasLabels:"",content:{attribution:"Attribution",canvasHeader:"About the canvas",copiedToClipboard:"Copied to clipboard",copyToClipboard:"Copy to clipboard",description:"Description",imageHeader:"About the image",less:"less",license:"License",logo:"Logo",manifestHeader:"About the item",more:"more",noData:"No data to display",rangeHeader:"About the range",sequenceHeader:"About the sequence"},copiedMessageDuration:2e3,copyToClipboardEnabled:!1,helper:null,licenseFormatter:null,limit:4,limitType:o.LINES,limitToRange:!1,manifestDisplayOrder:"",manifestExclude:"",range:null,rtlLanguageCodes:"ar, ara, dv, div, he, heb, ur, urd",sanitizer:function(e){return e},showAllLanguages:!1}},t.prototype._getManifestGroup=function(){return this._metadataGroups.filter((function(e){return e.resource.isManifest()}))[0]},t.prototype._getCanvasGroups=function(){return this._metadataGroups.filter((function(e){return e.resource.isCanvas()}))},t.prototype.set=function(e){var t=this;if(this._data=Object.assign(this._data,e),this._data&&this._data.helper){var n,r={canvases:this._data.canvases,licenseFormatter:this._data.licenseFormatter,range:this._data.range};if(this._metadataGroups=this._data.helper.getMetadata(r),this._data.manifestDisplayOrder)(n=this._getManifestGroup()).items=this._sortItems(n.items,this._readCSV(this._data.manifestDisplayOrder));if(this._data.canvasDisplayOrder)this._getCanvasGroups().forEach((function(e,n){e.items=t._sortItems(e.items,t._readCSV(t._data.canvasDisplayOrder))}));if(this._data.metadataGroupOrder&&(this._metadataGroups=this._sortGroups(this._metadataGroups,this._readCSV(this._data.metadataGroupOrder))),this._data.canvasLabels&&this._label(this._getCanvasGroups(),this._readCSV(this._data.canvasLabels,!1)),this._data.manifestExclude)(n=this._getManifestGroup()).items=this._exclude(n.items,this._readCSV(this._data.manifestExclude));if(this._data.canvasExclude)this._getCanvasGroups().forEach((function(e,n){e.items=t._exclude(e.items,t._readCSV(t._data.canvasExclude))}));if(this._data.limitToRange){var i=[];this._metadataGroups.forEach((function(e,t){e.resource.isRange()&&i.push(e)})),i.length&&(this._metadataGroups=i)}this._render()}},t.prototype._sortItems=function(e,t){var n=this,r=[],i=e.slice(0);return t.forEach((function(e,t){var o=i.filter((function(t){return n._normalise(t.getLabel())===e}))[0];if(o){r.push(o);var a=i.indexOf(o);a>-1&&i.splice(a,1)}})),i.forEach((function(e,t){r.push(e)})),r},t.prototype._sortGroups=function(e,t){var n=[],r=e.slice(0);return t.forEach((function(e,t){var i=r.filter((function(t){return t.resource.getIIIFResourceType().toLowerCase()==e.toLowerCase()}))[0];if(i){n.push(i);var o=r.indexOf(i);o>-1&&r.splice(o,1)}})),n},t.prototype._label=function(e,t){e.forEach((function(e,n){e.label=t[n]}))},t.prototype._exclude=function(e,t){var n=this;return t.forEach((function(t,r){var i=e.filter((function(e){return n._normalise(e.getLabel())===t}))[0];if(i){var o=e.indexOf(i);o>-1&&e.splice(o,1)}})),e},t.prototype._normalise=function(e){return e?e.toLowerCase().replace(/ /g,""):null},t.prototype._render=function(){var e=this;this._metadataGroups.length?(this._$noData.hide(),this._$metadataGroups.empty(),this._metadataGroups.forEach((function(t,n){var r=e._buildMetadataGroup(t);e._$metadataGroups.append(r);var i=r.find(".value");e._data.limit&&e._data.content&&(e._data.limitType===o.LINES?i.toggleExpandTextByLines(e._data.limit,e._data.content.less,e._data.content.more,(function(){})):e._data.limitType===o.CHARS&&i.ellipsisHtmlFixed(e._data.limit,(function(){})))}))):this._$noData.show()},t.prototype._buildMetadataGroup=function(e){var t=this._$metadataGroupTemplate.clone(),n=t.find(">.header");if(this._data.content)if(e.resource.isManifest()&&this._data.content.manifestHeader)(i=this._sanitize(this._data.content.manifestHeader))&&n.html(i);else if(e.resource.isSequence()&&this._data.content.sequenceHeader){(i=this._sanitize(this._data.content.sequenceHeader))&&n.html(i)}else if(e.resource.isRange()&&this._data.content.rangeHeader){(i=this._sanitize(this._data.content.rangeHeader))&&n.html(i)}else if(e.resource.isCanvas()&&(e.label||this._data.content.canvasHeader)){var r=e.label||this._data.content.canvasHeader;n.html(this._sanitize(r))}else if(e.resource.isAnnotation()&&this._data.content.imageHeader){var i;(i=this._sanitize(this._data.content.imageHeader))&&n.html(i)}n.text()||n.hide();for(var o=t.find(".items"),a=0;a<e.items.length;a++){var s=e.items[a],u=this._buildMetadataItem(s);o.append(u)}return t},t.prototype._buildMetadataItem=function(e){var t,n=this._$metadataItemTemplate.clone(),r=n.find(".label"),i=n.find(".values"),o=e.getLabel(),a=o,s=new RegExp("/w+:(/?/?)[^s]+/gm","i");if(this._data.content&&a&&e.isRootLevel)switch(a.toLowerCase()){case"attribution":a=this._data.content.attribution;break;case"description":a=this._data.content.description;break;case"license":a=this._data.content.license;break;case"logo":a=this._data.content.logo}if(a=this._sanitize(a),r.html(a),this._addReadingDirection(r,this._getLabelLocale(e)),n.addClass(u.Strings.toCssClass(a)),o&&"license"===o.toLowerCase()&&null!==s.exec(e.value[0].value))t=this._buildMetadataItemURIValue(e.value[0].value),i.append(t);else if(this._data.showAllLanguages&&e.value&&e.value.length>1)for(var c=0;c<e.value.length;c++){var p=e.value[c];t=this._buildMetadataItemValue(p.value,p.locale),i.append(t)}else{var f=this._getValueLocale(e),h=!1;for(c=0;c<e.value.length;c++){var p=e.value[c];f.toLowerCase()===p.locale.toLowerCase()&&(h=!0,t=this._buildMetadataItemValue(p.value,p.locale),i.append(t))}if(!h)(p=e.value[0])&&(t=this._buildMetadataItemValue(p.value,p.locale),i.append(t))}this._data.copyToClipboardEnabled&&u.Clipboard.supportsCopy()&&r.text()&&this._addCopyButton(n,r,i);var d=this;return n.on("click","a.iiif-viewer-link",(function(e){e.preventDefault();var t=$(e.target),n=t.attr("data-uv-navigate")||t.prop("href");d.fire(l.IIIF_VIEWER_LINK_CLICKED,n)})),n.on("click","[data-uv-navigate]",(function(e){e.preventDefault();var t=$(e.target).attr("data-uv-navigate")||null;t&&d.fire(l.IIIF_VIEWER_LINK_CLICKED,t)})),n},t.prototype._getLabelLocale=function(e){if(!this._data||!this._data.helper)return"";var t=this._data.helper.options.locale;if(e.label.length){var n=e.label[0].locale;if(n.toLowerCase()!==t.toLowerCase())return n}return t},t.prototype._getValueLocale=function(e){return this._data&&this._data.helper?this._data.helper.options.locale:""},t.prototype._buildMetadataItemValue=function(e,t){e=(e=this._sanitize(e)).replace("\n","<br>");var n=this._$metadataItemValueTemplate.clone();return n.html(e),n.find("a").each((function(){var e=$(this);e.hasClass("iiif-viewer-link")||e.prop("target","_blank")})),t&&this._addReadingDirection(n,t),n},t.prototype._buildMetadataItemURIValue=function(e){e=this._sanitize(e);var t=this._$metadataItemURIValueTemplate.clone();return t.prop("href",e),t.text(e),t},t.prototype._addReadingDirection=function(e,t){t=a.Utils.getInexactLocale(t),this._readCSV(this._data.rtlLanguageCodes).filter((function(e){return e===t})).length>0&&(e.prop("dir","rtl"),e.addClass("rtl"))},t.prototype._addCopyButton=function(e,t,n){var r=this._$copyTextTemplate.clone(),i=r.children();t.append(r),u.Device.isTouch()?r.show():(e.on("mouseenter",(function(){r.show()})),e.on("mouseleave",(function(){r.hide()})),r.on("mouseleave",(function(){i.hide()})));var o=this,a=n.text();r.on("click",(function(e){o._copyItemValues(r,a)}))},t.prototype._copyItemValues=function(e,t){u.Clipboard.copy(t);var n=e.find(".copiedText");n.show(),setTimeout((function(){n.hide()}),this._data.copiedMessageDuration)},t.prototype._readCSV=function(e,t){void 0===t&&(t=!0);var n=[];if(e&&(n=e.split(","),t))for(var r=0;r<n.length;r++)n[r]=this._normalise(n[r]);return n},t.prototype._sanitize=function(e){return this._data.sanitizer?this._data.sanitizer(e):null},t.prototype._resize=function(){},t}(s.BaseComponent);t.MetadataComponent=c;var l=function(){function e(){}return e.IIIF_VIEWER_LINK_CLICKED="iiifViewerLinkClicked",e}();t.Events=l},function(e,t,n){var r,i,o,a;"undefined"!=typeof self&&self,e.exports=(r=n(3),i=n(4),o=n(5),a=n(6),function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(5)),r(n(6)),r(n(7)),r(n(8)),r(n(9)),r(n(10)),r(n(11)),r(n(12)),r(n(13)),r(n(14)),r(n(15)),r(n(16)),r(n(17)),r(n(18)),r(n(19)),r(n(20)),r(n(21)),r(n(22)),r(n(23)),r(n(24)),r(n(25)),r(n(26)),r(n(27)),r(n(28)),r(n(29)),r(n(30)),r(n(31)),r(n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOOKMARKING="oa:bookmarking",e.CLASSIFYING="oa:classifying",e.COMMENTING="oa:commenting",e.DESCRIBING="oa:describing",e.EDITING="oa:editing",e.HIGHLIGHTING="oa:highlighting",e.IDENTIFYING="oa:identifying",e.LINKING="oa:linking",e.MODERATING="oa:moderating",e.PAINTING="sc:painting",e.QUESTIONING="oa:questioning",e.REPLYING="oa:replying",e.TAGGING="oa:tagging",e.TRANSCRIBING="oad:transcribing"}(t.AnnotationMotivation||(t.AnnotationMotivation={})),function(e){e.AUTO_ADVANCE="auto-advance",e.CONTINUOUS="continuous",e.FACING_PAGES="facing-pages",e.HIDDEN="hidden",e.INDIVIDUALS="individuals",e.MULTI_PART="multi-part",e.NO_NAV="no-nav",e.NON_PAGED="non-paged",e.PAGED="paged",e.REPEAT="repeat",e.SEQUENCE="sequence",e.THUMBNAIL_NAV="thumbnail-nav",e.TOGETHER="together",e.UNORDERED="unordered"}(t.Behavior||(t.Behavior={})),function(e){e.CANVAS="canvas",e.CHOICE="choice",e.CONTENT_AS_TEXT="contentastext",e.DOCUMENT="document",e.IMAGE="image",e.MOVING_IMAGE="movingimage",e.PDF="pdf",e.PHYSICAL_OBJECT="physicalobject",e.SOUND="sound",e.TEXTUALBODY="textualbody",e.VIDEO="video"}(t.ExternalResourceType||(t.ExternalResourceType={})),function(e){e.ANNOTATION="annotation",e.CANVAS="canvas",e.COLLECTION="collection",e.MANIFEST="manifest",e.RANGE="range",e.SEQUENCE="sequence"}(t.IIIFResourceType||(t.IIIFResourceType={})),function(e){e.AUDIO_MP4="audio/mp4",e.CORTO="application/corto",e.DRACO="application/draco",e.GLTF="model/gltf+json",e.JPG="image/jpeg",e.M3U8="application/vnd.apple.mpegurl",e.MP3="audio/mp3",e.MPEG_DASH="application/dash+xml",e.OBJ="text/plain",e.PDF="application/pdf",e.PLY="application/ply",e.THREEJS="application/vnd.threejs+json",e.VIDEO_MP4="video/mp4",e.WEBM="video/webm"}(t.MediaType||(t.MediaType={})),function(e){e.DOC="application/msword",e.DOCX="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.PDF="application/pdf"}(t.RenderingFormat||(t.RenderingFormat={})),function(e){e.IMAGE_0_COMPLIANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/compliance.html#level0",e.IMAGE_0_COMPLIANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/compliance.html#level1",e.IMAGE_0_COMPLIANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/compliance.html#level2",e.IMAGE_0_CONFORMANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/conformance.html#level0",e.IMAGE_0_CONFORMANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/conformance.html#level1",e.IMAGE_0_CONFORMANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/conformance.html#level2",e.IMAGE_1_COMPLIANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",e.IMAGE_1_COMPLIANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1",e.IMAGE_1_COMPLIANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",e.IMAGE_1_CONFORMANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0",e.IMAGE_1_CONFORMANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1",e.IMAGE_1_CONFORMANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2",e.IMAGE_1_LEVEL_0="http://iiif.io/api/image/1/level0.json",e.IMAGE_1_PROFILE_LEVEL_0="http://iiif.io/api/image/1/profiles/level0.json",e.IMAGE_1_LEVEL_1="http://iiif.io/api/image/1/level1.json",e.IMAGE_1_PROFILE_LEVEL_1="http://iiif.io/api/image/1/profiles/level1.json",e.IMAGE_1_LEVEL_2="http://iiif.io/api/image/1/level2.json",e.IMAGE_1_PROFILE_LEVEL_2="http://iiif.io/api/image/1/profiles/level2.json",e.IMAGE_2_LEVEL_0="http://iiif.io/api/image/2/level0.json",e.IMAGE_2_PROFILE_LEVEL_0="http://iiif.io/api/image/2/profiles/level0.json",e.IMAGE_2_LEVEL_1="http://iiif.io/api/image/2/level1.json",e.IMAGE_2_PROFILE_LEVEL_1="http://iiif.io/api/image/2/profiles/level1.json",e.IMAGE_2_LEVEL_2="http://iiif.io/api/image/2/level2.json",e.IMAGE_2_PROFILE_LEVEL_2="http://iiif.io/api/image/2/profiles/level2.json",e.AUTH_0_CLICK_THROUGH="http://iiif.io/api/auth/0/login/clickthrough",e.AUTH_0_LOGIN="http://iiif.io/api/auth/0/login",e.AUTH_0_LOGOUT="http://iiif.io/api/auth/0/logout",e.AUTH_0_RESTRICTED="http://iiif.io/api/auth/0/login/restricted",e.AUTH_0_TOKEN="http://iiif.io/api/auth/0/token",e.AUTH_1_CLICK_THROUGH="http://iiif.io/api/auth/1/clickthrough",e.AUTH_1_EXTERNAL="http://iiif.io/api/auth/1/external",e.AUTH_1_KIOSK="http://iiif.io/api/auth/1/kiosk",e.AUTH_1_LOGIN="http://iiif.io/api/auth/1/login",e.AUTH_1_LOGOUT="http://iiif.io/api/auth/1/logout",e.AUTH_1_PROBE="http://iiif.io/api/auth/1/probe",e.AUTH_1_TOKEN="http://iiif.io/api/auth/1/token",e.SEARCH_0="http://iiif.io/api/search/0/search",e.SEARCH_0_AUTO_COMPLETE="http://iiif.io/api/search/0/autocomplete",e.SEARCH_1="http://iiif.io/api/search/1/search",e.SEARCH_1_AUTO_COMPLETE="http://iiif.io/api/search/1/autocomplete",e.TRACKING_EXTENSIONS="http://universalviewer.io/tracking-extensions-profile",e.UI_EXTENSIONS="http://universalviewer.io/ui-extensions-profile",e.PRINT_EXTENSIONS="http://universalviewer.io/print-extensions-profile",e.SHARE_EXTENSIONS="http://universalviewer.io/share-extensions-profile",e.OTHER_MANIFESTATIONS="http://iiif.io/api/otherManifestations.json",e.IXIF="http://wellcomelibrary.org/ld/ixif/0/alpha.json"}(t.ServiceProfile||(t.ServiceProfile={})),function(e){e.BOTTOM_TO_TOP="bottom-to-top",e.LEFT_TO_RIGHT="left-to-right",e.RIGHT_TO_LEFT="right-to-left",e.TOP_TO_BOTTOM="top-to-bottom"}(t.ViewingDirection||(t.ViewingDirection={})),function(e){e.CONTINUOUS="continuous",e.INDIVIDUALS="individuals",e.NON_PAGED="non-paged",e.PAGED="paged",e.TOP="top"}(t.ViewingHint||(t.ViewingHint={}))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=n(32),u=n(37),c=function(){function e(){}return e.getMediaType=function(e){return(e=(e=e.toLowerCase()).split(";")[0]).trim()},e.getImageQuality=function(e){return e===a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_1_LEVEL_1||e===a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1||e===a.ServiceProfile.IMAGE_1_LEVEL_2||e===a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2?"native":"default"},e.getInexactLocale=function(e){return-1!==e.indexOf("-")?e.substr(0,e.indexOf("-")):e},e.getLocalisedValue=function(e,t){if(!Array.isArray(e))return e;for(var n=0;n<e.length;n++){var r=e[n];if(t===r["@language"])return r["@value"]}var i=t.substr(0,t.indexOf("-"));for(n=0;n<e.length;n++){var o=e[n];if(o["@language"]===i)return o["@value"]}return null},e.generateTreeNodeIds=function(t,n){var r;void 0===n&&(n=0),r=t.parentNode?t.parentNode.id+"-"+n:"0",t.id=r;for(var i=0;i<t.nodes.length;i++){var o=t.nodes[i];e.generateTreeNodeIds(o,i)}},e.normaliseType=function(e){return-1!==(e=e.toLowerCase()).indexOf(":")?e.split(":")[1]:e},e.normaliseUrl=function(e){return-1!==(e=e.substr(e.indexOf("://"))).indexOf("#")&&(e=e.split("#")[0]),e},e.normalisedUrlsMatch=function(t,n){return e.normaliseUrl(t)===e.normaliseUrl(n)},e.isImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2))},e.isLevel0ImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0))},e.isLevel1ImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1))},e.isLevel2ImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2))},e.parseManifest=function(e,t){return o.Deserialiser.parse(e,t)},e.loadManifest=function(e){return s.request(e,{credentials:"same-origin"})},e.loadExternalResourcesAuth1=function(t,n,r,i,o,a,s,u){return new Promise((function(c,l){var p=t.map((function(t){return e.loadExternalResourceAuth1(t,n,r,i,o,a,s,u)}));Promise.all(p).then((function(){c(t)})).catch((function(e){l(e)}))}))},e.loadExternalResourceAuth1=function(t,n,o,a,s,c,l,p){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return[4,a(t)];case 1:return(r=i.sent())?[4,t.getData(r)]:[3,6];case 2:return i.sent(),t.status!==u.OK?[3,3]:[2,t];case 3:return[4,e.doAuthChain(t,n,o,s,c,l,p)];case 4:i.sent(),i.label=5;case 5:if(t.status===u.OK||t.status===u.MOVED_TEMPORARILY)return[2,t];throw e.createAuthorizationFailedError();case 6:return[4,t.getData()];case 7:return i.sent(),t.status!==u.MOVED_TEMPORARILY&&t.status!==u.UNAUTHORIZED?[3,9]:[4,e.doAuthChain(t,n,o,s,c,l,p)];case 8:i.sent(),i.label=9;case 9:if(t.status===u.OK||t.status===u.MOVED_TEMPORARILY)return[2,t];throw e.createAuthorizationFailedError()}}))}))},e.doAuthChain=function(t,n,o,a,s,c,l){return r(this,void 0,void 0,(function(){var r,p,f,h,d,_,g,v;return i(this,(function(i){switch(i.label){case 0:return t.isAccessControlled()?((r=t.externalService)&&(r.options=t.options),(p=t.kioskService)&&(p.options=t.options),(f=t.clickThroughService)&&(f.options=t.options),(h=t.loginService)&&(h.options=t.options),t.isResponseHandled||t.status!==u.MOVED_TEMPORARILY?[3,2]:[4,c(t)]):[2,t];case 1:return i.sent(),[2,t];case 2:return d=null,_=null,(d=r)?(_=d,[4,e.attemptResourceWithToken(t,o,d)]):[3,4];case 3:return i.sent(),[2,t];case 4:return(d=p)?(_=d,(g=n(d))?[4,a(g)]:[3,7]):[3,7];case 5:return i.sent(),[4,e.attemptResourceWithToken(t,o,d)];case 6:return i.sent(),[2,t];case 7:return(d=f)?(_=d,[4,s(t,d)]):[3,11];case 8:return(v=i.sent())?[4,a(v)]:[3,11];case 9:return i.sent(),[4,e.attemptResourceWithToken(t,o,d)];case 10:return i.sent(),[2,t];case 11:return(d=h)?(_=d,[4,s(t,d)]):[3,15];case 12:return(v=i.sent())?[4,a(v)]:[3,15];case 13:return i.sent(),[4,e.attemptResourceWithToken(t,o,d)];case 14:return i.sent(),[2,t];case 15:return _&&l(t,_),[2]}}))}))},e.attemptResourceWithToken=function(e,t,n){return r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return(r=n.getService(a.ServiceProfile.AUTH_1_TOKEN))?[4,t(e,r)]:[3,3];case 1:return(o=i.sent())&&o.accessToken?[4,e.getData(o)]:[3,3];case 2:return i.sent(),[2,e];case 3:return[2]}}))}))},e.loadExternalResourcesAuth09=function(t,n,r,i,o,a,s,u,c,l){return new Promise((function(p,f){var h=t.map((function(t){return e.loadExternalResourceAuth09(t,n,r,i,o,a,s,u,c,l)}));Promise.all(h).then((function(){p(t)})).catch((function(e){f(e)}))}))},e.loadExternalResourceAuth09=function(t,n,r,i,o,a,s,c,l,p){return new Promise((function(f,h){p&&p.pessimisticAccessControl?t.getData().then((function(){t.isAccessControlled()?t.clickThroughService?(f(r(t)),f(i(t))):o(t).then((function(){a(t,!0).then((function(n){t.getData(n).then((function(){f(l(t))})).catch((function(t){h(e.createInternalServerError(t))}))})).catch((function(t){h(e.createInternalServerError(t))}))})).catch((function(t){h(e.createInternalServerError(t))})):f(t)})).catch((function(t){h(e.createInternalServerError(t))})):c(t,n).then((function(p){p?t.getData(p).then((function(){t.status===u.OK?f(l(t)):e.authorize(t,n,r,i,o,a,s,c).then((function(){f(l(t))})).catch((function(t){h(e.createAuthorizationFailedError())}))})).catch((function(t){h(e.createAuthorizationFailedError())})):e.authorize(t,n,r,i,o,a,s,c).then((function(){f(l(t))})).catch((function(t){h(e.createAuthorizationFailedError())}))})).catch((function(t){h(e.createAuthorizationFailedError())}))}))},e.createError=function(e,t){var n=new Error;return n.message=t,n.name=String(e),n},e.createAuthorizationFailedError=function(){return e.createError(o.StatusCode.AUTHORIZATION_FAILED,"Authorization failed")},e.createRestrictedError=function(){return e.createError(o.StatusCode.RESTRICTED,"Restricted")},e.createInternalServerError=function(t){return e.createError(o.StatusCode.INTERNAL_SERVER_ERROR,t)},e.authorize=function(t,n,r,i,o,a,s,c){return new Promise((function(l,p){t.getData().then((function(){t.isAccessControlled()?c(t,n).then((function(c){c?t.getData(c).then((function(){t.status===u.OK?l(t):e.showAuthInteraction(t,n,r,i,o,a,s,l,p)})).catch((function(t){p(e.createInternalServerError(t))})):a(t,!1).then((function(c){c?s(t,c,n).then((function(){t.getData(c).then((function(){t.status===u.OK?l(t):e.showAuthInteraction(t,n,r,i,o,a,s,l,p)})).catch((function(t){p(e.createInternalServerError(t))}))})).catch((function(t){p(e.createInternalServerError(t))})):e.showAuthInteraction(t,n,r,i,o,a,s,l,p)}))})).catch((function(t){p(e.createInternalServerError(t))})):l(t)}))}))},e.showAuthInteraction=function(t,n,r,i,o,a,s,c,l){t.status!==u.MOVED_TEMPORARILY||t.isResponseHandled?t.clickThroughService&&!t.isResponseHandled?r(t).then((function(){a(t,!0).then((function(r){s(t,r,n).then((function(){t.getData(r).then((function(){c(t)})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})):o(t).then((function(){a(t,!0).then((function(r){s(t,r,n).then((function(){t.getData(r).then((function(){c(t)})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})):c(t)},e.getService=function(e,t){for(var n=this.getServices(e),r=0;r<n.length;r++){var i=n[r];if(i.getProfile()===t)return i}return null},e.getResourceById=function(t,n){return e.traverseAndFind(t.__jsonld,"@id",n)},e.traverseAndFind=function(t,n,r){if(t.hasOwnProperty(n)&&t[n]===r)return t;for(var i=0;i<Object.keys(t).length;i++)if("object"==typeof t[Object.keys(t)[i]]){var o=e.traverseAndFind(t[Object.keys(t)[i]],n,r);if(null!=o)return o}},e.getServices=function(e){var t,n=[];if(!(t=e.__jsonld?e.__jsonld.service:e.service))return n;Array.isArray(t)||(t=[t]);for(var r=0;r<t.length;r++){var i=t[r];if("string"==typeof i){var a=this.getResourceById(e.options.resource,i);a&&n.push(new o.Service(a.__jsonld||a,e.options))}else n.push(new o.Service(i,e.options))}return n},e.getTemporalComponent=function(e){var t=/t=([^&]+)/g.exec(e),n=null;return t&&t[1]&&(n=t[1].split(",")),n},e}();t.Utils=c},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(0));var r=n(2);t.loadManifest=function(e){return r.Utils.loadManifest(e)},t.parseManifest=function(e,t){return r.Utils.parseManifest(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.__jsonld=e,this.context=this.getProperty("context"),this.id=this.getProperty("id")}return e.prototype.getProperty=function(e){var t=null;return this.__jsonld&&((t=this.__jsonld[e])||(t=this.__jsonld["@"+e])),t},e}();t.JSONLDResource=r},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.options=n,r}return i(t,e),t.prototype.getIIIFResourceType=function(){return o.Utils.normaliseType(this.getProperty("type"))},t.prototype.getLabel=function(){var e=this.getProperty("label");return e?o.LanguageMap.parse(e,this.options.locale):[]},t.prototype.getDefaultLabel=function(){return o.LanguageMap.getValue(this.getLabel())},t.prototype.getMetadata=function(){var e=this.getProperty("metadata"),t=[];if(!e)return t;for(var n=0;n<e.length;n++){var r=e[n],i=new o.LabelValuePair(this.options.locale);i.parse(r),t.push(i)}return t},t.prototype.getRendering=function(e){for(var t=this.getRenderings(),n=0;n<t.length;n++){var r=t[n];if(r.getFormat()===e)return r}return null},t.prototype.getRenderings=function(){var e,t=[];if(!(e=this.__jsonld?this.__jsonld.rendering:this.rendering))return t;Array.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++){var r=e[n];t.push(new o.Rendering(r,this.options))}return t},t.prototype.getService=function(e){return o.Utils.getService(this,e)},t.prototype.getServices=function(){return o.Utils.getServices(this)},t.prototype.getThumbnail=function(){var e=this.getProperty("thumbnail");return Array.isArray(e)&&(e=e[0]),e?new o.Thumbnail(e,this.options):null},t.prototype.isAnnotation=function(){return this.getIIIFResourceType()===a.IIIFResourceType.ANNOTATION},t.prototype.isCanvas=function(){return this.getIIIFResourceType()===a.IIIFResourceType.CANVAS},t.prototype.isCollection=function(){return this.getIIIFResourceType()===a.IIIFResourceType.COLLECTION},t.prototype.isManifest=function(){return this.getIIIFResourceType()===a.IIIFResourceType.MANIFEST},t.prototype.isRange=function(){return this.getIIIFResourceType()===a.IIIFResourceType.RANGE},t.prototype.isSequence=function(){return this.getIIIFResourceType()===a.IIIFResourceType.SEQUENCE},t}(o.JSONLDResource);t.ManifestResource=s},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getFormat=function(){var e=this.getProperty("format");return e?e.toLowerCase():null},t.prototype.getResources=function(){var e=[];if(!this.__jsonld.resources)return e;for(var t=0;t<this.__jsonld.resources.length;t++){var n=this.__jsonld.resources[t],r=new o.Annotation(n,this.options);e.push(r)}return e},t.prototype.getType=function(){var e=this.getProperty("type");return e?o.Utils.normaliseType(e):null},t.prototype.getWidth=function(){return this.getProperty("width")},t.prototype.getHeight=function(){return this.getProperty("height")},t.prototype.getMaxWidth=function(){return this.getProperty("maxWidth")},t.prototype.getMaxHeight=function(){return this.getProperty("maxHeight")?null:this.getMaxWidth()},t}(o.ManifestResource);t.Resource=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.index=-1,r.isLoaded=!1;var i={defaultLabel:"-",locale:"en-GB",resource:r,pessimisticAccessControl:!1};return r.options=Object.assign(i,n),r}return i(t,e),t.prototype.getAttribution=function(){var e=this.getProperty("attribution");return e?o.LanguageMap.parse(e,this.options.locale):[]},t.prototype.getDescription=function(){var e=this.getProperty("description");return e?o.LanguageMap.parse(e,this.options.locale):[]},t.prototype.getIIIFResourceType=function(){return o.Utils.normaliseType(this.getProperty("type"))},t.prototype.getLogo=function(){var e=this.getProperty("logo");return e?"string"==typeof e?e:(Array.isArray(e)&&e.length&&(e=e[0]),e["@id"]||e.id):null},t.prototype.getLicense=function(){return o.Utils.getLocalisedValue(this.getProperty("license"),this.options.locale)},t.prototype.getNavDate=function(){return new Date(this.getProperty("navDate"))},t.prototype.getRelated=function(){return this.getProperty("related")},t.prototype.getSeeAlso=function(){return this.getProperty("seeAlso")},t.prototype.getTrackingLabel=function(){var e=this.getService(a.ServiceProfile.TRACKING_EXTENSIONS);return e?e.getProperty("trackingLabel"):""},t.prototype.getDefaultTree=function(){return this.defaultTree=new o.TreeNode("root"),this.defaultTree.data=this,this.defaultTree},t.prototype.getRequiredStatement=function(){var e=null,t=this.getProperty("requiredStatement");if(t)(e=new o.LabelValuePair(this.options.locale)).parse(t);else{var n=this.getAttribution();n&&((e=new o.LabelValuePair(this.options.locale)).value=n)}return e},t.prototype.isCollection=function(){return this.getIIIFResourceType()===a.IIIFResourceType.COLLECTION},t.prototype.isManifest=function(){return this.getIIIFResourceType()===a.IIIFResourceType.MANIFEST},t.prototype.load=function(){var e=this;return new Promise((function(t){if(e.isLoaded)t(e);else{var n=e.options;n.navDate=e.getNavDate();var r=e.__jsonld.id;r||(r=e.__jsonld["@id"]),o.Utils.loadManifest(r).then((function(r){e.parentLabel=o.LanguageMap.getValue(e.getLabel(),n.locale);var i=o.Deserialiser.parse(r,n);(e=Object.assign(e,i)).index=n.index,t(e)}))}}))},t}(o.ManifestResource);t.IIIFResource=s},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getBody=function(){var e=[],t=this.getProperty("body");if(t)if(Array.isArray(t))for(var n=0;n<t.length;n++)if((a=t[n]).items)for(var r=0;r<a.items.length;r++){var i=a.items[r];e.push(new o.AnnotationBody(i,this.options))}else e.push(new o.AnnotationBody(a,this.options));else if(t.items)for(n=0;n<t.items.length;n++){var a=t.items[n];e.push(new o.AnnotationBody(a,this.options))}else e.push(new o.AnnotationBody(t,this.options));return e},t.prototype.getMotivation=function(){return this.getProperty("motivation")||null},t.prototype.getOn=function(){return this.getProperty("on")},t.prototype.getTarget=function(){return this.getProperty("target")},t.prototype.getResource=function(){return new o.Resource(this.getProperty("resource"),this.options)},t}(o.ManifestResource);t.Annotation=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getFormat=function(){var e=this.getProperty("format");return e?o.Utils.getMediaType(e):null},t.prototype.getType=function(){return this.getProperty("type")?o.Utils.normaliseType(this.getProperty("type")):null},t.prototype.getWidth=function(){return this.getProperty("width")},t.prototype.getHeight=function(){return this.getProperty("height")},t}(o.ManifestResource);t.AnnotationBody=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n,r){var i=e.call(this,n)||this;return i.label=t,i.options=r,i}return i(t,e),t.prototype.getIIIFResourceType=function(){return o.Utils.normaliseType(this.getProperty("type"))},t.prototype.getLabel=function(){return this.label},t.prototype.getResources=function(){var e=this;return this.getProperty("resources").map((function(t){return new o.Annotation(t,e.options)}))},t.prototype.load=function(){var e=this;return new Promise((function(t,n){if(e.isLoaded)t(e);else{var r=e.__jsonld.id;r||(r=e.__jsonld["@id"]),o.Utils.loadManifest(r).then((function(n){e.__jsonld=n,e.context=e.getProperty("context"),e.id=e.getProperty("id"),e.isLoaded=!0,t(e)})).catch(n)}}))},t}(o.JSONLDResource);t.AnnotationList=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getItems=function(){return this.getProperty("items")},t}(n(0).ManifestResource);t.AnnotationPage=o},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getCanonicalImageUri=function(e){var t,n=null,r="default",i=e;if(this.externalResource&&this.externalResource.data&&this.externalResource.data["@id"])n=this.externalResource.data["@id"],i||(i=this.externalResource.data.width),this.externalResource.data["@context"]&&(this.externalResource.data["@context"].indexOf("/1.0/context.json")>-1||this.externalResource.data["@context"].indexOf("/1.1/context.json")>-1||this.externalResource.data["@context"].indexOf("/1/context.json")>-1)&&(r="native");else{var a=this.getImages();if(a&&a.length){var s=a[0].getResource(),u=s.getServices();if(i||(i=s.getWidth()),u.length){var c=u[0];n=c.id,r=o.Utils.getImageQuality(c.getProfile())}else if(i===s.getWidth())return s.id}if(!n){var l=this.getProperty("thumbnail");if(l){if("string"==typeof l)return l;if(l["@id"])return l["@id"];if(l.length)return l[0].id}}}return t=i+",",n&&n.endsWith("/")&&(n=n.substr(0,n.length-1)),[n,"full",t,0,r+".jpg"].join("/")},t.prototype.getMaxDimensions=function(){var e,t=null;return this.externalResource&&this.externalResource.data&&this.externalResource.data.profile&&(e=this.externalResource.data.profile,Array.isArray(e)&&(e=e.filter((function(e){return e.maxWidth}))[0])&&(t=new o.Size(e.maxWidth,e.maxHeight?e.maxHeight:e.maxWidth))),t},t.prototype.getContent=function(){var e=[],t=this.__jsonld.items||this.__jsonld.content;if(!t)return e;var n=null;if(t.length&&(n=new o.AnnotationPage(t[0],this.options)),!n)return e;for(var r=n.getItems(),i=0;i<r.length;i++){var a=r[i],s=new o.Annotation(a,this.options);e.push(s)}return e},t.prototype.getDuration=function(){return this.getProperty("duration")},t.prototype.getImages=function(){var e=[];if(!this.__jsonld.images)return e;for(var t=0;t<this.__jsonld.images.length;t++){var n=this.__jsonld.images[t],r=new o.Annotation(n,this.options);e.push(r)}return e},t.prototype.getIndex=function(){return this.getProperty("index")},t.prototype.getOtherContent=function(){var e=this,t=(Array.isArray(this.getProperty("otherContent"))?this.getProperty("otherContent"):[this.getProperty("otherContent")]).filter((function(e){return e&&"string"==typeof(t=e["@type"])&&t.toLowerCase()==t.toLowerCase();var t})).map((function(t,n){return new o.AnnotationList(t.label||"Annotation list "+n,t,e.options)})).map((function(e){return e.load()}));return Promise.all(t)},t.prototype.getWidth=function(){return this.getProperty("width")},t.prototype.getHeight=function(){return this.getProperty("height")},t}(o.Resource);t.Canvas=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(0),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.items=[],r._collections=null,r._manifests=null,t.__collection=r,r}return i(t,e),t.prototype.getCollections=function(){return this._collections?this._collections:this._collections=this.items.filter((function(e){return e.isCollection()}))},t.prototype.getManifests=function(){return this._manifests?this._manifests:this._manifests=this.items.filter((function(e){return e.isManifest()}))},t.prototype.getCollectionByIndex=function(e){for(var t,n=this.getCollections(),r=0;r<n.length;r++){var i=n[r];i.index===e&&(t=i)}if(t)return t.options.index=e,t.load();throw new Error("Collection index not found")},t.prototype.getManifestByIndex=function(e){for(var t,n=this.getManifests(),r=0;r<n.length;r++){var i=n[r];i.index===e&&(t=i)}if(t)return t.options.index=e,t.load();throw new Error("Manifest index not found")},t.prototype.getTotalCollections=function(){return this.getCollections().length},t.prototype.getTotalManifests=function(){return this.getManifests().length},t.prototype.getTotalItems=function(){return this.items.length},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")?this.getProperty("viewingDirection"):o.ViewingDirection.LEFT_TO_RIGHT},t.prototype.getDefaultTree=function(){return e.prototype.getDefaultTree.call(this),this.defaultTree.data.type=a.Utils.normaliseType(a.TreeNodeType.COLLECTION),this._parseManifests(this),this._parseCollections(this),a.Utils.generateTreeNodeIds(this.defaultTree),this.defaultTree},t.prototype._parseManifests=function(e){if(e.getManifests()&&e.getManifests().length)for(var t=0;t<e.getManifests().length;t++){var n=e.getManifests()[t],r=n.getDefaultTree();r.label=n.parentLabel||a.LanguageMap.getValue(n.getLabel(),this.options.locale)||"manifest "+(t+1),r.navDate=n.getNavDate(),r.data.id=n.id,r.data.type=a.Utils.normaliseType(a.TreeNodeType.MANIFEST),e.defaultTree.addNode(r)}},t.prototype._parseCollections=function(e){if(e.getCollections()&&e.getCollections().length)for(var t=0;t<e.getCollections().length;t++){var n=e.getCollections()[t],r=n.getDefaultTree();r.label=n.parentLabel||a.LanguageMap.getValue(n.getLabel(),this.options.locale)||"collection "+(t+1),r.navDate=n.getNavDate(),r.data.id=n.id,r.data.type=a.Utils.normaliseType(a.TreeNodeType.COLLECTION),e.defaultTree.addNode(r)}},t}(a.IIIFResource);t.Collection=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.start=e,this.end=t}return e.prototype.getLength=function(){return this.end-this.start},e}();t.Duration=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e){this.defaultLocale=e}return e.prototype.parse=function(e){this.resource=e,this.label=r.LanguageMap.parse(this.resource.label,this.defaultLocale),this.value=r.LanguageMap.parse(this.resource.value,this.defaultLocale)},e.prototype.getLabel=function(){return this.label?r.LanguageMap.getValue(this.label,this.defaultLocale):null},e.prototype.setLabel=function(e){var t=this;if(this.label&&this.label.length){var n=this.label.filter((function(e){return e.locale===t.defaultLocale||e.locale===r.Utils.getInexactLocale(t.defaultLocale)}))[0];n&&(n.value=e)}},e.prototype.getValue=function(){if(this.value){var e=this.defaultLocale;return this.label&&this.label.length&&this.label[0].locale&&(e=this.label[0].locale),r.LanguageMap.getValue(this.value,e)}return null},e.prototype.setValue=function(e){var t=this;if(this.value&&this.value.length){var n=this.value.filter((function(e){return e.locale===t.defaultLocale||e.locale===r.Utils.getInexactLocale(t.defaultLocale)}))[0];n&&(n.value=e)}},e}();t.LabelValuePair=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Language=function(e,t){Array.isArray(e)?1===e.length?this.value=e[0]:this.value=e.join("<br/>"):this.value=e,this.locale=t}},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.parse=function(e,t){var n,r=[];if(!e)return r;if(Array.isArray(e))for(var i=0;i<e.length;i++){var a=e[i];n="string"==typeof a?new o.Language(a,t):new o.Language(a["@value"],a["@language"]||t),r.push(n)}else{if("string"==typeof e)return n=new o.Language(e,t),r.push(n),r;e["@value"]?(n=new o.Language(e["@value"],e["@language"]||t),r.push(n)):Object.keys(e).forEach((function(t){if(!e[t].length)throw new Error("language must have a value");n=new o.Language(e[t],t),r.push(n)}))}return r},t.getValue=function(e,t){if(e.length){if(t){var n=e.filter((function(e){return e.locale===t||o.Utils.getInexactLocale(e.locale)===o.Utils.getInexactLocale(t)}))[0];if(n)return n.value}return e[0].value}return null},t}(Array);t.LanguageMap=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(0),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;if(r.index=0,r._allRanges=null,r.items=[],r._topRanges=[],r.__jsonld.structures&&r.__jsonld.structures.length)for(var i=r._getTopRanges(),o=0;o<i.length;o++){var a=i[o];r._parseRanges(a,String(o))}return r}return i(t,e),t.prototype.getPosterCanvas=function(){var e=this.getProperty("posterCanvas");return e&&(e=new a.Canvas(e,this.options)),e},t.prototype.getBehavior=function(){var e=this.getProperty("behavior");return Array.isArray(e)&&(e=e[0]),e||null},t.prototype.getDefaultTree=function(){if(e.prototype.getDefaultTree.call(this),this.defaultTree.data.type=a.Utils.normaliseType(a.TreeNodeType.MANIFEST),!this.isLoaded)return this.defaultTree;var t=this.getTopRanges();return t.length&&t[0].getTree(this.defaultTree),a.Utils.generateTreeNodeIds(this.defaultTree),this.defaultTree},t.prototype._getTopRanges=function(){var e=[];if(this.__jsonld.structures&&this.__jsonld.structures.length){for(var t=0;t<this.__jsonld.structures.length;t++){var n=this.__jsonld.structures[t];n.viewingHint===o.ViewingHint.TOP&&e.push(n)}if(!e.length){var r={};r.ranges=this.__jsonld.structures,e.push(r)}}return e},t.prototype.getTopRanges=function(){return this._topRanges},t.prototype._getRangeById=function(e){if(this.__jsonld.structures&&this.__jsonld.structures.length)for(var t=0;t<this.__jsonld.structures.length;t++){var n=this.__jsonld.structures[t];if(n["@id"]===e||n.id===e)return n}return null},t.prototype._parseRanges=function(e,t,n){var r,i=null;if("string"==typeof e&&(i=e,e=this._getRangeById(i)),e){(r=new a.Range(e,this.options)).parentRange=n,r.path=t,n?n.items.push(r):this._topRanges.push(r);var o=e.items||e.members;if(o)for(var s=0;s<o.length;s++){var u=o[s];if(u["@type"]&&"sc:range"===u["@type"].toLowerCase()||u.type&&"range"===u.type.toLowerCase())this._parseRanges(u,t+"/"+s,r);else if(u["@type"]&&"sc:canvas"===u["@type"].toLowerCase()||u.type&&"canvas"===u.type.toLowerCase()){r.canvases||(r.canvases=[]);var c=u.id||u["@id"];r.canvases.push(c)}}else if(e.ranges)for(s=0;s<e.ranges.length;s++)this._parseRanges(e.ranges[s],t+"/"+s,r)}else console.warn("Range:",i,"does not exist")},t.prototype.getAllRanges=function(){if(null!=this._allRanges)return this._allRanges;this._allRanges=[];for(var e=this.getTopRanges(),t=function(t){var r=e[t];r.id&&n._allRanges.push(r);var i=function(e,t){e.add(t);var n=t.getRanges();return n.length?n.reduce(i,e):e},o=Array.from(r.getRanges().reduce(i,new Set));n._allRanges=n._allRanges.concat(o)},n=this,r=0;r<e.length;r++)t(r);return this._allRanges},t.prototype.getRangeById=function(e){for(var t=this.getAllRanges(),n=0;n<t.length;n++){var r=t[n];if(r.id===e)return r}return null},t.prototype.getRangeByPath=function(e){for(var t=this.getAllRanges(),n=0;n<t.length;n++){var r=t[n];if(r.path===e)return r}return null},t.prototype.getSequences=function(){if(this.items.length)return this.items;var e=this.__jsonld.mediaSequences||this.__jsonld.sequences;if(e)for(var t=0;t<e.length;t++){var n=e[t],r=new a.Sequence(n,this.options);this.items.push(r)}else this.__jsonld.items&&(r=new a.Sequence(this.__jsonld.items,this.options),this.items.push(r));return this.items},t.prototype.getSequenceByIndex=function(e){return this.getSequences()[e]},t.prototype.getTotalSequences=function(){return this.getSequences().length},t.prototype.getManifestType=function(){var e=this.getService(o.ServiceProfile.UI_EXTENSIONS);return e?e.getProperty("manifestType"):a.ManifestType.EMPTY},t.prototype.isMultiSequence=function(){return this.getTotalSequences()>1},t.prototype.isPagingEnabled=function(){var e=this.getViewingHint();if(e)return e===o.ViewingHint.PAGED;var t=this.getBehavior();return!!t&&t===o.Behavior.PAGED},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")},t.prototype.getViewingHint=function(){return this.getProperty("viewingHint")},t}(a.IIIFResource);t.Manifest=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.EMPTY="",e.MANUSCRIPT="manuscript",e.MONOGRAPH="monograph"}(t.ManifestType||(t.ManifestType={}))},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._ranges=null,r.canvases=null,r.items=[],r}return i(t,e),t.prototype.getCanvasIds=function(){return this.__jsonld.canvases?this.__jsonld.canvases:this.canvases?this.canvases:[]},t.prototype.getDuration=function(){var e,t;if(this.canvases&&this.canvases.length)for(var n=0;n<this.canvases.length;n++){var r=this.canvases[n],i=o.Utils.getTemporalComponent(r);i&&i.length>1&&(0===n&&(e=Number(i[0])),n===this.canvases.length-1&&(t=Number(i[1])))}else{var a=this.getRanges();for(n=0;n<a.length;n++){var s=a[n].getDuration();s&&(0===n&&(e=s.start),n===a.length-1&&(t=s.end))}}if(void 0!==e&&void 0!==t)return new o.Duration(e,t)},t.prototype.getRanges=function(){return this._ranges?this._ranges:this._ranges=this.items.filter((function(e){return e.isRange()}))},t.prototype.getBehavior=function(){var e=this.getProperty("behavior");return Array.isArray(e)&&(e=e[0]),e||null},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")},t.prototype.getViewingHint=function(){return this.getProperty("viewingHint")},t.prototype.getTree=function(e){e.data=this,this.treeNode=e;var t=this.getRanges();if(t&&t.length)for(var n=0;n<t.length;n++){var r=t[n],i=new o.TreeNode;e.addNode(i),this._parseTreeNode(i,r)}return o.Utils.generateTreeNodeIds(e),e},t.prototype.spansTime=function(e){var t=this.getDuration();return!!(t&&e>=t.start&&e<=t.end)},t.prototype._parseTreeNode=function(e,t){e.label=o.LanguageMap.getValue(t.getLabel(),this.options.locale),e.data=t,e.data.type=o.Utils.normaliseType(o.TreeNodeType.RANGE),t.treeNode=e;var n=t.getRanges();if(n&&n.length)for(var r=0;r<n.length;r++){var i=n[r];if(i.getBehavior()!==a.Behavior.NO_NAV){var s=new o.TreeNode;e.addNode(s),this._parseTreeNode(s,i)}}},t}(o.ManifestResource);t.Range=s},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getFormat=function(){return this.getProperty("format")},t}(n(0).ManifestResource);t.Rendering=o},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(0),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.items=[],r._thumbnails=null,r}return i(t,e),t.prototype.getCanvases=function(){if(this.items.length)return this.items;var e=this.__jsonld.canvases||this.__jsonld.elements;if(e)for(var t=0;t<e.length;t++){var n=e[t];(r=new a.Canvas(n,this.options)).index=t,this.items.push(r)}else if(this.__jsonld)for(t=0;t<this.__jsonld.length;t++){var r;n=this.__jsonld[t],(r=new a.Canvas(n,this.options)).index=t,this.items.push(r)}return this.items},t.prototype.getCanvasById=function(e){for(var t=0;t<this.getTotalCanvases();t++){var n=this.getCanvasByIndex(t),r=a.Utils.normaliseUrl(n.id);if(a.Utils.normaliseUrl(e)===r)return n}return null},t.prototype.getCanvasByIndex=function(e){return this.getCanvases()[e]},t.prototype.getCanvasIndexById=function(e){for(var t=0;t<this.getTotalCanvases();t++)if(this.getCanvasByIndex(t).id===e)return t;return null},t.prototype.getCanvasIndexByLabel=function(e,t){e=e.trim(),isNaN(e)||(e=parseInt(e,10).toString(),t&&(e+="r"));for(var n,r,i,o=/(\d*)\D+(\d*)/,s=0;s<this.getTotalCanvases();s++){var u=this.getCanvasByIndex(s);if(a.LanguageMap.getValue(u.getLabel(),this.options.locale)===e)return s;if((n=o.exec(e))&&(r=n[1],(i=n[2])&&new RegExp("^"+r+"\\D+"+i+"$").test(u.getLabel().toString())))return s}return-1},t.prototype.getLastCanvasLabel=function(e){for(var t=this.getTotalCanvases()-1;t>=0;t--){var n=this.getCanvasByIndex(t),r=a.LanguageMap.getValue(n.getLabel(),this.options.locale);if(e){if(/^[a-zA-Z0-9]*$/.test(r))return r}else if(r)return r}return this.options.defaultLabel},t.prototype.getLastPageIndex=function(){return this.getTotalCanvases()-1},t.prototype.getNextPageIndex=function(e,t){var n;if(t){var r=this.getPagedIndices(e),i=this.getViewingDirection();n=i&&i===o.ViewingDirection.RIGHT_TO_LEFT?r[0]+1:r[r.length-1]+1}else n=e+1;return n>this.getLastPageIndex()?-1:n},t.prototype.getPagedIndices=function(e,t){var n=[];if(t){n=this.isFirstCanvas(e)||this.isLastCanvas(e)?[e]:e%2?[e,e+1]:[e-1,e];var r=this.getViewingDirection();r&&r===o.ViewingDirection.RIGHT_TO_LEFT&&(n=n.reverse())}else n.push(e);return n},t.prototype.getPrevPageIndex=function(e,t){var n;if(t){var r=this.getPagedIndices(e),i=this.getViewingDirection();n=i&&i===o.ViewingDirection.RIGHT_TO_LEFT?r[r.length-1]-1:r[0]-1}else n=e-1;return n},t.prototype.getStartCanvasIndex=function(){var e=this.getStartCanvas();if(e)for(var t=0;t<this.getTotalCanvases();t++)if(this.getCanvasByIndex(t).id===e)return t;return 0},t.prototype.getThumbs=function(e,t){for(var n=[],r=this.getTotalCanvases(),i=0;i<r;i++){var o=this.getCanvasByIndex(i),s=new a.Thumb(e,o);n.push(s)}return n},t.prototype.getThumbnails=function(){if(null!=this._thumbnails)return this._thumbnails;this._thumbnails=[];for(var e=this.getCanvases(),t=0;t<e.length;t++){var n=e[t].getThumbnail();n&&this._thumbnails.push(n)}return this._thumbnails},t.prototype.getStartCanvas=function(){return this.getProperty("startCanvas")},t.prototype.getTotalCanvases=function(){return this.getCanvases().length},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")?this.getProperty("viewingDirection"):this.options.resource.getViewingDirection?this.options.resource.getViewingDirection():null},t.prototype.getViewingHint=function(){return this.getProperty("viewingHint")},t.prototype.isCanvasIndexOutOfRange=function(e){return e>this.getTotalCanvases()-1},t.prototype.isFirstCanvas=function(e){return 0===e},t.prototype.isLastCanvas=function(e){return e===this.getTotalCanvases()-1},t.prototype.isMultiCanvas=function(){return this.getTotalCanvases()>1},t.prototype.isPagingEnabled=function(){var e=this.getViewingHint();return!!e&&e===o.ViewingHint.PAGED},t.prototype.isTotalCanvasesEven=function(){return this.getTotalCanvases()%2==0},t}(a.ManifestResource);t.Sequence=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e.parse=function(e,t){return"string"==typeof e&&(e=JSON.parse(e)),this.parseJson(e,t)},e.parseJson=function(e,t){var n;if(t&&t.navDate&&!isNaN(t.navDate.getTime())&&(e.navDate=t.navDate.toString()),e["@type"])switch(e["@type"]){case"sc:Collection":n=this.parseCollection(e,t);break;case"sc:Manifest":n=this.parseManifest(e,t);break;default:return null}else switch(e.type){case"Collection":n=this.parseCollection(e,t);break;case"Manifest":n=this.parseManifest(e,t);break;default:return null}return n.isLoaded=!0,n},e.parseCollection=function(e,t){var n=new r.Collection(e,t);return t?(n.index=t.index||0,t.resource&&(n.parentCollection=t.resource.parentCollection)):n.index=0,this.parseCollections(n,t),this.parseManifests(n,t),this.parseItems(n,t),n},e.parseCollections=function(e,t){var n;if(e.__jsonld.collections?n=e.__jsonld.collections:e.__jsonld.items&&(n=e.__jsonld.items.filter((function(e){return"collection"===e.type.toLowerCase()}))),n)for(var r=0;r<n.length;r++){t&&(t.index=r);var i=this.parseCollection(n[r],t);i.index=r,i.parentCollection=e,e.items.push(i)}},e.parseManifest=function(e,t){return new r.Manifest(e,t)},e.parseManifests=function(e,t){var n;if(e.__jsonld.manifests?n=e.__jsonld.manifests:e.__jsonld.items&&(n=e.__jsonld.items.filter((function(e){return"manifest"===e.type.toLowerCase()}))),n)for(var r=0;r<n.length;r++){var i=this.parseManifest(n[r],t);i.index=r,i.parentCollection=e,e.items.push(i)}},e.parseItem=function(e,t){if(e["@type"]){if("sc:manifest"===e["@type"].toLowerCase())return this.parseManifest(e,t);if("sc:collection"===e["@type"].toLowerCase())return this.parseCollection(e,t)}else if(e.type){if("manifest"===e.type.toLowerCase())return this.parseManifest(e,t);if("collection"===e.type.toLowerCase())return this.parseCollection(e,t)}return null},e.parseItems=function(e,t){var n=e.__jsonld.members||e.__jsonld.items;if(n)for(var r=function(r){t&&(t.index=r);var o=i.parseItem(n[r],t);return o?e.items.filter((function(e){return e.id===o.id}))[0]?"continue":(o.index=r,o.parentCollection=e,void e.items.push(o)):{value:void 0}},i=this,o=0;o<n.length;o++){var a=r(o);if("object"==typeof a)return a.value}},e}();t.Deserialiser=i},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getProfile=function(){var e=this.getProperty("profile");return e||(e=this.getProperty("dcterms:conformsTo")),Array.isArray(e)?e[0]:e},t.prototype.getConfirmLabel=function(){return o.Utils.getLocalisedValue(this.getProperty("confirmLabel"),this.options.locale)},t.prototype.getDescription=function(){return o.Utils.getLocalisedValue(this.getProperty("description"),this.options.locale)},t.prototype.getFailureDescription=function(){return o.Utils.getLocalisedValue(this.getProperty("failureDescription"),this.options.locale)},t.prototype.getFailureHeader=function(){return o.Utils.getLocalisedValue(this.getProperty("failureHeader"),this.options.locale)},t.prototype.getHeader=function(){return o.Utils.getLocalisedValue(this.getProperty("header"),this.options.locale)},t.prototype.getServiceLabel=function(){return o.Utils.getLocalisedValue(this.getProperty("label"),this.options.locale)},t.prototype.getInfoUri=function(){var e=this.id;return e.endsWith("/")||(e+="/"),e+"info.json"},t}(o.ManifestResource);t.Service=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Size=function(e,t){this.width=e,this.height=t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.AUTHORIZATION_FAILED=1]="AUTHORIZATION_FAILED",e[e.FORBIDDEN=2]="FORBIDDEN",e[e.INTERNAL_SERVER_ERROR=3]="INTERNAL_SERVER_ERROR",e[e.RESTRICTED=4]="RESTRICTED"}(t.StatusCode||(t.StatusCode={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.Thumb=function(e,t){this.data=t,this.index=t.index,this.width=e;var n=t.getHeight()/t.getWidth();this.height=n?Math.floor(this.width*n):e,this.uri=t.getCanonicalImageUri(e),this.label=r.LanguageMap.getValue(t.getLabel())}},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t}(n(0).Resource);t.Thumbnail=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e,t){this.label=e,this.data=t||{},this.nodes=[]}return e.prototype.addNode=function(e){this.nodes.push(e),e.parentNode=this},e.prototype.isCollection=function(){return this.data.type===r.Utils.normaliseType(r.TreeNodeType.COLLECTION)},e.prototype.isManifest=function(){return this.data.type===r.Utils.normaliseType(r.TreeNodeType.MANIFEST)},e.prototype.isRange=function(){return this.data.type===r.Utils.normaliseType(r.TreeNodeType.RANGE)},e}();t.TreeNode=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.COLLECTION="collection",e.MANIFEST="manifest",e.RANGE="range"}(t.TreeNodeType||(t.TreeNodeType={}))},function(e,t,n){!function(e,t,n,r,i){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r,i=i&&i.hasOwnProperty("default")?i.default:i;class o extends Error{constructor({networkError:e,status:t,statusText:n,body:r,url:i,init:a},...s){super(...s),Error.captureStackTrace&&Error.captureStackTrace(this,o),this.name="FetchError",this.status=t,this.statusText=n,this.body=r,this.url=i,this.init=a,this.networkError=e,this.url&&(this.message=`error while fetching ${this.url}\n\nstatus: ${this.status}\n\ninit: ${JSON.stringify(a,void 0,2)}\n\nbody: ${JSON.stringify(r,void 0,2)}\n`)}}const a="undefined"!=typeof fetch,s=a?fetch:t(r),u=a?Headers:r.Headers,c=a?Request:r.Request,l=a?Response:r.Response,p=a?FormData:n,f=a?URL:i.URL,h=a?URLSearchParams:i.URLSearchParams,d=new RegExp("^application/(.*\\+)?json"),_=new RegExp("^application/(.*\\+)?xml");e.FetchError=o,e.FormData=p,e.Headers=u,e.Request=c,e.Response=l,e.URL=f,e.URLSearchParams=h,e.fetch=s,e.request=async function(e,t){let n;try{n=await s(e,t)}catch(e){throw new o({networkError:{message:e.message}})}const r=await async function(e){const{headers:t}=e,n=t.get("Content-Type");let r="blob";n?n.startsWith("text/")||_.test(n)?r="text":d.test(n)&&(r="json"):r="blob";const i=e[r](),o=await i;return{status:e.status,statusText:e.statusText,ok:e.ok,body:o}}(n);if(!r.ok)throw new o({status:r.status,statusText:r.statusText,body:r.body,url:e});return r.body},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(33),n(34),n(35),n(36))},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CONTINUE=100,t.SWITCHING_PROTOCOLS=101,t.PROCESSING=102,t.OK=200,t.CREATED=201,t.ACCEPTED=202,t.NON_AUTHORITATIVE_INFORMATION=203,t.NO_CONTENT=204,t.RESET_CONTENT=205,t.PARTIAL_CONTENT=206,t.MULTI_STATUS=207,t.MULTIPLE_CHOICES=300,t.MOVED_PERMANENTLY=301,t.MOVED_TEMPORARILY=302,t.SEE_OTHER=303,t.NOT_MODIFIED=304,t.USE_PROXY=305,t.TEMPORARY_REDIRECT=307,t.BAD_REQUEST=400,t.UNAUTHORIZED=401,t.PAYMENT_REQUIRED=402,t.FORBIDDEN=403,t.NOT_FOUND=404,t.METHOD_NOT_ALLOWED=405,t.NOT_ACCEPTABLE=406,t.PROXY_AUTHENTICATION_REQUIRED=407,t.REQUEST_TIME_OUT=408,t.CONFLICT=409,t.GONE=410,t.LENGTH_REQUIRED=411,t.PRECONDITION_FAILED=412,t.REQUEST_ENTITY_TOO_LARGE=413,t.REQUEST_URI_TOO_LARGE=414,t.UNSUPPORTED_MEDIA_TYPE=415,t.REQUESTED_RANGE_NOT_SATISFIABLE=416,t.EXPECTATION_FAILED=417,t.IM_A_TEAPOT=418,t.UNPROCESSABLE_ENTITY=422,t.LOCKED=423,t.FAILED_DEPENDENCY=424,t.UNORDERED_COLLECTION=425,t.UPGRADE_REQUIRED=426,t.PRECONDITION_REQUIRED=428,t.TOO_MANY_REQUESTS=429,t.REQUEST_HEADER_FIELDS_TOO_LARGE=431,t.INTERNAL_SERVER_ERROR=500,t.NOT_IMPLEMENTED=501,t.BAD_GATEWAY=502,t.SERVICE_UNAVAILABLE=503,t.GATEWAY_TIME_OUT=504,t.HTTP_VERSION_NOT_SUPPORTED=505,t.VARIANT_ALSO_NEGOTIATES=506,t.INSUFFICIENT_STORAGE=507,t.BANDWIDTH_LIMIT_EXCEEDED=509,t.NOT_EXTENDED=510,t.NETWORK_AUTHENTICATION_REQUIRED=511}])}]))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t),n.d(t,"BaseComponent",(function(){return r}));var r=function(){function e(e){this.options=e,this.options.data=Object.assign({},this.data(),e.data)}return e.prototype._init=function(){return this.el=this.options.target,this.el?(this.el.innerHTML="",!0):(console.warn("element not found"),!1)},e.prototype.data=function(){return{}},e.prototype.on=function(e,t,n){var r=this._e||(this._e={});(r[e]||(r[e]=[])).push({fn:t,ctx:n})},e.prototype.fire=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=[].slice.call(arguments,1),i=((this._e||(this._e={}))[e]||[]).slice(),o=0,a=i.length;o<a;o++)i[o].fn.apply(i[o].ctx,r)},e.prototype._resize=function(){},e.prototype.set=function(e){},e}()},function(e,t,n){"use strict";n.r(t),n.d(t,"Async",(function(){return i})),n.d(t,"Bools",(function(){return o})),n.d(t,"Clipboard",(function(){return a})),n.d(t,"Colors",(function(){return s})),n.d(t,"Dates",(function(){return u})),n.d(t,"Device",(function(){return c})),n.d(t,"Documents",(function(){return l})),n.d(t,"Events",(function(){return p})),n.d(t,"Files",(function(){return f})),n.d(t,"Keyboard",(function(){return h})),n.d(t,"Maths",(function(){return d})),n.d(t,"Size",(function(){return _})),n.d(t,"Dimensions",(function(){return g})),n.d(t,"Numbers",(function(){return v})),n.d(t,"Objects",(function(){return y})),n.d(t,"Storage",(function(){return E})),n.d(t,"StorageItem",(function(){return m})),n.d(t,"StorageType",(function(){return r})),n.d(t,"Strings",(function(){return I})),n.d(t,"Urls",(function(){return O}));var r,i=function(){function e(){}return e.waitFor=function(t,n,r,i,o,a){i||(i=200),o||(o=100),a||(a=0),(a+=1)>o?r&&r():t()?n():setTimeout((function(){e.waitFor(t,n,r,i,o,a)}),i)},e}(),o=function(){function e(){}return e.getBool=function(e,t){return null==e?t:e},e}(),a=function(){function e(){}return e.supportsCopy=function(){return document.queryCommandSupported&&document.queryCommandSupported("copy")},e.copy=function(t){t=e.convertBrToNewLine(t);var n=document.createElement("textarea");n.value=t,e.hideButKeepEnabled(n),document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n)},e.hideButKeepEnabled=function(e){e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="2em",e.style.height="2em",e.style.padding="0",e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent"},e.convertBrToNewLine=function(e){return e=e.replace(/<br\s*[\/]?>/gi,"\n")},e}(),s=function(){function e(){}return e.float32ColorToARGB=function(e){return[(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},e._componentToHex=function(e){var t=e.toString(16);return 1==t.length?"0"+t:t},e.rgbToHexString=function(t){return e.coalesce(t),"#"+e._componentToHex(t[0])+e._componentToHex(t[1])+e._componentToHex(t[2])},e.argbToHexString=function(t){return"#"+e._componentToHex(t[0])+e._componentToHex(t[1])+e._componentToHex(t[2])+e._componentToHex(t[3])},e.coalesce=function(e){for(var t=1;t<e.length;t++)void 0===e[t]&&(e[t]=e[t-1])},e}(),u=function(){function e(){}return e.getTimeStamp=function(){return(new Date).getTime()},e}(),c=function(){function e(){}return e.getPixelRatio=function(e){return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)},e.isTouch=function(){return!!("ontouchstart"in window)||window.navigator.msMaxTouchPoints>0},e}(),l=function(){function e(){}return e.isInIFrame=function(){try{return window.self!==window.top}catch(e){return!0}},e.supportsFullscreen=function(){var e=document.documentElement;return void 0!==(e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullScreen||e.msRequestFullscreen)},e.isHidden=function(){return!!e.getHiddenProp()},e.getHiddenProp=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null},e}(),p=function(){function e(){}return e.debounce=function(e,t){return t=t||100,function(){if(!e.debouncing){var n=Array.prototype.slice.apply(arguments);e.lastReturnVal=e.apply(window,n),e.debouncing=!0}return clearTimeout(e.debounceTimeout),e.debounceTimeout=setTimeout((function(){e.debouncing=!1}),t),e.lastReturnVal}},e}(),f=function(){function e(){}return e.simplifyMimeType=function(e){switch(e){case"text/plain":return"txt";case"image/jpeg":return"jpg";case"application/msword":return"doc";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";default:var t=e.split("/");return t[t.length-1]}},e}(),h=function(){function e(){}return e.getCharCode=function(e){return"number"==typeof e.which?e.which:e.keyCode},e}(),d=function(){function e(){}return e.normalise=function(e,t,n){return(e-t)/(n-t)},e.median=function(e){e.sort((function(e,t){return e-t}));var t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2},e.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)},e}(),_=function(e,t){this.width=e,this.height=t},g=function(){function e(){}return e.fitRect=function(e,t,n,r){var i,o=0,a=0;return t/e<r/n?(o=e*(i=n/e),a=t*i):(o=e*(i=r/t),a=t*i),new _(Math.floor(o),Math.floor(a))},e.hitRect=function(e,t,n,r,i,o){return i>e&&i<e+n&&o>t&&o<t+r},e}(),v=function(){function e(){}return e.numericalInput=function(e){return 46==e.keyCode||8==e.keyCode||9==e.keyCode||27==e.keyCode||65==e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(!(e.shiftKey||(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105))||(e.preventDefault(),!1))},e}(),y=function(){function e(){}return e.toPlainObject=function(e){e=Object(e);var t={};for(var n in e)t[n]=e[n];return t},e}(),E=function(){function e(){}return e.clear=function(e){switch(void 0===e&&(e=r.MEMORY),e){case r.MEMORY:this._memoryStorage={};break;case r.SESSION:sessionStorage.clear();break;case r.LOCAL:localStorage.clear()}},e.clearExpired=function(e){void 0===e&&(e=r.MEMORY);for(var t=this.getItems(e),n=0;n<t.length;n++){var i=t[n];this._isExpired(i)&&this.remove(i.key)}},e.get=function(e,t){void 0===t&&(t=r.MEMORY);var n=null;switch(t){case r.MEMORY:n=this._memoryStorage[e];break;case r.SESSION:n=sessionStorage.getItem(e);break;case r.LOCAL:n=localStorage.getItem(e)}if(!n)return null;var i=null;try{i=JSON.parse(n)}catch(e){return null}return i?this._isExpired(i)?null:(i.key=e,i):null},e._isExpired=function(e){return!((new Date).getTime()<e.expiresAt)},e.getItems=function(e){void 0===e&&(e=r.MEMORY);var t=[];switch(e){case r.MEMORY:for(var n=Object.keys(this._memoryStorage),i=0;i<n.length;i++){(a=this.get(n[i],r.MEMORY))&&t.push(a)}break;case r.SESSION:for(i=0;i<sessionStorage.length;i++){if(o=sessionStorage.key(i))(a=this.get(o,r.SESSION))&&t.push(a)}break;case r.LOCAL:for(i=0;i<localStorage.length;i++){var o,a;if(o=localStorage.key(i))(a=this.get(o,r.LOCAL))&&t.push(a)}}return t},e.remove=function(e,t){switch(void 0===t&&(t=r.MEMORY),t){case r.MEMORY:delete this._memoryStorage[e];break;case r.SESSION:sessionStorage.removeItem(e);break;case r.LOCAL:localStorage.removeItem(e)}},e.set=function(e,t,n,i){void 0===i&&(i=r.MEMORY);var o=1e3*n,a=new m;switch(a.value=t,a.expiresAt=(new Date).getTime()+o,i){case r.MEMORY:this._memoryStorage[e]=JSON.stringify(a);break;case r.SESSION:sessionStorage.setItem(e,JSON.stringify(a));break;case r.LOCAL:localStorage.setItem(e,JSON.stringify(a))}return a},e._memoryStorage={},e}(),m=function(){};!function(e){e.MEMORY="memory",e.SESSION="session",e.LOCAL="local"}(r||(r={}));var I=function(){function e(){}return e.ellipsis=function(e,t){if(e.length<=t)return e;var n=e.substr(0,t),r=n.lastIndexOf(" ");return-1!=r&&(n=n.substr(0,Math.min(n.length,r))),n+"&hellip;"},e.htmlDecode=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild.nodeValue},e.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++){var i=new RegExp("\\{"+r+"\\}","gm");e=e.replace(i,t[r])}return e},e.isAlphanumeric=function(e){return/^[a-zA-Z0-9]*$/.test(e)},e.toCssClass=function(e){return e.replace(/[^a-z0-9]/g,(function(e){var t=e.charCodeAt(0);return 32==t?"-":t>=65&&t<=90?"_"+e.toLowerCase():"__"+("000"+t.toString(16)).slice(-4)}))},e.toFileName=function(e){return e.replace(/[^a-z0-9]/gi,"_").toLowerCase()},e.utf8_to_b64=function(e){return window.btoa(unescape(encodeURIComponent(e)))},e}(),O=function(){function e(){}return e.getHashParameter=function(e,t){return t||(t=window.document),t&&t.location?this.getHashParameterFromString(e,t.location.hash):null},e.getHashParameterFromString=function(e,t){var n=new RegExp("#.*[?&]"+e+"=([^&]+)(&|$)").exec(t);return n?decodeURIComponent(n[1].replace(/\+/g," ")):null},e.setHashParameter=function(e,t,n){if(n||(n=window.document),n&&n.location){var r="#?"+this.updateURIKeyValuePair(n.location.hash.replace("#?",""),e,t),i=n.URL;-1!=i.indexOf("#")&&(i=i.substr(0,i.indexOf("#"))),n.location.replace(i+r)}},e.getQuerystringParameter=function(e,t){return t||(t=window),this.getQuerystringParameterFromString(e,t.location.search)},e.getQuerystringParameterFromString=function(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return n?decodeURIComponent(n[1].replace(/\+/g," ")):null},e.setQuerystringParameter=function(e,t,n){if(n||(n=window.document),n&&n.location){var r=this.updateURIKeyValuePair(n.location.hash.replace("#?",""),e,t);window.location.search=r}},e.updateURIKeyValuePair=function(e,t,n){t=encodeURIComponent(t),n=encodeURIComponent(n);var r=e.split("&");""==r[0]&&r.shift();for(var i,o=r.length;o--;)if((i=r[o].split("="))[0]==t){i[1]=n,r[o]=i.join("=");break}return o<0&&(r[r.length]=[t,n].join("=")),r.join("&")},e.getUrlParts=function(e){var t=document.createElement("a");return t.href=e,t},e.convertToRelativeUrl=function(e){var t=this.getUrlParts(e),n=t.pathname+t.searchWithin;return n.startsWith("/")||(n="/"+n),n},e}()}])}));

/***/ }),

/***/ "./node_modules/@iiif/iiif-metadata-component/node_modules/form-data/lib/browser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@iiif/iiif-metadata-component/node_modules/form-data/lib/browser.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "./node_modules/es6-denodeify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-denodeify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var PromiseArg = arguments[0] === undefined ? Promise : arguments[0];
  return function (f) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new PromiseArg(function (resolve, reject) {
        return f.apply(undefined, args.concat([function (err, val) {
          return err ? reject(err) : resolve(val);
        }]));
      });
    };
  };
};

module.exports = exports["default"];



/***/ }),

/***/ "./node_modules/fetch-cookie/index.js":
/*!********************************************!*\
  !*** ./node_modules/fetch-cookie/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var denodeify = __webpack_require__(/*! es6-denodeify */ "./node_modules/es6-denodeify/index.js")(Promise)
var tough = __webpack_require__(/*! tough-cookie */ "node-fetch")

module.exports = function fetchCookieDecorator (fetch, jar) {
  fetch = fetch || window.fetch
  jar = jar || new tough.CookieJar()

  var getCookieString = denodeify(jar.getCookieString.bind(jar))
  var setCookie = denodeify(jar.setCookie.bind(jar))

  async function fetchCookie (url, opts) {
    opts = opts || {}

    // Prepare request
    const cookie = await getCookieString(url)

    if (url.headers && typeof url.headers.append === 'function') {
      url.headers.append('cookie', cookie)
    } else if (opts.headers && typeof opts.headers.append === 'function') {
      opts.headers.append('cookie', cookie)
    } else {
      opts.headers = Object.assign(
        opts.headers || {},
        cookie ? { cookie: cookie } : {}
      )
    }

    // Actual request
    const res = await fetch(url, opts)

    // Get cookie header
    var cookies = []
    if (res.headers.getAll) {
      // node-fetch v1
      cookies = res.headers.getAll('set-cookie')
      // console.warn("You are using a fetch version that supports 'Headers.getAll' which is deprecated!")
      // console.warn("In the future 'fetch-cookie-v2' may discontinue supporting that fetch implementation.")
      // console.warn('Details: https://developer.mozilla.org/en-US/docs/Web/API/Headers/getAll')
    } else {
      // node-fetch v2
      const headers = res.headers.raw()
      if (headers['set-cookie'] !== undefined) {
        cookies = headers['set-cookie']
      }
    }

    // Store all present cookies
    await Promise.all(cookies.map((cookie) => setCookie(cookie, res.url)))

    return res
  }

  return fetchCookie
}


/***/ }),

/***/ "./node_modules/fetch-cookie/node-fetch.js":
/*!*************************************************!*\
  !*** ./node_modules/fetch-cookie/node-fetch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function nodeFetchCookieDecorator (nodeFetch, jar) {
  const fetchCookie = __webpack_require__(/*! ./ */ "./node_modules/fetch-cookie/index.js")(nodeFetch, jar)

  return function nodeFetchCookie (url, userOptions = {}) {
    const opts = Object.assign({}, userOptions, { redirect: 'manual' })

    // Forward identical options to wrapped node-fetch but tell to not handle redirection.
    return fetchCookie(url, opts)
      .then(res => {
        const isRedirect = (res.status === 303 || ((res.status === 301 || res.status === 302)))

        // Interpret the proprietary "redirect" option in the same way that node-fetch does.
        if (isRedirect && userOptions.redirect !== 'manual' && userOptions.follow !== 0) {
          const optsForGet = Object.assign({}, {
            method: 'GET',
            body: null,
            // Since the "follow" flag is not relevant for node-fetch in this case,
            // we'll hijack it for our internal bookkeeping.
            follow: userOptions.follow !== undefined ? userOptions.follow - 1 : undefined
          })

          return nodeFetchCookie(res.headers.get('location'), optsForGet)
        } else {
          return res
        }
      })
  }
}


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=vendors~uv-av-extension~uv-default-extension~uv-mediaelement-extension~uv-model-viewer-extension~uv-~2fb7ce83.faff8595be664b87f9dc.js.map