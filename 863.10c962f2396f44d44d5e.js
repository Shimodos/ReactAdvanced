"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[863],{7863:(e,t,n)=>{n.d(t,{R:()=>Oe});var r=n(7294),o=n.t(r,2),i=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){l(this,"current",this.detect()),l(this,"handoffState","pending"),l(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},u=(e,t)=>{a.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)};function s(e){let t=(0,r.useRef)(e);return u((()=>{t.current=e}),[e]),t}function c(e,t){let[n,o]=(0,r.useState)(e),i=s(e);return u((()=>o(i.current)),[i,o,...t]),n}let d=function(e){let t=s(e);return r.useCallback(((...e)=>t.current(...e)),[t])};function f(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=f();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function p(){let[e]=(0,r.useState)(f);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}var v;let b=null!=(v=r.useId)?v:function(){let e=function(){let e=function(){let e="undefined"==typeof document;return"useSyncExternalStore"in o&&o.useSyncExternalStore((()=>()=>{}),(()=>!1),(()=>!e))}(),[t,n]=r.useState(a.isHandoffComplete);return t&&!1===a.isHandoffComplete&&n(!1),r.useEffect((()=>{!0!==t&&n(!0)}),[t]),r.useEffect((()=>a.handoff()),[]),!e&&t}(),[t,n]=r.useState(e?()=>a.nextId():null);return u((()=>{null===t&&n(a.nextId())}),[t]),null!=t?""+t:void 0};function m(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,m),r}function h(e){return a.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let g=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var x,y,O=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(O||{}),S=((y=S||{})[y.Error=0]="Error",y[y.Overflow=1]="Overflow",y[y.Success=2]="Success",y[y.Underflow=3]="Underflow",y),w=((x=w||{})[x.Previous=-1]="Previous",x[x.Next=1]="Next",x),E=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(E||{});function L(e,t=0){var n;return e!==(null==(n=h(e))?void 0:n.body)&&m(t,{0:()=>e.matches(g),1(){let t=e;for(;null!==t;){if(t.matches(g))return!0;t=t.parentElement}return!1}})}var R=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(R||{});function T(e,t,n){let o=s(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function P(e,t,n=!0){let o=(0,r.useRef)(!1);function i(n,r){if(!o.current||n.defaultPrevented)return;let i=r(n);if(null===i||!i.getRootNode().contains(i)||!i.isConnected)return;let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of l){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i)||n.composed&&n.composedPath().includes(t))return}return!L(i,E.Loose)&&-1!==i.tabIndex&&n.preventDefault(),t(n,i)}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]);let l=(0,r.useRef)(null);T("pointerdown",(e=>{var t,n;o.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),T("mousedown",(e=>{var t,n;o.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),T("click",(e=>{/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0||/Android/gi.test(window.navigator.userAgent)||l.current&&(i(e,(()=>l.current)),l.current=null)}),!0),T("touchend",(e=>i(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),function(e,t,n){let o=s((e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))));(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("blur",0,!0)}function I(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function D(e,t){let[n,o]=(0,r.useState)((()=>I(e)));return u((()=>{o(I(e))}),[e.type,e.as]),u((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0)),["textarea","input"].join(",");let F=Symbol();function C(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=d((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[F])))?void 0:n}let N=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function A(e){var t,n;let r=null!=(t=e.innerText)?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let i=!1;for(let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),i=!0;let l=i?null!=(n=o.innerText)?n:"":r;return N.test(l)&&(l=l.replace(N,"")),l}function k(e){return[e.screenX,e.screenY]}function M(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}var j,H=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(H||{}),U=((j=U||{})[j.Unmount=0]="Unmount",j[j.Hidden=1]="Hidden",j);function $({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l,mergeRefs:a}){a=null!=a?a:q;let u=Q(t,e);if(i)return B(u,n,r,l,a);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=u;if(e)return B(t,n,r,l,a)}if(1&s){let{unmount:e=!0,...t}=u;return m(e?0:1,{0:()=>null,1:()=>B({...t,hidden:!0,style:{display:"none"}},n,r,l,a)})}return B(u,n,r,l,a)}function B(e,t={},n,o,i){let{as:l=n,children:a,refName:u="ref",...s}=W(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let f={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(f["data-headlessui-state"]=n.join(" "))}if(l===r.Fragment&&Object.keys(K(s)).length>0){if(!(0,r.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>M(null==e?void 0:e.className(...t),s.className):M(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,r.cloneElement)(d,Object.assign({},Q(d.props,K(W(s,["ref"]))),f,c,{ref:i(d.ref,c.ref)},n))}return(0,r.createElement)(l,Object.assign({},W(s,["ref"]),l!==r.Fragment&&c,l!==r.Fragment&&f),d)}function q(...e){return e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function Q(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let o=n[e];for(let e of o){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function V(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function K(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function W(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var _=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(_||{});let z=V((function(e,t){var n;let{features:r=1,...o}=e;return $({ourProps:{ref:t,"aria-hidden":2==(2&r)||(null!=(n=o["aria-hidden"])?n:void 0),hidden:4==(4&r)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&r)&&2!=(2&r)&&{display:"none"}}},theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})})),G=(0,r.createContext)(null);G.displayName="OpenClosedContext";var Y=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Y||{});function X({value:e,children:t}){return r.createElement(G.Provider,{value:e},t)}var J=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(J||{});function Z(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))te(n,ee(t,r),o);return n}function ee(e,t){return e?e+"["+t+"]":t}function te(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())te(e,ee(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):Z(n,t,e)}var ne=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ne||{}),re=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(re||{}),oe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(oe||{}),ie=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ie||{}),le=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(le||{});function ae(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{options:r,activeOptionIndex:o}}let ue={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((e=>n(e.dataRef.current.value)));return-1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=ae(e),o=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1;switch(e.focus){case 0:for(let e=0;e<n.length;++e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 1:for(let e=o-1;e>=0;--e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 2:for(let e=o+1;e<n.length;++e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 3:for(let e=n.length-1;e>=0;--e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 4:for(let r=0;r<n.length;++r)if(t.resolveId(n[r],r,n)===e.id)return r;return r;case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),i=o?e.options.indexOf(o):-1;return-1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=ae(e,(e=>[...e,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=ae(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},se=(0,r.createContext)(null);function ce(e){let t=(0,r.useContext)(se);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ce),t}return t}se.displayName="ListboxActionsContext";let de=(0,r.createContext)(null);function fe(e){let t=(0,r.useContext)(de);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,fe),t}return t}function pe(e,t){return m(t.type,ue,e,t)}de.displayName="ListboxDataContext";let ve=r.Fragment,be=H.RenderStrategy|H.Static,me=V((function(e,t){let{value:n,defaultValue:o,form:i,name:l,onChange:a,by:s=((e,t)=>e===t),disabled:c=!1,horizontal:f=!1,multiple:v=!1,...b}=e;const h=f?"horizontal":"vertical";let g=C(t),[x=(v?[]:void 0),y]=function(e,t,n){let[o,i]=(0,r.useState)(n),l=void 0!==e,a=(0,r.useRef)(l),u=(0,r.useRef)(!1),s=(0,r.useRef)(!1);return!l||a.current||u.current?!l&&a.current&&!s.current&&(s.current=!0,a.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,a.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:o,d((e=>(l||i(e),null==t?void 0:t(e))))]}(n,a,o),[O,S]=(0,r.useReducer)(pe,{dataRef:(0,r.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),w=(0,r.useRef)({static:!1,hold:!1}),R=(0,r.useRef)(null),T=(0,r.useRef)(null),I=(0,r.useRef)(null),D=d("string"==typeof s?(e,t)=>{let n=s;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:s),F=(0,r.useCallback)((e=>m(N.mode,{1:()=>x.some((t=>D(t,e))),0:()=>D(x,e)})),[x]),N=(0,r.useMemo)((()=>({...O,value:x,disabled:c,mode:v?1:0,orientation:h,compare:D,isSelected:F,optionsPropsRef:w,labelRef:R,buttonRef:T,optionsRef:I})),[x,c,v,O]);u((()=>{O.dataRef.current=N}),[N]),P([N.buttonRef,N.optionsRef],((e,t)=>{var n;S({type:1}),L(t,E.Loose)||(e.preventDefault(),null==(n=N.buttonRef.current)||n.focus())}),0===N.listboxState);let A=(0,r.useMemo)((()=>({open:0===N.listboxState,disabled:c,value:x})),[N,c,x]),k=d((e=>{let t=N.options.find((t=>t.id===e));t&&Q(t.dataRef.current.value)})),M=d((()=>{if(null!==N.activeOptionIndex){let{dataRef:e,id:t}=N.options[N.activeOptionIndex];Q(e.current.value),S({type:2,focus:J.Specific,id:t})}})),j=d((()=>S({type:0}))),H=d((()=>S({type:1}))),U=d(((e,t,n)=>e===J.Specific?S({type:2,focus:J.Specific,id:t,trigger:n}):S({type:2,focus:e,trigger:n}))),B=d(((e,t)=>(S({type:5,id:e,dataRef:t}),()=>S({type:6,id:e})))),q=d((e=>(S({type:7,id:e}),()=>S({type:7,id:null})))),Q=d((e=>m(N.mode,{0:()=>null==y?void 0:y(e),1(){let t=N.value.slice(),n=t.findIndex((t=>D(t,e)));return-1===n?t.push(e):t.splice(n,1),null==y?void 0:y(t)}}))),V=d((e=>S({type:3,value:e}))),W=d((()=>S({type:4}))),G=(0,r.useMemo)((()=>({onChange:Q,registerOption:B,registerLabel:q,goToOption:U,closeListbox:H,openListbox:j,selectActiveOption:M,selectOption:k,search:V,clearSearch:W})),[]),ee={ref:g},te=(0,r.useRef)(null),ne=p();return(0,r.useEffect)((()=>{te.current&&void 0!==o&&ne.addEventListener(te.current,"reset",(()=>{null==y||y(o)}))}),[te,y]),r.createElement(se.Provider,{value:G},r.createElement(de.Provider,{value:N},r.createElement(X,{value:m(N.listboxState,{0:Y.Open,1:Y.Closed})},null!=l&&null!=x&&Z({[l]:x}).map((([e,t],n)=>r.createElement(z,{features:_.Hidden,ref:0===n?e=>{var t;te.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...K({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:c,name:e,value:t})}))),$({ourProps:ee,theirProps:b,slot:A,defaultTag:ve,name:"Listbox"}))))})),he=V((function(e,t){var n;let o=b(),{id:i=`headlessui-listbox-button-${o}`,...l}=e,a=fe("Listbox.Button"),u=ce("Listbox.Button"),s=C(a.buttonRef,t),f=p(),v=d((e=>{switch(e.key){case ne.Space:case ne.Enter:case ne.ArrowDown:e.preventDefault(),u.openListbox(),f.nextFrame((()=>{a.value||u.goToOption(J.First)}));break;case ne.ArrowUp:e.preventDefault(),u.openListbox(),f.nextFrame((()=>{a.value||u.goToOption(J.Last)}))}})),m=d((e=>{e.key===ne.Space&&e.preventDefault()})),h=d((e=>{if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();0===a.listboxState?(u.closeListbox(),f.nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),u.openListbox())})),g=c((()=>{if(a.labelId)return[a.labelId,i].join(" ")}),[a.labelId,i]),x=(0,r.useMemo)((()=>({open:0===a.listboxState,disabled:a.disabled,value:a.value})),[a]);return $({ourProps:{ref:s,id:i,type:D(e,a.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=a.optionsRef.current)?void 0:n.id,"aria-expanded":0===a.listboxState,"aria-labelledby":g,disabled:a.disabled,onKeyDown:v,onKeyUp:m,onClick:h},theirProps:l,slot:x,defaultTag:"button",name:"Listbox.Button"})})),ge=V((function(e,t){let n=b(),{id:o=`headlessui-listbox-label-${n}`,...i}=e,l=fe("Listbox.Label"),a=ce("Listbox.Label"),s=C(l.labelRef,t);u((()=>a.registerLabel(o)),[o]);let c=d((()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),f=(0,r.useMemo)((()=>({open:0===l.listboxState,disabled:l.disabled})),[l]);return $({ourProps:{ref:s,id:o,onClick:c},theirProps:i,slot:f,defaultTag:"label",name:"Listbox.Label"})})),xe=V((function(e,t){var n;let o=b(),{id:i=`headlessui-listbox-options-${o}`,...l}=e,a=fe("Listbox.Options"),u=ce("Listbox.Options"),s=C(a.optionsRef,t),v=p(),g=p(),x=(0,r.useContext)(G),y=null!==x?(x&Y.Open)===Y.Open:0===a.listboxState;(0,r.useEffect)((()=>{var e;let t=a.optionsRef.current;t&&0===a.listboxState&&t!==(null==(e=h(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[a.listboxState,a.optionsRef]);let O=d((e=>{switch(g.dispose(),e.key){case ne.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),u.search(e.key);case ne.Enter:if(e.preventDefault(),e.stopPropagation(),null!==a.activeOptionIndex){let{dataRef:e}=a.options[a.activeOptionIndex];u.onChange(e.current.value)}0===a.mode&&(u.closeListbox(),f().nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case m(a.orientation,{vertical:ne.ArrowDown,horizontal:ne.ArrowRight}):return e.preventDefault(),e.stopPropagation(),u.goToOption(J.Next);case m(a.orientation,{vertical:ne.ArrowUp,horizontal:ne.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),u.goToOption(J.Previous);case ne.Home:case ne.PageUp:return e.preventDefault(),e.stopPropagation(),u.goToOption(J.First);case ne.End:case ne.PageDown:return e.preventDefault(),e.stopPropagation(),u.goToOption(J.Last);case ne.Escape:return e.preventDefault(),e.stopPropagation(),u.closeListbox(),v.nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case ne.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(u.search(e.key),g.setTimeout((()=>u.clearSearch()),350))}})),S=c((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.id}),[a.buttonRef.current]),w=(0,r.useMemo)((()=>({open:0===a.listboxState})),[a]);return $({ourProps:{"aria-activedescendant":null===a.activeOptionIndex||null==(n=a.options[a.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===a.mode||void 0,"aria-labelledby":S,"aria-orientation":a.orientation,id:i,onKeyDown:O,role:"listbox",tabIndex:0,ref:s},theirProps:l,slot:w,defaultTag:"ul",features:be,visible:y,name:"Listbox.Options"})})),ye=V((function(e,t){let n=b(),{id:o=`headlessui-listbox-option-${n}`,disabled:i=!1,value:l,...a}=e,c=fe("Listbox.Option"),p=ce("Listbox.Option"),v=null!==c.activeOptionIndex&&c.options[c.activeOptionIndex].id===o,m=c.isSelected(l),h=(0,r.useRef)(null),g=function(e){let t=(0,r.useRef)(""),n=(0,r.useRef)("");return d((()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(t.current===o)return n.current;let i=function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map((e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():A(t).trim()}return null})).filter(Boolean);if(e.length>0)return e.join(", ")}return A(e).trim()}(r).trim().toLowerCase();return t.current=o,n.current=i,i}))}(h),x=s({disabled:i,value:l,domRef:h,get textValue(){return g()}}),y=C(t,h);u((()=>{if(0!==c.listboxState||!v||0===c.activationTrigger)return;let e=f();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=h.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[h,v,c.listboxState,c.activationTrigger,c.activeOptionIndex]),u((()=>p.registerOption(o,x)),[x,o]);let O=d((e=>{if(i)return e.preventDefault();p.onChange(l),0===c.mode&&(p.closeListbox(),f().nextFrame((()=>{var e;return null==(e=c.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),S=d((()=>{if(i)return p.goToOption(J.Nothing);p.goToOption(J.Specific,o)})),w=function(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=k(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=k(t)}}}(),E=d((e=>w.update(e))),L=d((e=>{w.wasMoved(e)&&(i||v||p.goToOption(J.Specific,o,0))})),R=d((e=>{w.wasMoved(e)&&(i||v&&p.goToOption(J.Nothing))})),T=(0,r.useMemo)((()=>({active:v,selected:m,disabled:i})),[v,m,i]);return $({ourProps:{id:o,ref:y,role:"option",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,"aria-selected":m,disabled:void 0,onClick:O,onFocus:S,onPointerEnter:E,onMouseEnter:E,onPointerMove:L,onMouseMove:L,onPointerLeave:R,onMouseLeave:R},theirProps:a,slot:T,defaultTag:"li",name:"Listbox.Option"})})),Oe=Object.assign(me,{Button:he,Label:ge,Options:xe,Option:ye})}}]);