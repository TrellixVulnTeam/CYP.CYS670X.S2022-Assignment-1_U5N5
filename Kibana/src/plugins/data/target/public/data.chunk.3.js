(window.data_bundle_jsonpfunction=window.data_bundle_jsonpfunction||[]).push([[3,5],{115:function(e,t,a){"use strict";a.r(t);var r=a(3),s=a.n(r),n=a(1),i=a(17),o=a(106),l=a.n(o),u=a(4),d=a.n(u),c=a(132),p=a.n(c),h=a(26),m=a(28),v=a(126),g=a(14),b=a(5),y=a(124),f=a(108);class filter_options_FilterOptionsUI extends u.Component{constructor(...e){super(...e),s()(this,"buttonRef",d.a.createRef()),s()(this,"state",{isPopoverOpen:!1}),s()(this,"togglePopover",(()=>{this.setState((e=>({isPopoverOpen:!e.isPopoverOpen})))})),s()(this,"closePopover",(()=>{var e;this.setState({isPopoverOpen:!1}),null===(e=this.buttonRef.current)||void 0===e||e.focus()}))}render(){const e={id:0,items:[{name:this.props.intl.formatMessage({id:"data.filter.options.enableAllFiltersButtonLabel",defaultMessage:"Enable all"}),icon:"eye",onClick:()=>{this.closePopover(),this.props.onEnableAll()},"data-test-subj":"enableAllFilters"},{name:this.props.intl.formatMessage({id:"data.filter.options.disableAllFiltersButtonLabel",defaultMessage:"Disable all"}),icon:"eyeClosed",onClick:()=>{this.closePopover(),this.props.onDisableAll()},"data-test-subj":"disableAllFilters"},{name:this.props.intl.formatMessage({id:"data.filter.options.pinAllFiltersButtonLabel",defaultMessage:"Pin all"}),icon:"pin",onClick:()=>{this.closePopover(),this.props.onPinAll()},"data-test-subj":"pinAllFilters"},{name:this.props.intl.formatMessage({id:"data.filter.options.unpinAllFiltersButtonLabel",defaultMessage:"Unpin all"}),icon:"pin",onClick:()=>{this.closePopover(),this.props.onUnpinAll()},"data-test-subj":"unpinAllFilters"},{name:this.props.intl.formatMessage({id:"data.filter.options.invertNegatedFiltersButtonLabel",defaultMessage:"Invert inclusion"}),icon:"invert",onClick:()=>{this.closePopover(),this.props.onToggleAllNegated()},"data-test-subj":"invertInclusionAllFilters"},{name:this.props.intl.formatMessage({id:"data.filter.options.invertDisabledFiltersButtonLabel",defaultMessage:"Invert enabled/disabled"}),icon:"eye",onClick:()=>{this.closePopover(),this.props.onToggleAllDisabled()},"data-test-subj":"invertEnableDisableAllFilters"},{name:this.props.intl.formatMessage({id:"data.filter.options.deleteAllFiltersButtonLabel",defaultMessage:"Remove all"}),icon:"trash",onClick:()=>{this.closePopover(),this.props.onRemoveAll()},"data-test-subj":"removeAllFilters"}]};return d.a.createElement(g.EuiPopover,{id:"popoverForAllFilters",className:"globalFilterGroup__allFiltersPopover",isOpen:this.state.isPopoverOpen,closePopover:this.closePopover,button:d.a.createElement(g.EuiButtonIcon,{onClick:this.togglePopover,iconType:"filter","aria-label":this.props.intl.formatMessage({id:"data.filter.options.changeAllFiltersButtonLabel",defaultMessage:"Change all filters"}),title:this.props.intl.formatMessage({id:"data.filter.options.changeAllFiltersButtonLabel",defaultMessage:"Change all filters"}),"data-test-subj":"showFilterActions",buttonRef:this.buttonRef}),anchorPosition:"rightUp",panelPaddingSize:"none",repositionOnScroll:!0},d.a.createElement(g.EuiPopoverTitle,{paddingSize:"m"},d.a.createElement(i.FormattedMessage,{id:"data.filter.searchBar.changeAllFiltersTitle",defaultMessage:"Change all filters"})),d.a.createElement(g.EuiContextMenu,{initialPanelId:0,panels:[e]}))}}const E=Object(i.injectI18n)(filter_options_FilterOptionsUI);var S=a(2);const F=d.a.memo((function(e){const t=Object(u.useRef)(null),[a,r]=Object(u.useState)(!1),s=Object(m.useKibana)(),{appName:n,usageCollection:o,uiSettings:c}=s.services;if(!c)return null;const p=null==o?void 0:o.reportUiCounter.bind(o,n);function v(t){e.onFiltersUpdated&&e.onFiltersUpdated(t)}const F=()=>r(!a);function Q(t){null==p||p(h.METRIC_TYPE.CLICK,"filter:added"),r(!1);v([...e.filters,t])}const T=l()("globalFilterBar",e.className);return d.a.createElement(g.EuiFlexGroup,{className:"globalFilterGroup",gutterSize:"none",alignItems:"flexStart",responsive:!1},d.a.createElement(g.EuiFlexItem,{className:"globalFilterGroup__branch",grow:!1},d.a.createElement(E,{onEnableAll:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:enable_all"),v(e.filters.map(b.s))},onDisableAll:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:disable_all"),v(e.filters.map(b.r))},onPinAll:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:pin_all"),v(e.filters.map(b.O))},onUnpinAll:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:unpin_all"),v(e.filters.map(b.U))},onToggleAllNegated:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:invert_all"),v(e.filters.map(b.R))},onToggleAllDisabled:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:toggle_all"),v(e.filters.map(b.Q))},onRemoveAll:function(){null==p||p(h.METRIC_TYPE.CLICK,"filter:remove_all"),v([])}})),d.a.createElement(g.EuiFlexItem,{className:"globalFilterGroup__filterFlexItem"},d.a.createElement(g.EuiFlexGroup,{ref:t,className:T,wrap:!0,responsive:!1,gutterSize:"xs",alignItems:"center",tabIndex:-1},e.filters.map(((a,r)=>d.a.createElement(g.EuiFlexItem,{key:r,grow:!1,className:"globalFilterBar__flexItem"},d.a.createElement(f.FilterItem,{id:`${r}`,intl:e.intl,filter:a,onUpdate:t=>function(t,a){null==p||p(h.METRIC_TYPE.CLICK,"filter:edited");const r=[...e.filters];r[t]=a,v(r)}(r,t),onRemove:()=>function(a){var r;null==p||p(h.METRIC_TYPE.CLICK,"filter:removed");const s=[...e.filters];s.splice(a,1),v(s),null===(r=t.current)||void 0===r||r.focus()}(r),indexPatterns:e.indexPatterns,uiSettings:c,timeRangeForSuggestionsOverride:e.timeRangeForSuggestionsOverride})))),function(){const t=c.get(S.UI_SETTINGS.FILTERS_PINNED_BY_DEFAULT),[s]=e.indexPatterns,n=s&&s.id,o=Object(b.e)(t,n),l=d.a.createElement(g.EuiButtonEmpty,{size:"s",onClick:F,"data-test-subj":"addFilter",className:"globalFilterBar__addButton"},"+"," ",d.a.createElement(i.FormattedMessage,{id:"data.filter.filterBar.addFilterButtonLabel",defaultMessage:"Add filter"}));return d.a.createElement(g.EuiFlexItem,{grow:!1},d.a.createElement(g.EuiPopover,{id:"addFilterPopover",button:l,isOpen:a,closePopover:()=>r(!1),anchorPosition:"downLeft",panelPaddingSize:"none",initialFocus:".filterEditor__hiddenItem",ownFocus:!0,repositionOnScroll:!0},d.a.createElement(g.EuiFlexItem,{grow:!1},d.a.createElement("div",{style:{width:f.FILTER_EDITOR_WIDTH,maxWidth:"100%"}},d.a.createElement(y.a,{filter:o,indexPatterns:e.indexPatterns,onSubmit:Q,onCancel:()=>r(!1),key:JSON.stringify(o),timeRangeForSuggestionsOverride:e.timeRangeForSuggestionsOverride})))))}())))})),Q=Object(i.injectI18n)(F);var T=a(0);function C({savedQuery:e,savedQueryService:t,onSave:a,onClose:r,showFilterOption:s=!0,showTimeFilterOption:i=!0}){var o,l,c,p;const[h,m]=Object(u.useState)(null!==(o=null==e?void 0:e.attributes.title)&&void 0!==o?o:""),[v,b]=Object(u.useState)(Boolean(e)),[y,f]=Object(u.useState)(null!==(l=null==e?void 0:e.attributes.description)&&void 0!==l?l:""),[E,S]=Object(u.useState)([]),[F,Q]=Object(u.useState)(Boolean(null===(c=null==e?void 0:e.attributes.filters)||void 0===c||c)),[C,P]=Object(u.useState)(Boolean(null!==(p=null==e?void 0:e.attributes.timefilter)&&void 0!==p&&p)),[R,B]=Object(u.useState)([]),I=T.i18n.translate("data.search.searchBar.savedQueryForm.titleConflictText",{defaultMessage:"Name conflicts with an existing saved query"}),w=T.i18n.translate("data.search.searchBar.savedQueryDescriptionText",{defaultMessage:"Save query text and filters that you want to use again."});Object(u.useEffect)((()=>{(async()=>{const e=await t.getAllSavedQueries(),a=Object(n.sortBy)(e,"attributes.title");S(a)})()}),[t]);const O=Object(u.useCallback)((()=>{const t=[];return E.find((t=>!e&&t.attributes.title===h))&&t.push(I),Object(n.isEqual)(t,R)?!R.length:(B(t),!1)}),[E,e,h,I,R]),j=Object(u.useCallback)((()=>{O()&&a({id:null==e?void 0:e.id,title:h,description:y,shouldIncludeFilters:F,shouldIncludeTimefilter:C})}),[O,a,null==e?void 0:e.id,h,y,F,C]),M=Object(u.useCallback)((e=>{b(Boolean(e.target.value)),B([]),m(e.target.value)}),[]),q=Object(u.useCallback)((()=>{const e=h.trim();h.length>e.length&&m(e)}),[h]),_=R.length>0,x=d.a.createElement(g.EuiForm,{isInvalid:_,error:R,"data-test-subj":"saveQueryForm"},d.a.createElement(g.EuiFormRow,null,d.a.createElement(g.EuiText,{color:"subdued"},w)),d.a.createElement(g.EuiFormRow,{label:T.i18n.translate("data.search.searchBar.savedQueryNameLabelText",{defaultMessage:"Name"}),helpText:T.i18n.translate("data.search.searchBar.savedQueryNameHelpText",{defaultMessage:"Name is required, it cannot contain leading or trailing whitespace and must be unique."}),isInvalid:_},d.a.createElement(g.EuiFieldText,{disabled:!!e,value:h,name:"title",onChange:M,"data-test-subj":"saveQueryFormTitle",isInvalid:_,onBlur:q})),d.a.createElement(g.EuiFormRow,{label:T.i18n.translate("data.search.searchBar.savedQueryDescriptionLabelText",{defaultMessage:"Description"})},d.a.createElement(g.EuiFieldText,{value:y,name:"description",onChange:e=>{f(e.target.value)},"data-test-subj":"saveQueryFormDescription"})),s&&d.a.createElement(g.EuiFormRow,null,d.a.createElement(g.EuiSwitch,{name:"shouldIncludeFilters",label:T.i18n.translate("data.search.searchBar.savedQueryIncludeFiltersLabelText",{defaultMessage:"Include filters"}),checked:F,onChange:()=>{Q(!F)},"data-test-subj":"saveQueryFormIncludeFiltersOption"})),i&&d.a.createElement(g.EuiFormRow,null,d.a.createElement(g.EuiSwitch,{name:"shouldIncludeTimefilter",label:T.i18n.translate("data.search.searchBar.savedQueryIncludeTimeFilterLabelText",{defaultMessage:"Include time filter"}),checked:C,onChange:()=>{P(!C)},"data-test-subj":"saveQueryFormIncludeTimeFilterOption"})));return d.a.createElement(g.EuiModal,{onClose:r,initialFocus:"[name=title]"},d.a.createElement(g.EuiModalHeader,null,d.a.createElement(g.EuiModalHeaderTitle,null,T.i18n.translate("data.search.searchBar.savedQueryFormTitle",{defaultMessage:"Save query"}))),d.a.createElement(g.EuiModalBody,null,x),d.a.createElement(g.EuiModalFooter,null,d.a.createElement(g.EuiButtonEmpty,{onClick:r,"data-test-subj":"savedQueryFormCancelButton"},T.i18n.translate("data.search.searchBar.savedQueryFormCancelButtonText",{defaultMessage:"Cancel"})),d.a.createElement(g.EuiButton,{onClick:j,fill:!0,"data-test-subj":"savedQueryFormSaveButton",disabled:_||!v},T.i18n.translate("data.search.searchBar.savedQueryFormSaveButtonText",{defaultMessage:"Save"}))))}const P=({savedQuery:e,isSelected:t,onSelect:a,onDelete:r,showWriteOperations:s})=>{const[n,i]=Object(u.useState)(!1),o=t?T.i18n.translate("data.search.searchBar.savedQueryPopoverSavedQueryListItemSelectedButtonAriaLabel",{defaultMessage:"Saved query button selected {savedQueryName}. Press to clear any changes.",values:{savedQueryName:e.attributes.title}}):T.i18n.translate("data.search.searchBar.savedQueryPopoverSavedQueryListItemButtonAriaLabel",{defaultMessage:"Saved query button {savedQueryName}",values:{savedQueryName:e.attributes.title}}),c=t?`load-saved-query-${e.attributes.title}-button saved-query-list-item-selected`:`load-saved-query-${e.attributes.title}-button`,p=l()("kbnSavedQueryListItem",{"kbnSavedQueryListItem-selected":t}),h=d.a.createElement("span",{className:"kbnSavedQueryListItem__label"},d.a.createElement("span",{className:"kbnSavedQueryListItem__labelText"},e.attributes.title)," ",e.attributes.description&&d.a.createElement(g.EuiIconTip,{type:"iInCircle",content:e.attributes.description,"aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverSavedQueryListItemDescriptionAriaLabel",{defaultMessage:"{savedQueryName} description",values:{savedQueryName:e.attributes.title}})}));return d.a.createElement(u.Fragment,null,d.a.createElement(g.EuiListGroupItem,{className:p,key:e.id,"data-test-subj":`saved-query-list-item ${c} ${t?"saved-query-list-item-selected":""}`,isActive:t,onClick:()=>{a(e)},"aria-label":o,label:h,iconType:t?"check":void 0,extraAction:s?{color:"danger",onClick:()=>i(!0),iconType:"trash",iconSize:"s","aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverDeleteButtonAriaLabel",{defaultMessage:"Delete saved query {savedQueryName}",values:{savedQueryName:e.attributes.title}}),title:T.i18n.translate("data.search.searchBar.savedQueryPopoverDeleteButtonAriaLabel",{defaultMessage:"Delete saved query {savedQueryName}",values:{savedQueryName:e.attributes.title}}),"data-test-subj":`delete-saved-query-${e.attributes.title}-button`}:void 0}),n&&d.a.createElement(g.EuiConfirmModal,{title:T.i18n.translate("data.search.searchBar.savedQueryPopoverConfirmDeletionTitle",{defaultMessage:'Delete "{savedQueryName}"?',values:{savedQueryName:e.attributes.title}}),confirmButtonText:T.i18n.translate("data.search.searchBar.savedQueryPopoverConfirmDeletionConfirmButtonText",{defaultMessage:"Delete"}),cancelButtonText:T.i18n.translate("data.search.searchBar.savedQueryPopoverConfirmDeletionCancelButtonText",{defaultMessage:"Cancel"}),onConfirm:()=>{r(e),i(!1)},buttonColor:"danger",onCancel:()=>{i(!1)}}))};function R({showSaveQuery:e,loadedSavedQuery:t,onSave:a,onSaveAsNew:r,onLoad:s,onClearSavedQuery:i,savedQueryService:o}){const[l,c]=Object(u.useState)(!1),[p,h]=Object(u.useState)([]),[m,v]=Object(u.useState)(0),[b,y]=Object(u.useState)(0),f=Object(u.useRef)((()=>{}));Object(u.useEffect)((()=>{l&&(async()=>{f.current();let e=!1;f.current=()=>{e=!0};const{total:t,queries:a}=await o.findSavedQueries("",50,b+1);if(e)return;const r=Object(n.sortBy)(a,"attributes.title");v(t),h(r)})()}),[l,b,o]);const E=Object(u.useCallback)((()=>c((e=>!e))),[c]),S=Object(u.useCallback)((()=>c(!1)),[]),F=Object(u.useCallback)((()=>{S(),a()}),[S,a]),Q=Object(u.useCallback)((()=>{S(),r()}),[S,r]),C=Object(u.useCallback)((e=>{S(),s(e)}),[S,s]),R=Object(u.useCallback)((e=>{(async e=>{f.current(),h(p.filter((t=>t.id!==e.id))),t&&t.id===e.id&&i(),await o.deleteSavedQuery(e.id),y(0)})(e),S()}),[S,t,i,p,o]),B=T.i18n.translate("data.search.searchBar.savedQueryDescriptionText",{defaultMessage:"Save query text and filters that you want to use again."}),I=T.i18n.translate("data.search.searchBar.savedQueryNoSavedQueriesText",{defaultMessage:"There are no saved queries."})+" "+B,w=T.i18n.translate("data.search.searchBar.savedQueryPopoverTitleText",{defaultMessage:"Saved Queries"}),O=d.a.createElement(g.EuiButtonEmpty,{onClick:E,"aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverButtonText",{defaultMessage:"See saved queries"}),title:T.i18n.translate("data.search.searchBar.savedQueryPopoverButtonText",{defaultMessage:"See saved queries"}),"data-test-subj":"saved-query-management-popover-button"},d.a.createElement(g.EuiIcon,{type:"save",className:"euiQuickSelectPopover__buttonText"}),d.a.createElement(g.EuiIcon,{type:"arrowDown"}));return d.a.createElement(u.Fragment,null,d.a.createElement(g.EuiPopover,{id:"savedQueryPopover",button:O,isOpen:l,closePopover:S,anchorPosition:"downLeft",panelPaddingSize:"none",buffer:-8,repositionOnScroll:!0,ownFocus:!0},d.a.createElement("div",{className:"kbnSavedQueryManagement__popover","data-test-subj":"saved-query-management-popover"},d.a.createElement(g.EuiPopoverTitle,{paddingSize:"m",id:"savedQueryManagementPopoverTitle"},w),p.length>0?d.a.createElement(u.Fragment,null,d.a.createElement(g.EuiText,{size:"s",color:"subdued",className:"kbnSavedQueryManagement__text"},d.a.createElement("p",null,B)),d.a.createElement("div",{className:"kbnSavedQueryManagement__listWrapper"},d.a.createElement(g.EuiListGroup,{flush:!0,className:"kbnSavedQueryManagement__list","aria-labelledby":"savedQueryManagementPopoverTitle"},(()=>{const a=p.filter((e=>!t||e.id!==t.id));return(t&&a.length!==p.length?[t,...a]:[...a]).map((a=>d.a.createElement(P,{key:a.id,savedQuery:a,isSelected:!!t&&t.id===a.id,onSelect:C,onDelete:R,showWriteOperations:!!e})))})())),d.a.createElement(g.EuiPagination,{className:"kbnSavedQueryManagement__pagination",pageCount:Math.ceil(m/50),activePage:b,onPageClick:e=>{y(e)}})):d.a.createElement(u.Fragment,null,d.a.createElement(g.EuiText,{size:"s",color:"subdued",className:"kbnSavedQueryManagement__text"},d.a.createElement("p",null,I)),d.a.createElement(g.EuiSpacer,{size:"s"})),d.a.createElement(g.EuiPopoverFooter,{paddingSize:"m"},d.a.createElement(g.EuiFlexGroup,{direction:"rowReverse",gutterSize:"s",alignItems:"center",justifyContent:"flexEnd",responsive:!1,wrap:!0},e&&t&&d.a.createElement(u.Fragment,null,d.a.createElement(g.EuiFlexItem,{grow:!1},d.a.createElement(g.EuiButton,{size:"s",fill:!0,onClick:F,"aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverSaveChangesButtonAriaLabel",{defaultMessage:"Save changes to {title}",values:{title:t.attributes.title}}),"data-test-subj":"saved-query-management-save-changes-button"},T.i18n.translate("data.search.searchBar.savedQueryPopoverSaveChangesButtonText",{defaultMessage:"Save changes"}))),d.a.createElement(g.EuiFlexItem,{grow:!1},d.a.createElement(g.EuiButton,{size:"s",onClick:Q,"aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverSaveAsNewButtonAriaLabel",{defaultMessage:"Save as new saved query"}),"data-test-subj":"saved-query-management-save-as-new-button"},T.i18n.translate("data.search.searchBar.savedQueryPopoverSaveAsNewButtonText",{defaultMessage:"Save as new"})))),e&&!t&&d.a.createElement(g.EuiFlexItem,{grow:!1},d.a.createElement(g.EuiButton,{size:"s",fill:!0,onClick:F,"aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverSaveButtonAriaLabel",{defaultMessage:"Save a new saved query"}),"data-test-subj":"saved-query-management-save-button"},T.i18n.translate("data.search.searchBar.savedQueryPopoverSaveButtonText",{defaultMessage:"Save current query"}))),d.a.createElement(g.EuiFlexItem,null),d.a.createElement(g.EuiFlexItem,{grow:!1},t&&d.a.createElement(g.EuiButtonEmpty,{size:"s",flush:"left",onClick:i,"aria-label":T.i18n.translate("data.search.searchBar.savedQueryPopoverClearButtonAriaLabel",{defaultMessage:"Clear current saved query"}),"data-test-subj":"saved-query-management-clear-button"},T.i18n.translate("data.search.searchBar.savedQueryPopoverClearButtonText",{defaultMessage:"Clear"}))))))))}class search_bar_SearchBarUI extends u.Component{constructor(...e){super(...e),s()(this,"services",this.props.kibana.services),s()(this,"savedQueryService",this.services.data.query.savedQueries),s()(this,"state",{isFiltersVisible:!0,showSaveQueryModal:!1,showSaveNewQueryModal:!1,showSavedQueryPopover:!1,currentProps:this.props,query:this.props.query?{...this.props.query}:void 0,dateRangeFrom:Object(n.get)(this.props,"dateRangeFrom","now-15m"),dateRangeTo:Object(n.get)(this.props,"dateRangeTo","now")}),s()(this,"isDirty",(()=>!this.props.showDatePicker&&this.state.query&&this.props.query?this.state.query.query!==this.props.query.query:this.state.query&&this.props.query&&this.state.query.query!==this.props.query.query||this.state.dateRangeFrom!==this.props.dateRangeFrom||this.state.dateRangeTo!==this.props.dateRangeTo)),s()(this,"onSave",(async(e,t=!1)=>{if(!this.state.query)return;const a={title:e.title,description:e.description,query:this.state.query};e.shouldIncludeFilters&&(a.filters=this.props.filters),e.shouldIncludeTimefilter&&void 0!==this.state.dateRangeTo&&void 0!==this.state.dateRangeFrom&&void 0!==this.props.refreshInterval&&void 0!==this.props.isRefreshPaused&&(a.timefilter={from:this.state.dateRangeFrom,to:this.state.dateRangeTo,refreshInterval:{value:this.props.refreshInterval,pause:this.props.isRefreshPaused}});try{let r;r=this.props.savedQuery&&!t?await this.savedQueryService.updateQuery(e.id,a):await this.savedQueryService.createQuery(a),this.services.notifications.toasts.addSuccess(`Your query "${r.attributes.title}" was saved`),this.setState({showSaveQueryModal:!1,showSaveNewQueryModal:!1}),this.props.onSaved&&this.props.onSaved(r)}catch(e){throw this.services.notifications.toasts.addDanger(`An error occured while saving your query: ${e.message}`),e}})),s()(this,"onInitiateSave",(()=>{this.setState({showSaveQueryModal:!0})})),s()(this,"onInitiateSaveNew",(()=>{this.setState({showSaveNewQueryModal:!0})})),s()(this,"onQueryBarChange",(e=>{this.setState({query:e.query,dateRangeFrom:e.dateRange.from,dateRangeTo:e.dateRange.to}),this.props.onQueryChange&&this.props.onQueryChange(e)})),s()(this,"onQueryBarSubmit",(e=>{this.setState({query:e.query,dateRangeFrom:e.dateRange&&e.dateRange.from||this.state.dateRangeFrom,dateRangeTo:e.dateRange&&e.dateRange.to||this.state.dateRangeTo},(()=>{var e;this.props.onQuerySubmit&&this.props.onQuerySubmit({query:this.state.query,dateRange:{from:this.state.dateRangeFrom,to:this.state.dateRangeTo}}),null===(e=this.services.usageCollection)||void 0===e||e.reportUiCounter(this.services.appName,h.METRIC_TYPE.CLICK,"query_submitted")}))})),s()(this,"onLoadSavedQuery",(e=>{const t=Object(n.get)(e,"attributes.timefilter.from",this.state.dateRangeFrom),a=Object(n.get)(e,"attributes.timefilter.to",this.state.dateRangeTo);this.setState({query:e.attributes.query,dateRangeFrom:t,dateRangeTo:a}),this.props.onSavedQueryUpdated&&this.props.onSavedQueryUpdated(e)})),s()(this,"renderSavedQueryManagement",p()(((e,t,a)=>e&&d.a.createElement(R,{showSaveQuery:t,loadedSavedQuery:a,onSave:this.onInitiateSave,onSaveAsNew:this.onInitiateSaveNew,onLoad:this.onLoadSavedQuery,savedQueryService:this.savedQueryService,onClearSavedQuery:e}))))}static getDerivedStateFromProps(e,t){if(Object(n.isEqual)(t.currentProps,e))return null;let a=null;e.query&&e.query.query!==Object(n.get)(t,"currentProps.query.query")?a={query:e.query.query,language:e.query.language}:e.query&&t.query&&e.query.language!==t.query.language&&(a={query:"",language:e.query.language});let r=null;e.dateRangeFrom===Object(n.get)(t,"currentProps.dateRangeFrom")&&e.dateRangeTo===Object(n.get)(t,"currentProps.dateRangeTo")||(r={dateRangeFrom:e.dateRangeFrom,dateRangeTo:e.dateRangeTo});const s={currentProps:e};return a&&(s.query=a),r&&(s.dateRangeFrom=r.dateRangeFrom,s.dateRangeTo=r.dateRangeTo),s}componentWillUnmount(){this.renderSavedQueryManagement.clear()}shouldRenderQueryBar(){const e=this.props.showDatePicker||this.props.showAutoRefreshOnly,t=this.props.showQueryInput&&this.props.indexPatterns&&this.state.query;return this.props.showQueryBar&&(e||t)}shouldRenderFilterBar(){return this.props.showFilterBar&&this.props.filters&&this.props.indexPatterns&&Object(n.compact)(this.props.indexPatterns).length>0}shouldRenderTimeFilterInSavedQueryForm(){const{dateRangeFrom:e,dateRangeTo:t,showDatePicker:a}=this.props;return a||!a&&void 0!==e&&void 0!==t}render(){const e=!!this.props.showDatePicker&&void 0;let t,a;if(this.shouldRenderQueryBar()&&(t=d.a.createElement(v.default,{timeHistory:this.props.timeHistory,query:this.state.query,screenTitle:this.props.screenTitle,onSubmit:this.onQueryBarSubmit,indexPatterns:this.props.indexPatterns,isLoading:this.props.isLoading,fillSubmitButton:this.props.fillSubmitButton||!1,prepend:this.props.showFilterBar&&this.state.query?this.renderSavedQueryManagement(this.props.onClearSavedQuery,this.props.showSaveQuery,this.props.savedQuery):void 0,showDatePicker:this.props.showDatePicker,dateRangeFrom:this.state.dateRangeFrom,dateRangeTo:this.state.dateRangeTo,isRefreshPaused:this.props.isRefreshPaused,refreshInterval:this.props.refreshInterval,showAutoRefreshOnly:this.props.showAutoRefreshOnly,showQueryInput:this.props.showQueryInput,onRefresh:this.props.onRefresh,onRefreshChange:this.props.onRefreshChange,onChange:this.onQueryBarChange,isDirty:this.isDirty(),customSubmitButton:this.props.customSubmitButton?this.props.customSubmitButton:void 0,dataTestSubj:this.props.dataTestSubj,indicateNoData:this.props.indicateNoData,placeholder:this.props.placeholder,isClearable:this.props.isClearable,iconType:this.props.iconType,nonKqlMode:this.props.nonKqlMode,nonKqlModeHelpText:this.props.nonKqlModeHelpText,timeRangeForSuggestionsOverride:e})),this.shouldRenderFilterBar()){const t=l()("globalFilterGroup__wrapper",{"globalFilterGroup__wrapper-isVisible":this.state.isFiltersVisible});a=d.a.createElement("div",{id:"GlobalFilterGroup",className:t},d.a.createElement(Q,{className:"globalFilterGroup__filterBar",filters:this.props.filters,onFiltersUpdated:this.props.onFiltersUpdated,indexPatterns:this.props.indexPatterns,appName:this.services.appName,timeRangeForSuggestionsOverride:e}))}const r=l()("globalQueryBar",{"globalQueryBar--inPage":"inPage"===this.props.displayStyle});return d.a.createElement("div",{className:r,"data-test-subj":"globalQueryBar"},t,a,this.state.showSaveQueryModal?d.a.createElement(C,{savedQuery:this.props.savedQuery?this.props.savedQuery:void 0,savedQueryService:this.savedQueryService,onSave:this.onSave,onClose:()=>this.setState({showSaveQueryModal:!1}),showFilterOption:this.props.showFilterBar,showTimeFilterOption:this.shouldRenderTimeFilterInSavedQueryForm()}):null,this.state.showSaveNewQueryModal?d.a.createElement(C,{savedQueryService:this.savedQueryService,onSave:e=>this.onSave(e,!0),onClose:()=>this.setState({showSaveNewQueryModal:!1}),showFilterOption:this.props.showFilterBar,showTimeFilterOption:this.shouldRenderTimeFilterInSavedQueryForm()}):null)}}s()(search_bar_SearchBarUI,"defaultProps",{showQueryBar:!0,showFilterBar:!0,showDatePicker:!0,showAutoRefreshOnly:!1});t.default=Object(i.injectI18n)(Object(m.withKibana)(search_bar_SearchBarUI))},116:function(e,t,a){"use strict";function r(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(let r=0;r<a.length;r++)if(!Object.prototype.hasOwnProperty.call(t,a[r])||!Object.is(e[a[r]],t[a[r]]))return!1;return!0}a.d(t,"a",(function(){return r}))},119:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(107),s=a(4),n=r.__importDefault(a(120));t.default=function(e,t){var a=s.useState(t),r=a[0],i=a[1];return n.default((function(){var t=e.subscribe(i);return function(){return t.unsubscribe()}}),[e]),r}},120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(4),s="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.default=s},126:function(e,t,a){"use strict";a.r(t),a.d(t,"QueryBarTopRow",(function(){return B}));var r=a(18),s=a.n(r),n=a(106),i=a.n(n),o=a(4),l=a.n(o),u=a(70),d=a.n(u),c=a(119),p=a.n(c),h=a(8),m=a(7),v=a(14),g=a(28),b=a(125),y=a(2),f=a(20),E=a(0);const S="data.noDataPopover";function F({showNoDataPopover:e,storage:t,children:a}){const[r,s]=Object(o.useState)((()=>Boolean(t.get(S)))),[n,i]=Object(o.useState)(!1);return Object(o.useEffect)((()=>{e&&!r&&i(!0)}),[r,e]),l.a.createElement(v.EuiTourStep,{onFinish:()=>{},closePopover:()=>{i(!1)},content:l.a.createElement(v.EuiText,{size:"s"},l.a.createElement("p",{style:{maxWidth:300}},E.i18n.translate("data.noDataPopover.content",{defaultMessage:"This time range doesn't contain any data. Increase or adjust the time range to see more fields and create charts."}))),minWidth:300,anchorPosition:"downCenter",anchorClassName:"eui-displayBlock",step:1,stepsTotal:1,isStepOpen:n,subtitle:E.i18n.translate("data.noDataPopover.subtitle",{defaultMessage:"Tip"}),title:E.i18n.translate("data.noDataPopover.title",{defaultMessage:"Empty dataset"}),footerAction:l.a.createElement(v.EuiButtonEmpty,{size:"xs",flush:"right",color:"text","data-test-subj":"noDataPopoverDismissButton",onClick:()=>{t.set(S,!0),s(!0),i(!1)}},E.i18n.translate("data.noDataPopover.dismissAction",{defaultMessage:"Don't show again"}))},l.a.createElement("div",{onFocus:()=>{i(!1)}},a))}var Q=a(116);const T=l.a.memo(v.EuiSuperDatePicker),C=l.a.memo(v.EuiSuperUpdateButton),P=Object(g.withKibana)(b.default),R=l.a.memo((function({from:e,to:t,dateFormat:a}){function r(e,t=!1){const a=s.a.parse(e,{roundUp:t});return a?a.toISOString():e}const n=Object(v.prettyDuration)(r(e),r(t),[],a);return l.a.createElement("div",{"data-shared-timefilter-duration":n,"data-test-subj":"dataSharedTimefilterDuration"})})),B=l.a.memo((function(e){var t;const{showQueryInput:a=!0,showDatePicker:r=!0,showAutoRefreshOnly:s=!1}=e,[n,u]=Object(o.useState)(!1),[d,c]=Object(o.useState)(!1),b=Object(g.useKibana)(),{uiSettings:E,storage:S,appName:Q}=b.services,B=e.query&&e.query.language,I=Object(o.useRef)(e.query);I.current=e.query;const w=l.a.useMemo((()=>B&&E&&S&&Q?Object(f.o)(E,S,Q,B):void 0),[Q,B,E,S]);const O=function(){const t=E.get(y.UI_SETTINGS.TIMEPICKER_TIME_DEFAULTS);return{from:e.dateRangeFrom||t.from,to:e.dateRangeTo||t.to}}(),j=Object(o.useRef)(O);j.current=O;const M=e.onSubmit,q=e=>e.map((({from:e,to:t})=>({start:e,end:t}))),_=e.timeHistory,x=Object(o.useMemo)((()=>{var e;return null!==(e=null==_?void 0:_.get$().pipe(Object(m.map)(q)))&&void 0!==e?e:h.EMPTY}),[_]),k=p()(x,q(null!==(t=null==_?void 0:_.get())&&void 0!==t?t:[])),[N]=Object(o.useState)((()=>{var e,t;return null!==(e=null==E||null===(t=E.get(y.UI_SETTINGS.TIMEPICKER_QUICK_RANGES))||void 0===t?void 0:t.map((({from:e,to:t,display:a})=>({start:e,end:t,label:a}))))&&void 0!==e?e:[]})),A=Object(o.useCallback)((({query:e,dateRange:t})=>{_&&_.add(t),M({query:e,dateRange:t})}),[_,M]),D=Object(o.useCallback)((e=>{w&&I.current&&w.add(I.current.query),e.preventDefault(),A({query:I.current,dateRange:j.current})}),[w,A]),L=e.onChange,U=Object(o.useCallback)((e=>L({query:e,dateRange:j.current})),[L]),K=Object(o.useCallback)((e=>{c(e)}),[]),z=Object(o.useCallback)((({start:e,end:t,isInvalid:a,isQuickSelection:r})=>{u(a);const s={query:I.current,dateRange:{from:e,to:t}};r?A(s):L(s)}),[L,A]),G=e.onRefresh,Y=Object(o.useCallback)((({start:e,end:t})=>{G&&G({dateRange:{from:e,to:t}})}),[G]),H=Object(o.useCallback)((e=>{A({query:e,dateRange:j.current})}),[A]);function W(){return Boolean(r||s)}const $=i()("kbnQueryBar",{"kbnQueryBar--withDatePicker":r});return l.a.createElement(v.EuiFlexGroup,{className:$,responsive:!!r,gutterSize:"s",justifyContent:"flexEnd"},function(){if(Boolean(a&&e.indexPatterns&&e.query&&S))return l.a.createElement(v.EuiFlexItem,null,l.a.createElement(P,{disableAutoFocus:e.disableAutoFocus,indexPatterns:e.indexPatterns,prepend:e.prepend,query:e.query,screenTitle:e.screenTitle,onChange:U,onChangeQueryInputFocus:K,onSubmit:H,persistedLog:w,dataTestSubj:e.dataTestSubj,placeholder:e.placeholder,isClearable:e.isClearable,iconType:e.iconType,nonKqlMode:e.nonKqlMode,nonKqlModeHelpText:e.nonKqlModeHelpText,timeRangeForSuggestionsOverride:e.timeRangeForSuggestionsOverride}))}(),l.a.createElement(R,{from:O.from,to:O.to,dateFormat:E.get("dateFormat")}),l.a.createElement(v.EuiFlexItem,{grow:!1},function(){const t=e.customSubmitButton?l.a.cloneElement(e.customSubmitButton,{onClick:D}):l.a.createElement(C,{needsUpdate:e.isDirty,isDisabled:n,isLoading:e.isLoading,onClick:D,fill:e.fillSubmitButton,"data-test-subj":"querySubmitButton"});return W()?l.a.createElement(F,{storage:S,showNoDataPopover:e.indicateNoData},l.a.createElement(v.EuiFlexGroup,{responsive:!1,gutterSize:"s"},function(){if(!W())return null;const t=i()("kbnQueryBar__datePickerWrapper",{"kbnQueryBar__datePickerWrapper-isHidden":d});return l.a.createElement(v.EuiFlexItem,{className:t},l.a.createElement(T,{start:e.dateRangeFrom,end:e.dateRangeTo,isPaused:e.isRefreshPaused,refreshInterval:e.refreshInterval,onTimeChange:z,onRefresh:Y,onRefreshChange:e.onRefreshChange,showUpdateButton:!1,recentlyUsedRanges:k,commonlyUsedRanges:N,dateFormat:E.get("dateFormat"),isAutoRefreshOnly:s,className:"kbnQueryBar__datePicker"}))}(),l.a.createElement(v.EuiFlexItem,{grow:!1},t))):t}()))}),(({query:e,...t},{query:a,...r})=>{let s=!0;return e!==a&&(d()(e,a)||(s=!1)),s&&Object(Q.a)(t,r)}));t.default=B},132:function(e,t,a){"use strict";var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function s(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(s=e[a],n=t[a],!(s===n||r(s)&&r(n)))return!1;var s,n;return!0}e.exports=function(e,t){void 0===t&&(t=s);var a=null;function r(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(a&&a.lastThis===this&&t(r,a.lastArgs))return a.lastResult;var n=e.apply(this,r);return a={lastResult:n,lastArgs:r,lastThis:this},n}return r.clear=function(){a=null},r}}}]);