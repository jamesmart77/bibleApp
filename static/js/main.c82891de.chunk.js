(this["webpackJsonpbible-app"]=this["webpackJsonpbible-app"]||[]).push([[0],{172:function(e,a){},201:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(18),c=t.n(s),o=(t(84),t(85),t(22)),l=t(23),i=t(26),u=t(24),p=t(76),h=t(5),m=t(73),d=t.n(m),g=t(8),y=t.n(g),E=t(14),v=t(33),f=t(2),b=t(3),w=t(40),S=t.n(w),k=t(74),x=t.n(k),C={proxy:!1,headers:{"content-type":"application/json",Authorization:"Token 1db4878bd4ef4915253c027d47fcad03a11a739b"}},N=function(){var e=Object(E.a)(y.a.mark((function e(a){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"&include-short-copyright=false&include-first-verse-numbers=false&include-chapter-numbers=false",e.next=3,S.a.get("https://api.esv.org/v3/passage/html/?q=".concat(a).concat("&include-short-copyright=false&include-first-verse-numbers=false&include-chapter-numbers=false"),C);case 3:if(t=e.sent,0!==(r=t.data).passages.length){e.next=7;break}throw new Error("Invalid search. Query: ".concat(a));case 7:return r.passages=x()(r.passages[0]),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),R=function(){var e=Object(E.a)(y.a.mark((function e(a){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.esv.org/v3/passage/search/?q=".concat(a,"&page-size=100"),C);case 2:if(t=e.sent,0!==(r=t.data).results.length){e.next=6;break}throw new Error("Invalid search. Query: ".concat(a));case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),I=t(25),j=t(15),_=function(e){var a=e.hash,t=b.searchTypes.keyword,r=b.searchTypes.passages,n=a.split("q=");if(""!==a&&1!==n.length){var s={type:r,query:n[1]};return a.includes(t)&&(s.type=t),s}};var T=function(e){var a=e.isMobileView,t=e.toggleSearch,r=function(){window.location.href="/bibleApp",a&&t()};return n.a.createElement("div",{className:a?"title-container mobile":"title-container",title:"Reset Searches"},n.a.createElement("h2",{tabIndex:0,onClick:r,onKeyPress:r,className:"text"},"Bible App"))},O=t(27);var P=function(e){var a=e.onSearch,t=e.isEnteringInput,s=Object(r.useState)(""),c=Object(O.a)(s,2),o=c[0],l=c[1],i=Object(r.useState)(b.searchTypes.passages),u=Object(O.a)(i,2),p=u[0],h=u[1];return n.a.createElement("div",{className:"mobile-search-container"},n.a.createElement("div",{className:p===b.searchTypes.passages?"wrapper passages":"wrapper keyword"},n.a.createElement(f.Row,{className:t?"type-row no-padding-bottom":"type-row"},n.a.createElement(f.Col,{className:t?"type-col no-padding-bottom":"type-col",s:10,m:8,offset:"s1 m2"},n.a.createElement(f.Button,{className:p===b.searchTypes.passages?"type-btn passage-btn active":"type-btn passage-btn",onClick:function(){return h(b.searchTypes.passages)},onKeyPress:function(){return h(b.searchTypes.passages)}},p===b.searchTypes.passages&&n.a.createElement(f.Icon,null,"bookmark_border"),"Passages"),n.a.createElement(f.Button,{className:p===b.searchTypes.keyword?"type-btn keyword-btn active":"type-btn keyword-btn",onClick:function(){return h(b.searchTypes.keyword)},onKeyPress:function(){return h(b.searchTypes.keyword)}},p===b.searchTypes.keyword&&n.a.createElement(f.Icon,null,"search"),"Keyword"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o,p),l("")}},n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:10,offset:"s1"},n.a.createElement(f.TextInput,{id:"search",s:12,value:o,placeholder:p===b.searchTypes.keyword?"Repent":"John 3:1-10",onChange:function(e){return l(e.target.value)}}))),n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:12,className:"btn-wrapper"},n.a.createElement(f.Button,{className:"search-btn",type:"submit",waves:"light"},"Search"))))))))};var B=function(e){var a=e.isMobileView;return n.a.createElement("div",{className:a?"copyright-container mobile":"copyright-container"},n.a.createElement("small",null,"Scripture quotations are from the ESV\xae Bible (The Holy Bible, English Standard Version\xae), copyright \xa9 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of any book of the ESV Bible."))};var L=function(e){var a=e.content,t=e.reference,r=e.search,s=t.split(":")[0];return n.a.createElement(j.Fade,{bottom:!0,duration:500},n.a.createElement("div",{className:"keyword-result-container"},n.a.createElement("h5",{className:"title"},t),n.a.createElement("div",{className:"text"},a),n.a.createElement("div",{role:"button",tabIndex:0,className:"read-chapter",title:"Read ".concat(s),onClick:function(){return r(s,b.searchTypes.passages)},onKeyPress:function(){return r(s,b.searchTypes.passages)}},"Read Chapter")))},K=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isSearchExpanded:!1,isInitialState:!0,isEnteringInput:!1,isLoading:!1,keywordSearchResults:b.keywordSearchResultsInitial,passageSearchResults:b.passageSearchResultsInitial},e.toggleSearch=function(){var a=e.state.isSearchExpanded;e.setState({isSearchExpanded:!a})},e.onSearch=function(){var a=Object(E.a)(y.a.mark((function a(t,r){var n,s,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.trim().replace(/ /g,"+"),a.next=3,e.setState({isSearchExpanded:!1,isEnteringInput:!1,isLoading:!0});case 3:if(a.prev=3,r!==b.searchTypes.keyword){a.next=12;break}return a.next=7,R(n);case 7:return s=a.sent,a.next=10,e.setState({keywordSearchResults:s,passageSearchResults:b.passageSearchResultsInitial});case 10:a.next=17;break;case 12:return a.next=14,N(n);case 14:return c=a.sent,a.next=17,e.setState({passageSearchResults:c,keywordSearchResults:b.keywordSearchResultsInitial});case 17:window.location.hash="".concat(r,"?q=").concat(n),e.setState({isInitialState:!1}),a.next=25;break;case 21:a.prev=21,a.t0=a.catch(3),console.error("ERROR: ",a.t0),I.b.error("Search failed. Please simplify your search and try again.");case 25:e.setState({isLoading:!1});case 26:case"end":return a.stop()}}),a,null,[[3,21]])})));return function(e,t){return a.apply(this,arguments)}}(),e.getPrevChapter=function(){var a=e.state.passageSearchResults.passage_meta[0].prev_chapter;if(a)return a.join("-")},e.getNextChapter=function(){var a=e.state.passageSearchResults.passage_meta[0].next_chapter;if(a)return a.join("-")},e.handleInputListener=function(){if(!(window.screen.height>700)){var a=Object(v.a)(e);window.requestAnimationFrame((function(){var e=document.getElementById("search");e&&e.addEventListener("focus",(function(){a.setState({isEnteringInput:!0})}))}))}},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location,a=_(e);a?this.onSearch(a.query,a.type):this.setState({isSearchExpanded:!0}),this.handleInputListener()}},{key:"render",value:function(){var e=this,a=this.state,t=a.isSearchExpanded,r=a.passageSearchResults,s=a.keywordSearchResults,c=a.isInitialState,o=a.isEnteringInput,l=a.isLoading,i=this.getPrevChapter(),u=this.getNextChapter(),p=!t&&r!==b.passageSearchResultsInitial;return n.a.createElement("div",{className:"mobile-container"},n.a.createElement(T,{isMobileView:!0,toggleSearch:this.toggleSearch}),n.a.createElement(f.Row,{className:"content-row"},n.a.createElement(f.Col,{s:12,className:"col-wrapper display-col"},l&&n.a.createElement(f.Col,{s:12,className:"loading-spinner-col"},n.a.createElement(f.Preloader,null)),c&&!l&&n.a.createElement(j.Fade,{top:!0,duration:2e3},n.a.createElement("div",{className:"pre-search-msg"},n.a.createElement("p",null,"Welcome to the Bible App. Search passages, verses, and keywords in the ESV Bible."))),!c&&!l&&r!==b.passageSearchResultsInitial&&r.passages&&r.passages.length>0&&n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:12},n.a.createElement("div",{className:"passage-text"},r.passages)),n.a.createElement(f.Col,{s:12},n.a.createElement(B,{isMobileView:!0}))),!c&&!l&&s!==b.keywordSearchResultsInitial&&s.results&&s.results.length>0&&n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:12},n.a.createElement("div",{className:"results-count"},s.total_results," results found")),n.a.createElement(f.Col,{s:12},s.results.map((function(a){return n.a.createElement(L,Object.assign({key:"key-".concat(a.reference),search:e.onSearch},a))}))),n.a.createElement(f.Col,{s:12},n.a.createElement(B,{isMobileView:!0}))))),n.a.createElement(f.Row,{className:"navigator-row"},t&&n.a.createElement(f.Col,{s:12,className:"author-col"},n.a.createElement("small",null,"Created by ",n.a.createElement("a",{href:"https://jamesmart77.github.io",target:"_blank",rel:"noopener noreferrer"},"James Martineau"))),n.a.createElement(f.Col,{s:12,className:"mobile-search-wrapper"},n.a.createElement(j.Fade,{bottom:!0,duration:750,when:t},t&&n.a.createElement(P,{isEnteringInput:o,onSearch:this.onSearch}))),n.a.createElement(f.Col,{s:3},p&&i&&n.a.createElement("div",{className:"chapter-nav",role:"button",tabIndex:0,onClick:function(){return e.onSearch(i,b.searchTypes.passages)},onKeyPress:function(){return e.onSearch(i,b.searchTypes.passages)},title:"Previous Chapter"},n.a.createElement(f.Icon,null,"chevron_left"))),n.a.createElement(f.Col,{s:6,className:"search-toggle-col"},!c&&n.a.createElement("div",{className:"search-toggle-btn",onClick:this.toggleSearch},n.a.createElement(f.Icon,null,t?"keyboard_arrow_down":"search"))),n.a.createElement(f.Col,{s:3},p&&u?n.a.createElement("div",{className:"chapter-nav nav-right",role:"button",tabIndex:0,onClick:function(){return e.onSearch(u,b.searchTypes.passages)},onKeyPress:function(){return e.onSearch(u,b.searchTypes.passages)},title:"Next Chapter"},n.a.createElement(f.Icon,null,"chevron_right")):n.a.createElement(n.a.Fragment,null))))}}]),t}(r.Component),M=t(78);var q=function(e){var a=e.type,t=e.onSearch,s=e.viewMode,c=Object(r.useState)(""),o=Object(O.a)(c,2),l=o[0],i=o[1],u=Object(r.useState)(!1),p=Object(O.a)(u,2),h=p[0],m=p[1],d=function(){var e=Object(E.a)(y.a.mark((function e(r){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),!0,n=l,h&&(n='"'.concat(l,'"')),t(n,a,!0),i("");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"search-container"},n.a.createElement("form",{onSubmit:d},n.a.createElement(f.TextInput,{s:12,value:l,placeholder:a===b.searchTypes.keyword?"Repent":"John 3:1-10",onChange:function(e){return i(e.target.value)}}),a===b.searchTypes.keyword&&n.a.createElement(f.Col,{s:12,className:"switch-wrapper"},n.a.createElement(f.Switch,{id:"exact-switch",offLabel:"Loose Phrase",onChange:function(){return m(!h)},onLabel:"Exact Phrase",value:h?"Exact Phrase":"Loose Phrase"}),n.a.createElement(f.Button,{tooltip:"<div className='exact-phrase-tip'>Exact Phrase will return results for an exact phrase in scripture. For instance, the <i>Loose</i> query 'in love' returns many more results than the <i>Exact</i> query 'in love' because the latter only returns matches for the exact phrase.</div>",className:"info-btn"},n.a.createElement(f.Icon,null,"info_outline"))),n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:12,className:"btn-wrapper"},n.a.createElement(f.Button,{className:"".concat(s," search-btn"),type:"submit",waves:"light"},n.a.createElement(f.Icon,{className:"icon"},"search"),"Search")))))},V=t(75),A=t.n(V);function F(e){var a=e.previousSearches;return n.a.createElement("div",{className:"search-history-container"},a.length>0&&n.a.createElement(j.Slide,{duration:750,left:!0},n.a.createElement("h5",{className:"header"},"Search History"),a.map((function(e){return n.a.createElement("div",{className:"search-item"},n.a.createElement("h6",null,e.text),n.a.createElement("div",null,e.type))}))))}var H=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isPassageExpanded:!0,isKeywordExpanded:!1,isLoading:!1,isInitialState:!0,keywordSearchResults:b.keywordSearchResultsInitial,passageSearchResults:b.passageSearchResultsInitial,previousSearches:[]},e.handleSearchHistory=function(){var a=Object(E.a)(y.a.mark((function a(t,r){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.state.previousSearches,a.next=3,e.setState({previousSearches:[].concat(Object(M.a)(n),[{text:t,type:r}])});case 3:console.log("state: ",e.state);case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.onSearch=function(){var a=Object(E.a)(y.a.mark((function a(t,r,n){var s,c,o;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=t.trim().replace(/ /g,"+"),e.setState({isLoading:!0,isInitialState:!1}),a.prev=2,r!==b.searchTypes.keyword){a.next=11;break}return a.next=6,R(s);case 6:return c=a.sent,a.next=9,e.setState({keywordSearchResults:c,passageSearchResults:b.passageSearchResultsInitial});case 9:a.next=17;break;case 11:return a.next=13,N(s);case 13:return o=a.sent,a.next=16,e.setState({passageSearchResults:o,keywordSearchResults:b.keywordSearchResultsInitial});case 16:n&&e.handleSearchHistory(o.passage_meta[0].canonical,b.searchTypes.passages);case 17:window.location.hash="".concat(r,"?q=").concat(s),e.setState({isLoading:!1}),a.next=25;break;case 21:a.prev=21,a.t0=a.catch(2),console.error("ERROR: ",a.t0),I.b.error("Search failed. Please simplify your search and try again.");case 25:case"end":return a.stop()}}),a,null,[[2,21]])})));return function(e,t,r){return a.apply(this,arguments)}}(),e.getPrevChapter=function(){var a=e.state.passageSearchResults.passage_meta[0].prev_chapter;if(a)return a.join("-")},e.getNextChapter=function(){var a=e.state.passageSearchResults.passage_meta[0].next_chapter;if(a)return a.join("-")},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location,a=_(e);a&&this.onSearch(a.query,a.type)}},{key:"render",value:function(){var e=this,a=this.state,t=a.isPassageExpanded,r=a.isKeywordExpanded,s=a.isLoading,c=a.passageSearchResults,o=a.keywordSearchResults,l=a.isInitialState,i=a.previousSearches,u=this.getPrevChapter(),p=this.getNextChapter();return n.a.createElement("div",{className:"desktop-container"},n.a.createElement(f.Row,{className:"row-wrapper"},n.a.createElement(f.Col,{xl:3,m:4,className:"col-wrapper search-col"},n.a.createElement(j.Fade,{left:!0},n.a.createElement(T,null),n.a.createElement(f.Collapsible,null,n.a.createElement(f.CollapsibleItem,{header:"Passages",expanded:!0,node:"div",onClick:function(){return e.setState({isKeywordExpanded:!1,isPassageExpanded:!t})},icon:t?n.a.createElement(f.Icon,null,"keyboard_arrow_down"):n.a.createElement(f.Icon,null,"keyboard_arrow_right")},n.a.createElement(q,{viewMode:"desktop-view",type:b.searchTypes.passages,onSearch:this.onSearch,handleSearchHistory:this.handleSearchHistory})),n.a.createElement(f.CollapsibleItem,{header:"Keyword",node:"div",onClick:function(){return e.setState({isKeywordExpanded:!r,isPassageExpanded:!1})},icon:r?n.a.createElement(f.Icon,null,"keyboard_arrow_down"):n.a.createElement(f.Icon,null,"keyboard_arrow_right")},n.a.createElement(q,{viewMode:"desktop-view",type:b.searchTypes.keyword,onSearch:this.onSearch,handleSearchHistory:this.handleSearchHistory}))),n.a.createElement(F,{previousSearches:i}))),n.a.createElement(f.Col,{xl:9,m:8,className:"col-wrapper display-col"},s&&!l&&n.a.createElement(f.Preloader,{className:"loading-spinner"}),l&&!s&&n.a.createElement(j.Fade,{top:!0,duration:2e3},n.a.createElement("div",{className:"pre-search-msg"},n.a.createElement("p",null,"Welcome to the Bible App. Search passages, verses, and keywords in the ESV Bible."),n.a.createElement("img",{src:A.a,alt:"woman sitting under lamp reading book"}))),!l&&!s&&c!==b.passageSearchResultsInitial&&c.passages&&c.passages.length>0&&n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:1},u&&n.a.createElement("div",{className:"chapter-nav nav-left",role:"button",tabIndex:0,onClick:function(){return e.onSearch(u,b.searchTypes.passages)},onKeyPress:function(){return e.onSearch(u,b.searchTypes.passages)},title:"Previous Chapter"},n.a.createElement(f.Icon,null,"chevron_left"))),n.a.createElement(f.Col,{s:10},n.a.createElement("div",{className:"passage-text"},c.passages)),n.a.createElement(f.Col,{s:1},p&&n.a.createElement("div",{className:"chapter-nav nav-right",role:"button",tabIndex:0,onClick:function(){return e.onSearch(p,b.searchTypes.passages)},onKeyPress:function(){return e.onSearch(p,b.searchTypes.passages)},title:"Next Chapter"},n.a.createElement(f.Icon,null,"chevron_right"))),n.a.createElement(f.Col,{s:12},n.a.createElement(B,null))),!l&&!s&&o!==b.keywordSearchResultsInitial&&o.results&&o.results.length>0&&n.a.createElement(f.Row,null,n.a.createElement(f.Col,{s:12},n.a.createElement("div",{className:"results-count"},o.total_results," results found")),n.a.createElement(f.Col,{s:12},o.results.map((function(a){return n.a.createElement(L,Object.assign({key:"key-".concat(a.reference),search:e.onSearch},a))}))),n.a.createElement(f.Col,{s:12},n.a.createElement(B,null))))))}}]),t}(r.Component);var D=function(){return n.a.createElement("footer",{className:"footer-container"},"Created by ",n.a.createElement("a",{href:"https://jamesmart77.github.io",target:"_blank",rel:"noopener noreferrer"},"James Martineau"))},J=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.isDesktop;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"app-container"},n.a.createElement("main",null,n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/bibleApp",component:e?H:K}))),e&&n.a.createElement(D,null),n.a.createElement(I.a,{className:"error-toast-container",autoClose:!1})))}}]),t}(r.Component),W=d()((function(e){return{isDesktop:e.width>=900}}))(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,a){a.searchTypes={passages:"passages",keyword:"keyword"},a.keywordSearchResultsInitial={total_results:0,results:[{reference:"",content:""}]},a.passageSearchResultsInitial={passage_meta:[{canonical:"",chapter_start:[],chapter_end:[],prev_verse:0,next_verse:0,prev_chapter:[],next_chapter:[]}],passages:""}},75:function(e,a,t){e.exports=t.p+"static/media/readingTime.d7bb64d8.svg"},79:function(e,a,t){e.exports=t(201)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.c82891de.chunk.js.map