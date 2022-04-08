!function(e){function t(t){for(var n,r,a=t[0],l=t[1],i=0,c=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);c.length;)c.shift()()}var n={},o={1:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.src=function(e){return r.p+"controls.chunk."+e+".js"}(e);var s=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var a=window.controls_bundle_jsonpfunction=window.controls_bundle_jsonpfunction||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;r(r.s=20)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){e.exports=n(18)(2)},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/presentationUtil/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);const r={getDisplayName:()=>o.i18n.translate("controls.optionsList.displayName",{defaultMessage:"Options list"}),getDescription:()=>o.i18n.translate("controls.optionsList.description",{defaultMessage:"Add a menu for selecting field values."}),summary:{getSeparator:()=>o.i18n.translate("controls.optionsList.summary.separator",{defaultMessage:", "}),getPlaceholder:()=>o.i18n.translate("controls.optionsList.summary.placeholder",{defaultMessage:"Select..."})},editor:{getIndexPatternTitle:()=>o.i18n.translate("controls.optionsList.editor.indexPatternTitle",{defaultMessage:"Index pattern"}),getDataViewTitle:()=>o.i18n.translate("controls.optionsList.editor.dataViewTitle",{defaultMessage:"Data view"}),getNoDataViewTitle:()=>o.i18n.translate("controls.optionsList.editor.noDataViewTitle",{defaultMessage:"Select data view"}),getFieldTitle:()=>o.i18n.translate("controls.optionsList.editor.fieldTitle",{defaultMessage:"Field"}),getAllowMultiselectTitle:()=>o.i18n.translate("controls.optionsList.editor.allowMultiselectTitle",{defaultMessage:"Allow multiple selections in dropdown"})},popover:{getLoadingMessage:()=>o.i18n.translate("controls.optionsList.popover.loading",{defaultMessage:"Loading filters"}),getEmptyMessage:()=>o.i18n.translate("controls.optionsList.popover.empty",{defaultMessage:"No filters found"}),getSelectionsEmptyMessage:()=>o.i18n.translate("controls.optionsList.popover.selectionsEmpty",{defaultMessage:"You have no selections"}),getAllOptionsButtonTitle:()=>o.i18n.translate("controls.optionsList.popover.allOptionsTitle",{defaultMessage:"Show all options"}),getSelectedOptionsButtonTitle:()=>o.i18n.translate("controls.optionsList.popover.selectedOptionsTitle",{defaultMessage:"Show only selected options"}),getClearAllSelectionsButtonTitle:()=>o.i18n.translate("controls.optionsList.popover.clearAllSelectionsTitle",{defaultMessage:"Clear selections"})},errors:{getDataViewNotFoundError:e=>o.i18n.translate("controls.optionsList.errors.dataViewNotFound",{defaultMessage:"Could not locate data view: {dataViewId}",values:{dataViewId:e}})}}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(2),r=n(1),a=n.n(r);class overlays_StubRef{constructor(){a()(this,"onClose",Promise.resolve())}close(){return this.onClose}}var l=n(12);let i=({field:e,query:t})=>Promise.resolve(["storybook","default","values"]);let s;const c={data:new o.PluginServiceProvider((()=>({autocomplete:{getValueSuggestions:i}}))),overlays:new o.PluginServiceProvider((()=>({openFlyout:(e,t)=>new overlays_StubRef,openConfirm:(e,t)=>Promise.resolve(!0)}))),controls:new o.PluginServiceProvider((()=>Object(l.a)())),dataViews:new o.PluginServiceProvider((()=>({get:()=>new Promise((e=>setTimeout((()=>e(s)),100))),getIdsWithTitle:()=>new Promise((e=>setTimeout((()=>e([{id:s.id,title:s.title}])),100))),getDefaultId:()=>{var e,t;return Promise.resolve(null!==(e=null===(t=s)||void 0===t?void 0:t.id)&&void 0!==e?e:null)}})))},u=(new o.PluginServiceRegistry(c),new o.PluginServices)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o="optionsListControl"},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){"use strict";n.r(t);var o=n(7);n.d(t,"OPTIONS_LIST_CONTROL",(function(){return o.a}));var r=n(10);n.d(t,"CONTROL_GROUP_TYPE",(function(){return r.a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o="control_group"},function(e,t,n){"use strict";var o=n(10);n.d(t,"a",(function(){return o.a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=()=>{const e={};return{registerControlType:t=>{e[t.type]=t},getControlFactory:t=>e[t],getControlTypes:()=>Object.keys(e)}}},function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var o,r,a;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=o;0!=r--;){var l=a[r];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);const r={getEmbeddableTitle:()=>o.i18n.translate("controls.controlGroup.title",{defaultMessage:"Control group"}),getControlButtonTitle:()=>o.i18n.translate("controls.controlGroup.toolbarButtonTitle",{defaultMessage:"Controls"}),emptyState:{getCallToAction:()=>o.i18n.translate("controls.controlGroup.emptyState.callToAction",{defaultMessage:"Controls let you filter and interact with your dashboard data"}),getAddControlButtonTitle:()=>o.i18n.translate("controls.controlGroup.emptyState.addControlButtonTitle",{defaultMessage:"Add control"}),getTwoLineLoadingTitle:()=>o.i18n.translate("controls.controlGroup.emptyState.twoLineLoadingTitle",{defaultMessage:"..."}),getDismissButton:()=>o.i18n.translate("controls.controlGroup.emptyState.dismissButton",{defaultMessage:"Dismiss"})},manageControl:{getFlyoutCreateTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.createFlyoutTitle",{defaultMessage:"Create control"}),getFlyoutEditTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.editFlyoutTitle",{defaultMessage:"Edit control"}),getTitleInputTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.titleInputTitle",{defaultMessage:"Title"}),getControlTypeTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.controlTypesTitle",{defaultMessage:"Control type"}),getWidthInputTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.widthInputTitle",{defaultMessage:"Control size"}),getSaveChangesTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.saveChangesTitle",{defaultMessage:"Save and close"}),getCancelTitle:()=>o.i18n.translate("controls.controlGroup.manageControl.cancelTitle",{defaultMessage:"Cancel"})},management:{getAddControlTitle:()=>o.i18n.translate("controls.controlGroup.management.addControl",{defaultMessage:"Add control"}),getManageButtonTitle:()=>o.i18n.translate("controls.controlGroup.management.buttonTitle",{defaultMessage:"Settings"}),getFlyoutTitle:()=>o.i18n.translate("controls.controlGroup.management.flyoutTitle",{defaultMessage:"Control settings"}),getDefaultWidthTitle:()=>o.i18n.translate("controls.controlGroup.management.defaultWidthTitle",{defaultMessage:"Default size"}),getLayoutTitle:()=>o.i18n.translate("controls.controlGroup.management.layoutTitle",{defaultMessage:"Layout"}),getDeleteButtonTitle:()=>o.i18n.translate("controls.controlGroup.management.delete",{defaultMessage:"Delete control"}),getSetAllWidthsToDefaultTitle:()=>o.i18n.translate("controls.controlGroup.management.setAllWidths",{defaultMessage:"Set all sizes to default"}),getDeleteAllButtonTitle:()=>o.i18n.translate("controls.controlGroup.management.deleteAll",{defaultMessage:"Delete all"}),controlWidth:{getWidthSwitchLegend:()=>o.i18n.translate("controls.controlGroup.management.layout.controlWidthLegend",{defaultMessage:"Change control size"}),getAutoWidthTitle:()=>o.i18n.translate("controls.controlGroup.management.layout.auto",{defaultMessage:"Auto"}),getSmallWidthTitle:()=>o.i18n.translate("controls.controlGroup.management.layout.small",{defaultMessage:"Small"}),getMediumWidthTitle:()=>o.i18n.translate("controls.controlGroup.management.layout.medium",{defaultMessage:"Medium"}),getLargeWidthTitle:()=>o.i18n.translate("controls.controlGroup.management.layout.large",{defaultMessage:"Large"})},controlStyle:{getDesignSwitchLegend:()=>o.i18n.translate("controls.controlGroup.management.layout.designSwitchLegend",{defaultMessage:"Switch control designs"}),getSingleLineTitle:()=>o.i18n.translate("controls.controlGroup.management.layout.singleLine",{defaultMessage:"Single line"}),getTwoLineTitle:()=>o.i18n.translate("controls.controlGroup.management.layout.twoLine",{defaultMessage:"Double line"})},deleteControls:{getDeleteAllTitle:()=>o.i18n.translate("controls.controlGroup.management.delete.deleteAllTitle",{defaultMessage:"Delete all controls?"}),getDeleteTitle:()=>o.i18n.translate("controls.controlGroup.management.delete.deleteTitle",{defaultMessage:"Delete control?"}),getSubtitle:()=>o.i18n.translate("controls.controlGroup.management.delete.sub",{defaultMessage:"Controls are not recoverable once removed."}),getConfirm:()=>o.i18n.translate("controls.controlGroup.management.delete.confirm",{defaultMessage:"Delete"}),getCancel:()=>o.i18n.translate("controls.controlGroup.management.delete.cancel",{defaultMessage:"Cancel"})},discardChanges:{getTitle:()=>o.i18n.translate("controls.controlGroup.management.discard.title",{defaultMessage:"Discard changes?"}),getSubtitle:()=>o.i18n.translate("controls.controlGroup.management.discard.sub",{defaultMessage:"Changes that you've made to this control will be discarded, are you sure you want to continue?"}),getConfirm:()=>o.i18n.translate("controls.controlGroup.management.discard.confirm",{defaultMessage:"Discard changes"}),getCancel:()=>o.i18n.translate("controls.controlGroup.management.discard.cancel",{defaultMessage:"Cancel"})},discardNewControl:{getTitle:()=>o.i18n.translate("controls.controlGroup.management.deleteNew.title",{defaultMessage:"Discard new control"}),getSubtitle:()=>o.i18n.translate("controls.controlGroup.management.deleteNew.sub",{defaultMessage:"Changes that you've made to this control will be discarded, are you sure you want to continue?"}),getConfirm:()=>o.i18n.translate("controls.controlGroup.management.deleteNew.confirm",{defaultMessage:"Discard control"}),getCancel:()=>o.i18n.translate("controls.controlGroup.management.deleteNew.cancel",{defaultMessage:"Cancel"})}},floatingActions:{getEditButtonTitle:()=>o.i18n.translate("controls.controlGroup.floatingActions.editTitle",{defaultMessage:"Edit control"}),getRemoveButtonTitle:()=>o.i18n.translate("controls.controlGroup.floatingActions.removeTitle",{defaultMessage:"Remove control"})}}},function(e,t,n){"use strict";var o=n(7);n.d(t,"a",(function(){return o.a}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(19).__importDefault(n(22));t.default=function(e){o.default((function(){e()}))}},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/dataViews/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t){e.exports=__kbnSharedDeps__.TsLib},function(e,t,n){n(21),__kbnBundles__.define("plugin/controls/public",n,23),__kbnBundles__.define("plugin/controls/common",n,9)},function(e,t,n){n.p=window.__kbnPublicPath__.controls},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default=function(e){o.useEffect(e,[])}},function(e,t,n){"use strict";n.r(t),n.d(t,"OPTIONS_LIST_CONTROL",(function(){return C.OPTIONS_LIST_CONTROL})),n.d(t,"CONTROL_GROUP_TYPE",(function(){return C.CONTROL_GROUP_TYPE})),n.d(t,"ControlGroupContainer",(function(){})),n.d(t,"ControlGroupContainerFactory",(function(){return control_group_container_factory_ControlGroupContainerFactory})),n.d(t,"OptionsListEmbeddableFactory",(function(){return options_list_embeddable_factory_OptionsListEmbeddableFactory})),n.d(t,"OptionsListEmbeddable",(function(){})),n.d(t,"LazyControlsCallout",(function(){return D})),n.d(t,"plugin",(function(){return j}));var o=n(1),r=n.n(o),a=n(6),l=n(2);var i=n(12);const s={data:new l.PluginServiceProvider((({startPlugins:e})=>{const{data:{autocomplete:t}}=e;return{autocomplete:t}})),overlays:new l.PluginServiceProvider((({coreStart:e})=>{const{overlays:{openFlyout:t,openConfirm:n}}=e;return{openFlyout:t,openConfirm:n}})),controls:new l.PluginServiceProvider((()=>Object(i.a)())),dataViews:new l.PluginServiceProvider((({startPlugins:e})=>{const{dataViews:{get:t,getIdsWithTitle:n,getDefaultId:o}}=e;return{get:t,getDefaultId:o,getIdsWithTitle:n}}))},c=new l.PluginServiceRegistry(s);n(7);var u=n(13),d=n.n(u),g=n(16),p=n.n(g),f=n(5),m=n.n(f),_=n(8),b=n(4),y=n(3);const T=Object(l.withSuspense)(l.LazyFieldPicker,null),v=Object(l.withSuspense)(l.LazyDataViewPicker,null),h=({onChange:e,initialInput:t,setValidState:n,setDefaultTitle:o})=>{var r,l;const{dataViews:i}=a.a.getHooks(),{getIdsWithTitle:s,getDefaultId:c,get:u}=i.useService(),[d,g]=Object(f.useState)({fieldName:null==t?void 0:t.fieldName,singleSelect:null==t?void 0:t.singleSelect,dataViewListItems:[]});p()((()=>{let n=!0;return d.fieldName&&o(d.fieldName),(async()=>{var o;const r=await s(),a=null!==(o=null==t?void 0:t.dataViewId)&&void 0!==o?o:await c();let l;a&&(e({dataViewId:a}),l=await u(a)),n&&g((e=>({...e,dataView:l,dataViewListItems:r})))})(),()=>{n=!1}})),Object(f.useEffect)((()=>n(Boolean(d.fieldName)&&Boolean(d.dataView))),[d.fieldName,n,d.dataView]);const{dataView:h,fieldName:w}=d;return Object(y.jsx)(m.a.Fragment,null,Object(y.jsx)(_.EuiFormRow,{fullWidth:!0,label:b.a.editor.getDataViewTitle()},Object(y.jsx)(v,{dataViews:d.dataViewListItems,selectedDataViewId:null==h?void 0:h.id,onChangeDataViewId:t=>{e({dataViewId:t}),u(t).then((e=>g((t=>({...t,dataView:e})))))},trigger:{label:null!==(r=null===(l=d.dataView)||void 0===l?void 0:l.title)&&void 0!==r?r:b.a.editor.getNoDataViewTitle()}})),Object(y.jsx)(_.EuiFormRow,{fullWidth:!0,label:b.a.editor.getFieldTitle()},Object(y.jsx)(T,{filterPredicate:e=>e.aggregatable&&"string"===e.type||"boolean"===e.type,selectedFieldName:w,dataView:h,onSelectField:t=>{var n;o(null!==(n=t.displayName)&&void 0!==n?n:t.name),e({fieldName:t.name}),g((e=>({...e,fieldName:t.name})))}})),Object(y.jsx)(_.EuiFormRow,{fullWidth:!0},Object(y.jsx)(_.EuiSwitch,{label:b.a.editor.getAllowMultiselectTitle(),checked:!d.singleSelect,onChange:()=>{e({singleSelect:!d.singleSelect}),g((e=>({...e,singleSelect:!e.singleSelect})))}})))};var w=n(15),S=n(17);const O="optionsListDataView";class options_list_embeddable_factory_OptionsListEmbeddableFactory{constructor(){r()(this,"type",w.a),r()(this,"canCreateNew",(()=>!1)),r()(this,"presaveTransformFunction",((e,t)=>(!t||d()(e.fieldName,t.getInput().fieldName)&&d()(e.dataViewId,t.getInput().dataViewId)||(e.selectedOptions=[]),e))),r()(this,"controlEditorComponent",h),r()(this,"isEditable",(()=>Promise.resolve(!1))),r()(this,"getDisplayName",(()=>b.a.getDisplayName())),r()(this,"getIconType",(()=>"list")),r()(this,"getDescription",(()=>b.a.getDescription())),r()(this,"inject",((e,t)=>{const n={...e};return t.forEach((e=>{e.name===O&&(n.dataViewId=e.id)})),n})),r()(this,"extract",(e=>{const t={...e},n=[];return"dataViewId"in t&&(n.push({name:O,type:S.DATA_VIEW_SAVED_OBJECT_TYPE,id:t.dataViewId}),delete t.dataViewId),{state:t,references:n}}))}async create(e,t){const{OptionsListEmbeddable:o}=await Promise.all([n.e(0),n.e(4)]).then(n.bind(null,74));return Promise.resolve(new o(e,{},t))}}class plugin_ControlsPlugin{constructor(){r()(this,"inlineEditors",{})}setup(e,t){e.getStartServices().then((([e,t])=>{n.registerEmbeddableFactory(C.CONTROL_GROUP_TYPE,new control_group_container_factory_ControlGroupContainerFactory(t.embeddable))}));const{embeddable:n}=t,o=new options_list_embeddable_factory_OptionsListEmbeddableFactory,r=o;return this.inlineEditors[C.OPTIONS_LIST_CONTROL]={controlEditorComponent:r.controlEditorComponent,presaveTransformFunction:r.presaveTransformFunction},n.registerEmbeddableFactory(C.OPTIONS_LIST_CONTROL,o),{}}start(e,t){a.a.setRegistry(c.start({coreStart:e,startPlugins:t}));const{controls:n}=a.a.getServices(),{embeddable:o}=t,r=o.getEmbeddableFactory(C.OPTIONS_LIST_CONTROL),l=r,{controlEditorComponent:i,presaveTransformFunction:s}=this.inlineEditors[C.OPTIONS_LIST_CONTROL];return l.controlEditorComponent=i,l.presaveTransformFunction=s,r&&n.registerControlType(r),{ContextProvider:a.a.getContextProvider(),controlsService:n}}stop(){}}var C=n(9),P=n(11),M=n(14);const L=e=>`${e.explicitInput.id}:`;class control_group_container_factory_ControlGroupContainerFactory{constructor(e){r()(this,"isContainerType",!0),r()(this,"type",P.a),r()(this,"inject",void 0),r()(this,"extract",void 0),r()(this,"isEditable",(async()=>!1)),r()(this,"getDisplayName",(()=>M.a.getEmbeddableTitle())),r()(this,"create",(async(e,t)=>{const{ControlGroupContainer:o}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,73));return new o(e,t)})),this.persistableStateService=e,this.inject=(e=>(t,n)=>{const o={...t};if("panels"in o){o.panels={...o.panels};for(const[t,r]of Object.entries(o.panels)){o.panels[t]={...r};const a=L(r),l=n.filter((e=>0===e.name.indexOf(a))).map((e=>({...e,name:e.name.replace(a,"")}))),i=0===l.length?n:l,{type:s,...c}=e.inject({...o.panels[t].explicitInput,type:o.panels[t].type},i);o.panels[t].explicitInput=c}}return o})(this.persistableStateService),this.extract=(e=>t=>{const n={...t},o=[];if("panels"in n){n.panels={...n.panels};for(const[t,r]of Object.entries(n.panels)){const a=L(r),{state:l,references:i}=e.extract({...r.explicitInput,type:r.type}),s=i.map((e=>({...e,name:`${a}${e.name}`})));o.push(...s);const{type:c,...u}=l;n.panels[t].explicitInput=u}}return{state:n,references:o}})(this.persistableStateService)}getDefaultInput(){return{panels:{},ignoreParentSettings:{ignoreFilters:!1,ignoreQuery:!1,ignoreTimerange:!1}}}}const D=m.a.lazy((()=>n.e(3).then(n.bind(null,75))));function j(){return new plugin_ControlsPlugin}},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone}]);