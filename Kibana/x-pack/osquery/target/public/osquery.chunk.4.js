/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.osquery_bundle_jsonpfunction=window.osquery_bundle_jsonpfunction||[]).push([[4],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"OsqueryManagedCustomButtonExtension",(function(){return s}));var i=n(11),o=n(0),r=n.n(o),a=n(77),l=n(78),u=n(34);const s=r.a.memo((()=>{const[e,t]=r.a.useState(null),{http:n}=Object(u.e)().services;return Object(o.useEffect)((()=>{n.get("/internal/osquery/status").then((e=>{t("installed"!==(null==e?void 0:e.install_status))}))}),[n]),null===e?r.a.createElement(i.EuiLoadingContent,{lines:5}):r.a.createElement(r.a.Fragment,null,e?r.a.createElement(l.a,null):null,r.a.createElement(a.a,{isDisabled:e}))}));s.displayName="OsqueryManagedCustomButtonExtension"},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return k.KibanaContextProvider})),n.d(t,"f",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return x})),n.d(t,"a",(function(){return g}));var i=n(16),o=n(4),r=n.n(o),a=n(49),l=n.n(a),u=(n(0),n(23)),s=n.n(u),c=n(11),d=n(24),b=["type","label","size","scripted","className"],f={iconType:"questionInCircle",color:"gray"},p={boolean:{iconType:"tokenBoolean"},conflict:{iconType:"alert",color:"euiColorVis9",shape:"square"},date:{iconType:"tokenDate"},date_range:{iconType:"tokenDate"},geo_point:{iconType:"tokenGeo"},geo_shape:{iconType:"tokenGeo"},ip:{iconType:"tokenIP"},ip_range:{iconType:"tokenIP"},murmur3:{iconType:"tokenFile"},number:{iconType:"tokenNumber"},number_range:{iconType:"tokenNumber"},histogram:{iconType:"tokenHistogram"},_source:{iconType:"editorCodeBlock",color:"gray"},string:{iconType:"tokenString"},text:{iconType:"tokenString"},keyword:{iconType:"tokenKeyword"},nested:{iconType:"tokenNested"},version:{iconType:"tokenTag"}};function g(e){var t=e.type,n=e.label,i=e.size,o=void 0===i?"s":i,a=e.scripted,u=e.className,g=l()(e,b),m=p[t]||f;return Object(d.jsx)(c.EuiToken,r()({},m,{className:s()("kbnFieldIcon",u),"aria-label":n||t,title:n||t,size:o,fill:a?"dark":void 0},g))}n(62);var m={s:"kbnFieldButton--small",m:null};Object.keys(m);var k=n(17);const x=()=>Object(k.useKibana)(),h=e=>!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey),v=e=>0===e.button,y=(e,t)=>{const n=Object(i.useHistory)();return Object(k.reactRouterNavigate)(n,e,t)}},49:function(e,t,n){e.exports=n(5)(6)},50:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],u=t.base?r[0]+t.base:r[0],s=n[u]||0,c="".concat(u," ").concat(s);n[u]=s+1;var d=l(c),b={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(b)):a.push({identifier:c,updater:m(b,t),references:1}),i.push(c)}return i}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function b(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,g=0;function m(e,t){var n,i,o;if(t.singleton){var r=g++;n=p||(p=s(t)),i=b.bind(null,n,r,!1),o=b.bind(null,n,r,!0)}else n=s(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=l(n[i]);a[o].references--}for(var r=u(e,t),s=0;s<n.length;s++){var c=l(n[s]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=r}}}},51:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,l,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);i&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},62:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(63);case"v8light":return n(65)}},63:function(e,t,n){var i=n(50),o=n(64);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},64:function(e,t,n){(t=n(51)(!1)).push([e.i,".kbnFieldButton{font-size:14px;font-size:1rem;line-height:1.71429rem;border-radius:6px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.kbnFieldButton:focus-within,.kbnFieldButton-isActive{outline:2px solid currentColor}.kbnFieldButton:focus-within:focus-visible,.kbnFieldButton-isActive:focus-visible{outline-style:auto}.kbnFieldButton:focus-within:not(:focus-visible),.kbnFieldButton-isActive:not(:focus-visible){outline:none}.kbnFieldButton--isDraggable{background:#25262E}.kbnFieldButton--isDraggable:hover,.kbnFieldButton--isDraggable:focus,.kbnFieldButton--isDraggable:focus-within{box-shadow:0 0.9px 4px -1px rgba(0,0,0,0.2),0 2.6px 8px -1px rgba(0,0,0,0.15),0 5.7px 12px -1px rgba(0,0,0,0.125),0 15px 15px -1px rgba(0,0,0,0.1);border-radius:6px;z-index:2}.kbnFieldButton--isDraggable .kbnFieldButton__button:hover,.kbnFieldButton--isDraggable .kbnFieldButton__button:focus{cursor:grab}.kbnFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start;line-height:normal}.kbnFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.kbnFieldButton__name{flex-grow:1;word-break:break-word}.kbnFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.kbnFieldButton__fieldAction{margin-right:8px}.kbnFieldButton--small{font-size:12px}.kbnFieldButton--small .kbnFieldButton__button{padding:4px}.kbnFieldButton--small .kbnFieldButton__fieldIcon,.kbnFieldButton--small .kbnFieldButton__fieldAction{margin-right:4px}\n",""]),e.exports=t},65:function(e,t,n){var i=n(50),o=n(66);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},66:function(e,t,n){(t=n(51)(!1)).push([e.i,".kbnFieldButton{font-size:14px;font-size:1rem;line-height:1.71429rem;border-radius:6px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.kbnFieldButton:focus-within,.kbnFieldButton-isActive{outline:2px solid currentColor}.kbnFieldButton:focus-within:focus-visible,.kbnFieldButton-isActive:focus-visible{outline-style:auto}.kbnFieldButton:focus-within:not(:focus-visible),.kbnFieldButton-isActive:not(:focus-visible){outline:none}.kbnFieldButton--isDraggable{background:#fff}.kbnFieldButton--isDraggable:hover,.kbnFieldButton--isDraggable:focus,.kbnFieldButton--isDraggable:focus-within{box-shadow:0 0.9px 4px -1px rgba(0,0,0,0.08),0 2.6px 8px -1px rgba(0,0,0,0.06),0 5.7px 12px -1px rgba(0,0,0,0.05),0 15px 15px -1px rgba(0,0,0,0.04);border-radius:6px;z-index:2}.kbnFieldButton--isDraggable .kbnFieldButton__button:hover,.kbnFieldButton--isDraggable .kbnFieldButton__button:focus{cursor:grab}.kbnFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start;line-height:normal}.kbnFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.kbnFieldButton__name{flex-grow:1;word-break:break-word}.kbnFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.kbnFieldButton__fieldAction{margin-right:8px}.kbnFieldButton--small{font-size:12px}.kbnFieldButton--small .kbnFieldButton__button{padding:4px}.kbnFieldButton--small .kbnFieldButton__fieldIcon,.kbnFieldButton--small .kbnFieldButton__fieldAction{margin-right:4px}\n",""]),e.exports=t},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(11),o=n(12),r=n(0),a=n.n(r),l=n(1),u=n(34);const s=({isDisabled:e=!1,agentPolicyId:t})=>{const{application:{getUrlForApp:n,navigateToApp:s}}=Object(u.e)().services,c=Object(r.useMemo)((()=>n(l.PLUGIN_ID,{path:t?`/live_queries/new?agentPolicyId=${t}`:"/live_queries/new"})),[t,n]),d=Object(r.useCallback)((e=>{!Object(u.d)(e)&&Object(u.c)(e)&&(e.preventDefault(),s(l.PLUGIN_ID,{path:t?`/live_queries/new?agentPolicyId=${t}`:"/live_queries/new"}))}),[t,s]),b=n(l.PLUGIN_ID,{path:"/packs"}),f=Object(r.useCallback)((e=>{!Object(u.d)(e)&&Object(u.c)(e)&&(e.preventDefault(),s(l.PLUGIN_ID,{path:"/packs"}))}),[s]);return a.a.createElement(i.EuiFlexGroup,{gutterSize:"l"},a.a.createElement(i.EuiFlexItem,null,a.a.createElement(i.EuiCard,{icon:a.a.createElement(i.EuiIcon,{size:"xl",type:"console"}),title:o.i18n.translate("xpack.osquery.fleetIntegration.runLiveQueriesButtonText",{defaultMessage:"Run live queries"}),href:c,onClick:d,description:"",isDisabled:e})),a.a.createElement(i.EuiFlexItem,null,a.a.createElement(i.EuiCard,{icon:a.a.createElement(i.EuiIcon,{size:"xl",type:"clock"}),title:o.i18n.translate("xpack.osquery.fleetIntegration.packsButtonText",{defaultMessage:"Packs"}),description:"",isDisabled:e,href:b,onClick:f})))};s.displayName="NavigationButtonsComponent";const c=a.a.memo(s)},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(0),o=n.n(i),r=n(11),a=n(12);const l=()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(r.EuiFlexGroup,null,o.a.createElement(r.EuiFlexItem,null,o.a.createElement(r.EuiCallOut,{title:a.i18n.translate("xpack.osquery.fleetIntegration.saveIntegrationCalloutTitle",{defaultMessage:"Save the integration to access the options below"}),iconType:"save"}))),o.a.createElement(r.EuiSpacer,null)),u=o.a.memo(l)}}]);