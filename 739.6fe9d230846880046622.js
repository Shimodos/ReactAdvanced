"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[739],{4352:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),a=n(4611),o=n(8841),i=n(4268),l=n(6890),c=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.isLoading)||!1},u=function(e){var t;return null===(t=e.articlePage)||void 0===t?void 0:t.error},s=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.view)||l.GA.GRID},f=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.page)||1},d=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.order)||"asc"},v=function(e){var t,n;return null!==(n=null===(t=e.articlePage)||void 0===t?void 0:t.sort)&&void 0!==n?n:l.$B.CREATED_AT},p=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.search)||""},h=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.type)||l.Iq.ALL};var y=(0,i.hg)("articlesPage/fetchArticleList",(function(e,t){return n=void 0,r=void 0,o=function(){var n,r,a,o,i,c,u,s,y,g,b,w;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(m){switch(m.label){case 0:n=t.extra,r=t.rejectWithValue,a=t.getState,o=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.limit)||4}(a()),i=d(a()),c=v(a()),u=p(a()),s=f(a()),y=h(a()),m.label=1;case 1:return m.trys.push([1,3,,4]),x={sort:c,order:i,search:u,type:y.toString(),page:null===(w=e.page)||void 0===w?void 0:w.toString(),limit:o.toString()},window.history.pushState(null,"",function(e){var t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var n=e[0],r=e[1];r?t.set(n,r):t.delete(n)})),"?".concat(t.toString())}(x)),[4,n.api.get("/articles/",{params:{_expand:"user",_page:s,_limit:o,_sort:c,_order:i,q:u,type:y===l.Iq.ALL?void 0:y}})];case 2:if(!(g=m.sent()).data)throw new Error("No data");return[2,g.data];case 3:return b=m.sent(),console.log("Error: ",b),[2,r("error")];case 4:return[2]}var x}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o})),g=n(7665),b=n(6620),w=(0,i.HF)({selectId:function(e){return e.id}}),m=w.getSelectors((function(e){return e.articlePage||w.getInitialState()})),x=(0,i.oM)({name:"articlePageSlice",initialState:w.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:l.GA.GRID,page:1,haseMore:!0,limit:6,_inited:!1,order:"asc",sort:b.$B.CREATED_AT,search:"",type:b.Iq.ALL}),reducers:{setView:function(e,t){e.view=t.payload,localStorage.setItem(g.H,t.payload)},setPage:function(e,t){e.page=t.payload},setSort:function(e,t){e.sort=t.payload},setOrder:function(e,t){e.order=t.payload},setType:function(e,t){e.type=t.payload},setSearch:function(e,t){e.search=t.payload},initState:function(e){var t=localStorage.getItem(g.H);e.view=t,e.limit=t===l.GA.GRID?6:4,e._inited=!0}},extraReducers:function(e){e.addCase(y.pending,(function(e,t){e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&w.removeAll(e)})).addCase(y.fulfilled,(function(e,t){var n;e.isLoading=!1,e.haseMore=t.payload.length>=(null!==(n=e.limit)&&void 0!==n?n:0),t.meta.arg.replace?w.setAll(e,t.payload):w.addMany(e,t.payload)})).addCase(y.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),P=x.reducer,S=x.actions,j=n(2276),O=n(5461),k=n(7294),C=n(8798),A=(0,i.hg)("articlesPage/fetchNextArticlePage",(function(e,t){return n=void 0,r=void 0,o=function(){var e,n,r,a,o;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(i){return e=t.getState,n=t.dispatch,r=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t.haseMore)||!1}(e()),a=f(e()),o=c(e()),r&&!o&&(n(S.setPage(a+1)),n(y({}))),[2]}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o})),N=(0,i.hg)("articlesPage/initArticlesPage",(function(e,t){return n=void 0,r=void 0,o=function(){var n,r,a,o,i,l,c;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(u){return n=t.getState,r=t.dispatch,a=function(e){var t;return(null===(t=e.articlePage)||void 0===t?void 0:t._inited)||!1}(n()),a||(o=e.get("order"),i=e.get("sort"),l=e.get("search"),c=e.get("type"),o&&r(S.setOrder(o)),i&&r(S.setSort(i)),l&&r(S.setSearch(l)),c&&r(S.setType(c)),r(S.initState()),r(y({}))),[2]}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o})),L=n(3942),E=n(4478),T=n(5022),I=n(6925),_=n(9395),G=function(){return G=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},G.apply(this,arguments)},R=function(e){var t,n,o=e.className,i=(0,E.$)("article").t,c=(0,O.T)(),u=(0,L.v9)(s),f=(0,L.v9)(d),g=(0,L.v9)(v),b=(0,L.v9)(p),w=(0,L.v9)(h),m=(0,k.useCallback)((function(){c(y({replace:!0}))}),[c]),x=(t=m,500,n=(0,k.useRef)(void 0),(0,k.useCallback)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){t.apply(void 0,e)}),500)}),[t,500])),P=(0,k.useCallback)((function(e){c(S.setView(e)),c(S.setPage(1)),x()}),[c,x]),j=(0,k.useCallback)((function(e){c(S.setSearch(e)),c(S.setPage(1)),x()}),[c,x]),C=(0,k.useCallback)((function(e){c(S.setOrder(e)),c(S.setPage(1)),x()}),[c,x]),A=(0,k.useCallback)((function(e){c(S.setSort(e)),c(S.setPage(1)),x()}),[c,x]),N=(0,k.useCallback)((function(e){c(S.setType(e)),c(S.setPage(1)),m()}),[c,m]);return(0,r.jsxs)("div",G({className:(0,a.A)("VkkX2VPk",{},[o])},{children:[(0,r.jsxs)("div",G({className:"gpeOuN5x"},{children:[(0,r.jsx)(_.x,{order:f,sort:g,onChangeOrder:C,onChangeSort:A}),(0,r.jsx)(l.Vv,{view:u,onChangeView:P})]})),(0,r.jsx)(T.Z,G({className:"bEEsZGDy"},{children:(0,r.jsx)(I.I,{onChange:j,value:b,placeholder:i("Search")})})),(0,r.jsx)(l.XL,{value:w,onChangeType:N,className:"PRsfwRoW"})]}))},D=n(9711),V=n(4809),M=function(){return M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},M.apply(this,arguments)},q=function(e){var t=e.className,n=(0,E.$)("article").t,o=(0,L.v9)(m.selectAll),i=(0,L.v9)(c),f=(0,L.v9)(s);return(0,L.v9)(u)?(0,r.jsx)(V.xv,{size:V.yH.M,text:n("Error")}):(0,r.jsx)("div",M({className:(0,a.A)("",{},[t])},{children:(0,r.jsx)(l.wD,{isLoading:i,view:f,articcle:o})}))},F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},F.apply(this,arguments)},H={articlePage:P},B=function(e){var t=e.className,n=(0,O.T)(),i=(0,D.lr)()[0],l=(0,k.useCallback)((function(){n(A())}),[n]);return(0,j.Q)((function(){n(N(i))})),(0,r.jsx)(o.t,F({reducers:H,remmoveAfterUnmount:!1},{children:(0,r.jsxs)(C.T,F({onScrollEnd:l,className:(0,a.A)("CfpOuJHE",{},[t])},{children:[(0,r.jsx)(R,{}),(0,r.jsx)(q,{})]}))}))}},6925:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(5893),a=n(4611),o=n(7294),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=(0,o.memo)((function(e){var t,n=e.className,l=e.value,c=e.onChange,u=e.type,s=void 0===u?"text":u,f=e.placeholder,d=e.autofocus,v=e.readonly,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","value","onChange","type","placeholder","autofocus","readonly"]),h=(0,o.useRef)(null),y=(0,o.useState)(!1),g=y[0],b=y[1],w=(0,o.useState)(0),m=w[0],x=w[1];(0,o.useEffect)((function(){var e;d&&(b(!0),null===(e=h.current)||void 0===e||e.focus())}),[d]);var P=((t={}).fTN1PnWu=v,t);return(0,r.jsxs)("div",i({className:(0,a.A)("LuFDUWoP",P,[n])},{children:[f&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:f})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:h,type:s,value:l,onChange:function(e){null==c||c(e.target.value),x(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){b(!0)},onBlur:function(){b(!1)},onSelect:function(e){var t=e.target;x(t.selectionStart||0)},readOnly:v},p)),g&&(0,r.jsx)("div",{className:"lqMFGBuL",style:{left:"".concat(m,"ch")}})]}))]}))}));l.displayName="Input"}}]);