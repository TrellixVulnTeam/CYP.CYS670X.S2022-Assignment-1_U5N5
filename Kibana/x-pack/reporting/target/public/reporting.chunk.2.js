/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.reporting_bundle_jsonpfunction=window.reporting_bundle_jsonpfunction||[]).push([[2],{34:function(e,t,i){"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),o=[];function r(e){for(var t=-1,i=0;i<o.length;i++)if(o[i].identifier===e){t=i;break}return t}function l(e,t){for(var i={},n=[],s=0;s<e.length;s++){var a=e[s],l=t.base?a[0]+t.base:a[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var p=r(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(o[p].references++,o[p].updater(d)):o.push({identifier:u,updater:j(d,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,s);else{var a=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function g(e,t,i){var n=i.css,s=i.media,a=i.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var b=null,h=0;function j(e,t){var i,n,s;if(t.singleton){var a=h++;i=b||(b=c(t)),n=d.bind(null,i,a,!1),s=d.bind(null,i,a,!0)}else i=c(t),n=g.bind(null,i,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var i=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var s=r(i[n]);o[s].references--}for(var a=l(e,t),c=0;c<i.length;c++){var u=r(i[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}i=a}}}},35:function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var s=(o=n,r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[i].concat(a).concat([s]).join("\n")}var o,r,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(n)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(s[o]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);n&&s[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},36:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4);t.default=function(){var e=n.useRef(!1),t=n.useCallback((function(){return e.current}),[]);return n.useEffect((function(){return e.current=!0,function(){e.current=!1}})),t}},37:function(e,t,i){switch(window.__kbnThemeTag__){case"v8dark":return i(38);case"v8light":return i(40)}},38:function(e,t,i){var n=i(34),s=i(39);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};n(s,a);e.exports=s.locals||{}},39:function(e,t,i){(t=i(35)(!1)).push([e.i,".kbnReporting__reportListing__typeIcon{padding-left:8px}\n",""]),e.exports=t},40:function(e,t,i){var n=i(34),s=i(41);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};n(s,a);e.exports=s.locals||{}},41:function(e,t,i){(t=i(35)(!1)).push([e.i,".kbnReporting__reportListing__typeIcon{padding-left:8px}\n",""]),e.exports=t},57:function(e,t,i){"use strict";i.r(t),i.d(t,"mountManagementSection",(function(){return W}));var n=i(6),s=i(4),a=i.n(s),o=i(32),r=i(18),l=i(0);const c=Object(s.createContext)(void 0),u=({children:e})=>{const{isLoading:t,data:i,resendRequest:n}=Object(r.c)();return Object(l.jsx)(c.Provider,{value:{isLoading:t,status:null==i?void 0:i.status,recheckStatus:n}},e)},p=()=>{const e=Object(s.useContext)(c);if(!e)throw new Error('"useIlmPolicyStatus" can only be used inside of "IlmPolicyStatusContext"');return e};var d=i(10),g=i(13),b=i.n(g),h=i(1),j=i.n(h),f=i(5),m=i(3),x=i(2),O=i(23),y=i(33),v=i.n(y);class poller_Poller{constructor(e){j()(this,"functionToPoll",void 0),j()(this,"successFunction",void 0),j()(this,"errorFunction",void 0),j()(this,"_isRunning",void 0),j()(this,"_timeoutId",void 0),j()(this,"pollFrequencyInMillis",void 0),j()(this,"trailing",void 0),j()(this,"continuePollingOnError",void 0),j()(this,"pollFrequencyErrorMultiplier",void 0),this.functionToPoll=e.functionToPoll,this.successFunction=e.successFunction||v.a.noop,this.errorFunction=e.errorFunction||v.a.noop,this.pollFrequencyInMillis=e.pollFrequencyInMillis,this.trailing=e.trailing||!1,this.continuePollingOnError=e.continuePollingOnError||!1,this.pollFrequencyErrorMultiplier=e.pollFrequencyErrorMultiplier||1,this._timeoutId=null,this._isRunning=!1}getPollFrequency(){return this.pollFrequencyInMillis}_poll(){return this.functionToPoll().then(this.successFunction).then((()=>{this._isRunning&&(this._timeoutId=setTimeout(this._poll.bind(this),this.pollFrequencyInMillis))})).catch((e=>{this.errorFunction(e),this._isRunning&&(this.continuePollingOnError?this._timeoutId=setTimeout(this._poll.bind(this),this.pollFrequencyInMillis*this.pollFrequencyErrorMultiplier):this.stop())}))}start(){this._isRunning||(this._isRunning=!0,this.trailing?this._timeoutId=setTimeout(this._poll.bind(this),this.pollFrequencyInMillis):this._poll())}stop(){this._isRunning&&(this._isRunning=!1,this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=null)}isRunning(){return this._isRunning}}var k=i(20),M=i(12),C=i(36),w=i.n(C);const I={title:m.i18n.translate("xpack.reporting.listing.ilmPolicyCallout.migrationNeededTitle",{defaultMessage:"Apply new lifecycle policy for reports"}),description:Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.ilmPolicyCallout.migrationNeededDescription",defaultMessage:"To ensure your reports are managed consistently, all reporting indices should use the {ilmPolicyName} policy.",values:{ilmPolicyName:Object(l.jsx)(f.EuiCode,null,x.k)}}),buttonLabel:m.i18n.translate("xpack.reporting.listing.ilmPolicyCallout.migrateIndicesButtonLabel",{defaultMessage:"Apply {ilmPolicyName} policy",values:{ilmPolicyName:x.k}}),migrateErrorTitle:m.i18n.translate("xpack.reporting.listing.ilmPolicyCallout.migrateIndicesErrorTitle",{defaultMessage:"Could not migrate reporting indices"}),migrateSuccessTitle:m.i18n.translate("xpack.reporting.listing.ilmPolicyCallout.migrateIndicesSuccessTitle",{defaultMessage:"Reporting policy active for all reporting indices"})},E=({toasts:e,onMigrationDone:t})=>{const[i,n]=Object(s.useState)(!1),a=w()(),{apiClient:o}=Object(r.d)();return Object(l.jsx)(f.EuiCallOut,{"data-test-subj":"migrateReportingIndicesPolicyCallOut",title:I.title},Object(l.jsx)("p",null,I.description),Object(l.jsx)(f.EuiButton,{"data-test-subj":"migrateReportingIndicesButton",isLoading:i,onClick:async()=>{try{n(!0),await o.migrateReportingIndicesIlmPolicy(),t(),e.addSuccess({title:I.migrateSuccessTitle})}catch(t){var i;e.addError(t,{title:I.migrateErrorTitle,toastMessage:null===(i=t.body)||void 0===i?void 0:i.message})}finally{a()&&n(!1)}}},I.buttonLabel))},S=({toasts:e})=>{const{isLoading:t,recheckStatus:i,status:n}=p();return t||!n||"ok"===n?null:Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)(f.EuiSpacer,{size:"m"}),Object(l.jsx)(f.EuiFlexItem,null,Object(l.jsx)(E,{toasts:e,onMigrationDone:i})))},T={buttonLabel:m.i18n.translate("xpack.reporting.listing.reports.ilmPolicyLinkText",{defaultMessage:"Edit reporting ILM policy"})},F=({locator:e,navigateToUrl:t})=>Object(l.jsx)(f.EuiButtonEmpty,{"data-test-subj":"ilmPolicyLink",size:"xs",onClick:()=>{const i=e.getRedirectUrl({page:"policy_edit",policyName:x.k});t(i)}},T.buttonLabel);class report_delete_button_ReportDeleteButton extends s.PureComponent{constructor(e){super(e),this.state={showConfirm:!1}}hideConfirm(){this.setState({showConfirm:!1})}showConfirm(){this.setState({showConfirm:!0})}renderConfirm(){const{jobsToDelete:e}=this.props,t=e.length>1?m.i18n.translate("xpack.reporting.listing.table.deleteNumConfirmTitle",{defaultMessage:"Delete {num} reports?",values:{num:e.length}}):m.i18n.translate("xpack.reporting.listing.table.deleteConfirmTitle",{defaultMessage:'Delete the "{name}" report?',values:{name:e[0].title}}),i=m.i18n.translate("xpack.reporting.listing.table.deleteConfirmMessage",{defaultMessage:"You can't recover deleted reports."}),n=m.i18n.translate("xpack.reporting.listing.table.deleteConfirmButton",{defaultMessage:"Delete"}),s=m.i18n.translate("xpack.reporting.listing.table.deleteCancelButton",{defaultMessage:"Cancel"});return Object(l.jsx)(f.EuiConfirmModal,{title:t,onCancel:()=>this.hideConfirm(),onConfirm:()=>this.props.performDelete(),confirmButtonText:n,cancelButtonText:s,defaultFocusedButton:"confirm",buttonColor:"danger"},i)}render(){const{jobsToDelete:e}=this.props;return 0===e.length?null:Object(l.jsx)(s.Fragment,null,Object(l.jsx)(f.EuiButton,{onClick:()=>this.showConfirm(),iconType:"trash",color:"danger","data-test-subj":"deleteReportButton"},m.i18n.translate("xpack.reporting.listing.table.deleteReportButton",{defaultMessage:"Delete {num, plural, one {report} other {reports} }",values:{num:e.length}})),this.state.showConfirm?this.renderConfirm():null)}}var _;!function(e){e.chromeStatus="chromeStatus",e.screenshotStatus="screenshotStatus"}(_||(_={}));const P={[_.chromeStatus]:"incomplete",[_.screenshotStatus]:"incomplete",isFlyoutVisible:!1,help:[],logs:"",isBusy:!1,success:!0},L=({apiClient:e})=>{const[t,i]=Object(s.useState)(P),a=e=>i({...t,...e}),{isBusy:o,screenshotStatus:r,chromeStatus:c,isFlyoutVisible:u,help:p,logs:d,success:g}=t,b=()=>a({...P,isFlyoutVisible:!1}),h=(e,t)=>()=>{a({isBusy:!0,[t]:"incomplete"}),e().then((e=>{a({isBusy:!1,help:e.help,logs:e.logs,success:e.success,[t]:e.success?"complete":"danger"})})).catch((e=>{a({isBusy:!1,help:[m.i18n.translate("xpack.reporting.listing.diagnosticApiCallFailure",{defaultMessage:"There was a problem running the diagnostic: {error}",values:{error:e}})],logs:`${e.message}`,success:!1,[t]:"danger"})}))},j=[{title:m.i18n.translate("xpack.reporting.listing.diagnosticBrowserTitle",{defaultMessage:"Check browser"}),children:Object(l.jsx)(s.Fragment,null,Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticBrowserMessage",defaultMessage:"Reporting uses a headless browser to generate PDF and PNGs. Validate that the browser can launch successfully."}),Object(l.jsx)(f.EuiSpacer,null),Object(l.jsx)(f.EuiButton,{disabled:o||"complete"===c,onClick:h((()=>e.verifyBrowser()),_.chromeStatus),isLoading:o&&"incomplete"===c,iconType:"complete"===c?"check":void 0},Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticBrowserButton",defaultMessage:"Check browser"}))),status:g||"complete"===c?c:"danger"}];let x;return"complete"===c&&j.push({title:m.i18n.translate("xpack.reporting.listing.diagnosticScreenshotTitle",{defaultMessage:"Check screen capture"}),children:Object(l.jsx)(s.Fragment,null,Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticScreenshotMessage",defaultMessage:"Ensure that the headless browser can capture a screenshot of a page."}),Object(l.jsx)(f.EuiSpacer,null),Object(l.jsx)(f.EuiButton,{disabled:o||"complete"===r,onClick:h((()=>e.verifyScreenCapture()),_.screenshotStatus),isLoading:o&&"incomplete"===r,iconType:"complete"===r?"check":void 0},Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticScreenshotButton",defaultMessage:"Capture screenshot"}))),status:g||"complete"===r?r:"danger"}),"complete"===r&&j.push({title:m.i18n.translate("xpack.reporting.listing.diagnosticSuccessTitle",{defaultMessage:"All set!"}),children:Object(l.jsx)(s.Fragment,null,Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticSuccessMessage",defaultMessage:"Everything looks good for reporting to function."})),status:g?r:"danger"}),g||j.push({title:m.i18n.translate("xpack.reporting.listing.diagnosticFailureTitle",{defaultMessage:"Something isn't working properly."}),children:Object(l.jsx)(s.Fragment,null,p.length?Object(l.jsx)(s.Fragment,null,Object(l.jsx)(f.EuiCallOut,{color:"danger",iconType:"alert"},Object(l.jsx)("p",null,p.join("\n")))):null,d.length?Object(l.jsx)(s.Fragment,null,Object(l.jsx)(f.EuiSpacer,null),Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticFailureDescription",defaultMessage:"Here are some details about the issue:"}),Object(l.jsx)(f.EuiSpacer,null),Object(l.jsx)(f.EuiCodeBlock,null,d)):null),status:"danger"}),u&&(x=Object(l.jsx)(f.EuiFlyout,{onClose:b,"aria-labelledby":"reportingHelperTitle",size:"m"},Object(l.jsx)(f.EuiFlyoutHeader,{hasBorder:!0},Object(l.jsx)(f.EuiTitle,{size:"m"},Object(l.jsx)("h2",null,Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticTitle",defaultMessage:"Reporting Diagnostics"}))),Object(l.jsx)(f.EuiSpacer,{size:"s"}),Object(l.jsx)(f.EuiText,{color:"subdued"},Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticDescription",defaultMessage:"Run diagnostics to automatically troubleshoot common reporting problems."}))),Object(l.jsx)(f.EuiFlyoutBody,null,Object(l.jsx)(f.EuiSteps,{steps:j})))),Object(l.jsx)("div",null,x,Object(l.jsx)(f.EuiButtonEmpty,{size:"xs",flush:"left",onClick:()=>a({isFlyoutVisible:!0})},Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.diagnosticButton",defaultMessage:"Run reporting diagnostics"})))},B=e=>{switch(e){case"search":return"discoverApp";case"dashboard":return"dashboardApp";case"visualization":return"visualizeApp";case"canvas workpad":return"canvasApp";default:return"apps"}},R={completed:m.i18n.translate("xpack.reporting.statusIndicator.completedLabel",{defaultMessage:"Done"}),completedWithWarnings:m.i18n.translate("xpack.reporting.statusIndicator.completedWithWarningsLabel",{defaultMessage:"Done, warnings detected"}),pending:m.i18n.translate("xpack.reporting.statusIndicator.pendingLabel",{defaultMessage:"Pending"}),processing:({attempt:e,of:t})=>void 0!==t?m.i18n.translate("xpack.reporting.statusIndicator.processingMaxAttemptsLabel",{defaultMessage:"Processing, attempt {attempt} of {of}",values:{attempt:e,of:t}}):m.i18n.translate("xpack.reporting.statusIndicator.processingLabel",{defaultMessage:"Processing, attempt {attempt}",values:{attempt:e}}),failed:m.i18n.translate("xpack.reporting.statusIndicator.failedLabel",{defaultMessage:"Failed"}),unknown:m.i18n.translate("xpack.reporting.statusIndicator.unknownLabel",{defaultMessage:"Unknown"}),lastStatusUpdate:({date:e})=>m.i18n.translate("xpack.reporting.statusIndicator.lastStatusUpdateLabel",{defaultMessage:"Updated at {date}",values:{date:e}})},A=({job:e})=>{const t=Object(s.useMemo)((()=>(e=>Boolean(e.getWarnings())||[x.m.WARNINGS,x.m.FAILED].some((t=>e.status===t)))(e)),[e]);let i,n;switch(e.status){case x.m.COMPLETED:if(t){i=Object(l.jsx)(f.EuiIcon,{type:"alert",color:"warning"}),n=R.completedWithWarnings;break}i=Object(l.jsx)(f.EuiIcon,{type:"checkInCircleFilled",color:"success"}),n=R.completed;break;case x.m.WARNINGS:i=Object(l.jsx)(f.EuiIcon,{type:"alert",color:"warning"}),n=R.completedWithWarnings;break;case x.m.PENDING:i=Object(l.jsx)(f.EuiLoadingSpinner,null),n=R.pending;break;case x.m.PROCESSING:i=Object(l.jsx)(f.EuiLoadingSpinner,null),n=R.processing({attempt:e.attempts,of:e.max_attempts});break;case x.m.FAILED:i=Object(l.jsx)(f.EuiIcon,{type:"crossInACircleFilled",color:"danger"}),n=R.failed;break;default:i=Object(l.jsx)(f.EuiIcon,{type:"cross",color:"subdued"}),n=R.unknown}return Object(l.jsx)(f.EuiToolTip,{content:R.lastStatusUpdate({date:e.getPrettyStatusTimestamp()})},Object(l.jsx)(f.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1,"aria-label":n},Object(l.jsx)(f.EuiFlexItem,{grow:!1},i),Object(l.jsx)(f.EuiFlexItem,{grow:!1},n)))};var D=i(11),z=i.n(D);const N=m.i18n.translate("xpack.reporting.listing.infoPanel.notApplicableLabel",{defaultMessage:"N/A"}),J=m.i18n.translate("xpack.reporting.listing.infoPanel.unknownLabel",{defaultMessage:"unknown"}),U=({info:e})=>{var t,i,n,s,o;const{services:{uiSettings:r}}=Object(d.c)(),c="Browser"===r.get("dateFormat:tz")?z.a.tz.guess():r.get("dateFormat:tz"),u=(p=r.get("dateFormat"),g=c,e=>{const t=z.a.tz(e,g);return t.isValid()?t.format(p):N});var p,g;const b=x.z.includes(e.jobtype),h=[{title:m.i18n.translate("xpack.reporting.listing.infoPanel.statusInfo",{defaultMessage:"Status"}),description:e.prettyStatus},Boolean(e.version)&&{title:m.i18n.translate("xpack.reporting.listing.infoPanel.kibanaVersion",{defaultMessage:"Kibana version"}),description:e.version},Boolean(e.spaceId)&&{title:m.i18n.translate("xpack.reporting.listing.infoPanel.space",{defaultMessage:"Kibana space"}),description:e.spaceId},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.attemptsInfo",{defaultMessage:"Attempts"}),description:e.max_attempts?m.i18n.translate("xpack.reporting.listing.infoPanel.attempts",{defaultMessage:"{attempts} of {maxAttempts}",values:{attempts:e.attempts,maxAttempts:e.max_attempts}}):e.attempts},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.contentTypeInfo",{defaultMessage:"Content type"}),description:e.content_type||N},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.sizeInfo",{defaultMessage:"Size in bytes"}),description:(null===(t=e.size)||void 0===t?void 0:t.toString())||N},b&&{title:m.i18n.translate("xpack.reporting.listing.infoPanel.dimensionsInfoHeight",{defaultMessage:"Height in pixels"}),description:null!=(null===(i=e.layout)||void 0===i||null===(n=i.dimensions)||void 0===n?void 0:n.height)?Math.ceil(e.layout.dimensions.height):J},b&&{title:m.i18n.translate("xpack.reporting.listing.infoPanel.dimensionsInfoWidth",{defaultMessage:"Width in pixels"}),description:null!=(null===(s=e.layout)||void 0===s||null===(o=s.dimensions)||void 0===o?void 0:o.width)?Math.ceil(e.layout.dimensions.width):J},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.processedByInfo",{defaultMessage:"Processed by"}),description:e.kibana_name&&e.kibana_id?`${e.kibana_name} (${e.kibana_id})`:N},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.timeoutInfo",{defaultMessage:"Timeout"}),description:e.prettyTimeout}].filter(Boolean),j=[{title:m.i18n.translate("xpack.reporting.listing.infoPanel.tzInfo",{defaultMessage:"Time zone"}),description:e.browserTimezone||N},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.createdAtInfo",{defaultMessage:"Created at"}),description:e.created_at?u(e.created_at):N},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.startedAtInfo",{defaultMessage:"Started at"}),description:e.started_at?u(e.started_at):N},{title:m.i18n.translate("xpack.reporting.listing.infoPanel.completedAtInfo",{defaultMessage:"Completed at"}),description:e.completed_at?u(e.completed_at):N}],O=e.getWarnings(),y=e.getError();return Object(l.jsx)(a.a.Fragment,null,Boolean(y)&&Object(l.jsx)(f.EuiCallOut,{title:m.i18n.translate("xpack.reporting.listing.infoPanel.callout.failedReportTitle",{defaultMessage:"Report failed"}),color:"danger"},y),Boolean(O)&&Object(l.jsx)(a.a.Fragment,null,Boolean(y)&&Object(l.jsx)(f.EuiSpacer,{size:"s"}),Object(l.jsx)(f.EuiCallOut,{title:m.i18n.translate("xpack.reporting.listing.infoPanel.callout.warningsTitle",{defaultMessage:"Report contains warnings"}),color:"warning"},O)),Object(l.jsx)(f.EuiTitle,{size:"s"},Object(l.jsx)("h3",null,m.i18n.translate("xpack.reporting.listing.infoPanel.outputSectionTitle",{defaultMessage:"Output"}))),Object(l.jsx)(f.EuiSpacer,{size:"s"}),Object(l.jsx)(f.EuiDescriptionList,{listItems:h,type:"column",align:"center",compressed:!0}),Object(l.jsx)(f.EuiSpacer,null),Object(l.jsx)(f.EuiTitle,{size:"s"},Object(l.jsx)("h3",null,m.i18n.translate("xpack.reporting.listing.infoPanel.timestampSectionTitle",{defaultMessage:"Timestamps"}))),Object(l.jsx)(f.EuiSpacer,{size:"s"}),Object(l.jsx)(f.EuiDescriptionList,{listItems:j,type:"column",align:"center",compressed:!0}))},q=({onClose:e,job:t})=>{var i;const[n,a]=Object(s.useState)(!0),[o,c]=Object(s.useState)(),[u,p]=Object(s.useState)(!1),[d,g]=Object(s.useState)(),b=w()(),{apiClient:h}=Object(r.d)();Object(s.useEffect)((()=>{!async function(){if(n)try{const e=await h.getInfo(t.id);b()&&g(e)}catch(e){b()&&c(e)}finally{b()&&a(!1)}}()}),[n,h,t.id,b]);const j=Object(l.jsx)(f.EuiButton,{"data-test-subj":"reportInfoFlyoutActionsButton",iconType:"arrowUp",onClick:()=>p((e=>!e))},m.i18n.translate("xpack.reporting.reportInfoFlyout.actionsButtonLabel",{defaultMessage:"Actions"})),x=[Object(l.jsx)(f.EuiContextMenuItem,{"data-test-subj":"reportInfoFlyoutDownloadButton",key:"download",icon:"download",disabled:!t.isDownloadReady,onClick:()=>{h.downloadReport(t.id)}},m.i18n.translate("xpack.reporting.reportInfoFlyout.downloadButtonLabel",{defaultMessage:"Download"})),Object(l.jsx)(f.EuiContextMenuItem,{"data-test-subj":"reportInfoFlyoutOpenInKibanaButton",disabled:!t.canLinkToKibanaApp,key:"openInKibanaApp",icon:"popout",onClick:()=>{window.open(h.getKibanaAppHref(t),"_blank"),window.focus()}},m.i18n.translate("xpack.reporting.reportInfoFlyout.openInKibanaAppButtonLabel",{defaultMessage:"Open in Kibana"}))];return Object(l.jsx)(f.EuiPortal,null,Object(l.jsx)(f.EuiFlyout,{ownFocus:!0,onClose:e,size:"s","aria-labelledby":"flyoutTitle","data-test-subj":"reportInfoFlyout"},Object(l.jsx)(f.EuiFlyoutHeader,{hasBorder:!0},Object(l.jsx)(f.EuiTitle,{size:"m"},Object(l.jsx)("h2",{id:"flyoutTitle"},o?m.i18n.translate("xpack.reporting.listing.table.reportInfoUnableToFetch",{defaultMessage:"Unable to fetch report info."}):null!==(i=null==d?void 0:d.title)&&void 0!==i?i:m.i18n.translate("xpack.reporting.listing.table.untitledReport",{defaultMessage:"Untitled report"})))),Object(l.jsx)(f.EuiFlyoutBody,null,n?Object(l.jsx)(f.EuiLoadingSpinner,null):o?void 0:d?Object(l.jsx)(U,{info:d}):void 0),!n&&Object(l.jsx)(f.EuiFlyoutFooter,null,Object(l.jsx)(f.EuiFlexGroup,{gutterSize:"none",justifyContent:"spaceBetween"},Object(l.jsx)(f.EuiFlexItem,{grow:!1},Object(l.jsx)(f.EuiButtonEmpty,{iconType:"cross",flush:"left",onClick:e},m.i18n.translate("xpack.reporting.listing.flyout.closeButtonLabel",{defaultMessage:"Close"}))),Object(l.jsx)(f.EuiFlexItem,{grow:!1},Object(l.jsx)(f.EuiPopover,{id:"reportInfoFlyoutActionsPopover",button:j,isOpen:u,closePopover:()=>p(!1),panelPaddingSize:"none"},Object(l.jsx)(f.EuiContextMenuPanel,{items:x})))))))};i(37);class report_listing_ReportListingUi extends s.Component{constructor(e){super(e),j()(this,"isInitialJobsFetch",void 0),j()(this,"licenseSubscription",void 0),j()(this,"mounted",void 0),j()(this,"poller",void 0),j()(this,"licenseHandler",(e=>{const{enableLinks:t,showLinks:i,message:n}=Object(M.a)(e.check("reporting","basic"));this.setState({enableLinks:t,showLinks:i,badLicenseMessage:n})})),j()(this,"onSelectionChange",(e=>{this.setState((t=>({...t,selectedJobs:e})))})),j()(this,"removeJob",(e=>{const{jobs:t}=this.state,i=t.filter((t=>t.id!==e.id));this.setState((e=>({...e,jobs:i})))})),j()(this,"renderDeleteButton",(()=>{const{selectedJobs:e}=this.state;if(0===e.length)return;return Object(l.jsx)(report_delete_button_ReportDeleteButton,b()({jobsToDelete:e,performDelete:async()=>{for(const t of e)try{await this.props.apiClient.deleteReport(t.id),this.removeJob(t),this.props.toasts.addSuccess(m.i18n.translate("xpack.reporting.listing.table.deleteConfim",{defaultMessage:"The {reportTitle} report was deleted",values:{reportTitle:t.title}}))}catch(e){throw this.props.toasts.addDanger(m.i18n.translate("xpack.reporting.listing.table.deleteFailedErrorMessage",{defaultMessage:"The report was not deleted: {error}",values:{error:e}})),e}this.setState((()=>({page:0})),this.fetchJobs)}},this.props))})),j()(this,"onTableChange",(({page:e})=>{const{index:t}=e;this.setState((()=>({page:t})),this.fetchJobs)})),j()(this,"fetchJobs",(async()=>{let e,t;this.isInitialJobsFetch&&this.setState((()=>({isLoading:!0})));try{e=await this.props.apiClient.list(this.state.page),t=await this.props.apiClient.total(),this.isInitialJobsFetch=!1}catch(e){return this.licenseAllowsToShowThisPage()?("Failed to fetch"===e.message&&this.props.toasts.addDanger(e.message||m.i18n.translate("xpack.reporting.listing.table.requestFailedErrorMessage",{defaultMessage:"Request failed"})),void(this.mounted&&this.setState((()=>({isLoading:!1,jobs:[],total:0}))))):(this.props.toasts.addDanger(this.state.badLicenseMessage),void this.props.redirect("management"))}this.mounted&&this.setState((()=>({isLoading:!1,total:t,jobs:e})))})),j()(this,"licenseAllowsToShowThisPage",(()=>this.state.showLinks&&this.state.enableLinks)),j()(this,"tableColumnWidths",{type:"5%",title:"30%",status:"20%",createdAt:"25%",content:"10%",actions:"10%"}),this.state={page:0,total:0,jobs:[],selectedJobs:[],isLoading:!1,showLinks:!1,enableLinks:!1,badLicenseMessage:"",selectedJob:void 0},this.isInitialJobsFetch=!0}render(){var e,t;const{ilmPolicyContextValue:i,urlService:s,navigateToUrl:o,capabilities:r}=this.props,c=s.locators.get("ILM_LOCATOR_ID"),u="policy-not-found"!==i.status,p=Boolean(c&&u);return Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)(f.EuiPageHeader,{"data-test-subj":"reportingPageHeader",bottomBorder:!0,pageTitle:Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.reportstitle",defaultMessage:"Reports"}),description:Object(l.jsx)(n.FormattedMessage,{id:"xpack.reporting.listing.reports.subtitle",defaultMessage:"Get reports generated in Kibana applications."})}),Object(l.jsx)(S,{toasts:this.props.toasts}),Object(l.jsx)(f.EuiSpacer,{size:"l"}),Object(l.jsx)("div",null,this.renderTable()),Object(l.jsx)(f.EuiSpacer,{size:"s"}),Object(l.jsx)(f.EuiFlexGroup,{justifyContent:"flexEnd"},(null==r||null===(e=r.management)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.index_lifecycle_management)&&Object(l.jsx)(f.EuiFlexItem,{grow:!1},i.isLoading?Object(l.jsx)(f.EuiLoadingSpinner,null):p&&Object(l.jsx)(F,{navigateToUrl:o,locator:c})),Object(l.jsx)(f.EuiFlexItem,{grow:!1},Object(l.jsx)(L,{apiClient:this.props.apiClient}))))}componentWillUnmount(){var e;this.mounted=!1,null===(e=this.poller)||void 0===e||e.stop(),this.licenseSubscription&&this.licenseSubscription.unsubscribe()}componentDidMount(){this.mounted=!0;const{pollConfig:e,license$:t}=this.props,i=Object(k.a)(e.jobsRefresh.interval);this.poller=new poller_Poller({functionToPoll:()=>this.fetchJobs(),pollFrequencyInMillis:i,trailing:!1,continuePollingOnError:!0,pollFrequencyErrorMultiplier:e.jobsRefresh.intervalErrorMultiplier}),this.poller.start(),this.licenseSubscription=t.subscribe(this.licenseHandler)}renderTable(){const{tableColumnWidths:e}=this,t=[{field:"type",width:e.type,name:m.i18n.translate("xpack.reporting.listing.tableColumns.typeTitle",{defaultMessage:"Type"}),render:(e,t)=>Object(l.jsx)("div",{className:"kbnReporting__reportListing__typeIcon"},Object(l.jsx)(f.EuiIconTip,{type:B(t.objectType),size:"s","data-test-subj":"reportJobType",content:t.objectType})),mobileOptions:{show:!0,render:e=>Object(l.jsx)("div",{"data-test-subj":"reportJobType"},e.objectType)}},{field:"title",name:m.i18n.translate("xpack.reporting.listing.tableColumns.reportTitle",{defaultMessage:"Title"}),width:e.title,render:(e,t)=>Object(l.jsx)("div",{"data-test-subj":"reportingListItemObjectTitle"},Object(l.jsx)(f.EuiLink,{"data-test-subj":`viewReportingLink${t.id}`,onClick:()=>this.setState({selectedJob:t})},e||m.i18n.translate("xpack.reporting.listing.table.noTitleLabel",{defaultMessage:"Untitled"}))),mobileOptions:{header:!1,width:"100%"}},{field:"status",width:e.status,name:m.i18n.translate("xpack.reporting.listing.tableColumns.statusTitle",{defaultMessage:"Status"}),render:(e,t)=>Object(l.jsx)(f.EuiFlexGroup,{gutterSize:"none",responsive:!1,alignItems:"center","data-test-subj":"reportJobStatus"},Object(l.jsx)(A,{job:t})),mobileOptions:{show:!1}},{field:"created_at",width:e.createdAt,name:m.i18n.translate("xpack.reporting.listing.tableColumns.createdAtTitle",{defaultMessage:"Created at"}),render:(e,t)=>Object(l.jsx)("div",{"data-test-subj":"reportJobCreatedAt"},t.getCreatedAtDate()),mobileOptions:{show:!1}},{field:"content",width:e.content,name:m.i18n.translate("xpack.reporting.listing.tableColumns.content",{defaultMessage:"Content"}),render:(e,t)=>Object(O.b)(t.jobtype),mobileOptions:{show:!1}},{name:m.i18n.translate("xpack.reporting.listing.tableColumns.actionsTitle",{defaultMessage:"Actions"}),width:e.actions,actions:[{isPrimary:!0,"data-test-subj":"reportDownloadLink",type:"icon",icon:"download",name:m.i18n.translate("xpack.reporting.listing.table.downloadReportButtonLabel",{defaultMessage:"Download report"}),description:m.i18n.translate("xpack.reporting.listing.table.downloadReportDescription",{defaultMessage:"Download this report in a new tab."}),onClick:e=>this.props.apiClient.downloadReport(e.id),enabled:e=>e.isDownloadReady},{name:m.i18n.translate("xpack.reporting.listing.table.viewReportingInfoActionButtonLabel",{defaultMessage:"View report info"}),description:m.i18n.translate("xpack.reporting.listing.table.viewReportingInfoActionButtonDescription",{defaultMessage:"View additional information about this report."}),type:"icon",icon:"iInCircle",onClick:e=>this.setState({selectedJob:e})},{name:m.i18n.translate("xpack.reporting.listing.table.openInKibanaAppLabel",{defaultMessage:"Open in Kibana"}),"data-test-subj":"reportOpenInKibanaApp",description:m.i18n.translate("xpack.reporting.listing.table.openInKibanaAppDescription",{defaultMessage:"Open the Kibana app where this report was generated."}),available:e=>e.canLinkToKibanaApp,type:"icon",icon:"popout",onClick:e=>{const t=this.props.apiClient.getKibanaAppHref(e);window.open(t,"_blank"),window.focus()}}]}],i={pageIndex:this.state.page,pageSize:10,totalItemCount:this.state.total,hidePerPageOptions:!0},n={itemId:"id",onSelectionChange:this.onSelectionChange};return Object(l.jsx)(s.Fragment,null,this.state.selectedJobs.length>0&&Object(l.jsx)(s.Fragment,null,Object(l.jsx)(f.EuiFlexGroup,{alignItems:"center",justifyContent:"flexStart",gutterSize:"m"},Object(l.jsx)(f.EuiFlexItem,{grow:!1},this.renderDeleteButton())),Object(l.jsx)(f.EuiSpacer,{size:"l"})),Object(l.jsx)(f.EuiBasicTable,{tableCaption:m.i18n.translate("xpack.reporting.listing.table.captionDescription",{defaultMessage:"Reports generated in Kibana applications"}),itemId:"id",items:this.state.jobs,loading:this.state.isLoading,columns:t,noItemsMessage:this.state.isLoading?m.i18n.translate("xpack.reporting.listing.table.loadingReportsDescription",{defaultMessage:"Loading reports"}):m.i18n.translate("xpack.reporting.listing.table.noCreatedReportsDescription",{defaultMessage:"No reports have been created"}),pagination:i,selection:n,isSelectable:!0,onChange:this.onTableChange,"data-test-subj":x.x,rowProps:()=>({"data-test-subj":x.y})}),!!this.state.selectedJob&&Object(l.jsx)(q,{onClose:()=>this.setState({selectedJob:void 0}),job:this.state.selectedJob}))}}const K=e=>{const t=p(),{apiClient:i}=Object(r.d)(),{services:{application:{capabilities:n}}}=Object(d.c)();return Object(l.jsx)(report_listing_ReportListingUi,b()({},e,{apiClient:i,capabilities:n,ilmPolicyContextValue:t}))};async function W(e,t,i,s,a,c,p){return Object(o.render)(Object(l.jsx)(n.I18nProvider,null,Object(l.jsx)(d.b,{services:{http:e.http,application:t.application,uiSettings:t.uiSettings}},Object(l.jsx)(r.a,{apiClient:a},Object(l.jsx)(u,null,Object(l.jsx)(K,{toasts:e.notifications.toasts,license$:i,pollConfig:s,redirect:t.application.navigateToApp,navigateToUrl:t.application.navigateToUrl,urlService:c}))))),p.element),()=>{Object(o.unmountComponentAtNode)(p.element)}}}}]);