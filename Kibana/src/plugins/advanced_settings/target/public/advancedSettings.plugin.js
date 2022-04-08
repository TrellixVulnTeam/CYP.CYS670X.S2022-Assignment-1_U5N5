!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);u.length;)u.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"advancedSettings.chunk."+e+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.advancedSettings_bundle_jsonpfunction=window.advancedSettings_bundle_jsonpfunction||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=a;o(o.s=8)}([function(e,t,n){e.exports=n(7)(2)},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/home/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(9),__kbnBundles__.define("plugin/advancedSettings/public",n,10)},function(e,t,n){n.p=window.__kbnPublicPath__.advancedSettings},function(e,t,n){"use strict";n.r(t),n.d(t,"ComponentRegistry",(function(){return component_registry_ComponentRegistry})),n.d(t,"LazyField",(function(){return g})),n.d(t,"plugin",(function(){return f}));var r=n(2),o=n.n(r),i=n(3),a=n(6),s=n(0),c=n.n(s),u=n(4),p=n(5),d=n(1);class component_registry_ComponentRegistry{constructor(){c()(this,"registry",{}),c()(this,"setup",{componentType:component_registry_ComponentRegistry.componentType,register:(e,t,n=!1)=>{if(!n&&e in this.registry)throw new Error(`Component with id ${e} is already registered.`);t.displayName||(t.displayName=e),this.registry[e]=t}}),c()(this,"start",{componentType:component_registry_ComponentRegistry.componentType,get:e=>this.registry[e]||component_registry_ComponentRegistry.defaultRegistry[e]})}}c()(component_registry_ComponentRegistry,"componentType",{PAGE_TITLE_COMPONENT:"advanced_settings_page_title",PAGE_SUBTITLE_COMPONENT:"advanced_settings_page_subtitle",PAGE_FOOTER_COMPONENT:"advanced_settings_page_footer"}),c()(component_registry_ComponentRegistry,"defaultRegistry",{advanced_settings_page_title:()=>Object(d.jsx)(u.EuiText,null,Object(d.jsx)("h1",{"data-test-subj":"managementSettingsTitle"},Object(d.jsx)(p.FormattedMessage,{id:"advancedSettings.pageTitle",defaultMessage:"Settings"}))),advanced_settings_page_subtitle:()=>null,advanced_settings_page_footer:()=>null});const _=new component_registry_ComponentRegistry,l=i.i18n.translate("advancedSettings.advancedSettingsLabel",{defaultMessage:"Advanced Settings"});class plugin_AdvancedSettingsPlugin{setup(e,{management:t,home:r,usageCollection:o}){return t.sections.section.kibana.registerApp({id:"settings",title:l,order:3,async mount(t){const{mountManagementSection:r}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,33));return r(e.getStartServices,t,_.start,o)}}),r&&r.featureCatalogue.register({id:"advanced_settings",title:l,description:i.i18n.translate("advancedSettings.featureCatalogueTitle",{defaultMessage:"Customize your Kibana experience — change the date format, turn on dark mode, and more."}),icon:"gear",path:"/app/management/kibana/settings",showOnHomePage:!1,category:a.FeatureCatalogueCategory.ADMIN}),{component:_.setup}}start(){return{component:_.start}}}const g=o.a.lazy((()=>n.e(0).then(n.bind(null,32))));function f(e){return new plugin_AdvancedSettingsPlugin}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom}]);