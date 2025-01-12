"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[272],{7272:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r,a=n(5893),o=n(4611),i=n(8841),l=n(7168),u=(0,l.hg)("profile/fetchByIdStatus",(function(e,t){return n=void 0,r=void 0,o=function(){var n,r,a,o;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}(this,(function(i){switch(i.label){case 0:n=t.extra,r=t.rejectWithValue,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,n.api.get("/profile/".concat(e))];case 2:if(!(a=i.sent()).data)throw new Error("No data");return[2,a.data];case 3:return o=i.sent(),console.log("Error: ",o),[2,r("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{u(o.next(e))}catch(e){t(e)}}function l(e){try{u(o.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}u((o=o.apply(n,r||[])).next())}));var n,r,a,o}));!function(e){e.INCORRECT_USER_DATA="Incorrect user data",e.INCORRECT_AGE="Age is required",e.INCORRECT_COUNTRY="Country is required",e.NO_DATA="No data",e.SERVER_ERROR="Server error"}(r||(r={}));var s=function(e){var t;return(null===(t=e.profile)||void 0===t?void 0:t.form)||{}},c=(0,l.hg)("profile/updateProfileData",(function(e,t){return n=void 0,a=void 0,i=function(){var e,n,a,o,i,l,u;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}(this,(function(c){switch(c.label){case 0:if(e=t.extra,n=t.rejectWithValue,a=t.getState,o=s(a()),(i=function(e){if(!e)return[r.NO_DATA];var t=e.first,n=e.lastname,a=e.age,o=e.country,i=[];return t||i.push(r.INCORRECT_USER_DATA),n||i.push(r.INCORRECT_USER_DATA),a&&Number.isInteger(a)||i.push(r.INCORRECT_AGE),o||i.push(r.INCORRECT_COUNTRY),i}(o)).length)return[2,n(i)];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.api.put("/profile/".concat(o.id),o)];case 2:if(!(l=c.sent()).data)throw new Error("No data");return[2,l.data];case 3:return u=c.sent(),console.log("Error: ",u),[2,n([r.SERVER_ERROR])];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{u(i.next(e))}catch(e){t(e)}}function l(e){try{u(i.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}u((i=i.apply(n,a||[])).next())}));var n,a,o,i})),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},f=(0,l.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{setReadonly:function(e,t){e.readonly=t.payload},cancelEdit:function(e){e.readonly=!0,e.validateError=void 0,e.form=e.data},updataProfile:function(e,t){e.form=d(d({},e.form),t.payload)}},extraReducers:function(e){e.addCase(u.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(u.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload,e.form=t.payload})).addCase(u.rejected,(function(e,t){e.error=t.payload,e.isLoading=!1})).addCase(c.pending,(function(e){e.validateError=void 0,e.isLoading=!0})).addCase(c.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload,e.form=t.payload,e.readonly=!0,e.validateError=void 0})).addCase(c.rejected,(function(e,t){e.isLoading=!1,e.validateError=t.payload}))}}),p=f.actions,v=f.reducer;const h={ProfileCard:"wW9jgKKD",loafing:"MvyBembj",error:"i5YK3SSb",editing:"DjTe7269"};var b,g=n(4478),y=n(4809),x=n(6925),m=n(4002),R=n(71);!function(e){e.USD="USD",e.EUR="EUR",e.UAH="UAH"}(b||(b={}));var O,C=n(7294),S=n(7898),E=(0,C.memo)((function(e){var t=e.className,n=e.value,r=e.onChange,i=e.readonly,l=(0,g.$)().t,u=[{value:b.EUR,content:"EUR"},{value:b.USD,content:"USD"},{value:b.UAH,content:"UAH"}],s=(0,C.useCallback)((function(e){null==r||r(e)}),[r]);return(0,a.jsx)(S.Z,{className:(0,o.A)("",{},[t]),defaultValue:l("Currency"),value:n,onChange:s,items:u,readonly:i,label:l("Currency"),direction:"up right"})}));E.displayName="CurrencySelect",function(e){e.Ukraine="Ukraine",e.USA="USA",e.Germany="Germany",e.France="France",e.Spain="Spain"}(O||(O={}));var T=(0,C.memo)((function(e){var t=e.className,n=e.value,r=e.onChange,i=e.readonly,l=(0,g.$)().t,u=[{value:O.France,content:"FR"},{value:O.Germany,content:"DE"},{value:O.Spain,content:"ES"},{value:O.USA,content:"US"},{value:O.Ukraine,content:"UA"}],s=(0,C.useCallback)((function(e){null==r||r(e)}),[r]);return(0,a.jsx)(S.Z,{className:(0,o.A)("",{},[t]),defaultValue:l("Country"),value:n,onChange:s,items:u,readonly:i,label:l("Country"),direction:"up right"})}));T.displayName="CurrencySelect";var N=n(1905),j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},j.apply(this,arguments)},w=function(e){var t,n,r,i=e.className,l=e.data,u=e.error,s=e.isLoading,c=e.onChangeFirstName,d=e.onChangeLastName,f=e.readonly,p=e.onChangeAge,v=e.onChangeCity,b=e.onChangeUsername,O=e.onChangeAvatar,C=e.onChangeCurrency,S=e.onChangeCountry,w=(0,g.$)("profile").t;if(s)return(0,a.jsx)(N.U,j({justify:"center",max:!0,className:(0,o.A)(h.ProfileCard,(t={},t[h.loafing]=!0,t),[i])},{children:(0,a.jsx)(m.a,{})}));if(u)return(0,a.jsx)(N.U,j({justify:"center",max:!0,className:(0,o.A)(h.ProfileCard,(n={},n[h.error]=!0,n),[i])},{children:(0,a.jsx)(y.xv,{theme:y.d9.ERROR,title:w("Error"),text:w("Reload"),align:y.vR.CENTER})}));var I=((r={})[h.editing]=!f,r);return(0,a.jsxs)(N.g,j({gap:"8",max:!0,className:(0,o.A)(h.ProfileCard,I,[i])},{children:[(null==l?void 0:l.avatar)&&(0,a.jsx)(N.U,j({justify:"center",max:!0,className:h.avatarWrapper},{children:(0,a.jsx)(R.q,{src:null==l?void 0:l.avatar,alt:null==l?void 0:l.username,className:h.avatar})})),(0,a.jsx)(x.I,{value:null==l?void 0:l.first,placeholder:w("First name"),className:h.input,onChange:c,readonly:f}),(0,a.jsx)(x.I,{value:null==l?void 0:l.lastname,placeholder:w("Last name"),className:h.input,onChange:d,readonly:f}),(0,a.jsx)(x.I,{value:null==l?void 0:l.age,placeholder:w("Age"),className:h.input,onChange:p,readonly:f}),(0,a.jsx)(x.I,{value:null==l?void 0:l.city,placeholder:w("City"),className:h.input,onChange:v,readonly:f}),(0,a.jsx)(x.I,{value:null==l?void 0:l.username,placeholder:w("Username"),className:h.input,onChange:b,readonly:f}),(0,a.jsx)(x.I,{value:null==l?void 0:l.avatar,placeholder:w("Avatar"),className:h.input,onChange:O,readonly:f}),(0,a.jsx)(E,{className:h.input,value:null==l?void 0:l.currency,onChange:C,readonly:f}),(0,a.jsx)(T,{className:h.input,value:null==l?void 0:l.country,onChange:S,readonly:f})]}))},I=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.data},L=function(e){var t;return(null===(t=e.profile)||void 0===t?void 0:t.isLoading)||!1},A=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.error},P=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.readonly},U=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.validateError},k=n(5461),D=n(9704),z=n(9161),M=n(1954),F=n(2636),_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_.apply(this,arguments)},V=function(e){var t=e.className,n=(0,g.$)("profile").t,r=(0,D.v9)(M.m5),i=(0,D.v9)(I),l=(null==r?void 0:r.id)===(null==i?void 0:i.id),u=(0,D.v9)(P),s=(0,k.T)(),d=(0,C.useCallback)((function(){s(p.setReadonly(!1))}),[s]),f=(0,C.useCallback)((function(){s(p.cancelEdit())}),[s]),v=(0,C.useCallback)((function(){s(c())}),[s]);return(0,a.jsxs)(F.U,_({max:!0,justify:"between",className:(0,o.A)("",{},[t])},{children:[(0,a.jsx)(y.xv,{title:n("ProfilePage")}),l&&(0,a.jsx)(F.U,_({gap:"16"},{children:u?(0,a.jsx)(z.zx,_({theme:z.UH.OUTLINE,onClick:d},{children:n("Edit")})):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(z.zx,_({theme:z.UH.OUTLINE_RED,onClick:f},{children:n("Cancel")})),(0,a.jsx)(z.zx,_({theme:z.UH.OUTLINE,onClick:v},{children:n("Save")}))]})}))]}))},G=n(2276),H=n(6974),Q=n(8798),$=n(4882),B=function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},B.apply(this,arguments)},Y={profile:v};const q=function(e){var t,n=e.className,l=(0,g.$)().t,c=(0,k.T)(),d=(0,D.v9)(s),f=(0,D.v9)(L),v=(0,D.v9)(A),h=(0,D.v9)(P),b=(0,D.v9)(U),x=(0,H.UO)().id,m=((t={})[r.INCORRECT_USER_DATA]=l("Incorrect user data"),t[r.INCORRECT_AGE]=l("Age is required"),t[r.INCORRECT_COUNTRY]=l("Country is required"),t[r.NO_DATA]=l("No data"),t[r.SERVER_ERROR]=l("Server error"),t);(0,G.Q)((function(){x&&c(u(x))}));var R=(0,C.useCallback)((function(e){c(p.updataProfile({first:e||""}))}),[c]),O=(0,C.useCallback)((function(e){c(p.updataProfile({lastname:e||""}))}),[c]),S=(0,C.useCallback)((function(e){!isNaN(Number(e))&&/^\d*$/.test(e||"")&&c(p.updataProfile({age:Number(e||0)}))}),[c]),E=(0,C.useCallback)((function(e){c(p.updataProfile({city:e||""}))}),[c]),T=(0,C.useCallback)((function(e){c(p.updataProfile({username:e||""}))}),[c]),N=(0,C.useCallback)((function(e){c(p.updataProfile({avatar:e||""}))}),[c]),j=(0,C.useCallback)((function(e){c(p.updataProfile({currency:e}))}),[c]),I=(0,C.useCallback)((function(e){c(p.updataProfile({country:e}))}),[c]);return(0,a.jsx)(i.t,B({reducers:Y,remmoveAfterUnmount:!0},{children:(0,a.jsx)(Q.T,B({className:(0,o.A)("",{},[n])},{children:(0,a.jsxs)($.g,B({gap:"8",max:!0},{children:[(0,a.jsx)(V,{}),(null==b?void 0:b.length)&&(null==b?void 0:b.map((function(e,t){return(0,a.jsx)(y.xv,{theme:y.d9.ERROR,text:m[e]},t)}))),(0,a.jsx)(w,{data:d,className:n,isLoading:f,error:v,onChangeFirstName:R,onChangeLastName:O,onChangeAge:S,onChangeCity:E,onChangeUsername:T,onChangeAvatar:N,onChangeCurrency:j,onChangeCountry:I,readonly:h})]}))}))}))}},8841:(e,t,n)=>{n.d(t,{t:()=>i});var r=n(5893),a=n(7294),o=n(9704),i=function(e){var t=e.children,n=e.reducers,i=e.remmoveAfterUnmount,l=void 0===i||i,u=(0,o.I0)(),s=(0,o.oR)();return(0,a.useEffect)((function(){var e=s.reducerManager.getMountedReducers();return Object.entries(n).forEach((function(t){var n=t[0],r=t[1];e[n]||(s.reducerManager.add(n,r),u({type:"@INIT ".concat(n," reducer")}))})),function(){l&&Object.entries(n).forEach((function(e){var t=e[0];e[1],s.reducerManager.remove(t),u({type:"@DESTROU ".concat(t," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:t})}},6925:(e,t,n)=>{n.d(t,{I:()=>l});var r=n(5893),a=n(4611);var o=n(7294),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=(0,o.memo)((function(e){var t,n=e.className,l=e.value,u=e.onChange,s=e.type,c=void 0===s?"text":s,d=e.placeholder,f=e.autofocus,p=e.readonly,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","value","onChange","type","placeholder","autofocus","readonly"]),h=(0,o.useRef)(null),b=(0,o.useState)(!1),g=b[0],y=b[1],x=(0,o.useState)(0),m=x[0],R=x[1];(0,o.useEffect)((function(){var e;f&&(y(!0),null===(e=h.current)||void 0===e||e.focus())}),[f]);var O=((t={}).fTN1PnWu=p,t);return(0,r.jsxs)("div",i({className:(0,a.A)("LuFDUWoP",O,[n])},{children:[d&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:d})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:h,type:c,value:l,onChange:function(e){null==u||u(e.target.value),R(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSelect:function(e){var t=e.target;R(t.selectionStart||0)},readOnly:p},v)),g&&(0,r.jsx)("div",{className:"lqMFGBuL",style:{left:"".concat(m,"ch")}})]}))]}))}));l.displayName="Input"},7898:(e,t,n)=>{n.d(t,{Z:()=>re});var r=n(5893),a=n(7294),o=n(6723),i=n(3855);function l(e,t){let[n,r]=(0,a.useState)(e),l=(0,i.E)(e);return(0,o.e)((()=>r(l.current)),[l,r,...t]),n}var u,s=n(3781),c=n(4192),d=n(5910),f=n(3318),p=n(4157),v=n(3784),h=n(5257),b=n(476),g=n(5394),y=((u=y||{})[u.None=1]="None",u[u.Focusable=2]="Focusable",u[u.Hidden=4]="Hidden",u);let x=(0,g.yV)((function(e,t){var n;let{features:r=1,...a}=e,o={ref:t,"aria-hidden":2==(2&r)||(null!=(n=a["aria-hidden"])?n:void 0),hidden:4==(4&r)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&r)&&2!=(2&r)&&{display:"none"}}};return(0,g.sY)({ourProps:o,theirProps:a,slot:{},defaultTag:"div",name:"Hidden"})}));var m=n(6567),R=n(4103),O=n(1497),C=n(2720),S=n(4575);function E(e={},t=null,n=[]){for(let[r,a]of Object.entries(e))N(n,T(t,r),a);return n}function T(e,t){return e?e+"["+t+"]":t}function N(e,t,n){if(Array.isArray(n))for(let[r,a]of n.entries())N(e,T(t,r.toString()),a);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):E(n,t,e)}var j,w,I=n(2984),L=n(5466),A=n(1363),P=((w=P||{})[w.Open=0]="Open",w[w.Closed=1]="Closed",w),U=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(U||{}),k=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(k||{}),D=((j=D||{})[j.OpenListbox=0]="OpenListbox",j[j.CloseListbox=1]="CloseListbox",j[j.GoToOption=2]="GoToOption",j[j.Search=3]="Search",j[j.ClearSearch=4]="ClearSearch",j[j.RegisterOption=5]="RegisterOption",j[j.UnregisterOption=6]="UnregisterOption",j[j.RegisterLabel=7]="RegisterLabel",j);function z(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,S.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),a=n?r.indexOf(n):null;return-1===a&&(a=null),{options:r,activeOptionIndex:a}}let M={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((e=>n(e.dataRef.current.value)));return-1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=z(e),a=(0,O.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),o=a?e.options.indexOf(a):-1;return-1===o||o===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:o,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=z(e,(e=>[...e,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=z(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},F=(0,a.createContext)(null);function _(e){let t=(0,a.useContext)(F);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}F.displayName="ListboxActionsContext";let V=(0,a.createContext)(null);function G(e){let t=(0,a.useContext)(V);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function H(e,t){return(0,I.E)(t.type,M,e,t)}V.displayName="ListboxDataContext";let Q=a.Fragment,$=g.AN.RenderStrategy|g.AN.Static,B=(0,g.yV)((function(e,t){let{value:n,defaultValue:r,form:i,name:l,onChange:u,by:d=((e,t)=>e===t),disabled:p=!1,horizontal:h=!1,multiple:b=!1,...R}=e;const C=h?"horizontal":"vertical";let T=(0,v.T)(t),[N=(b?[]:void 0),j]=function(e,t,n){let[r,o]=(0,a.useState)(n),i=void 0!==e,l=(0,a.useRef)(i),u=(0,a.useRef)(!1),c=(0,a.useRef)(!1);return!i||l.current||u.current?!i&&l.current&&!c.current&&(c.current=!0,l.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,l.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:r,(0,s.z)((e=>(i||o(e),null==t?void 0:t(e))))]}(n,u,r),[w,L]=(0,a.useReducer)(H,{dataRef:(0,a.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),A=(0,a.useRef)({static:!1,hold:!1}),P=(0,a.useRef)(null),U=(0,a.useRef)(null),k=(0,a.useRef)(null),D=(0,s.z)("string"==typeof d?(e,t)=>{let n=d;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:d),z=(0,a.useCallback)((e=>(0,I.E)(M.mode,{1:()=>N.some((t=>D(t,e))),0:()=>D(N,e)})),[N]),M=(0,a.useMemo)((()=>({...w,value:N,disabled:p,mode:b?1:0,orientation:C,compare:D,isSelected:z,optionsPropsRef:A,labelRef:P,buttonRef:U,optionsRef:k})),[N,p,b,w]);(0,o.e)((()=>{w.dataRef.current=M}),[M]),(0,f.O)([M.buttonRef,M.optionsRef],((e,t)=>{var n;L({type:1}),(0,S.sP)(t,S.tJ.Loose)||(e.preventDefault(),null==(n=M.buttonRef.current)||n.focus())}),0===M.listboxState);let _=(0,a.useMemo)((()=>({open:0===M.listboxState,disabled:p,value:N})),[M,p,N]),G=(0,s.z)((e=>{let t=M.options.find((t=>t.id===e));t&&K(t.dataRef.current.value)})),$=(0,s.z)((()=>{if(null!==M.activeOptionIndex){let{dataRef:e,id:t}=M.options[M.activeOptionIndex];K(e.current.value),L({type:2,focus:O.T.Specific,id:t})}})),B=(0,s.z)((()=>L({type:0}))),Y=(0,s.z)((()=>L({type:1}))),q=(0,s.z)(((e,t,n)=>e===O.T.Specific?L({type:2,focus:O.T.Specific,id:t,trigger:n}):L({type:2,focus:e,trigger:n}))),W=(0,s.z)(((e,t)=>(L({type:5,id:e,dataRef:t}),()=>L({type:6,id:e})))),Z=(0,s.z)((e=>(L({type:7,id:e}),()=>L({type:7,id:null})))),K=(0,s.z)((e=>(0,I.E)(M.mode,{0:()=>null==j?void 0:j(e),1(){let t=M.value.slice(),n=t.findIndex((t=>D(t,e)));return-1===n?t.push(e):t.splice(n,1),null==j?void 0:j(t)}}))),J=(0,s.z)((e=>L({type:3,value:e}))),X=(0,s.z)((()=>L({type:4}))),ee=(0,a.useMemo)((()=>({onChange:K,registerOption:W,registerLabel:Z,goToOption:q,closeListbox:Y,openListbox:B,selectActiveOption:$,selectOption:G,search:J,clearSearch:X})),[]),te={ref:T},ne=(0,a.useRef)(null),re=(0,c.G)();return(0,a.useEffect)((()=>{ne.current&&void 0!==r&&re.addEventListener(ne.current,"reset",(()=>{null==j||j(r)}))}),[ne,j]),a.createElement(F.Provider,{value:ee},a.createElement(V.Provider,{value:M},a.createElement(m.up,{value:(0,I.E)(M.listboxState,{0:m.ZM.Open,1:m.ZM.Closed})},null!=l&&null!=N&&E({[l]:N}).map((([e,t],n)=>a.createElement(x,{features:y.Hidden,ref:0===n?e=>{var t;ne.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,g.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:p,name:e,value:t})}))),(0,g.sY)({ourProps:te,theirProps:R,slot:_,defaultTag:Q,name:"Listbox"}))))})),Y=(0,g.yV)((function(e,t){var n;let r=(0,d.M)(),{id:o=`headlessui-listbox-button-${r}`,...i}=e,u=G("Listbox.Button"),f=_("Listbox.Button"),h=(0,v.T)(u.buttonRef,t),b=(0,c.G)(),y=(0,s.z)((e=>{switch(e.key){case A.R.Space:case A.R.Enter:case A.R.ArrowDown:e.preventDefault(),f.openListbox(),b.nextFrame((()=>{u.value||f.goToOption(O.T.First)}));break;case A.R.ArrowUp:e.preventDefault(),f.openListbox(),b.nextFrame((()=>{u.value||f.goToOption(O.T.Last)}))}})),x=(0,s.z)((e=>{e.key===A.R.Space&&e.preventDefault()})),m=(0,s.z)((e=>{if((0,R.P)(e.currentTarget))return e.preventDefault();0===u.listboxState?(f.closeListbox(),b.nextFrame((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),f.openListbox())})),C=l((()=>{if(u.labelId)return[u.labelId,o].join(" ")}),[u.labelId,o]),S=(0,a.useMemo)((()=>({open:0===u.listboxState,disabled:u.disabled,value:u.value})),[u]),E={ref:h,id:o,type:(0,p.f)(e,u.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=u.optionsRef.current)?void 0:n.id,"aria-expanded":0===u.listboxState,"aria-labelledby":C,disabled:u.disabled,onKeyDown:y,onKeyUp:x,onClick:m};return(0,g.sY)({ourProps:E,theirProps:i,slot:S,defaultTag:"button",name:"Listbox.Button"})})),q=(0,g.yV)((function(e,t){let n=(0,d.M)(),{id:r=`headlessui-listbox-label-${n}`,...i}=e,l=G("Listbox.Label"),u=_("Listbox.Label"),c=(0,v.T)(l.labelRef,t);(0,o.e)((()=>u.registerLabel(r)),[r]);let f=(0,s.z)((()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),p=(0,a.useMemo)((()=>({open:0===l.listboxState,disabled:l.disabled})),[l]);return(0,g.sY)({ourProps:{ref:c,id:r,onClick:f},theirProps:i,slot:p,defaultTag:"label",name:"Listbox.Label"})})),W=(0,g.yV)((function(e,t){var n;let r=(0,d.M)(),{id:o=`headlessui-listbox-options-${r}`,...i}=e,u=G("Listbox.Options"),f=_("Listbox.Options"),p=(0,v.T)(u.optionsRef,t),h=(0,c.G)(),b=(0,c.G)(),y=(0,m.oJ)(),x=null!==y?(y&m.ZM.Open)===m.ZM.Open:0===u.listboxState;(0,a.useEffect)((()=>{var e;let t=u.optionsRef.current;t&&0===u.listboxState&&t!==(null==(e=(0,L.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[u.listboxState,u.optionsRef]);let R=(0,s.z)((e=>{switch(b.dispose(),e.key){case A.R.Space:if(""!==u.searchQuery)return e.preventDefault(),e.stopPropagation(),f.search(e.key);case A.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==u.activeOptionIndex){let{dataRef:e}=u.options[u.activeOptionIndex];f.onChange(e.current.value)}0===u.mode&&(f.closeListbox(),(0,C.k)().nextFrame((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,I.E)(u.orientation,{vertical:A.R.ArrowDown,horizontal:A.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),f.goToOption(O.T.Next);case(0,I.E)(u.orientation,{vertical:A.R.ArrowUp,horizontal:A.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),f.goToOption(O.T.Previous);case A.R.Home:case A.R.PageUp:return e.preventDefault(),e.stopPropagation(),f.goToOption(O.T.First);case A.R.End:case A.R.PageDown:return e.preventDefault(),e.stopPropagation(),f.goToOption(O.T.Last);case A.R.Escape:return e.preventDefault(),e.stopPropagation(),f.closeListbox(),h.nextFrame((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case A.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(f.search(e.key),b.setTimeout((()=>f.clearSearch()),350))}})),S=l((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.id}),[u.buttonRef.current]),E=(0,a.useMemo)((()=>({open:0===u.listboxState})),[u]),T={"aria-activedescendant":null===u.activeOptionIndex||null==(n=u.options[u.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===u.mode||void 0,"aria-labelledby":S,"aria-orientation":u.orientation,id:o,onKeyDown:R,role:"listbox",tabIndex:0,ref:p};return(0,g.sY)({ourProps:T,theirProps:i,slot:E,defaultTag:"ul",features:$,visible:x,name:"Listbox.Options"})})),Z=(0,g.yV)((function(e,t){let n=(0,d.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:u,...c}=e,f=G("Listbox.Option"),p=_("Listbox.Option"),y=null!==f.activeOptionIndex&&f.options[f.activeOptionIndex].id===r,x=f.isSelected(u),m=(0,a.useRef)(null),R=(0,h.x)(m),S=(0,i.E)({disabled:l,value:u,domRef:m,get textValue(){return R()}}),E=(0,v.T)(t,m);(0,o.e)((()=>{if(0!==f.listboxState||!y||0===f.activationTrigger)return;let e=(0,C.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=m.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[m,y,f.listboxState,f.activationTrigger,f.activeOptionIndex]),(0,o.e)((()=>p.registerOption(r,S)),[S,r]);let T=(0,s.z)((e=>{if(l)return e.preventDefault();p.onChange(u),0===f.mode&&(p.closeListbox(),(0,C.k)().nextFrame((()=>{var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),N=(0,s.z)((()=>{if(l)return p.goToOption(O.T.Nothing);p.goToOption(O.T.Specific,r)})),j=(0,b.g)(),w=(0,s.z)((e=>j.update(e))),I=(0,s.z)((e=>{j.wasMoved(e)&&(l||y||p.goToOption(O.T.Specific,r,0))})),L=(0,s.z)((e=>{j.wasMoved(e)&&(l||y&&p.goToOption(O.T.Nothing))})),A=(0,a.useMemo)((()=>({active:y,selected:x,disabled:l})),[y,x,l]);return(0,g.sY)({ourProps:{id:r,ref:E,role:"option",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,"aria-selected":x,disabled:void 0,onClick:T,onFocus:N,onPointerEnter:w,onMouseEnter:w,onPointerMove:I,onMouseMove:I,onPointerLeave:L,onMouseLeave:L},theirProps:c,slot:A,defaultTag:"li",name:"Listbox.Option"})})),K=Object.assign(B,{Button:Y,Label:q,Options:W,Option:Z});var J=n(4611),X=n(9161),ee=n(1905),te=function(){return te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},te.apply(this,arguments)},ne={"down left":"raiRXQzD","up left":"dTNqgtCy","down right":"NxRqJio5","up right":"t8oyBsWH"};const re=function(e){var t=e.items,n=e.className,o=e.value,i=e.defaultValue,l=e.onChange,u=e.readonly,s=e.label,c=e.direction,d=[ne[void 0===c?"up left":c]];return(0,r.jsxs)(ee.U,te({gap:"4"},{children:[s&&(0,r.jsx)("span",{children:s+">"}),(0,r.jsxs)(K,te({as:"div",className:(0,J.A)("LsvjvEi8",{},[n]),value:o,onChange:l,disabled:u},{children:[(0,r.jsx)(K.Button,te({className:"qrO2mTX9"},{children:(0,r.jsx)(X.zx,te({disabled:u},{children:null!=o?o:i}))})),(0,r.jsx)(K.Options,te({className:(0,J.A)("V57wMCSt",{},d)},{children:null==t?void 0:t.map((function(e){return(0,r.jsx)(K.Option,te({value:e.value,disabled:e.disabled,as:a.Fragment},{children:function(t){var n,a=t.active;return t.selected,(0,r.jsxs)("li",te({className:(0,J.A)("mBjSAlwm",(n={},n.lE7gaHdr=a,n.yYTJVDnW=e.disabled,n))},{children:["",e.content]}))}}),e.value)}))}))]}))]}))}},2636:(e,t,n)=>{n.d(t,{U:()=>i});var r=n(5893),a=n(5059),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},i=function(e){return(0,r.jsx)(a.k,o({},e,{direction:"row"}))}},1905:(e,t,n)=>{n.d(t,{g:()=>r.g,U:()=>a.U});var r=n(4882),a=n(2636)}}]);