(window.visTypeTimelion_bundle_jsonpfunction=window.visTypeTimelion_bundle_jsonpfunction||[]).push([[3],{30:function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],a=0;a<e.length;a++){var o=e[a],l=t.base?o[0]+t.base:o[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var d=r(c),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(m)):s.push({identifier:c,updater:v(m,t),references:1}),i.push(c)}return i}function u(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function m(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function v(e,t){var n,i,a;if(t.singleton){var o=g++;n=f||(f=u(t)),i=m.bind(null,n,o,!1),a=m.bind(null,n,o,!0)}else n=u(t),i=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=r(n[i]);s[a].references--}for(var o=l(e,t),u=0;u<n.length;u++){var c=r(n[u]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=o}}}},31:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=(s=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var s,r,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);i&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},52:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(53);case"v8light":return n(55)}},53:function(e,t,n){var i=n(30),a=n(54);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};i(a,o);e.exports=a.locals||{}},54:function(e,t,n){(t=n(31)(!1)).push([e.i,".timExpressionInput{flex:1 1 auto;display:flex;flex-direction:column;margin-top:16px}.timExpressionInput__editor{flex:1;position:relative;padding-top:8px}.timExpressionInput__absolute{position:absolute;top:0;right:0;bottom:0;left:0}@media only screen and (max-width: 574px){.timExpressionInput__editor{flex:auto;height:240px;max-height:240px}}@media only screen and (min-width: 575px) and (max-width: 767px){.timExpressionInput__editor{flex:auto;height:240px;max-height:240px}}@media only screen and (min-width: 768px) and (max-width: 991px){.timExpressionInput__editor{flex:auto;height:240px;max-height:240px}}.visEditor--timelion .visEditorSidebar__timelionOptions{flex:1 1 auto;display:flex;flex-direction:column}\n",""]),e.exports=t},55:function(e,t,n){var i=n(30),a=n(56);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};i(a,o);e.exports=a.locals||{}},56:function(e,t,n){(t=n(31)(!1)).push([e.i,".timExpressionInput{flex:1 1 auto;display:flex;flex-direction:column;margin-top:16px}.timExpressionInput__editor{flex:1;position:relative;padding-top:8px}.timExpressionInput__absolute{position:absolute;top:0;right:0;bottom:0;left:0}@media only screen and (max-width: 574px){.timExpressionInput__editor{flex:auto;height:240px;max-height:240px}}@media only screen and (min-width: 575px) and (max-width: 767px){.timExpressionInput__editor{flex:auto;height:240px;max-height:240px}}@media only screen and (min-width: 768px) and (max-width: 991px){.timExpressionInput__editor{flex:auto;height:240px;max-height:240px}}.visEditor--timelion .visEditorSidebar__timelionOptions{flex:1 1 auto;display:flex;flex-direction:column}\n",""]),e.exports=t},64:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n(4),a=n(20),o=n(8),s=n(26),r=n(23),l=n(3),u=n(5),c=n(12);let d;function m(e,t){return e>=t.min&&e<=t.max}function p(e,t=[]){if(!e)return[];const n=e.chainable?e.args.slice(1):e.args.slice(0),i=t.map((e=>e.name));return n.filter((e=>!e.hidden&&!i.includes(e.name)))}async function f(e,t,n,i){try{const a=await Object(c.a)(e);return await async function(e,t,n,i){const a=e.functions.find((({location:e})=>m(t,e)));if(!a)return;const o=n.find((({name:e})=>e===a.function));if(!o)return;const s=a.location.min+a.function.length+2;if(t<s)return{list:[o],type:d.FUNCTIONS};const r=a.arguments.find((e=>m(t,e.location)));if(r&&"namedArg"===r.type&&m(t,r.value.location)){const{function:e,arguments:t}=a,{name:n,value:{text:s}}=r;let l;if(i.hasDynamicSuggestionsForArgument(e,n))l=await i.getDynamicSuggestionsForArgument(e,n,t,s);else{const{suggestions:e}=o.args.find((e=>e.name===r.name))||{};l=i.getStaticSuggestionsForInput(s,e)}return{list:l,type:d.ARGUMENT_VALUE}}return{list:p(o,a.arguments).filter((e=>"namedArg"===(null==r?void 0:r.type)?Object(l.startsWith)(e.name,r.name):!r||Object(l.startsWith)(e.name,r.text))),type:d.ARGUMENTS}}(a,n,t,i)}catch(e){let n;try{n=JSON.parse(e.message)}catch(e){return}switch(n.type){case"incompleteFunction":{let e;return e=n.function?t.filter((e=>Object(l.startsWith)(e.name,n.function))):t,{list:e,type:d.FUNCTIONS}}case"incompleteArgument":{const{currentFunction:e,currentArgs:i}=n;return{list:p(t.find((t=>t.name===e)),i),type:d.ARGUMENTS}}case"incompleteArgumentValue":{const{name:e,currentFunction:a,currentArgs:o}=n;let s=[];if(i.hasDynamicSuggestionsForArgument(a,e))s=await i.getDynamicSuggestionsForArgument(a,e,o);else{const n=t.find((e=>e.name===a));if(n){const t=n.args.find((t=>t.name===e));t&&t.suggestions&&(s=t.suggestions)}}return{list:s,type:d.ARGUMENT_VALUE}}}}}!function(e){e.ARGUMENTS="arguments",e.ARGUMENT_VALUE="argument_value",e.FUNCTIONS="functions"}(d||(d={}));var g=n(13),v=n(2);const x="timelion_expression";function h({value:e,setValue:t}){const n=Object(i.useRef)([]),l=Object(o.useKibana)(),c=Object(i.useMemo)(g.a,[]),m=Object(i.useCallback)((async(e,t)=>{const i=e.getValue(),a=e.getWordUntilPosition(t),o=new r.monaco.Range(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),s=await f(i,n.current,t.column-1,c);return{suggestions:s?s.list.map((e=>function(e,t,n){let i,a,o=r.monaco.languages.CompletionItemKind.Method,s=e.name,l="";switch(t){case d.ARGUMENTS:a={title:"Trigger Suggestion Dialog",id:"editor.action.triggerSuggest"},o=r.monaco.languages.CompletionItemKind.Property,s=`${s}=`,l=`${u.i18n.translate("timelion.expressionSuggestions.argument.description.acceptsText",{defaultMessage:"Accepts"})}: ${e.types}`;break;case d.FUNCTIONS:a={title:"Trigger Suggestion Dialog",id:"editor.action.triggerSuggest"},o=r.monaco.languages.CompletionItemKind.Function,s=`${s}($0)`,i=r.monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,l=`(${e.chainable?u.i18n.translate("timelion.expressionSuggestions.func.description.chainableHelpText",{defaultMessage:"Chainable"}):u.i18n.translate("timelion.expressionSuggestions.func.description.dataSourceHelpText",{defaultMessage:"Data source"})})`;break;case d.ARGUMENT_VALUE:const t=e.insertText;t&&(s=`${t},`),a={title:"Trigger Suggestion Dialog",id:"editor.action.triggerSuggest"},o=r.monaco.languages.CompletionItemKind.Property,l=e.help||""}return{detail:l,insertText:s,insertTextRules:i,kind:o,label:e.name,documentation:e.help,command:a,range:n}}(e,s.type,o))):[]}}),[c]),p=Object(i.useCallback)((async(e,t)=>{const i=await f(e.getValue(),n.current,t.column-1,c);return{contents:i?i.list.map((e=>({value:e.help}))):[]}}),[c]);return Object(i.useEffect)((()=>{l.services.http&&l.services.http.get("../api/timelion/functions").then((e=>{n.current=e}))}),[l.services.http]),Object(v.jsx)("div",{className:"timExpressionInput"},Object(v.jsx)(a.EuiFormLabel,null,Object(v.jsx)(s.FormattedMessage,{id:"timelion.vis.expressionLabel",defaultMessage:"Timelion expression"})),Object(v.jsx)("div",{className:"timExpressionInput__editor"},Object(v.jsx)("div",{className:"timExpressionInput__absolute","data-test-subj":"timelionCodeEditor"},Object(v.jsx)(o.CodeEditor,{languageId:x,value:e,onChange:t,suggestionProvider:{triggerCharacters:[".",",","(","=",":"],provideCompletionItems:m},hoverProvider:{provideHover:p},options:{fixedOverflowWidgets:!0,fontSize:14,folding:!1,lineNumbers:"off",scrollBeyondLastLine:!1,minimap:{enabled:!1},wordWrap:"on",wrappingIndent:"indent"},languageConfiguration:{autoClosingPairs:[{open:"(",close:")"}]}}))))}r.monaco.languages.register({id:x});var b=n(0),y=n(11);const{isValidEsInterval:j}=b.search.aggs,_=[{label:u.i18n.translate("timelion.vis.interval.auto",{defaultMessage:"Auto"}),value:"auto"},{label:u.i18n.translate("timelion.vis.interval.second",{defaultMessage:"1 second"}),value:"1s"},{label:u.i18n.translate("timelion.vis.interval.minute",{defaultMessage:"1 minute"}),value:"1m"},{label:u.i18n.translate("timelion.vis.interval.hour",{defaultMessage:"1 hour"}),value:"1h"},{label:u.i18n.translate("timelion.vis.interval.day",{defaultMessage:"1 day"}),value:"1d"},{label:u.i18n.translate("timelion.vis.interval.week",{defaultMessage:"1 week"}),value:"1w"},{label:u.i18n.translate("timelion.vis.interval.month",{defaultMessage:"1 month"}),value:"1M"},{label:u.i18n.translate("timelion.vis.interval.year",{defaultMessage:"1 year"}),value:"1y"}];function E({value:e,setValue:t,setValidity:n}){const o=Object(i.useCallback)((e=>{t(e.trim())}),[t]),s=Object(i.useCallback)((e=>{t(e[0]&&e[0].value||"")}),[t]),r=Object(i.useMemo)((()=>[_.find((t=>t.value===e))||{label:e,value:e}]),[e]),l=_.some((t=>t.value===e))||j(e);return Object(y.useValidation)(n,l),Object(v.jsx)(a.EuiFormRow,{display:"rowCompressed",fullWidth:!0,helpText:u.i18n.translate("timelion.vis.selectIntervalHelpText",{defaultMessage:"Select an option or create a custom value. Examples: 30s, 20m, 24h, 2d, 1w, 1M"}),isInvalid:!l,error:!l&&u.i18n.translate("timelion.vis.invalidIntervalErrorMessage",{defaultMessage:"Invalid interval format."}),label:u.i18n.translate("timelion.vis.intervalLabel",{defaultMessage:"Interval"})},Object(v.jsx)(a.EuiComboBox,{compressed:!0,fullWidth:!0,isInvalid:!l,onChange:s,onCreateOption:o,options:_,selectedOptions:r,singleSelection:{asPlainText:!0},placeholder:u.i18n.translate("timelion.vis.selectIntervalPlaceholder",{defaultMessage:"Select an interval"}),"data-test-subj":"timelionIntervalComboBox"}))}n(52);function w({services:e,stateParams:t,setValue:n,setValidity:s}){const r=Object(i.useCallback)((e=>n("interval",e)),[n]),l=Object(i.useCallback)((e=>n("expression",e)),[n]);return Object(v.jsx)(o.KibanaContextProvider,{services:e},Object(v.jsx)(a.EuiPanel,{className:"visEditorSidebar__timelionOptions",paddingSize:"s"},Object(v.jsx)(E,{value:t.interval,setValue:r,setValidity:s}),Object(v.jsx)(h,{value:t.expression,setValue:l})))}}}]);