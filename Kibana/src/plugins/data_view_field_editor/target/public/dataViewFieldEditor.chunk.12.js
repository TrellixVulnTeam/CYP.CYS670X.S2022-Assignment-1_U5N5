(window.dataViewFieldEditor_bundle_jsonpfunction=window.dataViewFieldEditor_bundle_jsonpfunction||[]).push([[12],{53:function(e,t,a){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),s=[];function o(e){for(var t=-1,a=0;a<s.length;a++)if(s[a].identifier===e){t=a;break}return t}function l(e,t){for(var a={},n=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var c=o(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(s[c].references++,s[c].updater(p)):s.push({identifier:u,updater:b(p,t),references:1}),n.push(u)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=a.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,c=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,a,n){var r=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function m(e,t,a){var n=a.css,r=a.media,i=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,f=0;function b(e,t){var a,n,r;if(t.singleton){var i=f++;a=h||(h=d(t)),n=p.bind(null,a,i,!1),r=p.bind(null,a,i,!0)}else a=d(t),n=m.bind(null,a,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var a=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var r=o(a[n]);s[r].references--}for(var i=l(e,t),d=0;d<a.length;d++){var u=o(a[d]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}a=i}}}},54:function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=(s=n,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(i).concat([r]).join("\n")}var s,o,l;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);n&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},55:function(e,t,a){switch(window.__kbnThemeTag__){case"v8dark":return a(56);case"v8light":return a(58)}},56:function(e,t,a){var n=a(53),r=a(57);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},57:function(e,t,a){(t=a(54)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},58:function(e,t,a){var n=a(53),r=a(59);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},59:function(e,t,a){(t=a(54)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},60:function(e,t,a){"use strict";a.d(t,"a",(function(){return samples_FormatEditorSamples}));var n=a(4),r=a.n(n),i=(a(55),a(1)),s=a(3),o=a(2),l=a(13),d=a(0);class samples_FormatEditorSamples extends i.PureComponent{render(){const{samples:e,sampleType:t}=this.props,a=[{field:"input",name:o.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:o.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(d.jsx)("div",null,e)}];return e.length?Object(d.jsx)(s.EuiFormRow,{label:Object(d.jsx)(l.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(d.jsx)(s.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:a})):null}}r()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},91:function(e,t,a){"use strict";a.r(t),a.d(t,"UrlFormatEditor",(function(){return UrlFormatEditor}));var n=a(4),r=a.n(n),i=a(1),s=a(3),o=a(13),l=a(7),d=a(60),u=a(37),c=a(8),p=a(0);class UrlFormatEditor extends l.DefaultFormatEditor{get sampleIconPath(){var e;const t="/plugins/indexPatternManagement/assets/icons/{{value}}.png";return null!==(e=this.context)&&void 0!==e&&e.services.http?this.context.services.http.basePath.prepend(t):t}constructor(e){super(e),r()(this,"sanitizeNumericValue",(e=>{const t=parseInt(e,10);return isNaN(t)?"":t})),r()(this,"onTypeChange",(e=>{const{urlTemplate:t,width:a,height:n}=this.props.formatParams,r={type:e};"img"===e?(r.width=a,r.height=n,t||(r.urlTemplate=this.sampleIconPath)):"img"!==e&&t===this.sampleIconPath&&(r.urlTemplate=void 0),this.onChange(r)})),r()(this,"renderWidthHeightParameters",(()=>{const e=this.sanitizeNumericValue(this.props.formatParams.width),t=this.sanitizeNumericValue(this.props.formatParams.height);return Object(p.jsx)(i.Fragment,null,Object(p.jsx)(s.EuiFormRow,{label:Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.widthLabel",defaultMessage:"Width"})},Object(p.jsx)(s.EuiFieldNumber,{"data-test-subj":"urlEditorWidth",value:e,onChange:e=>{this.onChange({width:e.target.value})}})),Object(p.jsx)(s.EuiFormRow,{label:Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.heightLabel",defaultMessage:"Height"})},Object(p.jsx)(s.EuiFieldNumber,{"data-test-subj":"urlEditorHeight",value:t,onChange:e=>{this.onChange({height:e.target.value})}})))})),this.state={...this.state,sampleInputsByType:{a:["john","/some/pathname/asset.png",1234],img:["go","stop",["de","ne","us","ni"],"cv"],audio:["hello.mp3"]},sampleConverterType:"html",showUrlTemplateHelp:!1,showLabelTemplateHelp:!1}}render(){var e;const{formatParams:t,format:a}=this.props,{error:n,samples:r,sampleConverterType:l}=this.state,u=null!==(e=t.type)&&void 0!==e?e:a.getParamDefaults().type;return Object(p.jsx)(i.Fragment,null,Object(p.jsx)(s.EuiFormRow,{label:Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.typeLabel",defaultMessage:"Type"})},Object(p.jsx)(s.EuiSelect,{"data-test-subj":"urlEditorType",value:u,options:a.type.urlTypes.map((e=>({value:e.kind,text:e.text}))),onChange:e=>{this.onTypeChange(e.target.value)}})),"a"===u?Object(p.jsx)(s.EuiFormRow,{label:Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.openTabLabel",defaultMessage:"Open in a new tab"})},Object(p.jsx)(s.EuiSwitch,{label:t.openLinkInCurrentTab?Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.offLabel",defaultMessage:"Off"}):Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.onLabel",defaultMessage:"On"}),checked:!t.openLinkInCurrentTab,onChange:e=>{this.onChange({openLinkInCurrentTab:!e.target.checked})}})):null,Object(p.jsx)(s.EuiFormRow,{label:Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.urlTemplateLabel",defaultMessage:"URL template"}),helpText:Object(p.jsx)(s.EuiLink,{target:"_blank",href:this.context.services.docLinks.links.indexPatterns.fieldFormattersString},Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.template.helpLinkText",defaultMessage:"URL template help"})),isInvalid:!!n,error:n},Object(p.jsx)(s.EuiFieldText,{"data-test-subj":"urlEditorUrlTemplate",value:t.urlTemplate||"",onChange:e=>{this.onChange({urlTemplate:e.target.value})}})),Object(p.jsx)(s.EuiFormRow,{label:Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.labelTemplateLabel",defaultMessage:"Label template"}),helpText:Object(p.jsx)(s.EuiLink,{target:"_blank",href:this.context.services.docLinks.links.indexPatterns.fieldFormattersString},Object(p.jsx)(o.FormattedMessage,{id:"indexPatternFieldEditor.url.labelTemplateHelpText",defaultMessage:"Label template help"})),isInvalid:!!n,error:n},Object(p.jsx)(s.EuiFieldText,{"data-test-subj":"urlEditorLabelTemplate",value:t.labelTemplate||"",onChange:e=>{this.onChange({labelTemplate:e.target.value})}})),"img"===u&&this.renderWidthHeightParameters(),Object(p.jsx)(d.a,{samples:r,sampleType:l}))}}r()(UrlFormatEditor,"contextType",c.context),r()(UrlFormatEditor,"formatId",u.a)}}]);