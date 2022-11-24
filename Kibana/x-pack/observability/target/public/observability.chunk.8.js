/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.observability_bundle_jsonpfunction=window.observability_bundle_jsonpfunction||[]).push([[8],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var l=a(1),s=a.n(l),i=a(7),r=a(0);const n=r.i18n.translate("xpack.observability.ux.coreVitals.noData",{defaultMessage:"No data is available."}),o=r.i18n.translate("xpack.observability.ux.coreVitals.lcp",{defaultMessage:"Largest contentful paint"}),c=r.i18n.translate("xpack.observability.ux.coreVitals.fip",{defaultMessage:"First input delay"}),u=r.i18n.translate("xpack.observability.ux.coreVitals.cls",{defaultMessage:"Cumulative layout shift"}),d=r.i18n.translate("xpack.observability.ux.coreVitals.poor",{defaultMessage:"a poor"}),p=r.i18n.translate("xpack.observability.ux.coreVitals.good",{defaultMessage:"a good"}),b=r.i18n.translate("xpack.observability.ux.coreVitals.average",{defaultMessage:"an average"}),m=r.i18n.translate("xpack.observability.ux.coreVitals.legends.poor",{defaultMessage:"Poor"}),g=r.i18n.translate("xpack.observability.ux.coreVitals.legends.good",{defaultMessage:"Good"}),x=r.i18n.translate("xpack.observability.ux.coreVitals.legends.needsImprovement",{defaultMessage:"Needs improvement"}),E=r.i18n.translate("xpack.observability.ux.coreVitals.more",{defaultMessage:"more"}),v=r.i18n.translate("xpack.observability.ux.coreVitals.less",{defaultMessage:"less"}),f=r.i18n.translate("xpack.observability.ux.coreVitals.is",{defaultMessage:"is"}),h=r.i18n.translate("xpack.observability.ux.coreVitals.takes",{defaultMessage:"takes"}),k=r.i18n.translate("xpack.observability.ux.coreVitals.lcp.help",{defaultMessage:"Largest contentful paint measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading."}),y=r.i18n.translate("xpack.observability.ux.coreVitals.fid.help",{defaultMessage:"First input delay measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds."}),M=r.i18n.translate("xpack.observability.ux.coreVitals.cls.help",{defaultMessage:"Cumulative Layout Shift (CLS): measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1."});var C=a(20),w=a.n(C),V=a(76),F=a(80),S=a(15);const L=w()(i.EuiHealth).withConfig({displayName:"PaletteLegend",componentId:"sc-r7v41l-0"})(["&:hover{cursor:pointer;text-decoration:underline;}"]),I=w.a.span.withConfig({displayName:"StyledSpan",componentId:"sc-r7v41l-1"})(["&:hover{background-color:",";}"],(e=>e.darkMode?F.euiDarkVars.euiColorLightestShade:F.euiLightVars.euiColorLightestShade));function T({ranks:e,title:t,onItemHover:a,thresholds:l,isCls:r}){const[n]=Object(S.useUiSetting$)("theme:darkMode"),o=Object(i.euiPaletteForStatus)(3),c=[g,x,m];return s.a.createElement(i.EuiFlexGroup,{responsive:!1,gutterSize:"s"},o.map(((o,u)=>s.a.createElement(i.EuiFlexItem,{key:u,grow:!1,onMouseEnter:()=>{a(u)},onMouseLeave:()=>{a(null)}},s.a.createElement(i.EuiToolTip,{content:O(l,u,t,e[u],r),position:"bottom"},s.a.createElement(I,{darkMode:n},s.a.createElement(L,{color:o},s.a.createElement(i.EuiText,{size:"xs"},s.a.createElement(V.FormattedMessage,{id:"xpack.observability.ux.coreVitals.paletteLegend.rankPercentage",defaultMessage:"{labelsInd} ({ranksInd}%)",values:{labelsInd:c[u],ranksInd:null==e?void 0:e[u]}})))))))))}const P=w.a.div.withConfig({displayName:"ColoredSpan",componentId:"sc-tpi8wf-0"})(["height:16px;width:100%;cursor:pointer;"]);function z({hexCode:e,inFocus:t,percentage:a,tooltip:l,position:r}){const n=((e,t,a,l)=>{let s=0===e||100===l,i=2===e||100===l;100===l&&(s=!0,i=!0);const r={backgroundColor:a,opacity:t?.3:1};let n="";return s&&(n="4px 0 0 4px"),i&&(n="0 4px 4px 0"),s&&i&&(n="4px"),r.borderRadius=n,r})(r,t,e,a);return s.a.createElement(i.EuiFlexItem,{key:e,grow:!1,style:{width:a+"%"}},s.a.createElement(i.EuiToolTip,{content:l},s.a.createElement(P,{style:n})))}function O(e,t,a,l,s){const i=0===t,n=2===t,o=!i&&!n;return r.i18n.translate("xpack.observability.ux.dashboard.webVitals.palette.tooltip",{defaultMessage:"{percentage} % of users have {exp} experience because the {title} {isOrTakes} {moreOrLess} than {value}{averageMessage}.",values:{percentage:l,isOrTakes:s?f:h,title:null==a?void 0:a.toLowerCase(),exp:i?p:n?d:b,moreOrLess:n||o?E:v,value:i||o?e.good:e.bad,averageMessage:o?r.i18n.translate("xpack.observability.ux.coreVitals.averageMessage",{defaultMessage:" and less than {bad}",values:{bad:e.bad}}):""}})}function j({loading:e,title:t,value:a,thresholds:r,ranks:o=[100,0,0],isCls:c,helpLabel:u}){const d=Object(i.euiPaletteForStatus)(3),[p,b]=Object(l.useState)(null),m=o.indexOf(Math.max(...o));return a||e?s.a.createElement(s.a.Fragment,null,s.a.createElement(i.EuiStat,{"aria-label":`${t} ${a}`,titleSize:"s",title:null!=a?a:"",description:s.a.createElement(s.a.Fragment,null,t,s.a.createElement(i.EuiIconTip,{content:u,type:"questionInCircle"})),titleColor:d[m],isLoading:e}),s.a.createElement(i.EuiSpacer,{size:"s"}),s.a.createElement(i.EuiFlexGroup,{gutterSize:"none",alignItems:"flexStart",style:{maxWidth:350},responsive:!1},d.map(((e,a)=>s.a.createElement(z,{hexCode:e,key:e,position:a,inFocus:p!==a&&null!==p,percentage:o[a],tooltip:O(r,a,t,o[a],c)})))),s.a.createElement(i.EuiSpacer,{size:"s"}),s.a.createElement(T,{ranks:o,thresholds:r,title:t,onItemHover:e=>{b(e)},isCls:c})):s.a.createElement(i.EuiCard,{title:t,isDisabled:!0,description:n})}const N=r.i18n.translate("xpack.observability.ux.coreWebVitals",{defaultMessage:"Core web vitals"}),B=r.i18n.translate("xpack.observability.ux.coreWebVitals.browser.support",{defaultMessage:"browser support for core web vitals"});function D({loading:e,coreVitalPages:t,totalPageViews:a=0,displayTrafficMetric:n}){const[o,c]=Object(l.useState)(!1),[u,d]=Object(l.useState)(!1),p=r.i18n.translate("xpack.observability.ux.dashboard.webCoreVitals.helpAriaLabel",{defaultMessage:"help"});return s.a.createElement(i.EuiFlexGroup,{gutterSize:"none"},s.a.createElement(i.EuiFlexItem,null,s.a.createElement(i.EuiTitle,{size:"xs"},s.a.createElement("h3",null,N,s.a.createElement(i.EuiPopover,{isOpen:o,button:s.a.createElement(i.EuiButtonIcon,{"aria-label":p,onClick:()=>c(!0),color:"text",iconType:"questionInCircle"}),closePopover:()=>c(!1)},s.a.createElement("div",null,s.a.createElement(i.EuiText,null,s.a.createElement(V.FormattedMessage,{id:"xpack.observability.ux.dashboard.webCoreVitals.help",defaultMessage:"Learn more about"})," ",s.a.createElement(i.EuiLink,{href:"https://web.dev/vitals/",external:!0,target:"_blank"},N))))))),n&&a>0&&s.a.createElement(i.EuiFlexItem,{grow:!1},e?s.a.createElement(i.EuiLoadingSpinner,null):s.a.createElement(i.EuiText,{size:"s"},s.a.createElement(V.FormattedMessage,{id:"xpack.observability.ux.dashboard.webCoreVitals.traffic",defaultMessage:"{trafficPerc} of the traffic represented",values:{trafficPerc:s.a.createElement("strong",null," ",((t||0)/a*100).toFixed(0),"%")}}),s.a.createElement(i.EuiPopover,{isOpen:u,button:s.a.createElement(i.EuiButtonIcon,{"aria-label":p,onClick:()=>d(!0),color:"text",iconType:"questionInCircle"}),closePopover:()=>d(!1)},s.a.createElement("div",null,s.a.createElement(i.EuiText,null,s.a.createElement(V.FormattedMessage,{id:"xpack.observability.ux.dashboard.webCoreVitals.browser.help",defaultMessage:"Learn more about"})," ",s.a.createElement(i.EuiLink,{href:"https://github.com/GoogleChrome/web-vitals#browser-support",external:!0,target:"_blank"},B)))))))}const G=r.i18n.translate("xpack.observability.ux.coreWebVitals.service",{defaultMessage:"Service"}),_=r.i18n.translate("xpack.observability.ux.service.help",{defaultMessage:"The RUM service with the most traffic is selected"});function R({name:e}){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.EuiText,{size:"s"},G,s.a.createElement(i.EuiIconTip,{color:"text","aria-label":_,type:"questionInCircle",content:_})),s.a.createElement(i.EuiTitle,{size:"s"},s.a.createElement("h3",null,e)))}function q(e){return null==e?null:function(e,t="MicroSec"){const a=Number(null!=e?e:0)/("MicroSec"===t?1e3:1);return a<1e3?a.toFixed(0)+" ms":(a/1e3).toFixed(2)+" s"}(e,"ms")}const W={LCP:{good:"2.5s",bad:"4.0s"},FID:{good:"100ms",bad:"300ms"},CLS:{good:"0.1",bad:"0.25"}};function H({data:e,loading:t,displayServiceName:a,serviceName:s,totalPageViews:r,displayTrafficMetric:n=!1}){var d;const{lcp:p,lcpRanks:b,fid:m,fidRanks:g,cls:x,clsRanks:E,coreVitalPages:v}=e||{};return l.createElement(l.Fragment,null,l.createElement(D,{loading:t,coreVitalPages:v,totalPageViews:r,displayTrafficMetric:n}),l.createElement(i.EuiSpacer,{size:"s"}),a&&l.createElement(R,{name:s}),l.createElement(i.EuiSpacer,{size:"s"}),l.createElement(i.EuiFlexGroup,{gutterSize:"xl",justifyContent:"spaceBetween",wrap:!0},l.createElement(i.EuiFlexItem,{style:{flexBasis:380}},l.createElement(j,{title:o,value:q(p),ranks:b,loading:t,thresholds:W.LCP,helpLabel:k})),l.createElement(i.EuiFlexItem,{style:{flexBasis:380}},l.createElement(j,{title:c,value:q(m),ranks:g,loading:t,thresholds:W.FID,helpLabel:y})),l.createElement(i.EuiFlexItem,{style:{flexBasis:380}},l.createElement(j,{title:u,value:null!==(d=null==x?void 0:x.toFixed(3))&&void 0!==d?d:null,ranks:E,loading:t,thresholds:W.CLS,isCls:!0,helpLabel:M}))))}}}]);