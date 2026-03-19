(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function f(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(h){if(h.ep)return;h.ep=!0;const m=f(h);fetch(h.href,m)}})();var kc={exports:{}},On={};var th;function xg(){if(th)return On;th=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(o,h,m){var y=null;if(m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),"key"in h){m={};for(var E in h)E!=="key"&&(m[E]=h[E])}else m=h;return h=m.ref,{$$typeof:r,type:o,key:y,ref:h!==void 0?h:null,props:m}}return On.Fragment=u,On.jsx=f,On.jsxs=f,On}var ah;function Sg(){return ah||(ah=1,kc.exports=xg()),kc.exports}var s=Sg(),Rc={exports:{}},I={};var lh;function wg(){if(lh)return I;lh=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),k=Symbol.iterator;function H(x){return x===null||typeof x!="object"?null:(x=k&&x[k]||x["@@iterator"],typeof x=="function"?x:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function V(x,_,L){this.props=x,this.context=_,this.refs=G,this.updater=L||U}V.prototype.isReactComponent={},V.prototype.setState=function(x,_){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,_,"setState")},V.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Q(){}Q.prototype=V.prototype;function W(x,_,L){this.props=x,this.context=_,this.refs=G,this.updater=L||U}var we=W.prototype=new Q;we.constructor=W,B(we,V.prototype),we.isPureReactComponent=!0;var Se=Array.isArray;function Te(){}var P={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ye(x,_,L){var X=L.ref;return{$$typeof:r,type:x,key:_,ref:X!==void 0?X:null,props:L}}function pt(x,_){return Ye(x.type,_,x.props)}function Rt(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function $e(x){var _={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return _[L]})}var Da=/\/+/g;function qt(x,_){return typeof x=="object"&&x!==null&&x.key!=null?$e(""+x.key):_.toString(36)}function At(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Te,Te):(x.status="pending",x.then(function(_){x.status==="pending"&&(x.status="fulfilled",x.value=_)},function(_){x.status==="pending"&&(x.status="rejected",x.reason=_)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function R(x,_,L,X,ee){var le=typeof x;(le==="undefined"||le==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(le){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case r:case u:fe=!0;break;case C:return fe=x._init,R(fe(x._payload),_,L,X,ee)}}if(fe)return ee=ee(x),fe=X===""?"."+qt(x,0):X,Se(ee)?(L="",fe!=null&&(L=fe.replace(Da,"$&/")+"/"),R(ee,_,L,"",function(Ll){return Ll})):ee!=null&&(Rt(ee)&&(ee=pt(ee,L+(ee.key==null||x&&x.key===ee.key?"":(""+ee.key).replace(Da,"$&/")+"/")+fe)),_.push(ee)),1;fe=0;var We=X===""?".":X+":";if(Se(x))for(var ke=0;ke<x.length;ke++)X=x[ke],le=We+qt(X,ke),fe+=R(X,_,L,le,ee);else if(ke=H(x),typeof ke=="function")for(x=ke.call(x),ke=0;!(X=x.next()).done;)X=X.value,le=We+qt(X,ke++),fe+=R(X,_,L,le,ee);else if(le==="object"){if(typeof x.then=="function")return R(At(x),_,L,X,ee);throw _=String(x),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return fe}function q(x,_,L){if(x==null)return x;var X=[],ee=0;return R(x,X,"","",function(le){return _.call(L,le,ee++)}),X}function F(x){if(x._status===-1){var _=x._result;_=_(),_.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=_)}if(x._status===1)return x._result.default;throw x._result}var pe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},be={map:q,forEach:function(x,_,L){q(x,function(){_.apply(this,arguments)},L)},count:function(x){var _=0;return q(x,function(){_++}),_},toArray:function(x){return q(x,function(_){return _})||[]},only:function(x){if(!Rt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return I.Activity=p,I.Children=be,I.Component=V,I.Fragment=f,I.Profiler=h,I.PureComponent=W,I.StrictMode=o,I.Suspense=S,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,I.__COMPILER_RUNTIME={__proto__:null,c:function(x){return P.H.useMemoCache(x)}},I.cache=function(x){return function(){return x.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(x,_,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var X=B({},x.props),ee=x.key;if(_!=null)for(le in _.key!==void 0&&(ee=""+_.key),_)!Me.call(_,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&_.ref===void 0||(X[le]=_[le]);var le=arguments.length-2;if(le===1)X.children=L;else if(1<le){for(var fe=Array(le),We=0;We<le;We++)fe[We]=arguments[We+2];X.children=fe}return Ye(x.type,ee,X)},I.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},I.createElement=function(x,_,L){var X,ee={},le=null;if(_!=null)for(X in _.key!==void 0&&(le=""+_.key),_)Me.call(_,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ee[X]=_[X]);var fe=arguments.length-2;if(fe===1)ee.children=L;else if(1<fe){for(var We=Array(fe),ke=0;ke<fe;ke++)We[ke]=arguments[ke+2];ee.children=We}if(x&&x.defaultProps)for(X in fe=x.defaultProps,fe)ee[X]===void 0&&(ee[X]=fe[X]);return Ye(x,le,ee)},I.createRef=function(){return{current:null}},I.forwardRef=function(x){return{$$typeof:E,render:x}},I.isValidElement=Rt,I.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:F}},I.memo=function(x,_){return{$$typeof:v,type:x,compare:_===void 0?null:_}},I.startTransition=function(x){var _=P.T,L={};P.T=L;try{var X=x(),ee=P.S;ee!==null&&ee(L,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Te,pe)}catch(le){pe(le)}finally{_!==null&&L.types!==null&&(_.types=L.types),P.T=_}},I.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},I.use=function(x){return P.H.use(x)},I.useActionState=function(x,_,L){return P.H.useActionState(x,_,L)},I.useCallback=function(x,_){return P.H.useCallback(x,_)},I.useContext=function(x){return P.H.useContext(x)},I.useDebugValue=function(){},I.useDeferredValue=function(x,_){return P.H.useDeferredValue(x,_)},I.useEffect=function(x,_){return P.H.useEffect(x,_)},I.useEffectEvent=function(x){return P.H.useEffectEvent(x)},I.useId=function(){return P.H.useId()},I.useImperativeHandle=function(x,_,L){return P.H.useImperativeHandle(x,_,L)},I.useInsertionEffect=function(x,_){return P.H.useInsertionEffect(x,_)},I.useLayoutEffect=function(x,_){return P.H.useLayoutEffect(x,_)},I.useMemo=function(x,_){return P.H.useMemo(x,_)},I.useOptimistic=function(x,_){return P.H.useOptimistic(x,_)},I.useReducer=function(x,_,L){return P.H.useReducer(x,_,L)},I.useRef=function(x){return P.H.useRef(x)},I.useState=function(x){return P.H.useState(x)},I.useSyncExternalStore=function(x,_,L){return P.H.useSyncExternalStore(x,_,L)},I.useTransition=function(){return P.H.useTransition()},I.version="19.2.4",I}var nh;function Xc(){return nh||(nh=1,Rc.exports=wg()),Rc.exports}var T=Xc(),Dc={exports:{}},_n={},Oc={exports:{}},_c={};var ih;function zg(){return ih||(ih=1,(function(r){function u(R,q){var F=R.length;R.push(q);e:for(;0<F;){var pe=F-1>>>1,be=R[pe];if(0<h(be,q))R[pe]=q,R[F]=be,F=pe;else break e}}function f(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var q=R[0],F=R.pop();if(F!==q){R[0]=F;e:for(var pe=0,be=R.length,x=be>>>1;pe<x;){var _=2*(pe+1)-1,L=R[_],X=_+1,ee=R[X];if(0>h(L,F))X<be&&0>h(ee,L)?(R[pe]=ee,R[X]=F,pe=X):(R[pe]=L,R[_]=F,pe=_);else if(X<be&&0>h(ee,F))R[pe]=ee,R[X]=F,pe=X;else break e}}return q}function h(R,q){var F=R.sortIndex-q.sortIndex;return F!==0?F:R.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var y=Date,E=y.now();r.unstable_now=function(){return y.now()-E}}var S=[],v=[],C=1,p=null,k=3,H=!1,U=!1,B=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function we(R){for(var q=f(v);q!==null;){if(q.callback===null)o(v);else if(q.startTime<=R)o(v),q.sortIndex=q.expirationTime,u(S,q);else break;q=f(v)}}function Se(R){if(B=!1,we(R),!U)if(f(S)!==null)U=!0,Te||(Te=!0,$e());else{var q=f(v);q!==null&&At(Se,q.startTime-R)}}var Te=!1,P=-1,Me=5,Ye=-1;function pt(){return G?!0:!(r.unstable_now()-Ye<Me)}function Rt(){if(G=!1,Te){var R=r.unstable_now();Ye=R;var q=!0;try{e:{U=!1,B&&(B=!1,Q(P),P=-1),H=!0;var F=k;try{t:{for(we(R),p=f(S);p!==null&&!(p.expirationTime>R&&pt());){var pe=p.callback;if(typeof pe=="function"){p.callback=null,k=p.priorityLevel;var be=pe(p.expirationTime<=R);if(R=r.unstable_now(),typeof be=="function"){p.callback=be,we(R),q=!0;break t}p===f(S)&&o(S),we(R)}else o(S);p=f(S)}if(p!==null)q=!0;else{var x=f(v);x!==null&&At(Se,x.startTime-R),q=!1}}break e}finally{p=null,k=F,H=!1}q=void 0}}finally{q?$e():Te=!1}}}var $e;if(typeof W=="function")$e=function(){W(Rt)};else if(typeof MessageChannel<"u"){var Da=new MessageChannel,qt=Da.port2;Da.port1.onmessage=Rt,$e=function(){qt.postMessage(null)}}else $e=function(){V(Rt,0)};function At(R,q){P=V(function(){R(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(R){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var F=k;k=q;try{return R()}finally{k=F}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(R,q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=k;k=R;try{return q()}finally{k=F}},r.unstable_scheduleCallback=function(R,q,F){var pe=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,R){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=F+be,R={id:C++,callback:q,priorityLevel:R,startTime:F,expirationTime:be,sortIndex:-1},F>pe?(R.sortIndex=F,u(v,R),f(S)===null&&R===f(v)&&(B?(Q(P),P=-1):B=!0,At(Se,F-pe))):(R.sortIndex=be,u(S,R),U||H||(U=!0,Te||(Te=!0,$e()))),R},r.unstable_shouldYield=pt,r.unstable_wrapCallback=function(R){var q=k;return function(){var F=k;k=q;try{return R.apply(this,arguments)}finally{k=F}}}})(_c)),_c}var rh;function jg(){return rh||(rh=1,Oc.exports=zg()),Oc.exports}var Hc={exports:{}},Ke={};var sh;function Ng(){if(sh)return Ke;sh=1;var r=Xc();function u(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)v+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(S,v,C){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:p==null?null:""+p,children:S,containerInfo:v,implementation:C}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ke.createPortal=function(S,v){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(u(299));return m(S,v,null,C)},Ke.flushSync=function(S){var v=y.T,C=o.p;try{if(y.T=null,o.p=2,S)return S()}finally{y.T=v,o.p=C,o.d.f()}},Ke.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,o.d.C(S,v))},Ke.prefetchDNS=function(S){typeof S=="string"&&o.d.D(S)},Ke.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var C=v.as,p=E(C,v.crossOrigin),k=typeof v.integrity=="string"?v.integrity:void 0,H=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;C==="style"?o.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:p,integrity:k,fetchPriority:H}):C==="script"&&o.d.X(S,{crossOrigin:p,integrity:k,fetchPriority:H,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ke.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var C=E(v.as,v.crossOrigin);o.d.M(S,{crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&o.d.M(S)},Ke.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var C=v.as,p=E(C,v.crossOrigin);o.d.L(S,C,{crossOrigin:p,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ke.preloadModule=function(S,v){if(typeof S=="string")if(v){var C=E(v.as,v.crossOrigin);o.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else o.d.m(S)},Ke.requestFormReset=function(S){o.d.r(S)},Ke.unstable_batchedUpdates=function(S,v){return S(v)},Ke.useFormState=function(S,v,C){return y.H.useFormState(S,v,C)},Ke.useFormStatus=function(){return y.H.useHostTransitionStatus()},Ke.version="19.2.4",Ke}var ch;function Eg(){if(ch)return Hc.exports;ch=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Hc.exports=Ng(),Hc.exports}var oh;function Tg(){if(oh)return _n;oh=1;var r=jg(),u=Xc(),f=Eg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(m(e)!==e)throw Error(o(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return S(n),e;if(i===l)return S(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,d=n.child;d;){if(d===a){c=!0,a=n,l=i;break}if(d===l){c=!0,l=n,a=i;break}d=d.sibling}if(!c){for(d=i.child;d;){if(d===a){c=!0,a=i,l=n;break}if(d===l){c=!0,l=i,a=n;break}d=d.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,k=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),W=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),Rt=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=Rt&&e[Rt]||e["@@iterator"],typeof e=="function"?e:null)}var Da=Symbol.for("react.client.reference");function qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Da?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case V:return"Profiler";case G:return"StrictMode";case Se:return"Suspense";case Te:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case W:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:qt(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return qt(e(t))}catch{}}return null}var At=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],be=-1;function x(e){return{current:e}}function _(e){0>be||(e.current=pe[be],pe[be]=null,be--)}function L(e,t){be++,pe[be]=e.current,e.current=t}var X=x(null),ee=x(null),le=x(null),fe=x(null);function We(e,t){switch(L(le,t),L(ee,e),L(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jf(t),e=Nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(X),L(X,e)}function ke(){_(X),_(ee),_(le)}function Ll(e){e.memoizedState!==null&&L(fe,e);var t=X.current,a=Nf(t,e.type);t!==a&&(L(ee,e),L(X,a))}function Gn(e){ee.current===e&&(_(X),_(ee)),fe.current===e&&(_(fe),Mn._currentValue=F)}var hr,Ic;function Oa(e){if(hr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);hr=t&&t[1]||"",Ic=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hr+e+Ic}var mr=!1;function pr(e,t){if(!e||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var N=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){N=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){N=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&N&&typeof A.stack=="string")return[A.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],d=i[1];if(c&&d){var g=c.split(`
`),j=d.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===j.length)for(l=g.length-1,n=j.length-1;1<=l&&0<=n&&g[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==j[n]){var M=`
`+g[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=n);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Oa(a):""}function $h(e,t){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return e.child!==t&&t!==null?Oa("Suspense Fallback"):Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return pr(e.type,!1);case 11:return pr(e.type.render,!1);case 1:return pr(e.type,!0);case 31:return Oa("Activity");default:return""}}function Pc(e){try{var t="",a=null;do t+=$h(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var gr=Object.prototype.hasOwnProperty,yr=r.unstable_scheduleCallback,vr=r.unstable_cancelCallback,Ih=r.unstable_shouldYield,Ph=r.unstable_requestPaint,it=r.unstable_now,em=r.unstable_getCurrentPriorityLevel,eo=r.unstable_ImmediatePriority,to=r.unstable_UserBlockingPriority,Yn=r.unstable_NormalPriority,tm=r.unstable_LowPriority,ao=r.unstable_IdlePriority,am=r.log,lm=r.unstable_setDisableYieldValue,Gl=null,rt=null;function ca(e){if(typeof am=="function"&&lm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Gl,e)}catch{}}var st=Math.clz32?Math.clz32:rm,nm=Math.log,im=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(nm(e)/im|0)|0}var Qn=256,Xn=262144,Zn=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=_a(l):(c&=d,c!==0?n=_a(c):a||(a=d&~e,a!==0&&(n=_a(a))))):(d=l&~i,d!==0?n=_a(d):c!==0?n=_a(c):a||(a=l&~e,a!==0&&(n=_a(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function br(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cm(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,j=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-st(a),O=1<<M;d[M]=0,g[M]=-1;var N=j[M];if(N!==null)for(j[M]=null,M=0;M<N.length;M++){var A=N[M];A!==null&&(A.lane&=-536870913)}a&=~O}l!==0&&no(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function no(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function io(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-st(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ro(e,t){var a=t&-t;return a=(a&42)!==0?1:xr(a),(a&(e.suspendedLanes|t))!==0?0:a}function xr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Kf(e.type))}function co(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var oa=Math.random().toString(36).slice(2),Qe="__reactFiber$"+oa,Ie="__reactProps$"+oa,el="__reactContainer$"+oa,wr="__reactEvents$"+oa,om="__reactListeners$"+oa,um="__reactHandles$"+oa,oo="__reactResources$"+oa,Xl="__reactMarker$"+oa;function zr(e){delete e[Qe],delete e[Ie],delete e[wr],delete e[om],delete e[um]}function tl(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Rf(e);e!==null;){if(a=e[Qe])return a;e=Rf(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[Qe]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ll(e){var t=e[oo];return t||(t=e[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Xl]=!0}var uo=new Set,fo={};function Ha(e,t){nl(e,t),nl(e+"Capture",t)}function nl(e,t){for(fo[e]=t,e=0;e<t.length;e++)uo.add(t[e])}var dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},mo={};function fm(e){return gr.call(mo,e)?!0:gr.call(ho,e)?!1:dm.test(e)?mo[e]=!0:(ho[e]=!0,!1)}function Jn(e,t,a){if(fm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Kn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Lt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function po(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){if(!e._valueTracker){var t=po(e)?"checked":"value";e._valueTracker=hm(e,t,""+e[t])}}function go(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=po(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mm=/[\n"\\]/g;function yt(e){return e.replace(mm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nr(e,t,a,l,n,i,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Er(e,c,gt(t)):a!=null?Er(e,c,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+gt(d):e.removeAttribute("name")}function yo(e,t,a,l,n,i,c,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){jr(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),jr(e)}function Er(e,t,a){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function il(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vo(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function bo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(At(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),jr(e)}function rl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||pm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function So(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&xo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&xo(e,i,t[i])}function Tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fn(e){return ym.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ar=null;function Cr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,cl=null;function wo(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(o(90));Nr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&go(l)}break e;case"textarea":vo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&il(e,!!a.multiple,t,!1)}}}var Mr=!1;function zo(e,t,a){if(Mr)return e(t,a);Mr=!0;try{var l=e(t);return l}finally{if(Mr=!1,(sl!==null||cl!==null)&&(Ui(),sl&&(t=sl,e=cl,cl=sl=null,wo(t),e)))for(t=0;t<e.length;t++)wo(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kr=!1;if(Yt)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){kr=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{kr=!1}var ua=null,Rr=null,$n=null;function jo(){if($n)return $n;var e,t=Rr,a=t.length,l,n="value"in ua?ua.value:ua.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return $n=n.slice(e,1<l?1-l:void 0)}function In(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function No(){return!1}function Pe(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pn:No,this.isPropagationStopped=No,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=Pe(Ua),Kl=p({},Ua,{view:0,detail:0}),vm=Pe(Kl),Dr,Or,Wl,ti=p({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?(Dr=e.screenX-Wl.screenX,Or=e.screenY-Wl.screenY):Or=Dr=0,Wl=e),Dr)},movementY:function(e){return"movementY"in e?e.movementY:Or}}),Eo=Pe(ti),bm=p({},ti,{dataTransfer:0}),xm=Pe(bm),Sm=p({},Kl,{relatedTarget:0}),_r=Pe(Sm),wm=p({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),zm=Pe(wm),jm=p({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=Pe(jm),Em=p({},Ua,{data:0}),To=Pe(Em),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cm[e])?!!t[e]:!1}function Hr(){return Mm}var km=p({},Kl,{key:function(e){if(e.key){var t=Tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rm=Pe(km),Dm=p({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ao=Pe(Dm),Om=p({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),_m=Pe(Om),Hm=p({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=Pe(Hm),Bm=p({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qm=Pe(Bm),Lm=p({},Ua,{newState:0,oldState:0}),Gm=Pe(Lm),Ym=[9,13,27,32],Ur=Yt&&"CompositionEvent"in window,Fl=null;Yt&&"documentMode"in document&&(Fl=document.documentMode);var Qm=Yt&&"TextEvent"in window&&!Fl,Co=Yt&&(!Ur||Fl&&8<Fl&&11>=Fl),Mo=" ",ko=!1;function Ro(e,t){switch(e){case"keyup":return Ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Do(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function Xm(e,t){switch(e){case"compositionend":return Do(t);case"keypress":return t.which!==32?null:(ko=!0,Mo);case"textInput":return e=t.data,e===Mo&&ko?null:e;default:return null}}function Zm(e,t){if(ol)return e==="compositionend"||!Ur&&Ro(e,t)?(e=jo(),$n=Rr=ua=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Co&&t.locale!=="ko"?null:t.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vm[e.type]:t==="textarea"}function _o(e,t,a,l){sl?cl?cl.push(l):cl=[l]:sl=l,t=Xi(t,"onChange"),0<t.length&&(a=new ei("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,Il=null;function Jm(e){vf(e,0)}function ai(e){var t=Zl(e);if(go(t))return e}function Ho(e,t){if(e==="change")return t}var Uo=!1;if(Yt){var Br;if(Yt){var qr="oninput"in document;if(!qr){var Bo=document.createElement("div");Bo.setAttribute("oninput","return;"),qr=typeof Bo.oninput=="function"}Br=qr}else Br=!1;Uo=Br&&(!document.documentMode||9<document.documentMode)}function qo(){$l&&($l.detachEvent("onpropertychange",Lo),Il=$l=null)}function Lo(e){if(e.propertyName==="value"&&ai(Il)){var t=[];_o(t,Il,e,Cr(e)),zo(Jm,t)}}function Km(e,t,a){e==="focusin"?(qo(),$l=t,Il=a,$l.attachEvent("onpropertychange",Lo)):e==="focusout"&&qo()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Il)}function Fm(e,t){if(e==="click")return ai(t)}function $m(e,t){if(e==="input"||e==="change")return ai(t)}function Im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Im;function Pl(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!gr.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var a=Go(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Go(a)}}function Qo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wn(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pm=Yt&&"documentMode"in document&&11>=document.documentMode,ul=null,Gr=null,en=null,Yr=!1;function Zo(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yr||ul==null||ul!==Wn(l)||(l=ul,"selectionStart"in l&&Lr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),en&&Pl(en,l)||(en=l,l=Xi(Gr,"onSelect"),0<l.length&&(t=new ei("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ul)))}function Ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dl={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Qr={},Vo={};Yt&&(Vo=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function qa(e){if(Qr[e])return Qr[e];if(!dl[e])return e;var t=dl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vo)return Qr[e]=t[a];return e}var Jo=qa("animationend"),Ko=qa("animationiteration"),Wo=qa("animationstart"),ep=qa("transitionrun"),tp=qa("transitionstart"),ap=qa("transitioncancel"),Fo=qa("transitionend"),$o=new Map,Xr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xr.push("scrollEnd");function Ct(e,t){$o.set(e,t),Ha(t,[e])}var li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],fl=0,Zr=0;function ni(){for(var e=fl,t=Zr=fl=0;t<e;){var a=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Io(a,n,i)}}function ii(e,t,a,l){vt[fl++]=e,vt[fl++]=t,vt[fl++]=a,vt[fl++]=l,Zr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vr(e,t,a,l){return ii(e,t,a,l),ri(e)}function La(e,t){return ii(e,null,null,t),ri(e)}function Io(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-st(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ri(e){if(50<zn)throw zn=0,tc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hl={};function lp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new lp(e,t,a,l)}function Jr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Po(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function si(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Jr(e)&&(c=1);else if(typeof e=="string")c=cg(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=ot(31,a,t,n),e.elementType=Ye,e.lanes=i,e;case B:return Ga(a.children,n,i,t);case G:c=8,n|=24;break;case V:return e=ot(12,a,t,n|2),e.elementType=V,e.lanes=i,e;case Se:return e=ot(13,a,t,n),e.elementType=Se,e.lanes=i,e;case Te:return e=ot(19,a,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:c=10;break e;case Q:c=9;break e;case we:c=11;break e;case P:c=14;break e;case Me:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ot(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ga(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function Kr(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function eu(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Wr(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var tu=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=tu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Pc(t)},tu.set(e,t),t)}return{value:e,source:t,stack:Pc(t)}}var ml=[],pl=0,ci=null,tn=0,xt=[],St=0,da=null,Dt=1,Ot="";function Xt(e,t){ml[pl++]=tn,ml[pl++]=ci,ci=e,tn=t}function au(e,t,a){xt[St++]=Dt,xt[St++]=Ot,xt[St++]=da,da=e;var l=Dt;e=Ot;var n=32-st(l)-1;l&=~(1<<n),a+=1;var i=32-st(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Dt=1<<32-st(t)+n|a<<n|l,Ot=i+e}else Dt=1<<i|a<<n|l,Ot=e}function Fr(e){e.return!==null&&(Xt(e,1),au(e,1,0))}function $r(e){for(;e===ci;)ci=ml[--pl],ml[pl]=null,tn=ml[--pl],ml[pl]=null;for(;e===da;)da=xt[--St],xt[St]=null,Ot=xt[--St],xt[St]=null,Dt=xt[--St],xt[St]=null}function lu(e,t){xt[St++]=Dt,xt[St++]=Ot,xt[St++]=da,Dt=t.id,Ot=t.overflow,da=e}var Xe=null,ze=null,ce=!1,fa=null,wt=!1,Ir=Error(o(519));function ha(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw an(bt(t,e)),Ir}function nu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[Ie]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<Nn.length;a++)ie(Nn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),yo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),bo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||wf(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ha(e,!0)}function iu(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Xe=Xe.return}}function gl(e){if(e!==Xe)return!1;if(!ce)return iu(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gc(e.type,e.memoizedProps)),a=!a),a&&ze&&ha(e),iu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=kf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=kf(e)}else t===27?(t=ze,Ta(e.type)?(e=Sc,Sc=null,ze=e):ze=t):ze=Xe?jt(e.stateNode.nextSibling):null;return!0}function Ya(){ze=Xe=null,ce=!1}function Pr(){var e=fa;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),fa=null),e}function an(e){fa===null?fa=[e]:fa.push(e)}var es=x(null),Qa=null,Zt=null;function ma(e,t,a){L(es,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=es.current,_(es)}function ts(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function as(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var g=0;g<t.length;g++)if(d.context===t[g]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),ts(i.return,a,e),l||(c=null);break e}i=d.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),ts(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function yl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var d=n.type;ct(n.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(n===fe.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Mn):e=[Mn])}n=n.return}e!==null&&as(t,e,a,l),t.flags|=262144}function oi(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Qa=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return ru(Qa,e)}function ui(e,t){return Qa===null&&Xa(e),ru(e,t)}function ru(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(o(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var np=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ip=r.unstable_scheduleCallback,rp=r.unstable_NormalPriority,Oe={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ls(){return{controller:new np,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&ip(rp,function(){e.controller.abort()})}var nn=null,ns=0,vl=0,bl=null;function sp(e,t){if(nn===null){var a=nn=[];ns=0,vl=sc(),bl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ns++,t.then(su,su),t}function su(){if(--ns===0&&nn!==null){bl!==null&&(bl.status="fulfilled");var e=nn;nn=null,vl=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var cu=R.S;R.S=function(e,t){Zd=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sp(e,t),cu!==null&&cu(e,t)};var Za=x(null);function is(){var e=Za.current;return e!==null?e:xe.pooledCache}function di(e,t){t===null?L(Za,Za.current):L(Za,t.pool)}function ou(){var e=is();return e===null?null:{parent:Oe._currentValue,pool:e}}var xl=Error(o(460)),rs=Error(o(474)),fi=Error(o(542)),hi={then:function(){}};function uu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function du(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hu(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hu(e),e}throw Ja=t,xl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,xl):a}}var Ja=null;function fu(){if(Ja===null)throw Error(o(459));var e=Ja;return Ja=null,e}function hu(e){if(e===xl||e===fi)throw Error(o(483))}var Sl=null,rn=0;function mi(e){var t=rn;return rn+=1,Sl===null&&(Sl=[]),du(Sl,e,t)}function sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pi(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mu(e){function t(w,b){if(e){var z=w.deletions;z===null?(w.deletions=[b],w.flags|=16):z.push(b)}}function a(w,b){if(!e)return null;for(;b!==null;)t(w,b),b=b.sibling;return null}function l(w){for(var b=new Map;w!==null;)w.key!==null?b.set(w.key,w):b.set(w.index,w),w=w.sibling;return b}function n(w,b){return w=Qt(w,b),w.index=0,w.sibling=null,w}function i(w,b,z){return w.index=z,e?(z=w.alternate,z!==null?(z=z.index,z<b?(w.flags|=67108866,b):z):(w.flags|=67108866,b)):(w.flags|=1048576,b)}function c(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function d(w,b,z,D){return b===null||b.tag!==6?(b=Kr(z,w.mode,D),b.return=w,b):(b=n(b,z),b.return=w,b)}function g(w,b,z,D){var J=z.type;return J===B?M(w,b,z.props.children,D,z.key):b!==null&&(b.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Me&&Va(J)===b.type)?(b=n(b,z.props),sn(b,z),b.return=w,b):(b=si(z.type,z.key,z.props,null,w.mode,D),sn(b,z),b.return=w,b)}function j(w,b,z,D){return b===null||b.tag!==4||b.stateNode.containerInfo!==z.containerInfo||b.stateNode.implementation!==z.implementation?(b=Wr(z,w.mode,D),b.return=w,b):(b=n(b,z.children||[]),b.return=w,b)}function M(w,b,z,D,J){return b===null||b.tag!==7?(b=Ga(z,w.mode,D,J),b.return=w,b):(b=n(b,z),b.return=w,b)}function O(w,b,z){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Kr(""+b,w.mode,z),b.return=w,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case H:return z=si(b.type,b.key,b.props,null,w.mode,z),sn(z,b),z.return=w,z;case U:return b=Wr(b,w.mode,z),b.return=w,b;case Me:return b=Va(b),O(w,b,z)}if(At(b)||$e(b))return b=Ga(b,w.mode,z,null),b.return=w,b;if(typeof b.then=="function")return O(w,mi(b),z);if(b.$$typeof===W)return O(w,ui(w,b),z);pi(w,b)}return null}function N(w,b,z,D){var J=b!==null?b.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return J!==null?null:d(w,b,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return z.key===J?g(w,b,z,D):null;case U:return z.key===J?j(w,b,z,D):null;case Me:return z=Va(z),N(w,b,z,D)}if(At(z)||$e(z))return J!==null?null:M(w,b,z,D,null);if(typeof z.then=="function")return N(w,b,mi(z),D);if(z.$$typeof===W)return N(w,b,ui(w,z),D);pi(w,z)}return null}function A(w,b,z,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return w=w.get(z)||null,d(b,w,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case H:return w=w.get(D.key===null?z:D.key)||null,g(b,w,D,J);case U:return w=w.get(D.key===null?z:D.key)||null,j(b,w,D,J);case Me:return D=Va(D),A(w,b,z,D,J)}if(At(D)||$e(D))return w=w.get(z)||null,M(b,w,D,J,null);if(typeof D.then=="function")return A(w,b,z,mi(D),J);if(D.$$typeof===W)return A(w,b,z,ui(b,D),J);pi(b,D)}return null}function Y(w,b,z,D){for(var J=null,oe=null,Z=b,ae=b=0,se=null;Z!==null&&ae<z.length;ae++){Z.index>ae?(se=Z,Z=null):se=Z.sibling;var ue=N(w,Z,z[ae],D);if(ue===null){Z===null&&(Z=se);break}e&&Z&&ue.alternate===null&&t(w,Z),b=i(ue,b,ae),oe===null?J=ue:oe.sibling=ue,oe=ue,Z=se}if(ae===z.length)return a(w,Z),ce&&Xt(w,ae),J;if(Z===null){for(;ae<z.length;ae++)Z=O(w,z[ae],D),Z!==null&&(b=i(Z,b,ae),oe===null?J=Z:oe.sibling=Z,oe=Z);return ce&&Xt(w,ae),J}for(Z=l(Z);ae<z.length;ae++)se=A(Z,w,ae,z[ae],D),se!==null&&(e&&se.alternate!==null&&Z.delete(se.key===null?ae:se.key),b=i(se,b,ae),oe===null?J=se:oe.sibling=se,oe=se);return e&&Z.forEach(function(Ra){return t(w,Ra)}),ce&&Xt(w,ae),J}function K(w,b,z,D){if(z==null)throw Error(o(151));for(var J=null,oe=null,Z=b,ae=b=0,se=null,ue=z.next();Z!==null&&!ue.done;ae++,ue=z.next()){Z.index>ae?(se=Z,Z=null):se=Z.sibling;var Ra=N(w,Z,ue.value,D);if(Ra===null){Z===null&&(Z=se);break}e&&Z&&Ra.alternate===null&&t(w,Z),b=i(Ra,b,ae),oe===null?J=Ra:oe.sibling=Ra,oe=Ra,Z=se}if(ue.done)return a(w,Z),ce&&Xt(w,ae),J;if(Z===null){for(;!ue.done;ae++,ue=z.next())ue=O(w,ue.value,D),ue!==null&&(b=i(ue,b,ae),oe===null?J=ue:oe.sibling=ue,oe=ue);return ce&&Xt(w,ae),J}for(Z=l(Z);!ue.done;ae++,ue=z.next())ue=A(Z,w,ae,ue.value,D),ue!==null&&(e&&ue.alternate!==null&&Z.delete(ue.key===null?ae:ue.key),b=i(ue,b,ae),oe===null?J=ue:oe.sibling=ue,oe=ue);return e&&Z.forEach(function(bg){return t(w,bg)}),ce&&Xt(w,ae),J}function ve(w,b,z,D){if(typeof z=="object"&&z!==null&&z.type===B&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case H:e:{for(var J=z.key;b!==null;){if(b.key===J){if(J=z.type,J===B){if(b.tag===7){a(w,b.sibling),D=n(b,z.props.children),D.return=w,w=D;break e}}else if(b.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Me&&Va(J)===b.type){a(w,b.sibling),D=n(b,z.props),sn(D,z),D.return=w,w=D;break e}a(w,b);break}else t(w,b);b=b.sibling}z.type===B?(D=Ga(z.props.children,w.mode,D,z.key),D.return=w,w=D):(D=si(z.type,z.key,z.props,null,w.mode,D),sn(D,z),D.return=w,w=D)}return c(w);case U:e:{for(J=z.key;b!==null;){if(b.key===J)if(b.tag===4&&b.stateNode.containerInfo===z.containerInfo&&b.stateNode.implementation===z.implementation){a(w,b.sibling),D=n(b,z.children||[]),D.return=w,w=D;break e}else{a(w,b);break}else t(w,b);b=b.sibling}D=Wr(z,w.mode,D),D.return=w,w=D}return c(w);case Me:return z=Va(z),ve(w,b,z,D)}if(At(z))return Y(w,b,z,D);if($e(z)){if(J=$e(z),typeof J!="function")throw Error(o(150));return z=J.call(z),K(w,b,z,D)}if(typeof z.then=="function")return ve(w,b,mi(z),D);if(z.$$typeof===W)return ve(w,b,ui(w,z),D);pi(w,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,b!==null&&b.tag===6?(a(w,b.sibling),D=n(b,z),D.return=w,w=D):(a(w,b),D=Kr(z,w.mode,D),D.return=w,w=D),c(w)):a(w,b)}return function(w,b,z,D){try{rn=0;var J=ve(w,b,z,D);return Sl=null,J}catch(Z){if(Z===xl||Z===fi)throw Z;var oe=ot(29,Z,null,w.mode);return oe.lanes=D,oe.return=w,oe}}}var Ka=mu(!0),pu=mu(!1),pa=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ri(e),Io(e,null,a),t}return ii(e,l,t,a),ri(e)}function cn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,io(e,a)}}function os(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var us=!1;function on(){if(us){var e=bl;if(e!==null)throw e}}function un(e,t,a,l){us=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var g=d,j=g.next;g.next=null,c===null?i=j:c.next=j,c=g;var M=e.alternate;M!==null&&(M=M.updateQueue,d=M.lastBaseUpdate,d!==c&&(d===null?M.firstBaseUpdate=j:d.next=j,M.lastBaseUpdate=g))}if(i!==null){var O=n.baseState;c=0,M=j=g=null,d=i;do{var N=d.lane&-536870913,A=N!==d.lane;if(A?(re&N)===N:(l&N)===N){N!==0&&N===vl&&(us=!0),M!==null&&(M=M.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Y=e,K=d;N=t;var ve=a;switch(K.tag){case 1:if(Y=K.payload,typeof Y=="function"){O=Y.call(ve,O,N);break e}O=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,N=typeof Y=="function"?Y.call(ve,O,N):Y,N==null)break e;O=p({},O,N);break e;case 2:pa=!0}}N=d.callback,N!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[N]:A.push(N))}else A={lane:N,tag:d.tag,payload:d.payload,callback:d.callback,next:null},M===null?(j=M=A,g=O):M=M.next=A,c|=N;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;A=d,d=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);M===null&&(g=O),n.baseState=g,n.firstBaseUpdate=j,n.lastBaseUpdate=M,i===null&&(n.shared.lanes=0),wa|=c,e.lanes=c,e.memoizedState=O}}function gu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gu(a[e],t)}var wl=x(null),gi=x(0);function vu(e,t){e=ta,L(gi,e),L(wl,t),ta=e|t.baseLanes}function ds(){L(gi,ta),L(wl,wl.current)}function fs(){ta=gi.current,_(wl),_(gi)}var ut=x(null),zt=null;function va(e){var t=e.alternate;L(Re,Re.current&1),L(ut,e),zt===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(zt=e)}function hs(e){L(Re,Re.current),L(ut,e),zt===null&&(zt=e)}function bu(e){e.tag===22?(L(Re,Re.current),L(ut,e),zt===null&&(zt=e)):ba()}function ba(){L(Re,Re.current),L(ut,ut.current)}function dt(e){_(ut),zt===e&&(zt=null),_(Re)}var Re=x(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bc(a)||xc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,te=null,ge=null,_e=null,vi=!1,zl=!1,Wa=!1,bi=0,dn=0,jl=null,op=0;function Ae(){throw Error(o(321))}function ms(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function ps(e,t,a,l,n,i){return Jt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?ad:Ms,Wa=!1,i=a(l,n),Wa=!1,zl&&(i=Su(t,a,l,n)),xu(e),i}function xu(e){R.H=mn;var t=ge!==null&&ge.next!==null;if(Jt=0,_e=ge=te=null,vi=!1,dn=0,jl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&oi(e)&&(He=!0))}function Su(e,t,a,l){te=e;var n=0;do{if(zl&&(jl=null),dn=0,zl=!1,25<=n)throw Error(o(301));if(n+=1,_e=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=ld,i=t(a,l)}while(zl);return i}function up(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(te.flags|=1024),t}function gs(){var e=bi!==0;return bi=0,e}function ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vs(e){if(vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vi=!1}Jt=0,_e=ge=te=null,zl=!1,dn=bi=0,jl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?te.memoizedState=_e=e:_e=_e.next=e,_e}function De(){if(ge===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=_e===null?te.memoizedState:_e.next;if(t!==null)_e=t,ge=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},_e===null?te.memoizedState=_e=e:_e=_e.next=e}return _e}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=dn;return dn+=1,jl===null&&(jl=[]),e=du(jl,e,t),t=te,(_e===null?t.memoizedState:_e.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?ad:Ms),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===W)return Ze(e)}throw Error(o(438,String(e)))}function bs(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=xi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=pt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=De();return xs(t,ge,e)}function xs(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=c=null,g=null,j=t,M=!1;do{var O=j.lane&-536870913;if(O!==j.lane?(re&O)===O:(Jt&O)===O){var N=j.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),O===vl&&(M=!0);else if((Jt&N)===N){j=j.next,N===vl&&(M=!0);continue}else O={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},g===null?(d=g=O,c=i):g=g.next=O,te.lanes|=N,wa|=N;O=j.action,Wa&&a(i,O),i=j.hasEagerState?j.eagerState:a(i,O)}else N={lane:O,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},g===null?(d=g=N,c=i):g=g.next=N,te.lanes|=O,wa|=O;j=j.next}while(j!==null&&j!==t);if(g===null?c=i:g.next=d,!ct(i,e.memoizedState)&&(He=!0,M&&(a=bl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ss(e){var t=De(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ct(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function wu(e,t,a){var l=te,n=De(),i=ce;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!ct((ge||n).memoizedState,a);if(c&&(n.memoizedState=a,He=!0),n=n.queue,js(Nu.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||_e!==null&&_e.memoizedState.tag&1){if(l.flags|=2048,Nl(9,{destroy:void 0},ju.bind(null,l,n,a,t),null),xe===null)throw Error(o(349));i||(Jt&127)!==0||zu(l,t,a)}return a}function zu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=xi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ju(e,t,a,l){t.value=a,t.getSnapshot=l,Eu(t)&&Tu(e)}function Nu(e,t,a){return a(function(){Eu(t)&&Tu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function Tu(e){var t=La(e,2);t!==null&&nt(t,e,2)}function ws(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Wa){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Au(e,t,a,l){return e.baseState=a,xs(e,ge,typeof l=="function"?l:Kt)}function dp(e,t,a,l,n){if(Ni(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Cu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Cu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,c={};R.T=c;try{var d=a(n,l),g=R.S;g!==null&&g(c,d),Mu(e,t,d)}catch(j){zs(e,t,j)}finally{i!==null&&c.types!==null&&(i.types=c.types),R.T=i}}else try{i=a(n,l),Mu(e,t,i)}catch(j){zs(e,t,j)}}function Mu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ku(e,t,l)},function(l){return zs(e,t,l)}):ku(e,t,a)}function ku(e,t,a){t.status="fulfilled",t.value=a,Ru(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cu(e,a)))}function zs(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ru(t),t=t.next;while(t!==l)}e.action=null}function Ru(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Du(e,t){return t}function Ou(e,t){if(ce){var a=xe.formState;if(a!==null){e:{var l=te;if(ce){if(ze){t:{for(var n=ze,i=wt;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ze=jt(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Du,lastRenderedState:t},a.queue=l,a=Pu.bind(null,te,l),l.dispatch=a,l=ws(!1),i=Cs.bind(null,te,!1,l.queue),l=Fe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=dp.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function _u(e){var t=De();return Hu(t,ge,e)}function Hu(e,t,a){if(t=xs(e,t,Du)[0],e=wi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fn(t)}catch(c){throw c===xl?fi:c}else l=t;t=De();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Nl(9,{destroy:void 0},fp.bind(null,n,a),null)),[l,i,e]}function fp(e,t){e.action=t}function Uu(e){var t=De(),a=ge;if(a!==null)return Hu(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Nl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=xi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Bu(){return De().memoizedState}function zi(e,t,a,l){var n=Fe();te.flags|=e,n.memoizedState=Nl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ji(e,t,a,l){var n=De();l=l===void 0?null:l;var i=n.memoizedState.inst;ge!==null&&l!==null&&ms(l,ge.memoizedState.deps)?n.memoizedState=Nl(t,i,a,l):(te.flags|=e,n.memoizedState=Nl(1|t,i,a,l))}function qu(e,t){zi(8390656,8,e,t)}function js(e,t){ji(2048,8,e,t)}function hp(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=xi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Lu(e){var t=De().memoizedState;return hp({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Gu(e,t){return ji(4,2,e,t)}function Yu(e,t){return ji(4,4,e,t)}function Qu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xu(e,t,a){a=a!=null?a.concat([e]):null,ji(4,4,Qu.bind(null,t,e),a)}function Ns(){}function Zu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ms(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Vu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ms(t,l[1]))return l[0];if(l=e(),Wa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function Es(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Jd(),te.lanes|=e,wa|=e,a)}function Ju(e,t,a,l){return ct(a,t)?a:wl.current!==null?(e=Es(e,a,l),ct(e,t)||(He=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(re&261930)===0?(He=!0,e.memoizedState=a):(e=Jd(),te.lanes|=e,wa|=e,t)}function Ku(e,t,a,l,n){var i=q.p;q.p=i!==0&&8>i?i:8;var c=R.T,d={};R.T=d,Cs(e,!1,t,a);try{var g=n(),j=R.S;if(j!==null&&j(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=cp(g,l);hn(e,t,M,mt(e))}else hn(e,t,l,mt(e))}catch(O){hn(e,t,{then:function(){},status:"rejected",reason:O},mt())}finally{q.p=i,c!==null&&d.types!==null&&(c.types=d.types),R.T=c}}function mp(){}function Ts(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Wu(e).queue;Ku(e,n,t,F,a===null?mp:function(){return Fu(e),a(l)})}function Wu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Fu(e){var t=Wu(e);t.next===null&&(t=e.alternate.memoizedState),hn(e,t.next.queue,{},mt())}function As(){return Ze(Mn)}function $u(){return De().memoizedState}function Iu(){return De().memoizedState}function pp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=ga(a);var l=ya(t,e,a);l!==null&&(nt(l,t,a),cn(l,t,a)),t={cache:ls()},e.payload=t;return}t=t.return}}function gp(e,t,a){var l=mt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)?ed(t,a):(a=Vr(e,t,a,l),a!==null&&(nt(a,e,l),td(a,t,l)))}function Pu(e,t,a){var l=mt();hn(e,t,a,l)}function hn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))ed(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,d=i(c,a);if(n.hasEagerState=!0,n.eagerState=d,ct(d,c))return ii(e,t,n,0),xe===null&&ni(),!1}catch{}if(a=Vr(e,t,n,l),a!==null)return nt(a,e,l),td(a,t,l),!0}return!1}function Cs(e,t,a,l){if(l={lane:2,revertLane:sc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(t)throw Error(o(479))}else t=Vr(e,a,l,2),t!==null&&nt(t,e,2)}function Ni(e){var t=e.alternate;return e===te||t!==null&&t===te}function ed(e,t){zl=vi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function td(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,io(e,a)}}var mn={readContext:Ze,use:Si,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};mn.useEffectEvent=Ae;var ad={readContext:Ze,use:Si,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:qu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zi(4194308,4,Qu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var l=e();if(Wa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Fe();if(a!==void 0){var n=a(t);if(Wa){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=gp.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,a=Pu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ns,useDeferredValue:function(e,t){var a=Fe();return Es(a,e,t)},useTransition:function(){var e=ws(!1);return e=Ku.bind(null,te,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=Fe();if(ce){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),xe===null)throw Error(o(349));(re&127)!==0||zu(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,qu(Nu.bind(null,l,i,e),[e]),l.flags|=2048,Nl(9,{destroy:void 0},ju.bind(null,l,i,a,t),null),a},useId:function(){var e=Fe(),t=xe.identifierPrefix;if(ce){var a=Ot,l=Dt;a=(l&~(1<<32-st(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=bi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=op++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:Ou,useActionState:Ou,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Cs.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:bs,useCacheRefresh:function(){return Fe().memoizedState=pp.bind(null,te)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((de&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Ms={readContext:Ze,use:Si,useCallback:Zu,useContext:Ze,useEffect:js,useImperativeHandle:Xu,useInsertionEffect:Gu,useLayoutEffect:Yu,useMemo:Vu,useReducer:wi,useRef:Bu,useState:function(){return wi(Kt)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=De();return Ju(a,ge.memoizedState,e,t)},useTransition:function(){var e=wi(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:wu,useId:$u,useHostTransitionStatus:As,useFormState:_u,useActionState:_u,useOptimistic:function(e,t){var a=De();return Au(a,ge,e,t)},useMemoCache:bs,useCacheRefresh:Iu};Ms.useEffectEvent=Lu;var ld={readContext:Ze,use:Si,useCallback:Zu,useContext:Ze,useEffect:js,useImperativeHandle:Xu,useInsertionEffect:Gu,useLayoutEffect:Yu,useMemo:Vu,useReducer:Ss,useRef:Bu,useState:function(){return Ss(Kt)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=De();return ge===null?Es(a,e,t):Ju(a,ge.memoizedState,e,t)},useTransition:function(){var e=Ss(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:wu,useId:$u,useHostTransitionStatus:As,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var a=De();return ge!==null?Au(a,ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bs,useCacheRefresh:Iu};ld.useEffectEvent=Lu;function ks(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:p({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rs={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=mt(),n=ga(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(nt(t,e,l),cn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=mt(),n=ga(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(nt(t,e,l),cn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),l=ga(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(nt(t,e,a),cn(t,e,a))}};function nd(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function id(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=p({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function rd(e){li(e)}function sd(e){console.error(e)}function cd(e){li(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function od(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ds(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function ud(e){return e=ga(e),e.tag=3,e}function dd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){od(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){od(t,a,l),typeof n!="function"&&(za===null?za=new Set([this]):za.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function yp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&yl(t,a,n,!0),a=ut.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Bi():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===hi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),nc(e,l,n)),!1;case 22:return a.flags|=65536,l===hi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),nc(e,l,n)),!1}throw Error(o(435,a.tag))}return nc(e,l,n),Bi(),!1}if(ce)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ir&&(e=Error(o(422),{cause:l}),an(bt(e,a)))):(l!==Ir&&(t=Error(o(423),{cause:l}),an(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=Ds(e.stateNode,l,n),os(e,n),Ce!==4&&(Ce=2)),!1;var i=Error(o(520),{cause:l});if(i=bt(i,a),wn===null?wn=[i]:wn.push(i),Ce!==4&&(Ce=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ds(a.stateNode,l,e),os(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ud(n),dd(n,e,a,l),os(a,n),!1}a=a.return}while(a!==null);return!1}var Os=Error(o(461)),He=!1;function Ve(e,t,a,l){t.child=e===null?pu(t,null,a,l):Ka(t,e.child,a,l)}function fd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var d in l)d!=="ref"&&(c[d]=l[d])}else c=l;return Xa(t),l=ps(e,t,a,c,i,n),d=gs(),e!==null&&!He?(ys(e,t,n),Wt(e,t,n)):(ce&&d&&Fr(t),t.flags|=1,Ve(e,t,l,n),t.child)}function hd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Jr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,md(e,t,i,l,n)):(e=si(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ys(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(c,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Ys(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return _s(e,t,a,l,n)}function pd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return gd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&di(t,i!==null?i.cachePool:null),i!==null?vu(t,i):ds(),bu(t);else return l=t.lanes=536870912,gd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(di(t,i.cachePool),vu(t,i),ba(),t.memoizedState=null):(e!==null&&di(t,null),ds(),ba());return Ve(e,t,n,a),t.child}function pn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gd(e,t,a,l,n){var i=is();return i=i===null?null:{parent:Oe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&di(t,null),ds(),bu(t),e!==null&&yl(e,t,l,!0),t.childLanes=n,null}function Ti(e,t){return t=Ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yd(e,t,a){return Ka(t,e.child,null,a),e=Ti(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function vp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=Ti(t,l),t.lanes=536870912,pn(null,e);if(hs(t),(e=ze)?(e=Mf(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=eu(e),a.return=t,t.child=a,Xe=t,ze=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Ti(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(hs(t),n)if(t.flags&256)t.flags&=-257,t=yd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(He||yl(e,t,a,!1),n=(a&e.childLanes)!==0,He||n){if(l=xe,l!==null&&(c=ro(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,La(e,c),nt(l,e,c),Os;Bi(),t=yd(e,t,a)}else e=i.treeContext,ze=jt(c.nextSibling),Xe=t,ce=!0,fa=null,wt=!1,e!==null&&lu(t,e),t=Ti(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ai(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _s(e,t,a,l,n){return Xa(t),a=ps(e,t,a,l,void 0,n),l=gs(),e!==null&&!He?(ys(e,t,n),Wt(e,t,n)):(ce&&l&&Fr(t),t.flags|=1,Ve(e,t,a,n),t.child)}function vd(e,t,a,l,n,i){return Xa(t),t.updateQueue=null,a=Su(t,l,a,n),xu(e),l=gs(),e!==null&&!He?(ys(e,t,i),Wt(e,t,i)):(ce&&l&&Fr(t),t.flags|=1,Ve(e,t,a,i),t.child)}function bd(e,t,a,l,n){if(Xa(t),t.stateNode===null){var i=hl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ze(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Rs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ss(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ze(c):hl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(ks(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Rs.enqueueReplaceState(i,i.state,null),un(t,l,i,n),on(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,g=Fa(a,d);i.props=g;var j=i.context,M=a.contextType;c=hl,typeof M=="object"&&M!==null&&(c=Ze(M));var O=a.getDerivedStateFromProps;M=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||j!==c)&&id(t,i,l,c),pa=!1;var N=t.memoizedState;i.state=N,un(t,l,i,n),on(),j=t.memoizedState,d||N!==j||pa?(typeof O=="function"&&(ks(t,a,O,l),j=t.memoizedState),(g=pa||nd(t,a,g,l,N,j,c))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=c,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,cs(e,t),c=t.memoizedProps,M=Fa(a,c),i.props=M,O=t.pendingProps,N=i.context,j=a.contextType,g=hl,typeof j=="object"&&j!==null&&(g=Ze(j)),d=a.getDerivedStateFromProps,(j=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==O||N!==g)&&id(t,i,l,g),pa=!1,N=t.memoizedState,i.state=N,un(t,l,i,n),on();var A=t.memoizedState;c!==O||N!==A||pa||e!==null&&e.dependencies!==null&&oi(e.dependencies)?(typeof d=="function"&&(ks(t,a,d,l),A=t.memoizedState),(M=pa||nd(t,a,M,l,N,A,g)||e!==null&&e.dependencies!==null&&oi(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=g,l=M):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ai(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,n),t.child=Ka(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function xd(e,t,a,l){return Ya(),t.flags|=256,Ve(e,t,a,l),t.child}var Hs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Us(e){return{baseLanes:e,cachePool:ou()}}function Bs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ht),e}function Sd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(n?va(t):ba(),(e=ze)?(e=Mf(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=eu(e),a.return=t,t.child=a,Xe=t,ze=null)):e=null,e===null)throw ha(t);return xc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(ba(),n=t.mode,d=Ci({mode:"hidden",children:d},n),l=Ga(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Us(a),l.childLanes=Bs(e,c,a),t.memoizedState=Hs,pn(null,l)):(va(t),qs(t,d))}var g=e.memoizedState;if(g!==null&&(d=g.dehydrated,d!==null)){if(i)t.flags&256?(va(t),t.flags&=-257,t=Ls(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),d=l.fallback,n=t.mode,l=Ci({mode:"visible",children:l.children},n),d=Ga(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=Us(a),l.childLanes=Bs(e,c,a),t.memoizedState=Hs,t=pn(null,l));else if(va(t),xc(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var j=c.dgst;c=j,l=Error(o(419)),l.stack="",l.digest=c,an({value:l,source:null,stack:null}),t=Ls(e,t,a)}else if(He||yl(e,t,a,!1),c=(a&e.childLanes)!==0,He||c){if(c=xe,c!==null&&(l=ro(c,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,La(e,l),nt(c,e,l),Os;bc(d)||Bi(),t=Ls(e,t,a)}else bc(d)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,ze=jt(d.nextSibling),Xe=t,ce=!0,fa=null,wt=!1,e!==null&&lu(t,e),t=qs(t,l.children),t.flags|=4096);return t}return n?(ba(),d=l.fallback,n=t.mode,g=e.child,j=g.sibling,l=Qt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,j!==null?d=Qt(j,d):(d=Ga(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,pn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Us(a):(n=d.cachePool,n!==null?(g=Oe._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=ou(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Bs(e,c,a),t.memoizedState=Hs,pn(e.child,l)):(va(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function qs(e,t){return t=Ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ci(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function Ls(e,t,a){return Ka(t,e.child,null,a),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ts(e.return,t,a)}function Gs(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function zd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Re.current,d=(c&2)!==0;if(d?(c=c&1|2,t.flags|=128):c&=1,L(Re,c),Ve(e,t,l,a),l=ce?tn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,a,t);else if(e.tag===19)wd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Gs(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Gs(t,!0,a,null,i,l);break;case"together":Gs(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(yl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ys(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oi(e)))}function bp(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ma(t,Oe,e.memoizedState.cache),Ya();break;case 27:case 5:Ll(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hs(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Sd(e,t,a):(va(t),e=Wt(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(yl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return zd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Re,Re.current),l)break;return null;case 22:return t.lanes=0,pd(e,t,a,t.pendingProps);case 24:ma(t,Oe,e.memoizedState.cache)}return Wt(e,t,a)}function jd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Ys(e,a)&&(t.flags&128)===0)return He=!1,bp(e,t,a);He=(e.flags&131072)!==0}else He=!1,ce&&(t.flags&1048576)!==0&&au(t,tn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")Jr(e)?(l=Fa(e,l),t.tag=1,t=bd(null,t,e,l,a)):(t.tag=0,t=_s(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===we){t.tag=11,t=fd(null,t,e,l,a);break e}else if(n===P){t.tag=14,t=hd(null,t,e,l,a);break e}}throw t=qt(e)||e,Error(o(306,t,""))}}return t;case 0:return _s(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Fa(l,t.pendingProps),bd(e,t,l,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,cs(e,t),un(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ma(t,Oe,l),l!==i.cache&&as(t,[Oe],a,!0),on(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=xd(e,t,l,a);break e}else if(l!==n){n=bt(Error(o(424)),t),an(n),t=xd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=jt(e.firstChild),Xe=t,ce=!0,fa=null,wt=!0,a=pu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===n){t=Wt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return Ai(e,t),e===null?(a=Hf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=Zi(le.current).createElement(a),l[Qe]=t,l[Ie]=e,Je(l,a,e),Le(l),t.stateNode=l):t.memoizedState=Hf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ll(t),e===null&&ce&&(l=t.stateNode=Df(t.type,t.pendingProps,le.current),Xe=t,wt=!0,n=ze,Ta(t.type)?(Sc=n,ze=jt(l.firstChild)):ze=n),Ve(e,t,t.pendingProps.children,a),Ai(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((n=l=ze)&&(l=Wp(l,t.type,t.pendingProps,wt),l!==null?(t.stateNode=l,Xe=t,ze=jt(l.firstChild),wt=!1,n=!0):n=!1),n||ha(t)),Ll(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,gc(n,i)?l=null:c!==null&&gc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=ps(e,t,up,null,null,a),Mn._currentValue=n),Ai(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=ze)&&(a=Fp(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Xe=t,ze=null,e=!0):e=!1),e||ha(t)),null;case 13:return Sd(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return fd(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Xa(t),n=Ze(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return hd(e,t,t.type,t.pendingProps,a);case 15:return md(e,t,t.type,t.pendingProps,a);case 19:return zd(e,t,a);case 31:return vp(e,t,a);case 22:return pd(e,t,a,t.pendingProps);case 24:return Xa(t),l=Ze(Oe),e===null?(n=is(),n===null&&(n=xe,i=ls(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ss(t),ma(t,Oe,n)):((e.lanes&a)!==0&&(cs(e,t),un(t,null,null,a),on()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ma(t,Oe,l)):(l=i.cache,ma(t,Oe,l),l!==n.cache&&as(t,[Oe],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Ft(e){e.flags|=4}function Qs(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if($d())e.flags|=8192;else throw Ja=hi,rs}else e.flags&=-16777217}function Nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if($d())e.flags|=8192;else throw Ja=hi,rs}function Mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lo():536870912,e.lanes|=t,Cl|=t)}function gn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function xp(e,t,a){var l=t.pendingProps;switch($r(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(Oe),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gl(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pr())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Ft(t),i!==null?(je(t),Nd(t,i)):(je(t),Qs(t,n,null,l,a))):i?i!==e.memoizedState?(Ft(t),je(t),Nd(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ft(t),je(t),Qs(t,n,e,l,a)),null;case 27:if(Gn(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}e=X.current,gl(t)?nu(t):(e=Df(n,l,a),t.stateNode=e,Ft(t))}return je(t),null;case 5:if(Gn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}if(i=X.current,gl(t))nu(t);else{var c=Zi(le.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Qe]=t,i[Ie]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ft(t)}}return je(t),Qs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=le.current,gl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||wf(e.nodeValue,a)),e||ha(t,!0)}else e=Zi(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=gl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Qe]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=Pr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=gl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Qe]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Pr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Mi(t,t.updateQueue),je(t),null);case 4:return ke(),e===null&&dc(t.stateNode.containerInfo),je(t),null;case 10:return Vt(t.type),je(t),null;case 19:if(_(Re),l=t.memoizedState,l===null)return je(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)gn(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=yi(e),i!==null){for(t.flags|=128,gn(l,!1),e=i.updateQueue,t.updateQueue=e,Mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Po(a,e),a=a.sibling;return L(Re,Re.current&1|2),ce&&Xt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>_i&&(t.flags|=128,n=!0,gn(l,!1),t.lanes=4194304)}else{if(!n)if(e=yi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Mi(t,e),gn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return je(t),null}else 2*it()-l.renderingStartTime>_i&&a!==536870912&&(t.flags|=128,n=!0,gn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Re.current,L(Re,n?a&1|2:a&1),ce&&Xt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return dt(t),fs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Oe),je(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Sp(e,t){switch($r(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Oe),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gn(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(o(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Re),null;case 4:return ke(),null;case 10:return Vt(t.type),null;case 22:case 23:return dt(t),fs(),e!==null&&_(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Oe),null;case 25:return null;default:return null}}function Ed(e,t){switch($r(t),t.tag){case 3:Vt(Oe),ke();break;case 26:case 27:case 5:Gn(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:_(Re);break;case 10:Vt(t.type);break;case 22:case 23:dt(t),fs(),e!==null&&_(Za);break;case 24:Vt(Oe)}}function yn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(d){me(t,t.return,d)}}function xa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,n=t;var g=a,j=d;try{j()}catch(M){me(n,g,M)}}}l=l.next}while(l!==i)}}catch(M){me(t,t.return,M)}}function Td(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{yu(t,a)}catch(l){me(e,e.return,l)}}}function Ad(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){me(e,t,l)}}function vn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){me(e,t,n)}}function _t(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){me(e,t,n)}else a.current=null}function Cd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){me(e,e.return,n)}}function Xs(e,t,a){try{var l=e.stateNode;Qp(l,e.type,a,t),l[Ie]=t}catch(n){me(e,e.return,n)}}function Md(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vs(e,t,a),e=e.sibling;e!==null;)Vs(e,t,a),e=e.sibling}function ki(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ki(e,t,a),e=e.sibling;e!==null;)ki(e,t,a),e=e.sibling}function kd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[Qe]=e,t[Ie]=a}catch(i){me(e,e.return,i)}}var $t=!1,Ue=!1,Js=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function wp(e,t){if(e=e.containerInfo,mc=Ii,e=Xo(e),Lr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,d=-1,g=-1,j=0,M=0,O=e,N=null;t:for(;;){for(var A;O!==a||n!==0&&O.nodeType!==3||(d=c+n),O!==i||l!==0&&O.nodeType!==3||(g=c+l),O.nodeType===3&&(c+=O.nodeValue.length),(A=O.firstChild)!==null;)N=O,O=A;for(;;){if(O===e)break t;if(N===a&&++j===n&&(d=c),N===i&&++M===l&&(g=c),(A=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=A}a=d===-1||g===-1?null:{start:d,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:e,selectionRange:a},Ii=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Y=Fa(a.type,n);e=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){me(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Dd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),l&4&&yn(5,a);break;case 1:if(Pt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){me(a,a.return,c)}else{var n=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){me(a,a.return,c)}}l&64&&Td(a),l&512&&vn(a,a.return);break;case 3:if(Pt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{yu(e,t)}catch(c){me(a,a.return,c)}}break;case 27:t===null&&l&4&&kd(a);case 26:case 5:Pt(e,a),t===null&&l&4&&Cd(a),l&512&&vn(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),l&4&&Hd(e,a);break;case 13:Pt(e,a),l&4&&Ud(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kp.bind(null,a),$p(e,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){t=t!==null&&t.memoizedState!==null||Ue,n=$t;var i=Ue;$t=l,(Ue=t)&&!i?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),$t=n,Ue=i}break;case 30:break;default:Pt(e,a)}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,et=!1;function It(e,t,a){for(a=a.child;a!==null;)_d(e,t,a),a=a.sibling}function _d(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Gl,a)}catch{}switch(a.tag){case 26:Ue||_t(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ue||_t(a,t);var l=Ne,n=et;Ta(a.type)&&(Ne=a.stateNode,et=!1),It(e,t,a),Tn(a.stateNode),Ne=l,et=n;break;case 5:Ue||_t(a,t);case 6:if(l=Ne,n=et,Ne=null,It(e,t,a),Ne=l,et=n,Ne!==null)if(et)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(i){me(a,t,i)}else try{Ne.removeChild(a.stateNode)}catch(i){me(a,t,i)}break;case 18:Ne!==null&&(et?(e=Ne,Af(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ul(e)):Af(Ne,a.stateNode));break;case 4:l=Ne,n=et,Ne=a.stateNode.containerInfo,et=!0,It(e,t,a),Ne=l,et=n;break;case 0:case 11:case 14:case 15:xa(2,a,t),Ue||xa(4,a,t),It(e,t,a);break;case 1:Ue||(_t(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ad(a,t,l)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:Ue=(l=Ue)||a.memoizedState!==null,It(e,t,a),Ue=l;break;default:It(e,t,a)}}function Hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ul(e)}catch(a){me(t,t.return,a)}}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(a){me(t,t.return,a)}}function zp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rd),t;default:throw Error(o(435,e.tag))}}function Ri(e,t){var a=zp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Rp.bind(null,e,l);l.then(n,n)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(Ta(d.type)){Ne=d.stateNode,et=!1;break e}break;case 5:Ne=d.stateNode,et=!1;break e;case 3:case 4:Ne=d.stateNode.containerInfo,et=!0;break e}d=d.return}if(Ne===null)throw Error(o(160));_d(i,c,n),Ne=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}var Mt=null;function Bd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(xa(3,e,e.return),yn(3,e),xa(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(Ue||a===null||_t(a,a.return)),l&64&&$t&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Mt;if(tt(t,e),at(e),l&512&&(Ue||a===null||_t(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Xl]||i[Qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[Qe]=e,Le(i),l=i;break e;case"link":var c=qf("link","href",n).get(l+(a.href||""));if(c){for(var d=0;d<c.length;d++)if(i=c[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(d,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(c=qf("meta","content",n).get(l+(a.content||""))){for(d=0;d<c.length;d++)if(i=c[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(d,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Qe]=e,Le(i),l=i}e.stateNode=l}else Lf(n,e.type,e.stateNode);else e.stateNode=Bf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Lf(n,e.type,e.stateNode):Bf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xs(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(Ue||a===null||_t(a,a.return)),a!==null&&l&4&&Xs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(Ue||a===null||_t(a,a.return)),e.flags&32){n=e.stateNode;try{rl(n,"")}catch(Y){me(e,e.return,Y)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Xs(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Js=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Y){me(e,e.return,Y)}}break;case 3:if(Ki=null,n=Mt,Mt=Vi(t.containerInfo),tt(t,e),Mt=n,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(t.containerInfo)}catch(Y){me(e,e.return,Y)}Js&&(Js=!1,qd(e));break;case 4:l=Mt,Mt=Vi(e.stateNode.containerInfo),tt(t,e),at(e),Mt=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Oi=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,j=$t,M=Ue;if($t=j||n,Ue=M||g,tt(t,e),Ue=M,$t=j,at(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||$t||Ue||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=g.stateNode;var O=g.memoizedProps.style,N=O!=null&&O.hasOwnProperty("display")?O.display:null;d.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Y){me(g,g.return,Y)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(Y){me(g,g.return,Y)}}}else if(t.tag===18){if(a===null){g=t;try{var A=g.stateNode;n?Cf(A,!0):Cf(g.stateNode,!1)}catch(Y){me(g,g.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ri(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Md(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=Zs(e);ki(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(rl(c,""),a.flags&=-33);var d=Zs(e);ki(e,d,c);break;case 3:case 4:var g=a.stateNode.containerInfo,j=Zs(e);Vs(e,j,g);break;default:throw Error(o(161))}}catch(M){me(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dd(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),$a(t);break;case 1:_t(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ad(t,t.return,a),$a(t);break;case 27:Tn(t.stateNode);case 26:case 5:_t(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,a),yn(4,i);break;case 1:if(ea(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){me(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)gu(g[n],d)}catch(j){me(l,l.return,j)}}a&&c&64&&Td(i),vn(i,i.return);break;case 27:kd(i);case 26:case 5:ea(n,i,a),a&&l===null&&c&4&&Cd(i),vn(i,i.return);break;case 12:ea(n,i,a);break;case 31:ea(n,i,a),a&&c&4&&Hd(n,i);break;case 13:ea(n,i,a),a&&c&4&&Ud(n,i);break;case 22:i.memoizedState===null&&ea(n,i,a),vn(i,i.return);break;case 30:break;default:ea(n,i,a)}t=t.sibling}}function Ks(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ln(a))}function Ws(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ld(e,t,a,l),t=t.sibling}function Ld(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),n&2048&&yn(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){kt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,d=i.onPostCommit;typeof d=="function"&&d(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){me(t,t.return,g)}}else kt(e,t,a,l);break;case 31:kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?kt(e,t,a,l):bn(e,t):i._visibility&2?kt(e,t,a,l):(i._visibility|=2,El(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ks(c,t);break;case 24:kt(e,t,a,l),n&2048&&Ws(t.alternate,t);break;default:kt(e,t,a,l)}}function El(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,d=a,g=l,j=c.flags;switch(c.tag){case 0:case 11:case 15:El(i,c,d,g,n),yn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?El(i,c,d,g,n):bn(i,c):(M._visibility|=2,El(i,c,d,g,n)),n&&j&2048&&Ks(c.alternate,c);break;case 24:El(i,c,d,g,n),n&&j&2048&&Ws(c.alternate,c);break;default:El(i,c,d,g,n)}t=t.sibling}}function bn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:bn(a,l),n&2048&&Ks(l.alternate,l);break;case 24:bn(a,l),n&2048&&Ws(l.alternate,l);break;default:bn(a,l)}t=t.sibling}}var xn=8192;function Tl(e,t,a){if(e.subtreeFlags&xn)for(e=e.child;e!==null;)Gd(e,t,a),e=e.sibling}function Gd(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&xn&&e.memoizedState!==null&&og(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var l=Mt;Mt=Vi(e.stateNode.containerInfo),Tl(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=xn,xn=16777216,Tl(e,t,a),xn=l):Tl(e,t,a));break;default:Tl(e,t,a)}}function Yd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Xd(l,e)}Yd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qd(e),e=e.sibling}function Qd(e){switch(e.tag){case 0:case 11:case 15:Sn(e),e.flags&2048&&xa(9,e,e.return);break;case 3:Sn(e);break;case 12:Sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):Sn(e);break;default:Sn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Xd(l,e)}Yd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Xd(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ln(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var n=l.sibling,i=l.return;if(Od(l),l===a){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var jp={getCacheForType:function(e){var t=Ze(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ze(Oe).controller.signal}},Np=typeof WeakMap=="function"?WeakMap:Map,de=0,xe=null,ne=null,re=0,he=0,ft=null,Sa=!1,Al=!1,Fs=!1,ta=0,Ce=0,wa=0,Ia=0,$s=0,ht=0,Cl=0,wn=null,lt=null,Is=!1,Oi=0,Zd=0,_i=1/0,Hi=null,za=null,qe=0,ja=null,Ml=null,aa=0,Ps=0,ec=null,Vd=null,zn=0,tc=null;function mt(){return(de&2)!==0&&re!==0?re&-re:R.T!==null?sc():so()}function Jd(){if(ht===0)if((re&536870912)===0||ce){var e=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),ht=e}else ht=536870912;return e=ut.current,e!==null&&(e.flags|=32),ht}function nt(e,t,a){(e===xe&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(kl(e,0),Na(e,re,ht,!1)),Ql(e,a),((de&2)===0||e!==xe)&&(e===xe&&((de&2)===0&&(Ia|=a),Ce===4&&Na(e,re,ht,!1)),Ht(e))}function Kd(e,t,a){if((de&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yl(e,t),n=l?Ap(e,t):lc(e,t,!0),i=l;do{if(n===0){Al&&!l&&Na(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Ep(a)){n=lc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var d=e;n=wn;var g=d.current.memoizedState.isDehydrated;if(g&&(kl(d,c).flags|=256),c=lc(d,c,!1),c!==2){if(Fs&&!g){d.errorRecoveryDisabledLanes|=i,Ia|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){kl(e,0),Na(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Na(l,t,ht,!Sa);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Oi+300-it(),10<n)){if(Na(l,t,ht,!Sa),Vn(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=Ef(Wd.bind(null,l,a,lt,Hi,Is,t,ht,Ia,Cl,Sa,i,"Throttled",-0,0),n);break e}Wd(l,a,lt,Hi,Is,t,ht,Ia,Cl,Sa,i,null,-0,0)}}break}while(!0);Ht(e)}function Wd(e,t,a,l,n,i,c,d,g,j,M,O,N,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Gd(t,i,O);var Y=(i&62914560)===i?Oi-it():(i&4194048)===i?Zd-it():0;if(Y=ug(O,Y),Y!==null){aa=i,e.cancelPendingCommit=Y(lf.bind(null,e,t,i,a,l,n,c,d,g,M,O,null,N,A)),Na(e,i,c,!j);return}}lf(e,t,i,a,l,n,c,d,g)}function Ep(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ct(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,a,l){t&=~$s,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-st(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&no(e,a,t)}function Ui(){return(de&6)===0?(jn(0),!1):!0}function ac(){if(ne!==null){if(he===0)var e=ne.return;else e=ne,Zt=Qa=null,vs(e),Sl=null,rn=0,e=ne;for(;e!==null;)Ed(e.alternate,e),e=e.return;ne=null}}function kl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,ac(),xe=e,ne=a=Qt(e.current,null),re=t,he=0,ft=null,Sa=!1,Al=Yl(e,t),Fs=!1,Cl=ht=$s=Ia=wa=Ce=0,lt=wn=null,Is=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-st(l),i=1<<n;t|=e[n],l&=~i}return ta=t,ni(),a}function Fd(e,t){te=null,R.H=mn,t===xl||t===fi?(t=fu(),he=3):t===rs?(t=fu(),he=4):he=t===Os?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,ne===null&&(Ce=1,Ei(e,bt(t,e.current)))}function $d(){var e=ut.current;return e===null?!0:(re&4194048)===re?zt===null:(re&62914560)===re||(re&536870912)!==0?e===zt:!1}function Id(){var e=R.H;return R.H=mn,e===null?mn:e}function Pd(){var e=R.A;return R.A=jp,e}function Bi(){Ce=4,Sa||(re&4194048)!==re&&ut.current!==null||(Al=!0),(wa&134217727)===0&&(Ia&134217727)===0||xe===null||Na(xe,re,ht,!1)}function lc(e,t,a){var l=de;de|=2;var n=Id(),i=Pd();(xe!==e||re!==t)&&(Hi=null,kl(e,t)),t=!1;var c=Ce;e:do try{if(he!==0&&ne!==null){var d=ne,g=ft;switch(he){case 8:ac(),c=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var j=he;if(he=0,ft=null,Rl(e,d,g,j),a&&Al){c=0;break e}break;default:j=he,he=0,ft=null,Rl(e,d,g,j)}}Tp(),c=Ce;break}catch(M){Fd(e,M)}while(!0);return t&&e.shellSuspendCounter++,Zt=Qa=null,de=l,R.H=n,R.A=i,ne===null&&(xe=null,re=0,ni()),c}function Tp(){for(;ne!==null;)ef(ne)}function Ap(e,t){var a=de;de|=2;var l=Id(),n=Pd();xe!==e||re!==t?(Hi=null,_i=it()+500,kl(e,t)):Al=Yl(e,t);e:do try{if(he!==0&&ne!==null){t=ne;var i=ft;t:switch(he){case 1:he=0,ft=null,Rl(e,t,i,1);break;case 2:case 9:if(uu(i)){he=0,ft=null,tf(t);break}t=function(){he!==2&&he!==9||xe!==e||(he=7),Ht(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:uu(i)?(he=0,ft=null,tf(t)):(he=0,ft=null,Rl(e,t,i,7));break;case 5:var c=null;switch(ne.tag){case 26:c=ne.memoizedState;case 5:case 27:var d=ne;if(c?Gf(c):d.stateNode.complete){he=0,ft=null;var g=d.sibling;if(g!==null)ne=g;else{var j=d.return;j!==null?(ne=j,qi(j)):ne=null}break t}}he=0,ft=null,Rl(e,t,i,5);break;case 6:he=0,ft=null,Rl(e,t,i,6);break;case 8:ac(),Ce=6;break e;default:throw Error(o(462))}}Cp();break}catch(M){Fd(e,M)}while(!0);return Zt=Qa=null,R.H=l,R.A=n,de=a,ne!==null?0:(xe=null,re=0,ni(),Ce)}function Cp(){for(;ne!==null&&!Ih();)ef(ne)}function ef(e){var t=jd(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?qi(e):ne=t}function tf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=vd(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=vd(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:vs(t);default:Ed(a,t),t=ne=Po(t,ta),t=jd(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?qi(e):ne=t}function Rl(e,t,a,l){Zt=Qa=null,vs(t),Sl=null,rn=0;var n=t.return;try{if(yp(e,n,t,a,re)){Ce=1,Ei(e,bt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Ce=1,Ei(e,bt(a,e.current)),ne=null;return}t.flags&32768?(ce||l===1?e=!0:Al||(re&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ut.current,l!==null&&l.tag===13&&(l.flags|=16384))),af(t,e)):qi(t)}function qi(e){var t=e;do{if((t.flags&32768)!==0){af(t,Sa);return}e=t.return;var a=xp(t.alternate,t,ta);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ce===0&&(Ce=5)}function af(e,t){do{var a=Sp(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ce=6,ne=null}function lf(e,t,a,l,n,i,c,d,g){e.cancelPendingCommit=null;do Li();while(qe!==0);if((de&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Zr,cm(e,a,i,c,d,g),e===xe&&(ne=xe=null,re=0),Ml=t,ja=e,aa=a,Ps=i,ec=n,Vd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dp(Yn,function(){return of(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=q.p,q.p=2,c=de,de|=4;try{wp(e,t,a)}finally{de=c,q.p=n,R.T=l}}qe=1,nf(),rf(),sf()}}function nf(){if(qe===1){qe=0;var e=ja,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=q.p;q.p=2;var n=de;de|=4;try{Bd(t,e);var i=pc,c=Xo(e.containerInfo),d=i.focusedElem,g=i.selectionRange;if(c!==d&&d&&d.ownerDocument&&Qo(d.ownerDocument.documentElement,d)){if(g!==null&&Lr(d)){var j=g.start,M=g.end;if(M===void 0&&(M=j),"selectionStart"in d)d.selectionStart=j,d.selectionEnd=Math.min(M,d.value.length);else{var O=d.ownerDocument||document,N=O&&O.defaultView||window;if(N.getSelection){var A=N.getSelection(),Y=d.textContent.length,K=Math.min(g.start,Y),ve=g.end===void 0?K:Math.min(g.end,Y);!A.extend&&K>ve&&(c=ve,ve=K,K=c);var w=Yo(d,K),b=Yo(d,ve);if(w&&b&&(A.rangeCount!==1||A.anchorNode!==w.node||A.anchorOffset!==w.offset||A.focusNode!==b.node||A.focusOffset!==b.offset)){var z=O.createRange();z.setStart(w.node,w.offset),A.removeAllRanges(),K>ve?(A.addRange(z),A.extend(b.node,b.offset)):(z.setEnd(b.node,b.offset),A.addRange(z))}}}}for(O=[],A=d;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<O.length;d++){var D=O[d];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Ii=!!mc,pc=mc=null}finally{de=n,q.p=l,R.T=a}}e.current=t,qe=2}}function rf(){if(qe===2){qe=0;var e=ja,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=q.p;q.p=2;var n=de;de|=4;try{Dd(e,t.alternate,t)}finally{de=n,q.p=l,R.T=a}}qe=3}}function sf(){if(qe===4||qe===3){qe=0,Ph();var e=ja,t=Ml,a=aa,l=Vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ml=ja=null,cf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(za=null),Sr(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=q.p,q.p=2,R.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var d=l[c];i(d.value,{componentStack:d.stack})}}finally{R.T=t,q.p=n}}(aa&3)!==0&&Li(),Ht(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===tc?zn++:(zn=0,tc=e):zn=0,jn(0)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function Li(){return nf(),rf(),sf(),of()}function of(){if(qe!==5)return!1;var e=ja,t=Ps;Ps=0;var a=Sr(aa),l=R.T,n=q.p;try{q.p=32>a?32:a,R.T=null,a=ec,ec=null;var i=ja,c=aa;if(qe=0,Ml=ja=null,aa=0,(de&6)!==0)throw Error(o(331));var d=de;if(de|=4,Qd(i.current),Ld(i,i.current,c,a),de=d,jn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Gl,i)}catch{}return!0}finally{q.p=n,R.T=l,cf(e,t)}}function uf(e,t,a){t=bt(a,t),t=Ds(e.stateNode,t,2),e=ya(e,t,2),e!==null&&(Ql(e,2),Ht(e))}function me(e,t,a){if(e.tag===3)uf(e,e,a);else for(;t!==null;){if(t.tag===3){uf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=bt(a,e),a=ud(2),l=ya(t,a,2),l!==null&&(dd(a,l,t,e),Ql(l,2),Ht(l));break}}t=t.return}}function nc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Np;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Fs=!0,n.add(a),e=Mp.bind(null,e,t,a),t.then(e,e))}function Mp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(Ce===4||Ce===3&&(re&62914560)===re&&300>it()-Oi?(de&2)===0&&kl(e,0):$s|=a,Cl===re&&(Cl=0)),Ht(e)}function df(e,t){t===0&&(t=lo()),e=La(e,t),e!==null&&(Ql(e,t),Ht(e))}function kp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),df(e,a)}function Rp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),df(e,a)}function Dp(e,t){return yr(e,t)}var Gi=null,Dl=null,ic=!1,Yi=!1,rc=!1,Ea=0;function Ht(e){e!==Dl&&e.next===null&&(Dl===null?Gi=Dl=e:Dl=Dl.next=e),Yi=!0,ic||(ic=!0,_p())}function jn(e,t){if(!rc&&Yi){rc=!0;do for(var a=!1,l=Gi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-st(42|e)+1)-1,i&=n&~(c&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,pf(l,i))}else i=re,i=Vn(l,l===xe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Yl(l,i)||(a=!0,pf(l,i));l=l.next}while(a);rc=!1}}function Op(){ff()}function ff(){Yi=ic=!1;var e=0;Ea!==0&&Zp()&&(e=Ea);for(var t=it(),a=null,l=Gi;l!==null;){var n=l.next,i=hf(l,t);i===0?(l.next=null,a===null?Gi=n:a.next=n,n===null&&(Dl=a)):(a=l,(e!==0||(i&3)!==0)&&(Yi=!0)),l=n}qe!==0&&qe!==5||jn(e),Ea!==0&&(Ea=0)}function hf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-st(i),d=1<<c,g=n[c];g===-1?((d&a)===0||(d&l)!==0)&&(n[c]=sm(d,t)):g<=t&&(e.expiredLanes|=d),i&=~d}if(t=xe,a=re,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&vr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&vr(l),Sr(a)){case 2:case 8:a=to;break;case 32:a=Yn;break;case 268435456:a=ao;break;default:a=Yn}return l=mf.bind(null,e),a=yr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&vr(l),e.callbackPriority=2,e.callbackNode=null,2}function mf(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Li()&&e.callbackNode!==a)return null;var l=re;return l=Vn(e,e===xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Kd(e,l,t),hf(e,it()),e.callbackNode!=null&&e.callbackNode===a?mf.bind(null,e):null)}function pf(e,t){if(Li())return null;Kd(e,t,!0)}function _p(){Jp(function(){(de&6)!==0?yr(eo,Op):ff()})}function sc(){if(Ea===0){var e=vl;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),Ea=e}return Ea}function gf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fn(""+e)}function yf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Hp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=gf((n[Ie]||null).action),c=l.submitter;c&&(t=(t=c[Ie]||null)?gf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var d=new ei("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var g=c?yf(n,c):new FormData(n);Ts(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(d.preventDefault(),g=c?yf(n,c):new FormData(n),Ts(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var cc=0;cc<Xr.length;cc++){var oc=Xr[cc],Up=oc.toLowerCase(),Bp=oc[0].toUpperCase()+oc.slice(1);Ct(Up,"on"+Bp)}Ct(Jo,"onAnimationEnd"),Ct(Ko,"onAnimationIteration"),Ct(Wo,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(ep,"onTransitionRun"),Ct(tp,"onTransitionStart"),Ct(ap,"onTransitionCancel"),Ct(Fo,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nn));function vf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var d=l[c],g=d.instance,j=d.currentTarget;if(d=d.listener,g!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=j;try{i(n)}catch(M){li(M)}n.currentTarget=null,i=g}else for(c=0;c<l.length;c++){if(d=l[c],g=d.instance,j=d.currentTarget,d=d.listener,g!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=j;try{i(n)}catch(M){li(M)}n.currentTarget=null,i=g}}}}function ie(e,t){var a=t[wr];a===void 0&&(a=t[wr]=new Set);var l=e+"__bubble";a.has(l)||(bf(t,e,2,!1),a.add(l))}function uc(e,t,a){var l=0;t&&(l|=4),bf(a,e,l,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[Qi]){e[Qi]=!0,uo.forEach(function(a){a!=="selectionchange"&&(qp.has(a)||uc(a,!1,e),uc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,uc("selectionchange",!1,t))}}function bf(e,t,a,l){switch(Kf(t)){case 2:var n=hg;break;case 8:n=mg;break;default:n=Ec}a=n.bind(null,t,a,e),n=void 0,!kr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function fc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var d=l.stateNode.containerInfo;if(d===n)break;if(c===4)for(c=l.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;d!==null;){if(c=tl(d),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){l=i=c;continue e}d=d.parentNode}}l=l.return}zo(function(){var j=i,M=Cr(a),O=[];e:{var N=$o.get(e);if(N!==void 0){var A=ei,Y=e;switch(e){case"keypress":if(In(a)===0)break e;case"keydown":case"keyup":A=Rm;break;case"focusin":Y="focus",A=_r;break;case"focusout":Y="blur",A=_r;break;case"beforeblur":case"afterblur":A=_r;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=_m;break;case Jo:case Ko:case Wo:A=zm;break;case Fo:A=Um;break;case"scroll":case"scrollend":A=vm;break;case"wheel":A=qm;break;case"copy":case"cut":case"paste":A=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Ao;break;case"toggle":case"beforetoggle":A=Gm}var K=(t&4)!==0,ve=!K&&(e==="scroll"||e==="scrollend"),w=K?N!==null?N+"Capture":null:N;K=[];for(var b=j,z;b!==null;){var D=b;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||w===null||(D=Vl(b,w),D!=null&&K.push(En(b,D,z))),ve)break;b=b.return}0<K.length&&(N=new A(N,Y,null,a,M),O.push({event:N,listeners:K}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",N&&a!==Ar&&(Y=a.relatedTarget||a.fromElement)&&(tl(Y)||Y[el]))break e;if((A||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,A?(Y=a.relatedTarget||a.toElement,A=j,Y=Y?tl(Y):null,Y!==null&&(ve=m(Y),K=Y.tag,Y!==ve||K!==5&&K!==27&&K!==6)&&(Y=null)):(A=null,Y=j),A!==Y)){if(K=Eo,D="onMouseLeave",w="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(K=Ao,D="onPointerLeave",w="onPointerEnter",b="pointer"),ve=A==null?N:Zl(A),z=Y==null?N:Zl(Y),N=new K(D,b+"leave",A,a,M),N.target=ve,N.relatedTarget=z,D=null,tl(M)===j&&(K=new K(w,b+"enter",Y,a,M),K.target=z,K.relatedTarget=ve,D=K),ve=D,A&&Y)t:{for(K=Lp,w=A,b=Y,z=0,D=w;D;D=K(D))z++;D=0;for(var J=b;J;J=K(J))D++;for(;0<z-D;)w=K(w),z--;for(;0<D-z;)b=K(b),D--;for(;z--;){if(w===b||b!==null&&w===b.alternate){K=w;break t}w=K(w),b=K(b)}K=null}else K=null;A!==null&&xf(O,N,A,K,!1),Y!==null&&ve!==null&&xf(O,ve,Y,K,!0)}}e:{if(N=j?Zl(j):window,A=N.nodeName&&N.nodeName.toLowerCase(),A==="select"||A==="input"&&N.type==="file")var oe=Ho;else if(Oo(N))if(Uo)oe=$m;else{oe=Wm;var Z=Km}else A=N.nodeName,!A||A.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&Tr(j.elementType)&&(oe=Ho):oe=Fm;if(oe&&(oe=oe(e,j))){_o(O,oe,a,M);break e}Z&&Z(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&Er(N,"number",N.value)}switch(Z=j?Zl(j):window,e){case"focusin":(Oo(Z)||Z.contentEditable==="true")&&(ul=Z,Gr=j,en=null);break;case"focusout":en=Gr=ul=null;break;case"mousedown":Yr=!0;break;case"contextmenu":case"mouseup":case"dragend":Yr=!1,Zo(O,a,M);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":Zo(O,a,M)}var ae;if(Ur)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else ol?Ro(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Co&&a.locale!=="ko"&&(ol||se!=="onCompositionStart"?se==="onCompositionEnd"&&ol&&(ae=jo()):(ua=M,Rr="value"in ua?ua.value:ua.textContent,ol=!0)),Z=Xi(j,se),0<Z.length&&(se=new To(se,e,null,a,M),O.push({event:se,listeners:Z}),ae?se.data=ae:(ae=Do(a),ae!==null&&(se.data=ae)))),(ae=Qm?Xm(e,a):Zm(e,a))&&(se=Xi(j,"onBeforeInput"),0<se.length&&(Z=new To("onBeforeInput","beforeinput",null,a,M),O.push({event:Z,listeners:se}),Z.data=ae)),Hp(O,e,j,a,M)}vf(O,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Vl(e,a),n!=null&&l.unshift(En(e,n,i)),n=Vl(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Lp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xf(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var d=a,g=d.alternate,j=d.stateNode;if(d=d.tag,g!==null&&g===l)break;d!==5&&d!==26&&d!==27||j===null||(g=j,n?(j=Vl(a,i),j!=null&&c.unshift(En(a,j,g))):n||(j=Vl(a,i),j!=null&&c.push(En(a,j,g)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Gp=/\r\n?/g,Yp=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(Gp,`
`).replace(Yp,"")}function wf(e,t){return t=Sf(t),Sf(e)===t}function ye(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&rl(e,""+l);break;case"className":Kn(e,"class",l);break;case"tabIndex":Kn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kn(e,a,l);break;case"style":So(e,l,i);break;case"data":if(t!=="object"){Kn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Jn(e,"popover",l);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Jn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gm.get(a)||a,Jn(e,a,l))}}function hc(e,t,a,l,n,i){switch(a){case"style":So(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Jn(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ye(e,t,i,c,a,null)}}n&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var d=i=c=n=null,g=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":n=M;break;case"type":c=M;break;case"checked":g=M;break;case"defaultChecked":j=M;break;case"value":i=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:ye(e,t,l,M,a,null)}}yo(e,i,d,g,j,c,n,!1);return;case"select":ie("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":c=d;break;case"multiple":l=d;default:ye(e,t,n,d,a,null)}t=i,a=c,e.multiple=!!l,t!=null?il(e,!!l,t,!1):a!=null&&il(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(d=a[c],d!=null))switch(c){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:ye(e,t,c,d,a,null)}bo(e,l,n,i);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ye(e,t,g,l,a,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<Nn.length;l++)ie(Nn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ye(e,t,j,l,a,null)}return;default:if(Tr(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&hc(e,t,M,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&ye(e,t,d,l,a,null))}function Qp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,d=null,g=null,j=null,M=null;for(A in a){var O=a[A];if(a.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":g=O;default:l.hasOwnProperty(A)||ye(e,t,A,null,l,O)}}for(var N in l){var A=l[N];if(O=a[N],l.hasOwnProperty(N)&&(A!=null||O!=null))switch(N){case"type":i=A;break;case"name":n=A;break;case"checked":j=A;break;case"defaultChecked":M=A;break;case"value":c=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:A!==O&&ye(e,t,N,A,l,O)}}Nr(e,c,d,g,j,M,i,n);return;case"select":A=c=d=N=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":A=g;default:l.hasOwnProperty(i)||ye(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":N=i;break;case"defaultValue":d=i;break;case"multiple":c=i;default:i!==g&&ye(e,t,n,i,l,g)}t=d,a=c,l=A,N!=null?il(e,!!a,N,!1):!!l!=!!a&&(t!=null?il(e,!!a,t,!0):il(e,!!a,a?[]:"",!1));return;case"textarea":A=N=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ye(e,t,d,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&ye(e,t,c,n,l,i)}vo(e,N,A);return;case"option":for(var Y in a)N=a[Y],a.hasOwnProperty(Y)&&N!=null&&!l.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:ye(e,t,Y,null,l,N));for(g in l)N=l[g],A=a[g],l.hasOwnProperty(g)&&N!==A&&(N!=null||A!=null)&&(g==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":ye(e,t,g,N,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)N=a[K],a.hasOwnProperty(K)&&N!=null&&!l.hasOwnProperty(K)&&ye(e,t,K,null,l,N);for(j in l)if(N=l[j],A=a[j],l.hasOwnProperty(j)&&N!==A&&(N!=null||A!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:ye(e,t,j,N,l,A)}return;default:if(Tr(t)){for(var ve in a)N=a[ve],a.hasOwnProperty(ve)&&N!==void 0&&!l.hasOwnProperty(ve)&&hc(e,t,ve,void 0,l,N);for(M in l)N=l[M],A=a[M],!l.hasOwnProperty(M)||N===A||N===void 0&&A===void 0||hc(e,t,M,N,l,A);return}}for(var w in a)N=a[w],a.hasOwnProperty(w)&&N!=null&&!l.hasOwnProperty(w)&&ye(e,t,w,null,l,N);for(O in l)N=l[O],A=a[O],!l.hasOwnProperty(O)||N===A||N==null&&A==null||ye(e,t,O,N,l,A)}function zf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,d=n.duration;if(i&&d&&zf(c)){for(c=0,d=n.responseEnd,l+=1;l<a.length;l++){var g=a[l],j=g.startTime;if(j>d)break;var M=g.transferSize,O=g.initiatorType;M&&zf(O)&&(g=g.responseEnd,c+=M*(g<d?1:(d-j)/(g-j)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mc=null,pc=null;function Zi(e){return e.nodeType===9?e:e.ownerDocument}function jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yc=null;function Zp(){var e=window.event;return e&&e.type==="popstate"?e===yc?!1:(yc=e,!0):(yc=null,!1)}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(Kp)}:Ef;function Kp(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Af(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ul(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Tn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Tn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,d=i.nodeName;i[Xl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&Tn(e.ownerDocument.body);a=n}while(a);Ul(t)}function Cf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vc(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Fp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function Mf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function bc(e){return e.data==="$?"||e.data==="$~"}function xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $p(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sc=null;function kf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return jt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Df(e,t,a){switch(t=Zi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Tn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zr(e)}var Nt=new Map,Of=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=q.d;q.d={f:Ip,r:Pp,D:eg,C:tg,L:ag,m:lg,X:ig,S:ng,M:rg};function Ip(){var e=la.f(),t=Ui();return e||t}function Pp(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?Fu(t):la.r(e)}var Ol=typeof document>"u"?null:document;function _f(e,t,a){var l=Ol;if(l&&typeof t=="string"&&t){var n=yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Of.has(n)||(Of.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Le(t),l.head.appendChild(t)))}}function eg(e){la.D(e),_f("dns-prefetch",e,null)}function tg(e,t){la.C(e,t),_f("preconnect",e,t)}function ag(e,t,a){la.L(e,t,a);var l=Ol;if(l&&e&&t){var n='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(e)+'"]';var i=n;switch(t){case"style":i=_l(e);break;case"script":i=Hl(e)}Nt.has(i)||(e=p({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Nt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(An(i))||t==="script"&&l.querySelector(Cn(i))||(t=l.createElement("link"),Je(t,"link",e),Le(t),l.head.appendChild(t)))}}function lg(e,t){la.m(e,t);var a=Ol;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Hl(e)}if(!Nt.has(i)&&(e=p({rel:"modulepreload",href:e},t),Nt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cn(i)))return}l=a.createElement("link"),Je(l,"link",e),Le(l),a.head.appendChild(l)}}}function ng(e,t,a){la.S(e,t,a);var l=Ol;if(l&&e){var n=ll(l).hoistableStyles,i=_l(e);t=t||"default";var c=n.get(i);if(!c){var d={loading:0,preload:null};if(c=l.querySelector(An(i)))d.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Nt.get(i))&&wc(e,a);var g=c=l.createElement("link");Le(g),Je(g,"link",e),g._p=new Promise(function(j,M){g.onload=j,g.onerror=M}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Ji(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:d},n.set(i,c)}}}function ig(e,t){la.X(e,t);var a=Ol;if(a&&e){var l=ll(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(Cn(n)),i||(e=p({src:e,async:!0},t),(t=Nt.get(n))&&zc(e,t),i=a.createElement("script"),Le(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function rg(e,t){la.M(e,t);var a=Ol;if(a&&e){var l=ll(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(Cn(n)),i||(e=p({src:e,async:!0,type:"module"},t),(t=Nt.get(n))&&zc(e,t),i=a.createElement("script"),Le(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hf(e,t,a,l){var n=(n=le.current)?Vi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=ll(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var i=ll(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(An(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Nt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nt.set(e,a),i||sg(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(a),a=ll(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function _l(e){return'href="'+yt(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function Uf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function sg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Le(t),e.head.appendChild(t))}function Hl(e){return'[src="'+yt(e)+'"]'}function Cn(e){return"script[async]"+e}function Bf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return t.instance=l,Le(l),l;var n=p({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Le(l),Je(l,"style",n),Ji(l,a.precedence,e),t.instance=l;case"stylesheet":n=_l(a.href);var i=e.querySelector(An(n));if(i)return t.state.loading|=4,t.instance=i,Le(i),i;l=Uf(a),(n=Nt.get(n))&&wc(l,n),i=(e.ownerDocument||e).createElement("link"),Le(i);var c=i;return c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Je(i,"link",l),t.state.loading|=4,Ji(i,a.precedence,e),t.instance=i;case"script":return i=Hl(a.src),(n=e.querySelector(Cn(i)))?(t.instance=n,Le(n),n):(l=a,(n=Nt.get(i))&&(l=p({},a),zc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Le(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ji(l,a.precedence,e));return t.instance}function Ji(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var d=l[c];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ki=null;function qf(e,t,a){if(Ki===null){var l=new Map,n=Ki=new Map;n.set(a,l)}else n=Ki,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Xl]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var d=l.get(c);d?d.push(i):l.set(c,[i])}}return l}function Lf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function cg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function og(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=t.querySelector(An(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Le(i);return}i=t.ownerDocument||t,l=Uf(l),(n=Nt.get(n))&&wc(l,n),i=i.createElement("link"),Le(i);var c=i;c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var jc=0;function ug(e,t){return e.stylesheets&&e.count===0&&$i(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&jc===0&&(jc=62500*Xp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>jc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$i(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function $i(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(dg,e),Fi=null,Wi.call(e))}function dg(e,t){if(!(t.state.loading&4)){var a=Fi.get(e);if(a)var l=a.get(null);else{a=new Map,Fi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Wi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Mn={$$typeof:W,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function fg(e,t,a,l,n,i,c,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Yf(e,t,a,l,n,i,c,d,g,j,M,O){return e=new fg(e,t,a,c,g,j,M,O,d),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=ls(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ss(i),e}function Qf(e){return e?(e=hl,e):hl}function Xf(e,t,a,l,n,i){n=Qf(n),l.context===null?l.context=n:l.pendingContext=n,l=ga(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(nt(a,e,t),cn(a,e,t))}function Zf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Nc(e,t){Zf(e,t),(e=e.alternate)&&Zf(e,t)}function Vf(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&nt(t,e,67108864),Nc(e,67108864)}}function Jf(e){if(e.tag===13||e.tag===31){var t=mt();t=xr(t);var a=La(e,t);a!==null&&nt(a,e,t),Nc(e,t)}}var Ii=!0;function hg(e,t,a,l){var n=R.T;R.T=null;var i=q.p;try{q.p=2,Ec(e,t,a,l)}finally{q.p=i,R.T=n}}function mg(e,t,a,l){var n=R.T;R.T=null;var i=q.p;try{q.p=8,Ec(e,t,a,l)}finally{q.p=i,R.T=n}}function Ec(e,t,a,l){if(Ii){var n=Tc(l);if(n===null)fc(e,t,l,Pi,a),Wf(e,l);else if(gg(n,e,t,a,l))l.stopPropagation();else if(Wf(e,l),t&4&&-1<pg.indexOf(e)){for(;n!==null;){var i=al(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=_a(i.pendingLanes);if(c!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var g=1<<31-st(c);d.entanglements[1]|=g,c&=~g}Ht(i),(de&6)===0&&(_i=it()+500,jn(0))}}break;case 31:case 13:d=La(i,2),d!==null&&nt(d,i,2),Ui(),Nc(i,2)}if(i=Tc(l),i===null&&fc(e,t,l,Pi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else fc(e,t,l,null,a)}}function Tc(e){return e=Cr(e),Ac(e)}var Pi=null;function Ac(e){if(Pi=null,e=tl(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pi=e,null}function Kf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(em()){case eo:return 2;case to:return 8;case Yn:case tm:return 32;case ao:return 268435456;default:return 32}default:return 32}}var Cc=!1,Aa=null,Ca=null,Ma=null,kn=new Map,Rn=new Map,ka=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wf(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Dn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=al(t),t!==null&&Vf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function gg(e,t,a,l,n){switch(t){case"focusin":return Aa=Dn(Aa,e,t,a,l,n),!0;case"dragenter":return Ca=Dn(Ca,e,t,a,l,n),!0;case"mouseover":return Ma=Dn(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return kn.set(i,Dn(kn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,Dn(Rn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ff(e){var t=tl(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,co(e.priority,function(){Jf(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,co(e.priority,function(){Jf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Tc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ar=l,a.target.dispatchEvent(l),Ar=null}else return t=al(a),t!==null&&Vf(t),e.blockedOn=a,!1;t.shift()}return!0}function $f(e,t,a){er(e)&&a.delete(t)}function yg(){Cc=!1,Aa!==null&&er(Aa)&&(Aa=null),Ca!==null&&er(Ca)&&(Ca=null),Ma!==null&&er(Ma)&&(Ma=null),kn.forEach($f),Rn.forEach($f)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cc||(Cc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yg)))}var ar=null;function If(e){ar!==e&&(ar=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ar===e&&(ar=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Ac(l||a)===null)continue;break}var i=al(a);i!==null&&(e.splice(t,3),t-=3,Ts(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ul(e){function t(g){return tr(g,e)}Aa!==null&&tr(Aa,e),Ca!==null&&tr(Ca,e),Ma!==null&&tr(Ma,e),kn.forEach(t),Rn.forEach(t);for(var a=0;a<ka.length;a++){var l=ka[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)Ff(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Ie]||null;if(typeof i=="function")c||If(a);else if(c){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Ie]||null)d=c.formAction;else if(Ac(n)!==null)continue}else d=c.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),If(a)}}}function Pf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Mc(e){this._internalRoot=e}lr.prototype.render=Mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=mt();Xf(a,l,e,t,null,null)},lr.prototype.unmount=Mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xf(e.current,2,null,e,null,null),Ui(),t[el]=null}};function lr(e){this._internalRoot=e}lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=so();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ka.length&&t!==0&&t<ka[a].priority;a++);ka.splice(a,0,e),a===0&&Ff(e)}};var eh=u.version;if(eh!=="19.2.4")throw Error(o(527,eh,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=v(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var vg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{Gl=nr.inject(vg),rt=nr}catch{}}return _n.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,l="",n=rd,i=sd,c=cd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Yf(e,1,!1,null,null,a,l,null,n,i,c,Pf),e[el]=t.current,dc(e),new Mc(t)},_n.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var l=!1,n="",i=rd,c=sd,d=cd,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=Yf(e,1,!0,t,a??null,l,n,g,i,c,d,Pf),t.context=Qf(null),a=t.current,l=mt(),l=xr(l),n=ga(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,Ql(t,a),Ht(t),e[el]=t.current,dc(e),new lr(t)},_n.version="19.2.4",_n}var uh;function Ag(){if(uh)return Dc.exports;uh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Dc.exports=Tg(),Dc.exports}var Cg=Ag();var dh="popstate";function Mg(r={}){function u(h,m){let{pathname:y="/",search:E="",hash:S=""}=Pa(h.location.hash.substring(1));return!y.startsWith("/")&&!y.startsWith(".")&&(y="/"+y),Lc("",{pathname:y,search:E,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(h,m){let y=h.document.querySelector("base"),E="";if(y&&y.getAttribute("href")){let S=h.location.href,v=S.indexOf("#");E=v===-1?S:S.slice(0,v)}return E+"#"+(typeof m=="string"?m:Un(m))}function o(h,m){Et(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return Rg(u,f,o,r)}function Ee(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Et(r,u){if(!r){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function kg(){return Math.random().toString(36).substring(2,10)}function fh(r,u){return{usr:r.state,key:r.key,idx:u}}function Lc(r,u,f=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof u=="string"?Pa(u):u,state:f,key:u&&u.key||o||kg()}}function Un({pathname:r="/",search:u="",hash:f=""}){return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Pa(r){let u={};if(r){let f=r.indexOf("#");f>=0&&(u.hash=r.substring(f),r=r.substring(0,f));let o=r.indexOf("?");o>=0&&(u.search=r.substring(o),r=r.substring(0,o)),r&&(u.pathname=r)}return u}function Rg(r,u,f,o={}){let{window:h=document.defaultView,v5Compat:m=!1}=o,y=h.history,E="POP",S=null,v=C();v==null&&(v=0,y.replaceState({...y.state,idx:v},""));function C(){return(y.state||{idx:null}).idx}function p(){E="POP";let G=C(),V=G==null?null:G-v;v=G,S&&S({action:E,location:B.location,delta:V})}function k(G,V){E="PUSH";let Q=Lc(B.location,G,V);f&&f(Q,G),v=C()+1;let W=fh(Q,v),we=B.createHref(Q);try{y.pushState(W,"",we)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;h.location.assign(we)}m&&S&&S({action:E,location:B.location,delta:1})}function H(G,V){E="REPLACE";let Q=Lc(B.location,G,V);f&&f(Q,G),v=C();let W=fh(Q,v),we=B.createHref(Q);y.replaceState(W,"",we),m&&S&&S({action:E,location:B.location,delta:0})}function U(G){return Dg(G)}let B={get action(){return E},get location(){return r(h,y)},listen(G){if(S)throw new Error("A history only accepts one active listener");return h.addEventListener(dh,p),S=G,()=>{h.removeEventListener(dh,p),S=null}},createHref(G){return u(h,G)},createURL:U,encodeLocation(G){let V=U(G);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:k,replace:H,go(G){return y.go(G)}};return B}function Dg(r,u=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(f,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Un(r);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=f+o),new URL(o,f)}function zh(r,u,f="/"){return Og(r,u,f,!1)}function Og(r,u,f,o){let h=typeof u=="string"?Pa(u):u,m=ra(h.pathname||"/",f);if(m==null)return null;let y=jh(r);_g(y);let E=null;for(let S=0;E==null&&S<y.length;++S){let v=Vg(m);E=Xg(y[S],v,o)}return E}function jh(r,u=[],f=[],o="",h=!1){let m=(y,E,S=h,v)=>{let C={relativePath:v===void 0?y.path||"":v,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(o)&&S)return;Ee(C.relativePath.startsWith(o),`Absolute route path "${C.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(o.length)}let p=ia([o,C.relativePath]),k=f.concat(C);y.children&&y.children.length>0&&(Ee(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),jh(y.children,u,k,p,S)),!(y.path==null&&!y.index)&&u.push({path:p,score:Yg(p,y.index),routesMeta:k})};return r.forEach((y,E)=>{if(y.path===""||!y.path?.includes("?"))m(y,E);else for(let S of Nh(y.path))m(y,E,!0,S)}),u}function Nh(r){let u=r.split("/");if(u.length===0)return[];let[f,...o]=u,h=f.endsWith("?"),m=f.replace(/\?$/,"");if(o.length===0)return h?[m,""]:[m];let y=Nh(o.join("/")),E=[];return E.push(...y.map(S=>S===""?m:[m,S].join("/"))),h&&E.push(...y),E.map(S=>r.startsWith("/")&&S===""?"/":S)}function _g(r){r.sort((u,f)=>u.score!==f.score?f.score-u.score:Qg(u.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var Hg=/^:[\w-]+$/,Ug=3,Bg=2,qg=1,Lg=10,Gg=-2,hh=r=>r==="*";function Yg(r,u){let f=r.split("/"),o=f.length;return f.some(hh)&&(o+=Gg),u&&(o+=Bg),f.filter(h=>!hh(h)).reduce((h,m)=>h+(Hg.test(m)?Ug:m===""?qg:Lg),o)}function Qg(r,u){return r.length===u.length&&r.slice(0,-1).every((o,h)=>o===u[h])?r[r.length-1]-u[u.length-1]:0}function Xg(r,u,f=!1){let{routesMeta:o}=r,h={},m="/",y=[];for(let E=0;E<o.length;++E){let S=o[E],v=E===o.length-1,C=m==="/"?u:u.slice(m.length)||"/",p=cr({path:S.relativePath,caseSensitive:S.caseSensitive,end:v},C),k=S.route;if(!p&&v&&f&&!o[o.length-1].route.index&&(p=cr({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},C)),!p)return null;Object.assign(h,p.params),y.push({params:h,pathname:ia([m,p.pathname]),pathnameBase:Fg(ia([m,p.pathnameBase])),route:k}),p.pathnameBase!=="/"&&(m=ia([m,p.pathnameBase]))}return y}function cr(r,u){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,o]=Zg(r.path,r.caseSensitive,r.end),h=u.match(f);if(!h)return null;let m=h[0],y=m.replace(/(.)\/+$/,"$1"),E=h.slice(1);return{params:o.reduce((v,{paramName:C,isOptional:p},k)=>{if(C==="*"){let U=E[k]||"";y=m.slice(0,m.length-U.length).replace(/(.)\/+$/,"$1")}const H=E[k];return p&&!H?v[C]=void 0:v[C]=(H||"").replace(/%2F/g,"/"),v},{}),pathname:m,pathnameBase:y,pattern:r}}function Zg(r,u=!1,f=!0){Et(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,S)=>(o.push({paramName:E,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,u?void 0:"i"),o]}function Vg(r){try{return r.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Et(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),r}}function ra(r,u){if(u==="/")return r;if(!r.toLowerCase().startsWith(u.toLowerCase()))return null;let f=u.endsWith("/")?u.length-1:u.length,o=r.charAt(f);return o&&o!=="/"?null:r.slice(f)||"/"}var Jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Kg(r,u="/"){let{pathname:f,search:o="",hash:h=""}=typeof r=="string"?Pa(r):r,m;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?m=mh(f.substring(1),"/"):m=mh(f,u)):m=u,{pathname:m,search:$g(o),hash:Ig(h)}}function mh(r,u){let f=u.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?f.length>1&&f.pop():h!=="."&&f.push(h)}),f.length>1?f.join("/"):"/"}function Uc(r,u,f,o){return`Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wg(r){return r.filter((u,f)=>f===0||u.route.path&&u.route.path.length>0)}function Eh(r){let u=Wg(r);return u.map((f,o)=>o===u.length-1?f.pathname:f.pathnameBase)}function Th(r,u,f,o=!1){let h;typeof r=="string"?h=Pa(r):(h={...r},Ee(!h.pathname||!h.pathname.includes("?"),Uc("?","pathname","search",h)),Ee(!h.pathname||!h.pathname.includes("#"),Uc("#","pathname","hash",h)),Ee(!h.search||!h.search.includes("#"),Uc("#","search","hash",h)));let m=r===""||h.pathname==="",y=m?"/":h.pathname,E;if(y==null)E=f;else{let p=u.length-1;if(!o&&y.startsWith("..")){let k=y.split("/");for(;k[0]==="..";)k.shift(),p-=1;h.pathname=k.join("/")}E=p>=0?u[p]:"/"}let S=Kg(h,E),v=y&&y!=="/"&&y.endsWith("/"),C=(m||y===".")&&f.endsWith("/");return!S.pathname.endsWith("/")&&(v||C)&&(S.pathname+="/"),S}var ia=r=>r.join("/").replace(/\/\/+/g,"/"),Fg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ig=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Pg=class{constructor(r,u,f,o=!1){this.status=r,this.statusText=u||"",this.internal=o,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function ey(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ty(r){return r.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ch(r,u){let f=r;if(typeof f!="string"||!Jg.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let o=f,h=!1;if(Ah)try{let m=new URL(window.location.href),y=f.startsWith("//")?new URL(m.protocol+f):new URL(f),E=ra(y.pathname,u);y.origin===m.origin&&E!=null?f=E+y.search+y.hash:h=!0}catch{Et(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:h,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mh=["POST","PUT","PATCH","DELETE"];new Set(Mh);var ay=["GET",...Mh];new Set(ay);var ql=T.createContext(null);ql.displayName="DataRouter";var ur=T.createContext(null);ur.displayName="DataRouterState";var ly=T.createContext(!1),kh=T.createContext({isTransitioning:!1});kh.displayName="ViewTransition";var ny=T.createContext(new Map);ny.displayName="Fetchers";var iy=T.createContext(null);iy.displayName="Await";var Tt=T.createContext(null);Tt.displayName="Navigation";var Bn=T.createContext(null);Bn.displayName="Location";var Bt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Zc=T.createContext(null);Zc.displayName="RouteError";var Rh="REACT_ROUTER_ERROR",ry="REDIRECT",sy="ROUTE_ERROR_RESPONSE";function cy(r){if(r.startsWith(`${Rh}:${ry}:{`))try{let u=JSON.parse(r.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function oy(r){if(r.startsWith(`${Rh}:${sy}:{`))try{let u=JSON.parse(r.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Pg(u.status,u.statusText,u.data)}catch{}}function uy(r,{relative:u}={}){Ee(qn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=T.useContext(Tt),{hash:h,pathname:m,search:y}=Ln(r,{relative:u}),E=m;return f!=="/"&&(E=m==="/"?f:ia([f,m])),o.createHref({pathname:E,search:y,hash:h})}function qn(){return T.useContext(Bn)!=null}function sa(){return Ee(qn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Bn).location}var Dh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Oh(r){T.useContext(Tt).static||T.useLayoutEffect(r)}function Vc(){let{isDataRoute:r}=T.useContext(Bt);return r?zy():dy()}function dy(){Ee(qn(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(ql),{basename:u,navigator:f}=T.useContext(Tt),{matches:o}=T.useContext(Bt),{pathname:h}=sa(),m=JSON.stringify(Eh(o)),y=T.useRef(!1);return Oh(()=>{y.current=!0}),T.useCallback((S,v={})=>{if(Et(y.current,Dh),!y.current)return;if(typeof S=="number"){f.go(S);return}let C=Th(S,JSON.parse(m),h,v.relative==="path");r==null&&u!=="/"&&(C.pathname=C.pathname==="/"?u:ia([u,C.pathname])),(v.replace?f.replace:f.push)(C,v.state,v)},[u,f,m,h,r])}T.createContext(null);function _h(){let{matches:r}=T.useContext(Bt),u=r[r.length-1];return u?u.params:{}}function Ln(r,{relative:u}={}){let{matches:f}=T.useContext(Bt),{pathname:o}=sa(),h=JSON.stringify(Eh(f));return T.useMemo(()=>Th(r,JSON.parse(h),o,u==="path"),[r,h,o,u])}function fy(r,u){return Hh(r,u)}function Hh(r,u,f,o,h){Ee(qn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=T.useContext(Tt),{matches:y}=T.useContext(Bt),E=y[y.length-1],S=E?E.params:{},v=E?E.pathname:"/",C=E?E.pathnameBase:"/",p=E&&E.route;{let Q=p&&p.path||"";Bh(v,!p||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let k=sa(),H;if(u){let Q=typeof u=="string"?Pa(u):u;Ee(C==="/"||Q.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),H=Q}else H=k;let U=H.pathname||"/",B=U;if(C!=="/"){let Q=C.replace(/^\//,"").split("/");B="/"+U.replace(/^\//,"").split("/").slice(Q.length).join("/")}let G=zh(r,{pathname:B});Et(p||G!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Et(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=yy(G&&G.map(Q=>Object.assign({},Q,{params:Object.assign({},S,Q.params),pathname:ia([C,m.encodeLocation?m.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?C:ia([C,m.encodeLocation?m.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),y,f,o,h);return u&&V?T.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},V):V}function hy(){let r=wy(),u=ey(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},m={padding:"2px 4px",backgroundColor:o},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},u),f?T.createElement("pre",{style:h},f):null,y)}var my=T.createElement(hy,null),Uh=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){this.props.onError?this.props.onError(r,u):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=oy(r.digest);f&&(r=f)}let u=r!==void 0?T.createElement(Bt.Provider,{value:this.props.routeContext},T.createElement(Zc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?T.createElement(py,{error:r},u):u}};Uh.contextType=ly;var Bc=new WeakMap;function py({children:r,error:u}){let{basename:f}=T.useContext(Tt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=cy(u.digest);if(o){let h=Bc.get(u);if(h)throw h;let m=Ch(o.location,f);if(Ah&&!Bc.get(u))if(m.isExternal||o.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:o.replace}));throw Bc.set(u,y),y}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function gy({routeContext:r,match:u,children:f}){let o=T.useContext(ql);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),T.createElement(Bt.Provider,{value:r},f)}function yy(r,u=[],f=null,o=null,h=null){if(r==null){if(!f)return null;if(f.errors)r=f.matches;else if(u.length===0&&!f.initialized&&f.matches.length>0)r=f.matches;else return null}let m=r,y=f?.errors;if(y!=null){let C=m.findIndex(p=>p.route.id&&y?.[p.route.id]!==void 0);Ee(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),m=m.slice(0,Math.min(m.length,C+1))}let E=!1,S=-1;if(f)for(let C=0;C<m.length;C++){let p=m[C];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(S=C),p.route.id){let{loaderData:k,errors:H}=f,U=p.route.loader&&!k.hasOwnProperty(p.route.id)&&(!H||H[p.route.id]===void 0);if(p.route.lazy||U){E=!0,S>=0?m=m.slice(0,S+1):m=[m[0]];break}}}let v=f&&o?(C,p)=>{o(C,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:ty(f.matches),errorInfo:p})}:void 0;return m.reduceRight((C,p,k)=>{let H,U=!1,B=null,G=null;f&&(H=y&&p.route.id?y[p.route.id]:void 0,B=p.route.errorElement||my,E&&(S<0&&k===0?(Bh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,G=null):S===k&&(U=!0,G=p.route.hydrateFallbackElement||null)));let V=u.concat(m.slice(0,k+1)),Q=()=>{let W;return H?W=B:U?W=G:p.route.Component?W=T.createElement(p.route.Component,null):p.route.element?W=p.route.element:W=C,T.createElement(gy,{match:p,routeContext:{outlet:C,matches:V,isDataRoute:f!=null},children:W})};return f&&(p.route.ErrorBoundary||p.route.errorElement||k===0)?T.createElement(Uh,{location:f.location,revalidation:f.revalidation,component:B,error:H,children:Q(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:v}):Q()},null)}function Jc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vy(r){let u=T.useContext(ql);return Ee(u,Jc(r)),u}function by(r){let u=T.useContext(ur);return Ee(u,Jc(r)),u}function xy(r){let u=T.useContext(Bt);return Ee(u,Jc(r)),u}function Kc(r){let u=xy(r),f=u.matches[u.matches.length-1];return Ee(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function Sy(){return Kc("useRouteId")}function wy(){let r=T.useContext(Zc),u=by("useRouteError"),f=Kc("useRouteError");return r!==void 0?r:u.errors?.[f]}function zy(){let{router:r}=vy("useNavigate"),u=Kc("useNavigate"),f=T.useRef(!1);return Oh(()=>{f.current=!0}),T.useCallback(async(h,m={})=>{Et(f.current,Dh),f.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:u,...m}))},[r,u])}var ph={};function Bh(r,u,f){!u&&!ph[r]&&(ph[r]=!0,Et(!1,f))}T.memo(jy);function jy({routes:r,future:u,state:f,onError:o}){return Hh(r,void 0,f,o,u)}function na(r){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ny({basename:r="/",children:u=null,location:f,navigationType:o="POP",navigator:h,static:m=!1,unstable_useTransitions:y}){Ee(!qn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=r.replace(/^\/*/,"/"),S=T.useMemo(()=>({basename:E,navigator:h,static:m,unstable_useTransitions:y,future:{}}),[E,h,m,y]);typeof f=="string"&&(f=Pa(f));let{pathname:v="/",search:C="",hash:p="",state:k=null,key:H="default"}=f,U=T.useMemo(()=>{let B=ra(v,E);return B==null?null:{location:{pathname:B,search:C,hash:p,state:k,key:H},navigationType:o}},[E,v,C,p,k,H,o]);return Et(U!=null,`<Router basename="${E}"> is not able to match the URL "${v}${C}${p}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:T.createElement(Tt.Provider,{value:S},T.createElement(Bn.Provider,{children:u,value:U}))}function Ey({children:r,location:u}){return fy(Gc(r),u)}function Gc(r,u=[]){let f=[];return T.Children.forEach(r,(o,h)=>{if(!T.isValidElement(o))return;let m=[...u,h];if(o.type===T.Fragment){f.push.apply(f,Gc(o.props.children,m));return}Ee(o.type===na,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!o.props.index||!o.props.children,"An index route cannot have child routes.");let y={id:o.props.id||m.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(y.children=Gc(o.props.children,m)),f.push(y)}),f}var rr="get",sr="application/x-www-form-urlencoded";function dr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Ty(r){return dr(r)&&r.tagName.toLowerCase()==="button"}function Ay(r){return dr(r)&&r.tagName.toLowerCase()==="form"}function Cy(r){return dr(r)&&r.tagName.toLowerCase()==="input"}function My(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ky(r,u){return r.button===0&&(!u||u==="_self")&&!My(r)}function Yc(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((u,f)=>{let o=r[f];return u.concat(Array.isArray(o)?o.map(h=>[f,h]):[[f,o]])},[]))}function Ry(r,u){let f=Yc(r);return u&&u.forEach((o,h)=>{f.has(h)||u.getAll(h).forEach(m=>{f.append(h,m)})}),f}var ir=null;function Dy(){if(ir===null)try{new FormData(document.createElement("form"),0),ir=!1}catch{ir=!0}return ir}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qc(r){return r!=null&&!Oy.has(r)?(Et(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sr}"`),null):r}function _y(r,u){let f,o,h,m,y;if(Ay(r)){let E=r.getAttribute("action");o=E?ra(E,u):null,f=r.getAttribute("method")||rr,h=qc(r.getAttribute("enctype"))||sr,m=new FormData(r)}else if(Ty(r)||Cy(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=r.getAttribute("formaction")||E.getAttribute("action");if(o=S?ra(S,u):null,f=r.getAttribute("formmethod")||E.getAttribute("method")||rr,h=qc(r.getAttribute("formenctype"))||qc(E.getAttribute("enctype"))||sr,m=new FormData(E,r),!Dy()){let{name:v,type:C,value:p}=r;if(C==="image"){let k=v?`${v}.`:"";m.append(`${k}x`,"0"),m.append(`${k}y`,"0")}else v&&m.append(v,p)}}else{if(dr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=rr,o=null,h=sr,y=r}return m&&h==="text/plain"&&(y=m,m=void 0),{action:o,method:f.toLowerCase(),encType:h,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wc(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Hy(r,u,f,o){let h=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${o}`:h.pathname=`${h.pathname}.${o}`:h.pathname==="/"?h.pathname=`_root.${o}`:u&&ra(h.pathname,u)==="/"?h.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${o}`,h}async function Uy(r,u){if(r.id in u)return u[r.id];try{let f=await import(r.module);return u[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function By(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qy(r,u,f){let o=await Promise.all(r.map(async h=>{let m=u.routes[h.route.id];if(m){let y=await Uy(m,f);return y.links?y.links():[]}return[]}));return Qy(o.flat(1).filter(By).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function gh(r,u,f,o,h,m){let y=(S,v)=>f[v]?S.route.id!==f[v].route.id:!0,E=(S,v)=>f[v].pathname!==S.pathname||f[v].route.path?.endsWith("*")&&f[v].params["*"]!==S.params["*"];return m==="assets"?u.filter((S,v)=>y(S,v)||E(S,v)):m==="data"?u.filter((S,v)=>{let C=o.routes[S.route.id];if(!C||!C.hasLoader)return!1;if(y(S,v)||E(S,v))return!0;if(S.route.shouldRevalidate){let p=S.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Ly(r,u,{includeHydrateFallback:f}={}){return Gy(r.map(o=>{let h=u.routes[o.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),f&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function Gy(r){return[...new Set(r)]}function Yy(r){let u={},f=Object.keys(r).sort();for(let o of f)u[o]=r[o];return u}function Qy(r,u){let f=new Set;return new Set(u),r.reduce((o,h)=>{let m=JSON.stringify(Yy(h));return f.has(m)||(f.add(m),o.push({key:m,link:h})),o},[])}function qh(){let r=T.useContext(ql);return Wc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Xy(){let r=T.useContext(ur);return Wc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Fc=T.createContext(void 0);Fc.displayName="FrameworkContext";function Lh(){let r=T.useContext(Fc);return Wc(r,"You must render this element inside a <HydratedRouter> element"),r}function Zy(r,u){let f=T.useContext(Fc),[o,h]=T.useState(!1),[m,y]=T.useState(!1),{onFocus:E,onBlur:S,onMouseEnter:v,onMouseLeave:C,onTouchStart:p}=u,k=T.useRef(null);T.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let B=V=>{V.forEach(Q=>{y(Q.isIntersecting)})},G=new IntersectionObserver(B,{threshold:.5});return k.current&&G.observe(k.current),()=>{G.disconnect()}}},[r]),T.useEffect(()=>{if(o){let B=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(B)}}},[o]);let H=()=>{h(!0)},U=()=>{h(!1),y(!1)};return f?r!=="intent"?[m,k,{}]:[m,k,{onFocus:Hn(E,H),onBlur:Hn(S,U),onMouseEnter:Hn(v,H),onMouseLeave:Hn(C,U),onTouchStart:Hn(p,H)}]:[!1,k,{}]}function Hn(r,u){return f=>{r&&r(f),f.defaultPrevented||u(f)}}function Vy({page:r,...u}){let{router:f}=qh(),o=T.useMemo(()=>zh(f.routes,r,f.basename),[f.routes,r,f.basename]);return o?T.createElement(Ky,{page:r,matches:o,...u}):null}function Jy(r){let{manifest:u,routeModules:f}=Lh(),[o,h]=T.useState([]);return T.useEffect(()=>{let m=!1;return qy(r,u,f).then(y=>{m||h(y)}),()=>{m=!0}},[r,u,f]),o}function Ky({page:r,matches:u,...f}){let o=sa(),{future:h,manifest:m,routeModules:y}=Lh(),{basename:E}=qh(),{loaderData:S,matches:v}=Xy(),C=T.useMemo(()=>gh(r,u,v,m,o,"data"),[r,u,v,m,o]),p=T.useMemo(()=>gh(r,u,v,m,o,"assets"),[r,u,v,m,o]),k=T.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let B=new Set,G=!1;if(u.forEach(Q=>{let W=m.routes[Q.route.id];!W||!W.hasLoader||(!C.some(we=>we.route.id===Q.route.id)&&Q.route.id in S&&y[Q.route.id]?.shouldRevalidate||W.hasClientLoader?G=!0:B.add(Q.route.id))}),B.size===0)return[];let V=Hy(r,E,h.unstable_trailingSlashAwareDataRequests,"data");return G&&B.size>0&&V.searchParams.set("_routes",u.filter(Q=>B.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[V.pathname+V.search]},[E,h.unstable_trailingSlashAwareDataRequests,S,o,m,C,u,r,y]),H=T.useMemo(()=>Ly(p,m),[p,m]),U=Jy(p);return T.createElement(T.Fragment,null,k.map(B=>T.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),H.map(B=>T.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),U.map(({key:B,link:G})=>T.createElement("link",{key:B,nonce:f.nonce,...G,crossOrigin:G.crossOrigin??f.crossOrigin})))}function Wy(...r){return u=>{r.forEach(f=>{typeof f=="function"?f(u):f!=null&&(f.current=u)})}}var Fy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fy&&(window.__reactRouterVersion="7.13.0")}catch{}function $y({basename:r,children:u,unstable_useTransitions:f,window:o}){let h=T.useRef();h.current==null&&(h.current=Mg({window:o,v5Compat:!0}));let m=h.current,[y,E]=T.useState({action:m.action,location:m.location}),S=T.useCallback(v=>{f===!1?E(v):T.startTransition(()=>E(v))},[f]);return T.useLayoutEffect(()=>m.listen(S),[m,S]),T.createElement(Ny,{basename:r,children:u,location:y.location,navigationType:y.action,navigator:m,unstable_useTransitions:f})}var Gh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$=T.forwardRef(function({onClick:u,discover:f="render",prefetch:o="none",relative:h,reloadDocument:m,replace:y,state:E,target:S,to:v,preventScrollReset:C,viewTransition:p,unstable_defaultShouldRevalidate:k,...H},U){let{basename:B,unstable_useTransitions:G}=T.useContext(Tt),V=typeof v=="string"&&Gh.test(v),Q=Ch(v,B);v=Q.to;let W=uy(v,{relative:h}),[we,Se,Te]=Zy(o,H),P=t0(v,{replace:y,state:E,target:S,preventScrollReset:C,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:k,unstable_useTransitions:G});function Me(pt){u&&u(pt),pt.defaultPrevented||P(pt)}let Ye=T.createElement("a",{...H,...Te,href:Q.absoluteURL||W,onClick:Q.isExternal||m?u:Me,ref:Wy(U,Se),target:S,"data-discover":!V&&f==="render"?"true":void 0});return we&&!V?T.createElement(T.Fragment,null,Ye,T.createElement(Vy,{page:W})):Ye});$.displayName="Link";var Iy=T.forwardRef(function({"aria-current":u="page",caseSensitive:f=!1,className:o="",end:h=!1,style:m,to:y,viewTransition:E,children:S,...v},C){let p=Ln(y,{relative:v.relative}),k=sa(),H=T.useContext(ur),{navigator:U,basename:B}=T.useContext(Tt),G=H!=null&&s0(p)&&E===!0,V=U.encodeLocation?U.encodeLocation(p).pathname:p.pathname,Q=k.pathname,W=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;f||(Q=Q.toLowerCase(),W=W?W.toLowerCase():null,V=V.toLowerCase()),W&&B&&(W=ra(W,B)||W);const we=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let Se=Q===V||!h&&Q.startsWith(V)&&Q.charAt(we)==="/",Te=W!=null&&(W===V||!h&&W.startsWith(V)&&W.charAt(V.length)==="/"),P={isActive:Se,isPending:Te,isTransitioning:G},Me=Se?u:void 0,Ye;typeof o=="function"?Ye=o(P):Ye=[o,Se?"active":null,Te?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let pt=typeof m=="function"?m(P):m;return T.createElement($,{...v,"aria-current":Me,className:Ye,ref:C,style:pt,to:y,viewTransition:E},typeof S=="function"?S(P):S)});Iy.displayName="NavLink";var Py=T.forwardRef(({discover:r="render",fetcherKey:u,navigate:f,reloadDocument:o,replace:h,state:m,method:y=rr,action:E,onSubmit:S,relative:v,preventScrollReset:C,viewTransition:p,unstable_defaultShouldRevalidate:k,...H},U)=>{let{unstable_useTransitions:B}=T.useContext(Tt),G=i0(),V=r0(E,{relative:v}),Q=y.toLowerCase()==="get"?"get":"post",W=typeof E=="string"&&Gh.test(E),we=Se=>{if(S&&S(Se),Se.defaultPrevented)return;Se.preventDefault();let Te=Se.nativeEvent.submitter,P=Te?.getAttribute("formmethod")||y,Me=()=>G(Te||Se.currentTarget,{fetcherKey:u,method:P,navigate:f,replace:h,state:m,relative:v,preventScrollReset:C,viewTransition:p,unstable_defaultShouldRevalidate:k});B&&f!==!1?T.startTransition(()=>Me()):Me()};return T.createElement("form",{ref:U,method:Q,action:V,onSubmit:o?S:we,...H,"data-discover":!W&&r==="render"?"true":void 0})});Py.displayName="Form";function e0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yh(r){let u=T.useContext(ql);return Ee(u,e0(r)),u}function t0(r,{target:u,replace:f,state:o,preventScrollReset:h,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:E,unstable_useTransitions:S}={}){let v=Vc(),C=sa(),p=Ln(r,{relative:m});return T.useCallback(k=>{if(ky(k,u)){k.preventDefault();let H=f!==void 0?f:Un(C)===Un(p),U=()=>v(r,{replace:H,state:o,preventScrollReset:h,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:E});S?T.startTransition(()=>U()):U()}},[C,v,p,f,o,u,r,h,m,y,E,S])}function a0(r){Et(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let u=T.useRef(Yc(r)),f=T.useRef(!1),o=sa(),h=T.useMemo(()=>Ry(o.search,f.current?null:u.current),[o.search]),m=Vc(),y=T.useCallback((E,S)=>{const v=Yc(typeof E=="function"?E(new URLSearchParams(h)):E);f.current=!0,m("?"+v,S)},[m,h]);return[h,y]}var l0=0,n0=()=>`__${String(++l0)}__`;function i0(){let{router:r}=Yh("useSubmit"),{basename:u}=T.useContext(Tt),f=Sy(),o=r.fetch,h=r.navigate;return T.useCallback(async(m,y={})=>{let{action:E,method:S,encType:v,formData:C,body:p}=_y(m,u);if(y.navigate===!1){let k=y.fetcherKey||n0();await o(k,f,y.action||E,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:C,body:p,formMethod:y.method||S,formEncType:y.encType||v,flushSync:y.flushSync})}else await h(y.action||E,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:C,body:p,formMethod:y.method||S,formEncType:y.encType||v,replace:y.replace,state:y.state,fromRouteId:f,flushSync:y.flushSync,viewTransition:y.viewTransition})},[o,h,u,f])}function r0(r,{relative:u}={}){let{basename:f}=T.useContext(Tt),o=T.useContext(Bt);Ee(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),m={...Ln(r||".",{relative:u})},y=sa();if(r==null){m.search=y.search;let E=new URLSearchParams(m.search),S=E.getAll("index");if(S.some(C=>C==="")){E.delete("index"),S.filter(p=>p).forEach(p=>E.append("index",p));let C=E.toString();m.search=C?`?${C}`:""}}return(!r||r===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(m.pathname=m.pathname==="/"?f:ia([f,m.pathname])),Un(m)}function s0(r,{relative:u}={}){let f=T.useContext(kh);Ee(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Yh("useViewTransitionState"),h=Ln(r,{relative:u});if(!f.isTransitioning)return!1;let m=ra(f.currentLocation.pathname,o)||f.currentLocation.pathname,y=ra(f.nextLocation.pathname,o)||f.nextLocation.pathname;return cr(h.pathname,y)!=null||cr(h.pathname,m)!=null}const Qh=(...r)=>r.filter((u,f,o)=>!!u&&u.trim()!==""&&o.indexOf(u)===f).join(" ").trim();const c0=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const o0=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,f,o)=>o?o.toUpperCase():f.toLowerCase());const yh=r=>{const u=o0(r);return u.charAt(0).toUpperCase()+u.slice(1)};var u0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const d0=r=>{for(const u in r)if(u.startsWith("aria-")||u==="role"||u==="title")return!0;return!1};const f0=T.forwardRef(({color:r="currentColor",size:u=24,strokeWidth:f=2,absoluteStrokeWidth:o,className:h="",children:m,iconNode:y,...E},S)=>T.createElement("svg",{ref:S,...u0,width:u,height:u,stroke:r,strokeWidth:o?Number(f)*24/Number(u):f,className:Qh("lucide",h),...!m&&!d0(E)&&{"aria-hidden":"true"},...E},[...y.map(([v,C])=>T.createElement(v,C)),...Array.isArray(m)?m:[m]]));const Be=(r,u)=>{const f=T.forwardRef(({className:o,...h},m)=>T.createElement(f0,{ref:m,iconNode:u,className:Qh(`lucide-${c0(yh(r))}`,`lucide-${r}`,o),...h}));return f.displayName=yh(r),f};const h0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Qc=Be("arrow-left",h0);const m0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],p0=Be("arrow-right",m0);const g0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],y0=Be("book-open",g0);const v0=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],or=Be("bug",v0);const b0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xh=Be("chevron-down",b0);const x0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ut=Be("chevron-right",x0);const S0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Zh=Be("chevron-up",S0);const w0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],z0=Be("circle-check-big",w0);const j0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],N0=Be("file-text",j0);const E0=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]],T0=Be("fish",E0);const A0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Vh=Be("instagram",A0);const C0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],M0=Be("mail",C0);const k0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],R0=Be("map-pin",k0);const D0=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],$c=Be("package",D0);const O0=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],_0=Be("scroll-text",O0);const H0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fr=Be("search",H0);const U0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B0=Be("shield-check",U0);const q0=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Jh=Be("shopping-bag",q0);const L0=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Kh=Be("shopping-cart",L0);const G0=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Y0=Be("trash-2",G0),Q0="/assets/IMG_3091-DHPSlBqy.jpg";function X0(){const r=()=>{document.getElementById("giveaway")?.scrollIntoView({behavior:"smooth"})};return s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-overlay"}),s.jsx("div",{className:"hero-content container animate-fade-in",children:s.jsxs("div",{className:"hero-main delay-100",children:[s.jsx("div",{className:"hero-brand-mark",children:s.jsx("span",{className:"brand-badge",children:"EST. 2025"})}),s.jsxs("h2",{className:"brand-headline",children:["Know What to Throw.",s.jsx("br",{}),"Catch More Fish."]}),s.jsx("p",{className:"brand-subheadline",children:"Data-driven fly recommendations + curated kits for the modern angler."}),s.jsxs("div",{className:"hero-cta delay-300",children:[s.jsxs($,{to:"/quiver",className:"btn-primary",children:["The Quiver ",s.jsx(p0,{size:18,style:{display:"inline",marginLeft:"4px"}})]}),s.jsx("button",{className:"btn-secondary",onClick:r,children:"Founders Giveaway"})]})]})}),s.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-image: url('${Q0}'); /* Local misty river photo */
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, rgba(18, 20, 21, 0.4) 0%, rgba(18, 20, 21, 0.9) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding-top: 5rem;
          padding-bottom: 4rem;
          justify-content: center;
        }

        .hero-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 800px;
        }

        .hero-brand-mark {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .brand-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--color-cream);
          text-transform: uppercase;
        }

        .brand-headline {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .brand-subheadline {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          font-weight: 300;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `})]})}function Z0(){const[r,u]=T.useState(""),[f,o]=T.useState(!1),[h,m]=T.useState(!1),[y,E]=T.useState(null),S=async v=>{if(v.preventDefault(),E(null),r){m(!0);try{const C=await fetch("https://formspree.io/f/xlgwwbad",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:r})});if(C.ok)o(!0),u("");else{const p=await C.json();Object.hasOwn(p,"errors")?E(p.errors.map(k=>k.message).join(", ")):E("Oops! There was a problem submitting your form")}}catch{E("Oops! There was a problem submitting your form")}finally{m(!1)}}};return s.jsxs("section",{id:"giveaway",className:"giveaway-section",children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"giveaway-card",children:s.jsxs("div",{className:"giveaway-content",children:[s.jsx("span",{className:"giveaway-badge",children:"Founders Edition"}),s.jsx("h3",{className:"giveaway-title",children:"The Arrowhead Founders Fly Box"}),s.jsx("p",{className:"giveaway-desc",children:"We're giving away a hand-curated fly box loaded with 50 premium handcrafted flies personally selected by our tier. To enter, follow us on Instagram and drop your email below. One winner will be chosen when we officially launch the shop or hit a number of followers."}),s.jsx("div",{className:"instagram-cta",children:s.jsxs("a",{href:"https://instagram.com/arrowheadflies",target:"_blank",rel:"noopener noreferrer",className:"btn-instagram",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),s.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),s.jsx("line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"})]}),"Step 1 — Follow @arrowheadflies on Instagram"]})}),s.jsx("br",{}),f?s.jsxs("div",{className:"success-message",children:[s.jsx(z0,{className:"success-icon",size:24}),s.jsx("p",{children:"You're in the Founders Giveaway! We'll announce the winner at launch."})]}):s.jsxs("form",{onSubmit:S,className:"giveaway-form",children:[s.jsxs("div",{className:"input-group",children:[s.jsx(M0,{className:"input-icon",size:20}),s.jsx("input",{type:"email",required:!0,placeholder:"Step 2 — Enter your email address...",className:"input-dark pl-10",value:r,onChange:v=>u(v.target.value)})]}),s.jsx("button",{type:"submit",className:"btn-primary w-full sm-auto",disabled:h,children:h?"Entering...":"Enter Giveaway"})]}),y&&s.jsx("p",{className:"text-red-500 text-sm mt-4 font-medium",children:y}),s.jsx("p",{className:"disclaimer",children:"No purchase necessary. We hate spam as much as you do."})]})})}),s.jsx("style",{children:`
        .giveaway-section {
          padding: 6rem 0;
          background-color: var(--bg-dark);
        }

        .giveaway-card {
          background-color: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .giveaway-badge {
          display: inline-block;
          background-color: var(--color-deep-red);
          border: 1px solid #632426;
          color: var(--color-cream);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }

        .giveaway-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .giveaway-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
        }

        .giveaway-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 450px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .giveaway-form {
            flex-direction: row;
            max-width: 550px;
          }
        }

        .input-group {
          position: relative;
          flex: 1;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        }

        .pl-10 {
          padding-left: 2.75rem !important;
        }

        .w-full {
          width: 100%;
        }

        @media (min-width: 640px) {
          .sm-auto {
            width: auto;
          }
        }

        .disclaimer {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .instagram-cta {
          margin-top: 1.5rem;
        }

        .btn-instagram {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.65rem 1.4rem;
          border-radius: 6px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
        }

        .btn-instagram:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .success-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.5rem;
          background-color: rgba(74, 222, 128, 0.05);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 4px;
          color: var(--accent-green);
          font-weight: 500;
        }
      `})]})}const V0="/assets/IMG_1358-Cy5B6371.jpg";function J0(){return s.jsxs("div",{className:"home-page",children:[s.jsx(X0,{}),s.jsx("section",{className:"home-section how-section",children:s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"home-eyebrow",children:"The System"}),s.jsx("h2",{className:"home-h2",children:"Three Steps. More Fish."}),s.jsxs("div",{className:"steps-row",children:[s.jsxs("div",{className:"step",children:[s.jsx(fr,{size:32,className:"step-icon"}),s.jsx("h3",{children:"1. Find Your Fly"}),s.jsx("p",{children:"Tell The Quiver where you're fishing and the month. Get a rig suggestion and the exact flies that'll produce."}),s.jsx($,{to:"/quiver",className:"step-link",children:"Open The Quiver →"})]}),s.jsx("div",{className:"step-divider"}),s.jsxs("div",{className:"step",children:[s.jsx(or,{size:32,className:"step-icon"}),s.jsx("h3",{children:"2. Understand the Hatch"}),s.jsx("p",{children:"Dig into any insect life stage — tactics, confidence ratings, and which flies match what the fish are seeing."}),s.jsx($,{to:"/hatch-guide",className:"step-link",children:"Explore the Hatch Guide →"})]}),s.jsx("div",{className:"step-divider"}),s.jsxs("div",{className:"step",children:[s.jsx($c,{size:32,className:"step-icon"}),s.jsx("h3",{children:"3. Grab a Pack"}),s.jsx("p",{children:"Every pack is hand-tied and curated for a specific fishery. No generic filler — just what you'll actually use."}),s.jsx($,{to:"/shop-packs",className:"step-link",children:"Shop Packs →"})]})]})]})}),s.jsx("section",{className:"home-section story-section",children:s.jsxs("div",{className:"container story-grid",children:[s.jsx("div",{className:"story-image-wrap",children:s.jsx("img",{src:V0,alt:"Fly fishing on the water",className:"story-img"})}),s.jsxs("div",{className:"story-content",children:[s.jsx("span",{className:"home-eyebrow",children:"The Arrowhead System"}),s.jsx("h2",{className:"home-h2",children:"Remove the Guesswork."}),s.jsx("p",{className:"home-body",children:'We built a data-driven workflow that takes you from "what should I throw?" to confident decisions in under a minute. Know your hatch. Know your rig. Fish more.'}),s.jsx($,{to:"/quiver",className:"btn-primary mt-6 inline-block",children:"Open The Quiver"})]})]})}),s.jsx(Z0,{}),s.jsx("style",{children:`
        .home-section {
          padding: 6rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .home-eyebrow {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-green);
          margin-bottom: 1rem;
        }

        .home-h2 {
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 3rem;
          line-height: 1.15;
        }

        .home-body {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 480px;
          margin: 0;
        }

        /* Steps */
        .steps-row {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .steps-row {
            flex-direction: row;
            align-items: flex-start;
            gap: 0;
          }
        }

        .step {
          flex: 1;
          padding: 0 2rem;
        }

        .step:first-child { padding-left: 0; }
        .step:last-child { padding-right: 0; }

        @media (max-width: 767px) {
          .step { padding: 0; }
        }

        .step-divider {
          width: 1px;
          background: rgba(255,255,255,0.08);
          align-self: stretch;
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .step-divider { width: 100%; height: 1px; }
        }

        .step-icon {
          color: var(--accent-green);
          margin-bottom: 1.25rem;
        }

        .step h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .step p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .step-link {
          color: var(--accent-green);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.03em;
        }

        .step-link:hover { text-decoration: underline; }

        /* Story */
        .story-section { background: rgba(255,255,255,0.01); }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .story-grid { grid-template-columns: 1fr 1fr; }
        }

        .story-image-wrap {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .story-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 4/3;
        }

        .story-content {
          display: flex;
          flex-direction: column;
        }

        .mt-6 { margin-top: 1.5rem; }
        .inline-block { display: inline-block; }
      `})]})}function Bl(r){return r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}const K0={"zebra-midge":{id:"zebra-midge",name:"Zebra Midge",type:"Nymph",sizes:"#18-22",description:"The gold standard tailwater midge. Thread body with a silver bead. Works year-round wherever trout live.",whenItWorks:"Any time, any season. When all else fails, tie on a Zebra Midge.",hatchCategory:"midges",hatchStage:"larva",colors:[{name:"Black",hex:"#000000"},{name:"Red",hex:"#8B0000"},{name:"Olive",hex:"#556B2F"},{name:"Cream",hex:"#FFFDD0"}]},"grey-scud":{id:"grey-scud",name:"Grey Scud",type:"Nymph",sizes:"#14-16",description:"Imitates the abundant scuds (freshwater shrimp) common in many tailwaters. Fish near the bottom.",whenItWorks:"Year-round on tailwaters, especially effective during generation flows.",hatchCategory:"midges",hatchStage:"larva"},rs2:{id:"rs2",name:"RS2",type:"Emerger",sizes:"#20-22",description:"Rim Chung's classic emerger. A must-have transitional pattern between nymph and adult.",whenItWorks:"During active hatches when fish are feeding in the film.",hatchCategory:"midges",hatchStage:"pupa",colors:[{name:"Gray",hex:"#808080"},{name:"Black",hex:"#000000"},{name:"Olive",hex:"#556B2F"}]},"ruby-midge":{id:"ruby-midge",name:"Ruby Midge",type:"Nymph",sizes:"#18-20",description:"Red-bodied midge larva with a tungsten bead. Stands out at depth.",whenItWorks:"Spring and fall when midge activity ramps up.",hatchCategory:"midges",hatchStage:"larva"},"crackback-scud":{id:"crackback-scud",name:"Crackback Scud",type:"Nymph",sizes:"#14-18",description:"Realistic scud pattern with a shellback that catches light.",whenItWorks:"Deadly during high water generation when scuds flush off the bottom.",hatchCategory:"midges",hatchStage:"larva"},"parachute-adams":{id:"parachute-adams",name:"Parachute Adams",type:"Dry",sizes:"#16-20",description:"The most versatile dry fly ever tied. Covers BWO, PMD, and general mayfly hatches.",whenItWorks:"Any time fish are rising. Use it when you're not sure what they're eating.",hatchCategory:"mayflies",hatchStage:"adult"},"griffiths-gnat":{id:"griffiths-gnat",name:"Griffith's Gnat",type:"Dry",sizes:"#18-22",description:"Peacock herl body with fine hackle. Imitates a cluster of adult midges on the surface.",whenItWorks:"Winter sipping risers. Great when fish are on midge clusters.",hatchCategory:"midges",hatchStage:"adult"},"woolly-bugger":{id:"woolly-bugger",name:"Woolly Bugger (Olive/Black)",type:"Streamer",sizes:"#8-10",description:"The Swiss Army knife of fly fishing. Imitates leeches, baitfish, big nymphs — everything.",whenItWorks:"Cold water, low light, after rain. Never leave home without one.",hatchCategory:"streamers",hatchStage:"baitfish"},"foam-spider-popper":{id:"foam-spider-popper",name:"Foam Spider / Popper",type:"Dry (Topwater)",sizes:"#10-12",description:"Creates a commotion on the surface that panfish and bass can't resist.",whenItWorks:"Warm evenings, May through September, near lily pads and weed edges."},"clouser-minnow":{id:"clouser-minnow",name:"Clouser Minnow",type:"Streamer",sizes:"#4-8",description:"The most effective freshwater and saltwater fly ever tied. Dives deep on the strip.",whenItWorks:"Any time you're targeting bass, pike, or trophy trout on the swing."},"damsel-nymph":{id:"damsel-nymph",name:"Damsel Nymph",type:"Nymph",sizes:"#12-14",description:"Slender olive nymph that does well slow-stripped near aquatic vegetation.",whenItWorks:"Late spring through summer in still or slow water."},"squirmy-worm":{id:"squirmy-worm",name:"Squirmy Worm",type:"Nymph",sizes:"#12",description:"Wiggling silicone tail that drives all trout absolutely crazy. Love it or hate it — it works.",whenItWorks:"During and after rain when real worms flush into the water."},"parachute-hopper":{id:"parachute-hopper",name:"Parachute Hopper",type:"Dry",sizes:"#10-12",description:"Realistic grasshopper pattern with a foam body and hi-vis parachute wing.",whenItWorks:"August and September on freestone streams near grassy banks."},"simi-seal-leech":{id:"simi-seal-leech",name:"Simi Seal Leech",type:"Streamer/Nymph",sizes:"#10-12",description:"Arizona staple. Long fibers pulse on every movement. Great dead-drifted or stripped.",whenItWorks:"Year-round in flowing water, especially during higher flows on Oak Creek."},"elk-hair-caddis":{id:"elk-hair-caddis",name:"Elk Hair Caddis",type:"Dry",sizes:"#14-18",description:"Classic elk hair wing over a dubbed body. The definitive caddis adult imitation.",whenItWorks:"Evening caddis hatches spring through fall. Skitter it on the surface.",colors:[{name:"Tan",hex:"#D2B48C"},{name:"Olive",hex:"#556B2F"},{name:"Black",hex:"#000000"}]},"bwo-emerger":{id:"bwo-emerger",name:"BWO Emerger",type:"Emerger",sizes:"#18-20",description:"Low riding emerger pattern matching the Blue Winged Olive mid-hatch.",whenItWorks:"Overcast, cool days in spring and fall when BWOs are hatching.",hatchCategory:"mayflies",hatchStage:"emerger"},"arizona-peacock-lady":{id:"arizona-peacock-lady",name:"Arizona Peacock Lady",type:"Nymph",sizes:"#14-16",description:"Peacock herl body with a hen feather wing. Local Arizona favorite that searches water well.",whenItWorks:"Year-round searching pattern when the hatch is unclear."},"colorado-green-drake":{id:"colorado-green-drake",name:"Colorado Green Drake",type:"Dry",sizes:"#10-12",description:"Celebrates the most dramatic and exciting hatch of Colorado summer. Large, sailwinged and unmistakable.",whenItWorks:"June and July on Poudre and other Colorado freestone streams.",hatchCategory:"mayflies",hatchStage:"adult"},"amys-ant":{id:"amys-ant",name:"Amy's Ant",type:"Dry",sizes:"#10-12",description:"Foam ant that rides high and floats all day. One of the most versatile terrestrials on Rocky Mountain streams.",whenItWorks:"Mid-summer through September near bankside vegetation."},frenchie:{id:"frenchie",name:"Frenchie",type:"Nymph",sizes:"#14-16",description:"Tungsten-beaded pheasant tail variant with a hotspot collar. Sinks fast and triggers strikes.",whenItWorks:"Year-round in tumbling pocket water.",hatchCategory:"mayflies",hatchStage:"nymph"},"rainbow-warrior":{id:"rainbow-warrior",name:"Rainbow Warrior",type:"Nymph",sizes:"#18-20",description:"Shiny, flashy, and deadly. Mimics midge pupae and small nymphs in bright conditions.",whenItWorks:"Overcast days and deep pools where flash triggers reaction strikes.",hatchCategory:"midges",hatchStage:"pupa"},"black-beauty-pupa":{id:"black-beauty-pupa",name:"Black Beauty Pupa",type:"Nymph",sizes:"#20-22",description:"Classic thread midge pupa. Dead simple, devastatingly effective.",whenItWorks:"Winter and early spring on tailwaters.",hatchCategory:"midges",hatchStage:"pupa"},"pats-rubber-legs":{id:"pats-rubber-legs",name:"Pat's Rubber Legs",type:"Nymph",sizes:"#4-8",description:"The definitive stonefly nymph for big western rivers. Tons of movement.",whenItWorks:"Year-round in the Gallatin, Madison, and other large western rivers.",hatchCategory:"stoneflies",hatchStage:"nymph",colors:[{name:"Black",hex:"#000000"},{name:"Brown",hex:"#5C4033"},{name:"Coffee/Black",hex:"#3B2F2F"}]},"chubby-chernobyl":{id:"chubby-chernobyl",name:"Chubby Chernobyl",type:"Dry",sizes:"#8-10",description:"Foam monster that imitates golden stoneflies and hoppers. Can float a heavy nymph dropper.",whenItWorks:"Late June through August on big western freestone rivers.",hatchCategory:"stoneflies",hatchStage:"adult",colors:[{name:"Golden",hex:"#FFD700"},{name:"Royal",hex:"#4169E1"},{name:"Purple",hex:"#800080"},{name:"Red",hex:"#FF0000"}]},"sparkle-dun-pmd":{id:"sparkle-dun-pmd",name:"Sparkle Dun PMD",type:"Dry",sizes:"#16-18",description:"Craig Mathews' design for the PMD hatch. The trailing shuck suggests a just-emerging dun.",whenItWorks:"PMD hatches in July on the Madison and slick-water sections of the Gallatin.",hatchCategory:"mayflies",hatchStage:"emerger"},"x-caddis":{id:"x-caddis",name:"X-Caddis",type:"Dry",sizes:"#14-16",description:"Z-lon trailing shuck imitates an emerging caddis. Simple and effective during heavy hatches.",whenItWorks:"The Mother's Day Caddis hatch in May on the Madison."},"san-juan-worm":{id:"san-juan-worm",name:"San Juan Worm",type:"Nymph",sizes:"#10-12",description:"Simple red or pink chenille worm — deadly during high water and after rain.",whenItWorks:"Spring run-off, after rain, or anytime the water is slightly elevated.",colors:[{name:"Red",hex:"#FF0000"},{name:"Pink",hex:"#FFC0CB"},{name:"Tan",hex:"#D2B48C"}]},"baetis-cripple":{id:"baetis-cripple",name:"Baetis Cripple",type:"Emerger",sizes:"#18-20",description:"Rides low in the film, imitating a struggling emerging BWO.",whenItWorks:"Fall BWO hatches on the Madison and tailwaters.",hatchCategory:"mayflies",hatchStage:"emerger"},"ray-charles":{id:"ray-charles",name:"Ray Charles",type:"Nymph",sizes:"#14-16",description:"Sowbug (aquatic isopod) imitation. Essential for the Madison River.",whenItWorks:"Year-round on sowbug-heavy tailwaters and spring creeks."},"pheasant-tail":{id:"pheasant-tail",name:"Pheasant Tail",type:"Nymph",sizes:"#14-18",description:"Frank Sawyer's masterpiece. Imitates virtually any small mayfly nymph.",whenItWorks:"Year-round wherever mayflies live.",hatchCategory:"mayflies",hatchStage:"nymph"},"guides-choice-hares-ear":{id:"guides-choice-hares-ear",name:"Guide's Choice Hare's Ear",type:"Nymph",sizes:"#12-14",description:"More loosely dubbed than a standard Hare's Ear — buggier and more lifelike in faster water.",whenItWorks:"Searching faster riffles and pocket water during spring and fall.",hatchCategory:"mayflies",hatchStage:"nymph"},"copper-john":{id:"copper-john",name:"Copper John",type:"Nymph",sizes:"#14-18",description:"Beadhead attractor nymph with a wire body. Gets down fast and catches virtually anything.",whenItWorks:"Year-round in faster water. Especially effective in spring and fall searching runs.",hatchCategory:"mayflies",hatchStage:"nymph"},"black-beauty":{id:"black-beauty",name:"Black Beauty",type:"Nymph",sizes:"#20-22",description:"Classic thread midge pupa. Dead simple and devastatingly effective on tailwaters.",whenItWorks:"Winter and early spring on tailwaters when midges dominate.",hatchCategory:"midges",hatchStage:"pupa"}},Wh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W0=Wh[new Date().getMonth()],vh={taneycomo:{name:"Lake Taneycomo (MO)",type:"Tailwater",packLabel:"Tailwater Confidence Pack",packId:"tailwater-confidence",getHatch:r=>["Jan","Feb","Dec"].includes(r)?"Midges, Scuds, Winter Baetis":["Mar","Apr","May"].includes(r)?"Heavy Midges, Blue Winged Olives, Shad (late spring)":["Jun","Jul","Aug"].includes(r)?"Sulphurs, Terrestrials, Scuds":"Fall Baetis, Midges, Crane Flies",getFlies:r=>["Jan","Feb","Dec"].includes(r)?[{name:"Zebra Midge",size:"#18-22",type:"Nymph",desc:"The ultimate winter tailwater confidence fly."},{name:"Grey Scud",size:"#14-16",type:"Nymph",desc:"Fish near the bottom in generation flows."},{name:"RS2",size:"#20-22",type:"Emerger",desc:"Perfect for finicky winter risers."}]:[{name:"Ruby Midge",size:"#18-20",type:"Nymph",desc:"Stands out in slightly deeper water."},{name:"Crackback Scud",size:"#14-18",type:"Nymph",desc:"Deadly during high water generation."},{name:"Parachute Adams",size:"#16-20",type:"Dry",desc:"Covers most sporadic dry fly action."}],getRig:()=>"Standard 9ft 5x leader with an indicator. Tie 18-24 inches of 6x tippet off the bend to your midge."},ozarks:{name:"Missouri Ozarks (Freestone)",type:"Freestone",packLabel:"Ozark Freestone Pack",packId:"ozark-freestone",getHatch:r=>["Jan","Feb","Mar"].includes(r)?"Winter Stoneflies, Blue Winged Olives":["Apr","May"].includes(r)?"Caddis, March Browns, Sulphurs":["Jun","Jul","Aug"].includes(r)?"Terrestrials (Hoppers, Beetles), Hexagenia":"October Caddis, Isonychia, BWO",getFlies:r=>["Jun","Jul","Aug"].includes(r)?[{name:"Chubby Chernobyl",size:"#10-14",type:"Dry",desc:"Big meal that floats all day. Great indicator bug."},{name:"Copper John",size:"#14-18",type:"Nymph",desc:"Gets down fast and catches everything."},{name:"Elk Hair Caddis",size:"#14-18",type:"Dry",desc:"Skitter across the surface at dusk."}]:[{name:"Pat's Rubber Legs",size:"#8-12",type:"Nymph",desc:"Imitates large stoneflies common in the Ozarks."},{name:"Pheasant Tail",size:"#14-18",type:"Nymph",desc:"Classic profile for BWO and general mayfly nymphs."},{name:"Griffith's Gnat",size:"#18-20",type:"Dry",desc:"When fish are sipping tiny bugs in the eddies."}],getRig:()=>"Dry-Dropper: Tie a large Chubby or terrestrial on 4x, drop a tungsten nymph 2 feet below on 5x."},kc:{name:"Kansas City Area (Urban Ponds)",type:"Stillwater / Warmwater",packLabel:"Urban Warmwater Pack",packId:"warmwater-urban",getHatch:r=>["Dec","Jan","Feb"].includes(r)?"Minimal insect activity (Winter Trout Stocking in some lakes)":["Mar","Apr","May"].includes(r)?"Chironomids, Damselflies transitioning":"Dragonflies, Damselflies, Topwater Frogs/Bugs (Bass & Panfish)",getFlies:r=>["Dec","Jan","Feb"].includes(r)?[{name:"Woolly Bugger",size:"#8-10",type:"Streamer",desc:"Perfect for stocked urban trout and sluggish bass."},{name:"Squirmy Worm",size:"#12",type:"Nymph",desc:"Stocked trout candy under a bobber."},{name:"Zebra Midge",size:"#16-18",type:"Nymph",desc:"When urban trout get pressured and picky."}]:[{name:"Foam Spider / Popper",size:"#10-12",type:"Dry (Topwater)",desc:"Irresistible to bluegill and pond bass."},{name:"Clouser Minnow",size:"#4-8",type:"Streamer",desc:"Strips well for aggressive largemouth."},{name:"Damsel Nymph",size:"#12-14",type:"Nymph",desc:"Slow stripped near weedlines."}],getRig:()=>"For warm water: 7.5ft 2x-4x leader stripping streamers. For winter trout: indicator with a small tungsten nymph suspended 3ft down."},"oak-creek":{name:"Oak Creek (AZ)",type:"Freestone",packLabel:"Southwest Freestone Pack",packId:"southwest-freestone",getHatch:r=>["Dec","Jan","Feb"].includes(r)?"Winter Midges, Tiny Baetis":["Mar","Apr","May"].includes(r)?"Caddis, Blue Winged Olives, Pale Morning Duns":["Jun","Jul","Aug"].includes(r)?"Hoppers, Ants, Beetles, Summer Caddis":"Fall Baetis, Midges, October Caddis",getFlies:r=>["Jun","Jul","Aug"].includes(r)?[{name:"Parachute Hopper",size:"#10-12",type:"Dry",desc:"Splash this down near the undercut banks."},{name:"Simi Seal Leech",size:"#10-12",type:"Streamer/Nymph",desc:"Arizona classic. Dead drift or strip."},{name:"Elk Hair Caddis",size:"#14-16",type:"Dry",desc:"Always keep one tied on in summer."}]:[{name:"Zebra Midge",size:"#18-22",type:"Nymph",desc:"Deep and slow for canyon trout."},{name:"BWO Emerger",size:"#18-20",type:"Emerger",desc:"Grease the leader when you see sipping."},{name:"Arizona Peacock Lady",size:"#14-16",type:"Nymph",desc:"A local favorite searching pattern."}],getRig:()=>"Dry-dropper works great most of the year. In winter, switch to a delicate indicator rig with 5x or 6x."},poudre:{name:"Cache la Poudre (CO)",type:"Freestone",packLabel:"Colorado High Country Pack",packId:"colorado-high-country",getHatch:r=>["Dec","Jan","Feb","Mar"].includes(r)?"Winter Midges (Minimal surface activity)":["Apr","May"].includes(r)?"Blue Winged Olives, Early Caddis (Watch for run-off)":["Jun","Jul","Aug"].includes(r)?"Green Drakes, PMDs, Yellow Sallies, Terrestrials":"Fall BWO, Midges, Terrestrials",getFlies:r=>["Jun","Jul","Aug"].includes(r)?[{name:"Colorado Green Drake",size:"#10-12",type:"Dry",desc:"The most anticipated hatch of the year."},{name:"Amy's Ant",size:"#10-12",type:"Dry",desc:"Floats high in pocket water and supports heavy nymphs."},{name:"Frenchie",size:"#14-16",type:"Nymph",desc:"Gets down fast in the tumbling freestone currents."}]:[{name:"Rainbow Warrior",size:"#18-20",type:"Nymph",desc:"Flashy attractor nymph for deep pools."},{name:"Parachute Adams",size:"#18-20",type:"Dry",desc:"Mimics the small BWO hatches."},{name:"Black Beauty",size:"#20-22",type:"Nymph",desc:"Crucial for the slow winter months."}],getRig:()=>"Heavy dry-dropper in the summer pocket water. Deep indicator nymphing in the winter pools."},"mt-gallatin-madison":{name:"Gallatin / Madison (MT)",type:"Freestone / Tailwater Mix",packLabel:"Montana Big River Pack",packId:"big-river-montana",getHatch:r=>["Dec","Jan","Feb","Mar"].includes(r)?"Midges, Winter Baetis":["Apr","May"].includes(r)?"Mother's Day Caddis, March Browns, BWO":["Jun","Jul","Aug"].includes(r)?"Salmonflies (June), Golden Stones, PMDs, Hoppers (Aug)":"Terrestrials, Fall Baetis (BWO), Midges",getFlies:r=>["Jun","Jul","Aug"].includes(r)?[{name:"Pat's Rubber Legs",size:"#4-8",type:"Nymph",desc:"The ultimate stonefly nymph."},{name:"Chubby Chernobyl",size:"#8-10",type:"Dry",desc:"Golden stone and hopper imitation."},{name:"Sparkle Dun PMD",size:"#16-18",type:"Dry",desc:"For technical slick water risers."}]:["Apr","May"].includes(r)?[{name:"X-Caddis",size:"#14-16",type:"Dry",desc:"Perfect for the famous Mother's Day hatch."},{name:"Guide's Choice Hare's Ear",size:"#12-14",type:"Nymph",desc:"Buggier than a standard hare's ear."},{name:"San Juan Worm",size:"#10-12",type:"Nymph",desc:"Essential during spring run-off spikes."}]:[{name:"Zebra Midge",size:"#18-20",type:"Nymph",desc:"Madison river staple."},{name:"Baetis Cripple",size:"#18-20",type:"Emerger",desc:"Fool picky fall risers."},{name:"Ray Charles",size:"#14-16",type:"Nymph",desc:"Sowbug imitation deadly on the Madison."}],getRig:()=>"Summer: Big foam dry trailing a heavy nymph 3ft down. Run-off/Winter: Indicator with a worm/stonefly and a small midge/baetis dropper."}};function bh(){const[r,u]=T.useState("taneycomo"),[f,o]=T.useState(W0),[h,m]=T.useState(!1),y=p=>{p.preventDefault(),m(!0)},E=vh[r],S=E.getHatch(f),v=E.getFlies(f),C=E.getRig();return s.jsxs("div",{className:"tool-page",children:[s.jsxs("div",{className:"container tool-container",children:[s.jsxs("header",{className:"page-header text-center mx-auto",children:[s.jsx("span",{className:"brand-badge",children:"DECISION TOOL"}),s.jsx("h1",{className:"brand-headline",children:"THE QUIVER"}),s.jsx("p",{className:"brand-subheadline",children:"Select your location and the time of year to get pinpoint accuracy on what's hatching and exactly what to tie on."})]}),s.jsxs("div",{className:"calendar-bar",children:[s.jsx("div",{className:"months-grid",children:Wh.map(p=>s.jsx("button",{type:"button",className:`month-btn ${f===p?"active":""}`,onClick:()=>{o(p),m(!1)},children:p},p))}),s.jsx("div",{className:"timeline-preview",children:s.jsxs("span",{className:"timeline-badge",children:[s.jsx(or,{size:13,style:{display:"inline",marginRight:"5px",verticalAlign:"middle"}}),s.jsxs("strong",{children:[f," Hatch Activity:"]})," ",S]})})]}),s.jsxs("form",{className:"tool-form",onSubmit:y,children:[s.jsxs("div",{className:"form-group flex-1",children:[s.jsxs("label",{children:[s.jsx(R0,{size:13,style:{display:"inline",marginRight:"4px",verticalAlign:"middle"}}),"Fishery / Region"]}),s.jsx("select",{value:r,onChange:p=>{u(p.target.value),m(!1)},children:Object.entries(vh).map(([p,k])=>s.jsx("option",{value:p,children:k.name},p))})]}),s.jsxs("button",{type:"submit",className:"btn-primary submit-btn",children:[s.jsx(fr,{size:17,style:{display:"inline",marginRight:"7px",verticalAlign:"middle"}}),"Equip My Setup"]})]}),h&&s.jsxs("div",{className:"results-section",children:[s.jsx("div",{className:"results-meta-header",children:s.jsxs("div",{children:[s.jsxs("h2",{className:"results-title",children:[f," at ",E.name]}),s.jsx("p",{className:"results-type",children:E.type})]})}),s.jsxs("div",{className:"hatch-intel-card",children:[s.jsx(or,{className:"intel-icon",size:22}),s.jsxs("div",{children:[s.jsx("h3",{children:"Hatch Intelligence"}),s.jsx("p",{children:S})]})]}),s.jsxs("div",{className:"rig-card",children:[s.jsx("h3",{children:"Recommended Rig"}),s.jsx("p",{children:C})]}),s.jsx("h3",{className:"flies-title",children:"The Arrows — High Confidence Flies"}),s.jsx("p",{className:"flies-subtitle",children:"Tap any fly to learn more and see the connected hatch guide."}),s.jsx("div",{className:"flies-grid",children:v.map((p,k)=>{const H=Bl(p.name);return s.jsxs($,{to:`/fly/${H}?from=quiver`,className:"fly-card",children:[s.jsx("div",{className:"fly-badge",children:p.type}),s.jsx("h4",{children:p.name}),s.jsxs("p",{className:"fly-size",children:["Size: ",p.size]}),s.jsx("p",{className:"fly-desc",children:p.desc}),s.jsx("span",{className:"fly-learn-more",children:"Learn More →"})]},k)})}),s.jsxs("div",{className:"pack-upsell text-center mt-8",children:[s.jsx("h3",{children:"Need these flies?"}),s.jsx("p",{className:"mb-4",children:"Load your box with curated patterns specifically designed for this fishery."}),s.jsxs($,{to:`/shop-packs#${E.packId}`,className:"btn-secondary",children:["Shop the ",E.packLabel]})]}),s.jsxs("div",{className:"hatch-crosslink",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Want to go deeper?"}),s.jsx("p",{children:"The Hatch Guide breaks down every insect life stage with confidence ratings, specific tactics, and rig diagrams."})]}),s.jsx($,{to:"/hatch-guide",className:"btn-secondary btn-sm",children:"Open Hatch Guide"})]})]})]}),s.jsx("style",{children:`
        .tool-page {
          padding: 6rem 0 8rem;
          min-height: calc(100vh - 80px);
        }

        .page-header {
          padding-top: 4rem;
          margin-bottom: 4rem;
          max-width: 720px;
        }

        .page-header.text-center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .brand-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-green);
          margin-bottom: 1.25rem;
          background: rgba(74, 222, 128, 0.08);
          padding: 0.35rem 0.8rem;
          border-radius: 4px;
        }

        .brand-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .brand-subheadline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        /* Month grid — wraps cleanly, no scroll */
        .calendar-bar {
          background: var(--bg-panel);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem 0;
          margin-bottom: 3rem;
        }

        .months-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          max-width: 700px;
          margin: 0 auto 1.25rem;
          padding: 0 1rem;
        }

        .month-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.45rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          font-family: inherit;
        }

        .month-btn:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.06);
        }

        .month-btn.active {
          background: var(--color-deep-red, #7b2226);
          color: #f5f0e8;
          border-color: rgba(255,255,255,0.1);
        }

        .timeline-preview {
          text-align: center;
          padding: 0 1rem;
          animation: fade-in 0.3s ease;
        }

        .timeline-badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.08);
          color: var(--accent-green);
          padding: 0.45rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(74, 222, 128, 0.18);
          max-width: 100%;
        }

        /* Form */
        .tool-form {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto 4rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .tool-form {
            flex-direction: row;
            align-items: flex-end;
          }
        }

        .form-group.flex-1 { flex: 1; }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
        }

        .form-group select {
          width: 100%;
          padding: 0.875rem 1rem;
          background: #0f1214;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #e8e4dd;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
          cursor: pointer;
          appearance: auto;
        }

        .form-group select:focus {
          border-color: var(--color-deep-red, #7b2226);
        }

        .submit-btn {
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .submit-btn {
            height: 52px;
            padding: 0 2rem;
          }
        }

        /* Results */
        .results-section {
          max-width: 800px;
          margin: 0 auto;
          animation: fade-in 0.4s ease-out;
        }

        .results-meta-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .results-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .results-type {
          color: var(--accent-green);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .hatch-intel-card {
          display: flex;
          gap: 1.25rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .intel-icon {
          color: var(--text-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .hatch-intel-card h3 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
          font-weight: 700;
        }

        .hatch-intel-card p {
          color: var(--text-primary);
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
        }

        .rig-card {
          background: rgba(74, 222, 128, 0.04);
          border: 1px solid rgba(74, 222, 128, 0.18);
          padding: 1.5rem;
          border-left: 4px solid var(--accent-green);
          border-radius: 4px;
          margin-bottom: 3rem;
        }

        .rig-card h3 {
          color: var(--accent-green);
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
        }

        .rig-card p { margin: 0; line-height: 1.7; }

        .flies-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .flies-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .flies-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .flies-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Fly card — now a Link */
        .fly-card {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.5rem;
          position: relative;
          transition: transform 0.2s, border-color 0.2s;
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .fly-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
        }

        .fly-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(255,255,255,0.08);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .fly-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 0.4rem;
          padding-right: 3rem;
          color: var(--text-primary);
        }

        .fly-size {
          color: var(--accent-green);
          font-size: 0.8rem;
          margin: 0 0 0.75rem;
          font-weight: 600;
        }

        .fly-desc {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0 0 1rem;
        }

        .fly-learn-more {
          font-size: 0.75rem;
          color: var(--accent-green);
          font-weight: 600;
          letter-spacing: 0.05em;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .fly-card:hover .fly-learn-more { opacity: 1; }

        .pack-upsell {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          padding: 3rem 2rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }

        .pack-upsell h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .hatch-crosslink {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .hatch-crosslink h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .hatch-crosslink p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
          max-width: 480px;
        }

        .btn-sm {
          font-size: 0.85rem;
          padding: 0.6rem 1.25rem;
          white-space: nowrap;
        }

        .text-center { text-align: center; }
        .mt-8 { margin-top: 2rem; }
        .mb-4 { margin-bottom: 1rem; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}const F0=[{id:"tailwater-confidence",name:"Tailwater Confidence Pack",tagline:"The essential midge & scud system for cold, technical tailwaters.",problem:"Picky fish in cold, clear, technical tailwater flows — you need small, precise, and proven.",whenToUse:"Year-round on tailwaters like Lake Taneycomo and the White River. Most critical Nov–Mar.",flies:[{name:"Zebra Midge",qty:4,sizes:"#18-22"},{name:"Black Beauty",qty:4,sizes:"#20-24"},{name:"RS2",qty:3,sizes:"#18-22"},{name:"Mercury Midge",qty:3,sizes:"#20-24"},{name:"Grey Scud",qty:4,sizes:"#14-16"},{name:"Griffith's Gnat",qty:3,sizes:"#18-22"}],rigging:"Standard 9ft 5x leader, small indicator, tie 18-22 inches of 6x tippet to a midge. Swap to dry-dropper for rising fish.",price:"$42",smallPrice:"$24",badge:"Bestseller",relatedHatch:{label:"Midge Hatch Guide",path:"/hatch-guide/midges"}},{id:"ozark-freestone",name:"Ozark Freestone Pack",tagline:"Attractor dries and workhorse nymphs for Ozark mountain streams.",problem:"Needing proven searching patterns that reliably move fish in clear, medium-pace freestone rivers.",whenToUse:"Spring through fall on Ozark streams. Peak effectiveness April–September.",flies:[{name:"Pat's Rubber Legs",qty:3,sizes:"#8-12"},{name:"Pheasant Tail",qty:4,sizes:"#14-18"},{name:"Elk Hair Caddis",qty:3,sizes:"#14-18"},{name:"Griffith's Gnat",qty:2,sizes:"#18-20"},{name:"Amy's Ant",qty:3,sizes:"#12-14"},{name:"Chubby Chernobyl",qty:2,sizes:"#10-12"}],rigging:"Dry-dropper: large Chubby or Caddis up top (4x), Pat's Rubber Legs or PT nymph 24 inches below on 5x.",price:"$45",smallPrice:"$26",badge:null,relatedHatch:{label:"Caddis & Stonefly Guide",path:"/hatch-guide/caddis"}},{id:"hopper-dropper",name:"Hopper-Dropper Pack",tagline:"High summer terrestrial fishing at its finest.",problem:"August bank fishing when fish ignore conventional nymphs and hatches have slowed.",whenToUse:"July–September on meadow streams and freestone rivers near grassy banks.",flies:[{name:"Chubby Chernobyl",qty:3,sizes:"#8-12"},{name:"Parachute Hopper",qty:3,sizes:"#8-12"},{name:"Amy's Ant",qty:3,sizes:"#12-14"},{name:"Black Foam Beetle",qty:3,sizes:"#12-16"},{name:"Frenchie",qty:3,sizes:"#14-16"}],rigging:"Hopper on 3x within 2ft of the bank. 20-24 inch dropper of Frenchie or bead head below. Slap the fly down.",price:"$38",smallPrice:"$22",badge:"Top Summer Pick",relatedHatch:{label:"Terrestrials Hatch Guide",path:"/hatch-guide/terrestrials"}},{id:"big-river-montana",name:"Montana Big River Pack",tagline:"Stoneflies and salmonflies for large western rivers.",problem:"Big water, big fish, and the most explosive dry fly hatches of the year.",whenToUse:"May–August on Gallatin, Madison, and other large western freestone rivers.",flies:[{name:"Pat's Rubber Legs",qty:4,sizes:"#4-8"},{name:"Chubby Chernobyl",qty:3,sizes:"#8-10"},{name:"Sparkle Dun PMD",qty:3,sizes:"#16-18"},{name:"X-Caddis",qty:3,sizes:"#14-16"},{name:"San Juan Worm",qty:3,sizes:"#10-12"},{name:"Zebra Midge",qty:2,sizes:"#18-20"}],rigging:"Summer: Big foam dry 3ft above a heavy stonefly nymph. Run-off: Deep indicator with worm + midge dropper.",price:"$52",smallPrice:"$28",badge:null,relatedHatch:{label:"Stonefly Hatch Guide",path:"/hatch-guide/stoneflies"}},{id:"colorado-high-country",name:"Colorado High Country Pack",tagline:"Green Drakes, PMDs and pocket water patterns for Colorado freestone.",problem:"Technical Rocky Mountain hatches demand precise imitations and adaptable searching patterns.",whenToUse:"April–October on the Poudre, Frying Pan, and surrounding Colorado freestone streams.",flies:[{name:"Colorado Green Drake",qty:2,sizes:"#10-12"},{name:"Amy's Ant",qty:3,sizes:"#10-12"},{name:"Frenchie",qty:3,sizes:"#14-16"},{name:"Rainbow Warrior",qty:3,sizes:"#18-20"},{name:"Parachute Adams",qty:3,sizes:"#16-20"},{name:"Black Beauty",qty:3,sizes:"#20-22"}],rigging:"Summer pocket water: heavy dry-dropper. Winter/spring: deep indicator with Frenchie + Rainbow Warrior.",price:"$48",smallPrice:"$26",badge:null,relatedHatch:{label:"Mayfly Hatch Guide",path:"/hatch-guide/mayflies"}},{id:"southwest-freestone",name:"Southwest Freestone Pack",tagline:"Canyon trout patterns for Oak Creek and Arizona freestone streams.",problem:"Southwest fisheries need year-round midge patterns and aggressive summer terrestrials.",whenToUse:"Year-round on Oak Creek (AZ) and similar desert canyon streams.",flies:[{name:"Parachute Hopper",qty:3,sizes:"#10-12"},{name:"Elk Hair Caddis",qty:3,sizes:"#14-16"},{name:"Zebra Midge",qty:4,sizes:"#18-22"},{name:"BWO Emerger",qty:3,sizes:"#18-20"},{name:"Amy's Ant",qty:3,sizes:"#10-12"}],rigging:"Dry-dropper year-round. In winter, switch to a delicate 5x-6x indicator rig for midge pupae.",price:"$40",smallPrice:"$22",badge:null,relatedHatch:{label:"Caddis Hatch Guide",path:"/hatch-guide/caddis"}},{id:"warmwater-urban",name:"Urban Warmwater Pack",tagline:"Bass, bluegill and pond trout from the city.",problem:"Urban stillwater and warmwater species require completely different fly selection than trout streams.",whenToUse:"Year-round for KC area ponds and warmwater fisheries. Stocked trout Dec–Feb, warmwater Mar–Nov.",flies:[{name:"Woolly Bugger",qty:3,sizes:"#8-10"},{name:"Clouser Minnow",qty:3,sizes:"#4-8"},{name:"Foam Spider / Popper",qty:3,sizes:"#10-12"},{name:"Damsel Nymph",qty:3,sizes:"#12-14"},{name:"Squirmy Worm",qty:3,sizes:"#12"}],rigging:"Streamers: 7.5ft 3x leader stripped aggressively near structure. Topwater: floating line with 9ft 2x leader.",price:"$38",smallPrice:"$20",badge:null,relatedHatch:{label:"Streamers Guide",path:"/hatch-guide/streamers"}}],$0=[{name:"Zebra Midge",sizes:"#18-22",type:"Nymph",price:2.5},{name:"RS2",sizes:"#18-22",type:"Emerger",price:2.5},{name:"Griffith's Gnat",sizes:"#18-22",type:"Dry",price:2.5},{name:"Pat's Rubber Legs",sizes:"#8-12",type:"Nymph",price:3},{name:"Elk Hair Caddis",sizes:"#14-18",type:"Dry",price:2.5},{name:"Chubby Chernobyl",sizes:"#8-12",type:"Dry",price:3.5},{name:"Parachute Adams",sizes:"#14-20",type:"Dry",price:2.5},{name:"Woolly Bugger",sizes:"#6-10",type:"Streamer",price:3},{name:"Amy's Ant",sizes:"#10-14",type:"Dry",price:2.5},{name:"Frenchie",sizes:"#14-18",type:"Nymph",price:2.5},{name:"X-Caddis",sizes:"#14-16",type:"Dry",price:2.5},{name:"San Juan Worm",sizes:"#10-12",type:"Nymph",price:2}];function I0(r){const u=r.reduce((y,E)=>y+E.qty*E.unitPrice,0),f=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),o=r.map(y=>`
    <tr>
      <td>${y.name}${y.sizes?` (${y.sizes})`:""}${y.packLabel?`<br/><small>${y.packLabel}</small>`:""}</td>
      <td style="text-align:center">${y.qty}</td>
      <td style="text-align:right">$${y.unitPrice.toFixed(2)}</td>
      <td style="text-align:right">$${(y.qty*y.unitPrice).toFixed(2)}</td>
    </tr>
  `).join(""),h=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Arrowhead Flies — Order Form</title>
<style>
  body { font-family: Georgia, serif; max-width: 700px; margin: 40px auto; color: #1a1a1a; }
  h1 { font-size: 2rem; margin-bottom: 0; }
  .sub { color: #555; margin-top: 4px; font-size: 0.9rem; }
  .date { color: #777; font-size: 0.85rem; margin-bottom: 2rem; }
  table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
  th { text-align: left; border-bottom: 2px solid #1a1a1a; padding: 6px 8px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; }
  td { padding: 10px 8px; border-bottom: 1px solid #e0e0e0; font-size: 0.95rem; vertical-align: top; }
  td small { color: #777; font-size: 0.8rem; }
  .total-row td { font-weight: bold; font-size: 1.05rem; border-top: 2px solid #1a1a1a; border-bottom: none; }
  .footer { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #ccc; font-size: 0.85rem; color: #555; line-height: 1.7; }
  .footer a { color: #1a1a1a; }
  h2 { font-size: 1.1rem; font-weight: normal; color: #444; margin: 2rem 0 0.5rem; }
  @media print { body { margin: 20px; } }
</style>
</head>
<body>
  <h1>Arrowhead Flies</h1>
  <p class="sub">Hand-tied to order. Know What to Throw.</p>
  <p class="date">Order generated: ${f}</p>

  <h2>Order Summary</h2>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th style="text-align:center">Qty</th>
        <th style="text-align:right">Unit Price</th>
        <th style="text-align:right">Total</th>
      </tr>
    </thead>
    <tbody>
      ${o}
      <tr class="total-row">
        <td colspan="3">Order Total</td>
        <td style="text-align:right">$${u.toFixed(2)}</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    <p><strong>How to place your order:</strong></p>
    <ol>
      <li>Print or save this page as a PDF (File → Print → Save as PDF).</li>
      <li>Email it to <a href="mailto:arrowheadflies@gmail.com">arrowheadflies@gmail.com</a> with the subject line "Fly Order".</li>
      <li>Allow 3-5 business days for hand-tying and shipping.</li>
    </ol>
    <p>Questions? <a href="mailto:arrowheadflies@gmail.com">arrowheadflies@gmail.com</a> | arrowheadflies.com</p>
  </div>
</body>
</html>`,m=window.open("","_blank");m&&(m.document.write(h),m.document.close(),setTimeout(()=>m.print(),400))}function P0({pack:r,onAddPack:u}){const[f,o]=T.useState(!1),[h,m]=T.useState(!1),y=parseFloat(h?r.smallPrice.replace("$",""):r.price.replace("$","")),E=h?"Mini Sampler":"Full Pack";return s.jsxs("div",{id:r.id,className:"pack-card",children:[s.jsxs("div",{className:"pack-image-placeholder",children:[s.jsx("div",{className:"pack-texture"}),s.jsx($c,{className:"pack-placeholder-icon",size:44}),r.badge&&s.jsx("span",{className:"pack-badge",children:r.badge})]}),s.jsxs("div",{className:"pack-details",children:[s.jsxs("div",{className:"pack-top",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"pack-name",children:r.name}),s.jsx("p",{className:"pack-tagline",children:r.tagline})]}),s.jsxs("div",{className:"pack-prices",children:[s.jsxs("div",{className:"price-block",children:[s.jsx("span",{className:"price-label",children:"Full Pack"}),s.jsx("span",{className:"price-full",children:r.price})]}),s.jsx("div",{className:"price-divider"}),s.jsxs("div",{className:"price-block",children:[s.jsx("span",{className:"price-label",children:"Mini Sampler"}),s.jsx("span",{className:"price-mini",children:r.smallPrice})]})]})]}),s.jsxs("div",{className:"pack-section",children:[s.jsxs("h3",{children:[s.jsx(B0,{size:14,className:"inline-icon"})," Problem Solved"]}),s.jsx("p",{children:r.problem})]}),s.jsxs("div",{className:"pack-section",children:[s.jsx("h3",{children:"When to Use"}),s.jsx("p",{children:r.whenToUse})]}),s.jsxs("button",{className:"expand-toggle",onClick:()=>o(S=>!S),children:[f?s.jsx(Zh,{size:16}):s.jsx(Xh,{size:16}),f?"Hide":"See"," What's Included (",r.flies.length," patterns)"]}),f&&s.jsx("div",{className:"flies-list",children:r.flies.map((S,v)=>s.jsxs($,{to:`/fly/${Bl(S.name)}`,className:"fly-list-item",children:[s.jsx("span",{className:"fly-list-name",children:S.name}),s.jsxs("span",{className:"fly-list-meta",children:[S.qty,"× ",S.sizes]}),s.jsx("span",{className:"fly-list-arrow",children:"→"})]},v))}),s.jsxs("div",{className:"pack-section",children:[s.jsx("h3",{children:"How to Rig"}),s.jsx("p",{className:"rig-text",children:r.rigging})]}),r.relatedHatch&&s.jsxs("div",{className:"pack-hatch-link",children:[s.jsx(T0,{size:14,className:"inline-icon"}),s.jsx($,{to:r.relatedHatch.path,className:"hatch-link-text",children:r.relatedHatch.label})]}),s.jsxs("div",{className:"order-control-row",children:[s.jsxs("div",{className:"size-toggle",children:[s.jsxs("button",{className:`size-opt ${h?"":"active"}`,onClick:()=>m(!1),children:["Full — ",r.price]}),s.jsxs("button",{className:`size-opt ${h?"active":""}`,onClick:()=>m(!0),children:["Mini — ",r.smallPrice]})]}),s.jsxs("button",{className:"btn-primary add-btn",onClick:()=>u({name:r.name,qty:1,unitPrice:y,packLabel:E}),children:[s.jsx(Kh,{size:14,style:{display:"inline",marginRight:"6px"}}),"Add to Order"]})]}),s.jsxs("p",{className:"order-note",children:["Hand-tied to order. Email ",s.jsx("a",{href:"mailto:arrowheadflies@gmail.com",children:"arrowheadflies@gmail.com"})," or use the order form below."]})]})]})}function e1({fly:r,selected:u,qty:f,onToggle:o,onQty:h}){return s.jsxs("div",{className:`ifly-row ${u?"selected":""}`,children:[s.jsxs("label",{className:"ifly-checkbox-label",children:[s.jsx("input",{type:"checkbox",checked:u,onChange:o,className:"ifly-checkbox"}),s.jsx($,{to:`/fly/${Bl(r.name)}`,className:"ifly-name",onClick:m=>u&&m.preventDefault(),children:r.name})]}),s.jsxs("div",{className:"ifly-right-group",children:[s.jsx("span",{className:"ifly-type-badge",children:r.type}),s.jsx("span",{className:"ifly-size",children:r.sizes}),s.jsxs("span",{className:"ifly-price",children:["$",r.price.toFixed(2),"/fly"]}),u&&s.jsxs("div",{className:"ifly-qty-wrap",children:[s.jsx("button",{onClick:()=>h(Math.max(1,f-1)),children:"−"}),s.jsx("span",{children:f}),s.jsx("button",{onClick:()=>h(f+1),children:"+"})]})]})]})}function t1(){const r=sa(),[u,f]=T.useState([]),[o,h]=T.useState({});T.useEffect(()=>{if(r.hash){const p=r.hash.replace("#","");setTimeout(()=>{document.getElementById(p)?.scrollIntoView({behavior:"smooth",block:"start"})},100)}},[r.hash]);const m=p=>{f(k=>{const H=k.findIndex(U=>U.name===p.name&&U.packLabel===p.packLabel);if(H>=0){const U=[...k];return U[H]={...U[H],qty:U[H].qty+1},U}return[...k,p]})},y=p=>{const k=p.name;h(H=>{const U=H[k];return U?.selected?(f(B=>B.filter(G=>G.name!==k)),{...H,[k]:{selected:!1,qty:1}}):(f(B=>B.find(V=>V.name===k)?B:[...B,{name:k,qty:U?.qty||1,unitPrice:p.price,sizes:p.sizes}]),{...H,[k]:{selected:!0,qty:U?.qty||1}})})},E=(p,k)=>{const H=p.name;h(U=>({...U,[H]:{...U[H],qty:k}})),f(U=>U.map(B=>B.name===H?{...B,qty:k}:B))},S=p=>{const k=u[p];f(H=>H.filter((U,B)=>B!==p)),h(H=>H[k.name]?{...H,[k.name]:{...H[k.name],selected:!1}}:H)},v=u.reduce((p,k)=>p+k.qty*k.unitPrice,0),C=u.length>0;return s.jsxs("div",{className:"packs-page",children:[s.jsxs("div",{className:"container packs-container",children:[s.jsxs("header",{className:"page-header",children:[s.jsx("span",{className:"brand-badge",children:"CONVERSION SYSTEM"}),s.jsx("h1",{className:"brand-headline",children:"CONFIDENCE PACKS"}),s.jsx("p",{className:"brand-subheadline",children:"Stop buying random flies. Every pack is curated for a specific fishery and situation — hand-tied to order. Select your pack or individual flies below to build your order form."}),s.jsx("div",{className:"header-ctas",children:s.jsx($,{to:"/quiver",className:"btn-primary",children:"Not sure which pack? Use The Quiver"})})]}),s.jsxs("div",{className:"order-summary-section order-summary-top",children:[s.jsxs("div",{className:"order-summary-header",children:[s.jsxs("h2",{children:[s.jsx(Kh,{size:20,style:{display:"inline",marginRight:"8px",verticalAlign:"middle"}}),"Your Order"]}),C&&s.jsxs("span",{className:"order-total-badge",children:["$",v.toFixed(2)]})]}),C?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"order-items-list",children:u.map((p,k)=>s.jsxs("div",{className:"order-item-row",children:[s.jsxs("div",{className:"oi-info",children:[s.jsx("span",{className:"oi-name",children:p.name}),p.packLabel&&s.jsx("span",{className:"oi-pack-label",children:p.packLabel}),p.sizes&&s.jsx("span",{className:"oi-sizes",children:p.sizes})]}),s.jsxs("div",{className:"oi-right",children:[s.jsxs("div",{className:"oi-qty-wrap",children:[s.jsx("button",{onClick:()=>{p.qty<=1?S(k):f(H=>H.map((U,B)=>B===k?{...U,qty:U.qty-1}:U))},children:"−"}),s.jsx("span",{children:p.qty}),s.jsx("button",{onClick:()=>f(H=>H.map((U,B)=>B===k?{...U,qty:U.qty+1}:U)),children:"+"})]}),s.jsxs("span",{className:"oi-subtotal",children:["$",(p.qty*p.unitPrice).toFixed(2)]}),s.jsx("button",{className:"oi-remove",onClick:()=>S(k),children:s.jsx(Y0,{size:14})})]})]},k))}),s.jsxs("div",{className:"order-footer",children:[s.jsxs("div",{className:"order-total-line",children:[s.jsx("span",{children:"Estimated Total"}),s.jsxs("strong",{children:["$",v.toFixed(2)]})]}),s.jsx("p",{className:"order-disclaimer",children:"Flies are hand-tied to order. Ship cost calculated at fulfillment. Email order is free — you'll hear back with a final invoice before anything ships."}),s.jsxs("button",{className:"btn-primary generate-btn",onClick:()=>I0(u),children:[s.jsx(N0,{size:16,style:{display:"inline",marginRight:"8px"}}),"Generate Order PDF"]}),s.jsxs("p",{className:"pdf-help",children:['A print dialog will open. Choose "Save as PDF" then email it to ',s.jsx("a",{href:"mailto:arrowheadflies@gmail.com",children:"arrowheadflies@gmail.com"}),"."]})]})]}):s.jsx("div",{className:"order-empty",children:s.jsx("p",{children:"No items selected yet. Add a pack below or check individual flies."})})]}),s.jsx("div",{className:"packs-grid",children:F0.map(p=>s.jsx(P0,{pack:p,onAddPack:m},p.id))}),s.jsxs("div",{className:"individual-section",children:[s.jsxs("div",{className:"individual-header",children:[s.jsx("h2",{children:"Individual Flies"}),s.jsx("p",{children:"Select what you need and set the quantity. Check any fly to add it to your order, then generate the PDF below."})]}),s.jsx("div",{className:"ifly-table",children:$0.map(p=>{const k=o[p.name]||{selected:!1,qty:1};return s.jsx(e1,{fly:p,selected:k.selected,qty:k.qty,onToggle:()=>y(p),onQty:H=>E(p,H)},p.name)})})]})]}),s.jsx("style",{children:`
        .packs-page {
          padding: 6rem 0 8rem;
          min-height: calc(100vh - 80px);
        }

        .page-header {
          padding-top: 4rem;
          margin-bottom: 4rem;
          max-width: 720px;
        }

        .brand-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-green);
          margin-bottom: 1.25rem;
          background: rgba(74, 222, 128, 0.08);
          padding: 0.35rem 0.8rem;
          border-radius: 4px;
        }

        .brand-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .brand-subheadline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .header-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

        /* Pack grid */
        .packs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        @media (min-width: 900px) {
          .packs-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .pack-card {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, border-color 0.2s;
        }

        .pack-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
        }

        .pack-image-placeholder {
          aspect-ratio: 16/7;
          background: linear-gradient(135deg, #0f1214 0%, #1a1c1e 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-color);
        }

        .pack-texture {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 60%);
        }

        .pack-placeholder-icon { color: rgba(255,255,255,0.07); z-index: 1; }

        .pack-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--color-deep-red);
          color: white;
          padding: 0.3rem 0.75rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border-radius: 4px;
          z-index: 2;
        }

        .pack-details {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1.25rem;
        }

        .pack-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pack-name { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.35rem; line-height: 1.2; }
        .pack-tagline { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4; margin: 0; max-width: 300px; }

        .pack-prices { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
        .price-block { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
        .price-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); }
        .price-full { font-size: 1.4rem; font-weight: 700; color: var(--accent-green); }
        .price-mini { font-size: 1.2rem; font-weight: 700; color: var(--text-secondary); }
        .price-divider { width: 1px; height: 36px; background: var(--border-color); }

        .pack-section h3 {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .pack-section p { color: var(--text-primary); font-size: 0.92rem; line-height: 1.6; margin: 0; }
        .inline-icon { display: inline; vertical-align: middle; color: var(--accent-green); }

        .expand-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }

        .expand-toggle:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.2); }

        .flies-list { display: flex; flex-direction: column; gap: 0.25rem; }

        .fly-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0.75rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 5px;
          text-decoration: none;
          transition: all 0.15s;
        }

        .fly-list-item:hover { background: rgba(255,255,255,0.05); }
        .fly-list-name { color: var(--text-primary); font-size: 0.88rem; font-weight: 500; }
        .fly-list-meta { color: var(--text-secondary); font-size: 0.78rem; }
        .fly-list-arrow { color: var(--accent-green); font-size: 0.8rem; }

        .rig-text {
          background: rgba(74, 222, 128, 0.04);
          border-left: 3px solid rgba(74, 222, 128, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 0 4px 4px 0;
          font-size: 0.88rem !important;
          line-height: 1.6 !important;
        }

        .pack-hatch-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
        }

        .hatch-link-text {
          color: var(--accent-green);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.03em;
        }

        .hatch-link-text:hover { text-decoration: underline; }

        /* Order control row */
        .order-control-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 1.25rem;
        }

        .size-toggle {
          display: flex;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
        }

        .size-opt {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 0.82rem;
          padding: 0.55rem 1rem;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .size-opt.active {
          background: rgba(255,255,255,0.07);
          color: var(--text-primary);
          font-weight: 600;
        }

        .add-btn { flex: 1; }

        .order-note {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin: 0;
          opacity: 0.7;
          line-height: 1.5;
        }

        .order-note a { color: var(--accent-green); text-decoration: none; }

        /* Individual flies table */
        .individual-section {
          border-top: 1px solid var(--border-color);
          padding-top: 4rem;
          margin-bottom: 4rem;
        }

        .individual-header { margin-bottom: 2rem; max-width: 600px; }
        .individual-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 0.6rem; }
        .individual-header p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0; }

        .ifly-table {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .ifly-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.875rem 1rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 6px;
          transition: all 0.15s;
          flex-wrap: wrap;
        }

        .ifly-row.selected {
          background: rgba(74, 222, 128, 0.05);
          border-color: rgba(74, 222, 128, 0.2);
        }

        .ifly-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          flex: 1;
          min-width: 0;
        }

        .ifly-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: var(--accent-green);
          flex-shrink: 0;
        }

        .ifly-name {
          color: var(--text-primary);
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ifly-name:hover { color: var(--accent-green); }

        .ifly-right-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .ifly-type-badge {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.06);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
        }

        .ifly-size { color: var(--text-secondary); font-size: 0.8rem; }
        .ifly-price { color: var(--accent-green); font-size: 0.82rem; font-weight: 700; white-space: nowrap; }

        .ifly-qty-wrap {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 5px;
          overflow: hidden;
        }

        .ifly-qty-wrap button {
          background: rgba(255,255,255,0.04);
          border: none;
          color: var(--text-primary);
          width: 28px;
          height: 28px;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
          transition: background 0.15s;
        }

        .ifly-qty-wrap button:hover { background: rgba(255,255,255,0.1); }

        .ifly-qty-wrap span {
          width: 28px;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Order Summary */
        .order-summary-section {
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2.5rem;
          margin-bottom: 5rem;
        }

        .order-summary-section.top-order-summary {
          margin-bottom: 5rem;
        }

        .order-summary-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .order-summary-header h2 { font-size: 1.75rem; font-weight: 700; margin: 0; }
        .order-total-badge {
          background: var(--accent-green);
          color: #000;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }

        .order-empty {
          background: rgba(255,255,255,0.02);
          border: 1px dashed rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 3rem;
          text-align: center;
          color: var(--text-secondary);
        }

        .order-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .order-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 7px;
          flex-wrap: wrap;
        }

        .oi-info { display: flex; flex-direction: column; gap: 0.25rem; }
        .oi-name { color: var(--text-primary); font-weight: 600; font-size: 0.95rem; }
        .oi-pack-label, .oi-sizes { color: var(--text-secondary); font-size: 0.78rem; }

        .oi-right { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }

        .oi-qty-wrap {
          display: flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 5px;
          overflow: hidden;
        }

        .oi-qty-wrap button {
          background: rgba(255,255,255,0.04);
          border: none;
          color: var(--text-primary);
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 1.1rem;
          font-family: inherit;
          transition: background 0.15s;
        }

        .oi-qty-wrap button:hover { background: rgba(255,255,255,0.1); }

        .oi-qty-wrap span {
          width: 32px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .oi-subtotal { font-weight: 700; color: var(--accent-green); font-size: 1rem; }

        .oi-remove {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          opacity: 0.5;
          transition: opacity 0.15s;
        }

        .oi-remove:hover { opacity: 1; color: #f87171; }

        .order-footer {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 2rem;
        }

        .order-total-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .order-total-line strong { color: var(--accent-green); font-size: 1.4rem; }

        .order-disclaimer {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .generate-btn { width: 100%; justify-content: center; font-size: 1rem; padding: 0.875rem; margin-bottom: 0.75rem; }

        .pdf-help {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.82rem;
          line-height: 1.5;
          margin: 0;
        }

        .pdf-help a { color: var(--accent-green); text-decoration: none; }
      `})]})}const Fh={midges:{id:"midges",name:"Midges (Chironomids)",overview:"Midges are the most abundant insect in most trout streams, hatching year-round. Mastering the midge program is the difference between a slow day and a net full of fish.",image:"https://images.unsplash.com/photo-1590001150463-2f8318cb5f9d?q=80&w=2070&auto=format&fit=crop",stages:[{id:"larva",name:"Larva Stage",description:"Midges spend most of their lives as worm-like larvae on the river bottom. They're often red (Bloodworms), olive, or cream — and scuds and other crustaceans are fished alongside them in the same zones.",tactics:["Fish deep, near the substrate.","Use a standard nymph rig with plenty of weight.","Dead drift is essential — larvae and scuds don't swim much.","In generation flows, scuds flush off the bottom and become even more available."],confidenceRating:5,whenItWorks:"Year-round, especially strong in winter or when nothing else is hatching on tailwaters.",rigSuggestion:"Standard indicator rig. Heavy tungsten point fly with an unweighted or lightly weighted midge larva 18-24 inches below. Scuds work well as the point fly.",flies:[{id:"zebra-midge",name:"Zebra Midge",sizes:"18-22",description:"The gold standard tailwater midge. Available in Black, Red, Olive, and Cream."},{id:"ruby-midge",name:"Ruby Midge",sizes:"18-20",description:"Red-bodied midge larva with a tungsten bead. Stands out at depth."},{id:"mercury-midge",name:"Mercury Midge",sizes:"20-24",description:"Features a silver bead for that extra 'pop' at depth."},{id:"grey-scud",name:"Grey Scud",sizes:"14-16",description:"Imitates abundant scuds (freshwater shrimp) common in tailwaters."},{id:"crackback-scud",name:"Crackback Scud",sizes:"14-18",description:"Realistic scud pattern with a shellback that catches light."},{id:"ray-charles",name:"Ray Charles",sizes:"14-16",description:"Sowbug (aquatic isopod) imitation. Essential on the Madison River."}]},{id:"pupa",name:"Pupa Stage",description:"As they prepare to hatch, pupae travel through the water column. They often have gas bubbles trapped in their shucks, creating a metallic sheen.",tactics:["Focus on the middle to upper water column.","Use a 'Leisenring Lift' or 'swing' at the end of your drift to mimic upward movement.","Watch for 'bulging' rises where fish eat just under the surface."],confidenceRating:4,whenItWorks:"During an active hatch when fish are bulging or porpoising just under the surface.",rigSuggestion:"Shallow indicator rig or a dry-dropper with a hi-vis dry fly and an unweighted pupa trailing 12-18 inches behind.",flies:[{id:"black-beauty",name:"Black Beauty",sizes:"20-24",description:"A simple thread midge pupa that works everywhere. Winter and spring tailwater staple."},{id:"rs2",name:"RS2",sizes:"18-22",description:"Rim Chung's classic emerger. Available in Gray, Black, and Olive."},{id:"rainbow-warrior",name:"Rainbow Warrior",sizes:"18-20",description:"Shiny, flashy and deadly. Mimics midge pupae and small nymphs."},{id:"chocolate-midge",name:"Chocolate Midge",sizes:"20-22",description:"Brown and silver, mimicking the natural hue of San Juan midges."}]},{id:"adult",name:"Adult Stage",description:"The delicate final stage. Adults hover over the water or cluster on the surface. When fish are sipping in glassy water, adults are what they're eating.",tactics:["Use 6x or 7x tippet for delicate presentations.","Look for 'sipping' rises in glassy water.","If you can't see your fly, use a larger 'sighter' dry fly with the midge trailing behind."],confidenceRating:3,whenItWorks:"Overcast winter days or early mornings when fish are actively rising to surface clusters.",rigSuggestion:"Double-dry rig: larger #16 Griffith's Gnat or parachute fly followed by a tiny #22 single adult.",flies:[{id:"griffiths-gnat",name:"Griffith's Gnat",sizes:"18-22",description:"Replicates a cluster of midges. High visibility and always effective."},{id:"morgans-midge",name:"Morgan's Midge",sizes:"20-24",description:"Low profile, high success rate in clear water."},{id:"parachute-midge",name:"Parachute Midge",sizes:"20-22",description:"Enhanced visibility while maintaining a delicate footprint."}]}]},mayflies:{id:"mayflies",name:"Mayflies (Ephemeroptera)",overview:"The most iconic hatch in fly fishing. Known for their sail-like wings and elegant life cycle, the mayfly hatch is what most anglers dream about. Colorado Green Drakes, PMDs, BWOs — these are the centerpiece hatches.",image:"https://images.unsplash.com/photo-1571630435-7e5c7b0a6ecd?q=80&w=2070&auto=format&fit=crop",stages:[{id:"nymph",name:"Nymph Stage",description:"Mayfly nymphs are active swimmers or crawlers living among the rocks. They can stay in this stage for up to a year before emerging, making them a consistent food source year-round.",tactics:["Bottom bouncing with Czech or tight-line nymphing.","Active retrieves for swimmer species like Isonychia.","Match size and color precisely.","Attractor nymphs like Copper John and Arizona Peacock Lady cover multiple species."],confidenceRating:5,whenItWorks:"Pre-hatch, spring through fall, anytime water is warming up. Year-round searching pattern.",rigSuggestion:"Classic Czech or indicator nymphing rig keeping the flies near the bottom.",flies:[{id:"pheasant-tail",name:"Pheasant Tail",sizes:"14-20",description:"The classic nymph pattern. Imitates virtually any small mayfly nymph."},{id:"hares-ear",name:"Hare's Ear",sizes:"12-18",description:"Buggier profile for faster water. An all-time classic."},{id:"frenchie",name:"Frenchie",sizes:"14-18",description:"Tungsten bead PT variant with a hotspot — gets down fast."},{id:"copper-john",name:"Copper John",sizes:"14-18",description:"Beadhead attractor nymph with a wire body. Gets down fast and catches everything."},{id:"guides-choice-hares-ear",name:"Guide's Choice Hare's Ear",sizes:"12-14",description:"Looser dubbed than a standard HE — buggier and more lifelike in faster water."},{id:"arizona-peacock-lady",name:"Arizona Peacock Lady",sizes:"14-16",description:"Peacock herl body with a hen wing. Excellent searching nymph year-round."},{id:"pmd-nymph",name:"PMD Nymph",sizes:"16-18",description:"Matches the Pale Morning Dun, a major western hatch."}]},{id:"emerger",name:"Emerger Stage",description:"Stuck in the surface film, mayflies are highly vulnerable during emergence. This is when the biggest fish come up to feed. Emergers and cripples often outperform both nymphs and duns.",tactics:["Grease the leader to within 6 inches of the fly.","Damp drift in the film — don't treat your emerger.","Fish right at the head of feeding lanes during a hatch.","Cripples sit lower — use them when fish refuse standard duns."],confidenceRating:4,whenItWorks:"During an active hatch when you see aggressive, splashy rises or porpoising.",rigSuggestion:"Dry-dropper with a parachute dry fly and an emerger riding just 6-12 inches below.",flies:[{id:"klinkhammer",name:"Klinkhammer",sizes:"14-18",description:"Sits deep in the film to trigger aggressive strikes."},{id:"sparkle-dun",name:"Sparkle Dun",sizes:"16-18",description:"Trailing shuck imitates a just-emerging dun perfectly."},{id:"sparkle-dun-pmd",name:"Sparkle Dun PMD",sizes:"16-18",description:"Craig Mathews' design for the PMD hatch. The trailing shuck matches the mid-hatch stage."},{id:"bwo-emerger",name:"BWO Emerger",sizes:"18-20",description:"Essential for the Blue Winged Olive hatches on cold, overcast days."},{id:"baetis-cripple",name:"Baetis Cripple",sizes:"18-20",description:"Rides low in the film, imitating a struggling emerging BWO. Works when standard duns get refused."}]},{id:"dun",name:"Dun (Adult) Stage",description:"The 'Dun' stage — the iconic image of a mayfly with upright sail-like wings riding the surface. Fish target them when drifting helplessly. The Colorado Green Drake is the crown jewel of this stage on western freestone.",tactics:["Gentle upstream presentation on a slack leader.","Matching color and size precisely is critical.","Let it drift drag-free for as long as possible.","During Green Drake hatches, fish are selective — use the right pattern."],confidenceRating:4,whenItWorks:"Prime hatch hours when you can see bugs on the surface and fish actively rising.",rigSuggestion:"Single dry fly on a 9ft 5x leader, cast upstream, let it drift drag-free.",flies:[{id:"parachute-adams",name:"Parachute Adams",sizes:"12-22",description:"The most versatile dry fly ever tied. Use it when you're not sure what they're eating."},{id:"colorado-green-drake",name:"Colorado Green Drake",sizes:"10-12",description:"The most anticipated hatch of the Colorado summer — large, sail-winged, unmistakable."},{id:"elk-hair-bwo",name:"Blue Winged Olive",sizes:"18-22",description:"The iconic small mayfly. Critical for overcast spring and fall days."},{id:"comparadun-pmd",name:"PMD Comparadun",sizes:"16-18",description:"Low-riding imitation for technical PMD hatches."}]},{id:"spinner",name:"Spinner Stage",description:"After mating, female spinners return to the water to lay eggs and die, falling flat on the surface. Spinner falls often trigger evening feeding frenzies on otherwise slow days.",tactics:["Fish at dusk when spinners fall.","Use flush-floating patterns with spent wings.","Look for rises in flat water downstream of riffles."],confidenceRating:3,whenItWorks:"Evening during and after major hatches. Look for the spinner fall 30-60 minutes after the main hatch ends.",rigSuggestion:"Single flush-floating spinner on 6x tippet in glassy tail-outs.",flies:[{id:"rusty-spinner",name:"Rusty Spinner",sizes:"16-20",description:"The go-to PMD and BWO spinner imitation."},{id:"mahogany-spinner",name:"Mahogany Spinner",sizes:"14-16",description:"For Isonychia and large fall mayfly spinner falls."}]}]},caddis:{id:"caddis",name:"Caddis (Trichoptera)",overview:"Caddis are the most widespread aquatic insect, found on nearly every trout stream in North America. Their case-building larvae and explosive hatches make them essential knowledge for any angler.",image:"https://images.unsplash.com/photo-1516900448138-08149ef3879a?q=80&w=2070&auto=format&fit=crop",stages:[{id:"larva",name:"Larva Stage",description:"Caddis larvae build portable cases or nets from sand, gravel, or plant material. They are found in nearly all water types and are a constant food source.",tactics:["Dead drift along the bottom.","Use heavier weight than you think — they live deep.","Green and tan body colors are universal."],confidenceRating:4,whenItWorks:"Year-round searching pattern. Especially effective in early spring before the hatch begins.",rigSuggestion:"Czech nymphing or deep indicator rig with a heavy point fly.",flies:[{id:"green-rock-worm",name:"Green Rock Worm",sizes:"12-16",description:"Bright green caddis larva pattern — the classic western searching fly."},{id:"caddis-larva-tan",name:"Tan Caddis Larva",sizes:"14-16",description:"Neutral tan body matches most cased caddis."}]},{id:"pupa",name:"Pupa Stage",description:"Caddis pupae swim aggressively to the surface during the hatch, creating a dramatic rise form. The swing is critical here.",tactics:["The 'wet fly swing' — swing your fly across and downstream.","Rising retrieve as fly swings: lift the rod tip slowly.","Fish during the hatch, not before."],confidenceRating:5,whenItWorks:"During an evening hatch — look for swirling, chasing rise forms as fish intercept ascending pupae.",rigSuggestion:"Wet fly swing on a 10-12ft leader. No indicator. Let the fly swing naturally across current seams.",flies:[{id:"x-caddis",name:"X-Caddis",sizes:"14-16",description:"Z-lon trailing shuck imitates the emerging pupa perfectly. Mother's Day Caddis staple."},{id:"soft-hackle-caddis",name:"Soft Hackle Partridge",sizes:"14-16",description:"Classic wet fly that works on the swing throughout the hatch."},{id:"olive-caddis-pupa",name:"Olive Caddis Pupa",sizes:"14-18",description:"Realistic translucent body. Fish it on the drop and swing."}]},{id:"adult",name:"Adult Stage",description:"Adult caddis skitter across the surface on take-off, triggering explosive strikes. The Elk Hair Caddis is one of the most universally effective dry flies ever created.",tactics:["Skitter the fly across the surface — drag is good here!","Dead drift first, then animate at the end of the drift.","Fish into the evening and after dark for best results."],confidenceRating:5,whenItWorks:"Spring through fall evenings. The Mother's Day Caddis hatch is legendary in May across the western US.",rigSuggestion:"Single dry fly or double-dry setup. Skitter and twitch for aggressive takes.",flies:[{id:"elk-hair-caddis",name:"Elk Hair Caddis",sizes:"12-18",description:"The definitive caddis adult pattern. Available in Tan, Olive, and Black."},{id:"stimulator-orange",name:"Orange Stimulator",sizes:"10-14",description:"Attractor caddis that also imitates stoneflies. Floats forever."},{id:"goddard-caddis",name:"Goddard Caddis",sizes:"12-16",description:"All-deer-hair pattern. Virtually unsinkable."}]}]},stoneflies:{id:"stoneflies",name:"Stoneflies (Plecoptera)",overview:"Stoneflies are the giants of the aquatic insect world. Salmonflies and Golden Stones trigger some of the most explosive dry fly fishing of the year on big western rivers. Their nymphs — like Pat's Rubber Legs — are year-round staples.",stages:[{id:"nymph",name:"Nymph Stage",description:"Stonefly nymphs are among the largest aquatic insects — some taking 2-3 years to mature. They are a major food source year-round for large trout.",tactics:["Fish heavy — use tungsten beads and extra weight.","Target fast water, riffles, and rocky runs.","Bounce the bottom aggressively."],confidenceRating:5,whenItWorks:"Year-round. One of the most reliable nymph patterns in any river with stoneflies.",rigSuggestion:"Heavy tandem nymph rig. Stonefly on the point, smaller dropper 18 inches above. Fished tight-line or deep indicator.",flies:[{id:"pats-rubber-legs",name:"Pat's Rubber Legs",sizes:"4-10",description:"The most versatile stonefly nymph. Black or brown, always in the box."},{id:"tungsten-pats",name:"Tungsten Pat's",sizes:"6-10",description:"Heavier version for deep and fast water."},{id:"black-stonefly",name:"Black Stonefly Nymph",sizes:"8-12",description:"Imitates the smaller winter/early spring stoneflies."},{id:"20-incher",name:"20 Incher",sizes:"6-10",description:"Montana staple. Rubber legs move constantly in current."}]},{id:"adult",name:"Adult Stage",description:"The adult stonefly hatch is one of the most anticipated events of the fly fishing calendar. Giant insects on the surface mean giant fish throwing caution to the wind.",tactics:["Fish big foam flies near the banks.","Dead drift, then skitter at the end.","Focus on morning and evening when fish are most active.","Fish the edges — adults crawl out on rocks and trees."],confidenceRating:5,whenItWorks:"Late May through July for Salmonflies. June-August for Golden Stones. Watch for adult bugs in streamside vegetation.",rigSuggestion:"Single large dry fly on 3x-4x tippet close to banks. Drop a stonefly nymph off the bend if action is slow.",flies:[{id:"chubby-chernobyl",name:"Chubby Chernobyl",sizes:"6-10",description:"The modern gold standard for stonefly and hopper fishing. Floats all day."},{id:"salmonfly-dry",name:"Adult Salmonfly",sizes:"2-6",description:"Imitates the giant orange Pteronarcys californica — king of western dry fly hatches."},{id:"golden-stimulator",name:"Golden Stimulator",sizes:"8-12",description:"Imitates the smaller Golden Stonefly. Works throughout the summer."},{id:"schroeder-pmx",name:"Schroeder's PMX",sizes:"8-12",description:"Colorado-style foam attractor stonefly."}]}]},terrestrials:{id:"terrestrials",name:"Terrestrials",overview:"Ants, beetles, grasshoppers, and other land-based insects fall into streams throughout summer and fall, often triggering the best dry fly fishing of the season. Big fish that ignore tiny hatches will crush a terrestrial.",image:"https://images.unsplash.com/photo-1626548307434-9e91e8aa8b44?q=80&w=2070&auto=format&fit=crop",stages:[{id:"ant",name:"Ants",description:"Ants are the most consistently productive terrestrial. Flying ant falls in late summer trigger explosive feeding frenzies even on pressured fish.",tactics:["Fish tight to the bank.","Flush-floating presentation — no floatant on the fly.","During a flying ant fall, match the swarm size and color exactly."],confidenceRating:5,whenItWorks:"Late June through October. Flying ant falls in August-September are especially potent.",rigSuggestion:"Single ant pattern on 5x-6x tippet with slack line presentation near banks.",flies:[{id:"amys-ant",name:"Amy's Ant",sizes:"10-14",description:"Foam ant that floats high and supports large nymph droppers."},{id:"flying-ant",name:"Flying Ant (Black)",sizes:"14-18",description:"Match flying ant swarms during the massive late summer falls."},{id:"foam-ant",name:"Foam Ant (Cinnamon)",sizes:"16-18",description:"Cinnamon ants are extremely common and fish see them regularly."}]},{id:"beetle",name:"Beetles",description:"Beetles are the most diverse insect group on earth. They fall into streams throughout summer and are taken eagerly — a sleeper pick that many overlook.",tactics:["Fish near overhanging branches and bankside vegetation.","Dead drift with zero movement — beetles don't swim.","A beetle under an ant or small dry fly is devastatingly effective."],confidenceRating:4,whenItWorks:"June through September wherever there's streamside vegetation. Cloudy days are especially productive.",rigSuggestion:"Double-dry: #14 foam beetle as the main fly, a #18 ant or midge 12 inches below.",flies:[{id:"foam-beetle",name:"Black Foam Beetle",sizes:"12-16",description:"Flush floating with a foam back. A secret weapon on pressured fish."},{id:"peacock-beetle",name:"Peacock Beetle",sizes:"14-16",description:"Peacock herl body with a shellback. Gorgeous and effective."}]},{id:"hopper",name:"Grasshoppers",description:"Late summer hopper fishing on banks and meadow streams is as exciting as fly fishing gets. Big bugs, big fish, explosive strikes. The Parachute Hopper and Chubby Chernobyl are the two must-carry patterns.",tactics:["Slap the fly down hard near the bank — grasshoppers land with force.","Fish within 2 feet of the bank.","Don't be afraid of drag — hoppers kick and struggle.","Fish mid-day when hoppers are most active."],confidenceRating:5,whenItWorks:"August and September on freestone streams near meadows and grassy banks. The hotter and windier, the better.",rigSuggestion:"Single large hopper on 3x-4x with occasional twitching. Or hopper-dropper with a heavy nymph below.",flies:[{id:"chubby-hopper",name:"Chubby Chernobyl",sizes:"8-12",description:"The king of hopper-dropper rigs. Floats enormous nymphs."},{id:"parachute-hopper",name:"Parachute Hopper",sizes:"8-12",description:"More realistic profile with high-visibility post."},{id:"dave-hopper",name:"Dave's Hopper",sizes:"8-12",description:"The classic deer hair hopper. Still catches massive fish."},{id:"fat-albert",name:"Fat Albert",sizes:"8-12",description:"Thick foam body that lands with authority and floats forever."}]},{id:"surface",name:"Surface & Warmwater Patterns",description:"Foam poppers, foam spiders, and surface bugs dominate warmwater fly fishing for bass and panfish. These patterns work anywhere fish feed aggressively near the surface — ponds, lakes, and warmwater rivers.",tactics:["Strip aggressively then let it sit — the pause triggers strikes.","Fish tight to structure: lily pads, fallen logs, dock pilings.","Poppers create noise and commotion. Spiders sit quietly.","Use a short, stiff 2x-3x leader for casting large bugs."],confidenceRating:4,whenItWorks:"May through September for warmwater species. Best in early morning and evening on calm days.",rigSuggestion:"Short 7.5ft leader in 2x-3x. Cast within a foot of structure and let it sit for 10-15 seconds before stripping.",flies:[{id:"foam-spider-popper",name:"Foam Spider / Popper",sizes:"10-12",description:"Creates a commotion that panfish and bass can't resist. Easy to see, easy to strike."},{id:"damsel-nymph",name:"Damsel Nymph",sizes:"12-14",description:"Slender olive nymph slow-stripped near aquatic vegetation. Deadly in stillwater."}]}]},streamers:{id:"streamers",name:"Streamers & Wet Flies",overview:"Streamers imitate baitfish, leeches, and large nymphs. They are the most effective way to target large, trophy trout — especially in the fall, during high water, or on low-light days. The Woolly Bugger is the most versatile fly ever tied.",image:"https://images.unsplash.com/photo-1567092736706-3d49f0f3e9a8?q=80&w=2070&auto=format&fit=crop",stages:[{id:"baitfish",name:"Baitfish Patterns",description:"Sculpin, dace, chubs, and shiners make up a huge part of a trophy trout's diet. Large streamers trigger the predatory instinct of the biggest fish in the river.",tactics:["Strip aggressively, then pause — hits often come on the pause.","Dead drift a streamer through deep pools for passive fish.","Fish the inside seam of bends where baitfish stack up.","Bump the bottom on the strip."],confidenceRating:5,whenItWorks:"Fall, early spring, high water, low light. When you want the biggest fish in the river, throw a streamer.",rigSuggestion:"7.5-9ft leader in 1x-3x. Strip retrieve with variable speed and frequent pauses.",flies:[{id:"woolly-bugger",name:"Woolly Bugger",sizes:"4-10",description:"The most important fly ever tied. Available in Olive, Black, and White."},{id:"clouser-minnow",name:"Clouser Minnow",sizes:"4-8",description:"Dives head-first on the strip — deadly for bass and trout alike."},{id:"simi-seal-leech",name:"Simi Seal Leech",sizes:"10-12",description:"Arizona staple. Long fibers pulse on every movement."},{id:"circus-peanut",name:"Circus Peanut",sizes:"2-4",description:"Articulated streamer that swims with incredible action."},{id:"muddler-minnow",name:"Muddler Minnow",sizes:"4-8",description:"Classic sculpin imitation. Dead drift or strip aggressively."}]},{id:"leeches",name:"Leeches & Worms",description:"Leeches are abundant in lakes and still water, and worm patterns are one of the most effective nymphs ever designed for high water. Confidence basics that produce in any condition.",tactics:["Slow strip retrieve for leeches — they undulate naturally.","Dead drift worms near the bottom on tailwaters.","Dead drift in lakes at moderate depth."],confidenceRating:4,whenItWorks:"Year-round. Especially effective after rain or high water when worms flush into the river.",rigSuggestion:"Indicator rig with a worm suspended near the bottom. Or stripped on a floating line in stillwater.",flies:[{id:"san-juan-worm",name:"San Juan Worm",sizes:"10-12",description:"Simple red, pink, or tan chenille worm — deadly during high water."},{id:"squirmy-worm",name:"Squirmy Worm",sizes:"10-12",description:"Silicone worm that wiggles on every current variation."},{id:"olive-leech-bugger",name:"Olive Leech Bugger",sizes:"6-10",description:"Marabou tail pulses in every current. Deadly in stillwater."}]}]}},xh={midges:"https://images.unsplash.com/photo-1590001150463-2f8318cb5f9d?q=80&w=2070&auto=format&fit=crop",mayflies:"https://images.unsplash.com/photo-1571630435-7e5c7b0a6ecd?q=80&w=2070&auto=format&fit=crop",caddis:"https://images.unsplash.com/photo-1516900448138-08149ef3879a?q=80&w=2070&auto=format&fit=crop",stoneflies:"",terrestrials:"https://images.unsplash.com/photo-1626548307434-9e91e8aa8b44?q=80&w=2070&auto=format&fit=crop",streamers:"https://images.unsplash.com/photo-1567092736706-3d49f0f3e9a8?q=80&w=2070&auto=format&fit=crop"},a1={midges:"Year-round & indispensable",mayflies:"The iconic hatch",caddis:"Most widespread insect",stoneflies:"Giants of the aquatic world",terrestrials:"Land-based summer season",streamers:"Trophy fish & big water"};function l1(){const r=Object.values(Fh);return s.jsxs("div",{className:"hatch-hub-container",children:[s.jsxs("div",{className:"container",children:[s.jsxs("header",{className:"page-header",children:[s.jsx("span",{className:"brand-badge",children:"THE KNOWLEDGE BASE"}),s.jsx("h1",{className:"brand-headline",children:"HATCH GUIDE"}),s.jsx("p",{className:"brand-subheadline",children:"Every hatch from midges to salmonflies — broken down by life stage, confidence rating, and exactly what to tie on. Tap any category to get tactical."})]}),s.jsxs("div",{className:"hub-top-cta",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Not sure what to throw?"}),s.jsx("span",{children:" The Quiver matches your location and month to the exact right patterns."})]}),s.jsx($,{to:"/quiver",className:"btn-primary hub-cta-btn",children:"Open The Quiver"})]}),s.jsx("div",{className:"category-grid",children:r.map((u,f)=>s.jsxs($,{to:`/hatch-guide/${u.id}`,className:"category-card",children:[s.jsx("div",{className:"card-image-bg",style:{backgroundImage:`url('${xh[u.id]||xh.midges}')`}}),s.jsx("div",{className:"card-overlay"}),s.jsxs("div",{className:"card-content",children:[s.jsxs("div",{className:"card-top-row",children:[s.jsx("span",{className:"cat-badge",children:"GUIDE"}),s.jsxs("span",{className:"cat-stage-count",children:[u.stages.length," stages"]})]}),s.jsxs("span",{className:"cat-id",children:["0",f+1]}),s.jsx("h3",{className:"cat-title",children:u.name.split(" (")[0]}),s.jsx("p",{className:"cat-subtitle",children:a1[u.id]}),s.jsxs("p",{className:"cat-desc",children:[u.overview.slice(0,100),"…"]}),s.jsx("span",{className:"explore-btn",children:"EXPLORE GUIDE →"})]})]},u.id))}),s.jsxs("div",{className:"hub-footer-cta",style:{display:"none"},children:[s.jsx("h3",{children:"Don't know where to start?"}),s.jsx("p",{children:"Let The Quiver match your location and month to the right insects — then come back here to go deeper."}),s.jsx($,{to:"/quiver",className:"btn-primary",children:"Open The Quiver"})]})]}),s.jsx("style",{children:`
        .hatch-hub-container {
          padding: 10rem 0 8rem;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        .page-header {
          padding-top: 4rem;
          margin-bottom: 4rem;
          max-width: 720px;
        }

        .brand-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-green);
          margin-bottom: 1.25rem;
          background: rgba(74, 222, 128, 0.08);
          padding: 0.35rem 0.8rem;
          border-radius: 4px;
        }

        .brand-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .brand-subheadline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hub-top-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 1.25rem 1.75rem;
          margin-bottom: 3rem;
        }

        .hub-top-cta strong { color: var(--text-primary); }
        .hub-top-cta span { color: var(--text-secondary); font-size: 0.92rem; }

        .hub-cta-btn { flex-shrink: 0; white-space: nowrap; }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        @media (max-width: 768px) {
          .hatch-hub-container { padding: 6rem 0; }
          .hub-header { margin-bottom: 3rem; }
          .category-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }

        .category-card {
          position: relative;
          height: 440px;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          border: 1px solid var(--border-default);
          transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
        }

        @media (max-width: 768px) {
          .category-card { height: 300px; padding: 1.5rem; }
        }

        .category-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.2);
        }

        .card-image-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(0.5) brightness(0.3);
          transition: transform 0.5s ease, filter 0.4s ease;
          z-index: 1;
        }

        .category-card:hover .card-image-bg {
          transform: scale(1.04);
          filter: grayscale(0.1) brightness(0.4);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--bg-primary) 15%, rgba(0,0,0,0.2) 85%);
          z-index: 2;
        }

        .card-content {
          position: relative;
          z-index: 3;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .cat-badge {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: var(--color-cream);
          background-color: var(--color-deep-red);
          padding: 0.25rem 0.6rem;
          border-radius: 3px;
        }

        .cat-stage-count {
          font-size: 0.7rem;
          color: var(--text-secondary);
          letter-spacing: 0.08em;
        }

        .cat-id {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.4rem;
          letter-spacing: 0.2em;
        }

        .cat-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        @media (max-width: 768px) {
          .cat-title { font-size: 1.6rem; }
        }

        .cat-subtitle {
          font-size: 0.78rem;
          color: var(--accent-green);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .cat-desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.55;
          margin-bottom: 1.25rem;
          max-width: 320px;
        }

        @media (max-width: 768px) {
          .cat-desc { display: none; }
        }

        .explore-btn {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-primary);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 0.2rem;
          display: inline-block;
          transition: border-color 0.2s;
        }

        .category-card:hover .explore-btn {
          border-color: var(--accent-green);
          color: var(--accent-green);
        }

        .hub-footer-cta {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .hub-footer-cta h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .hub-footer-cta p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
      `})]})}function Sh(){const{category:r,stageId:u}=_h(),f=r?Fh[r]:null,[o,h]=T.useState(""),[m,y]=T.useState({}),E=p=>{y(k=>({...k,[p]:!k[p]}))};if(!f)return s.jsxs("div",{className:"hd-error container",children:[s.jsx("h2",{children:"Category Not Found"}),s.jsx($,{to:"/hatch-guide",className:"btn-secondary mt-4 inline-block",children:"← Back to Hatch Guide"})]});const S=u?f.stages.find(p=>p.id===u):null;if(u&&S)return s.jsxs("div",{className:"hd-page",children:[s.jsx("div",{className:"hd-sticky-nav",children:s.jsxs("div",{className:"container hd-sticky-inner",children:[s.jsxs("nav",{className:"hd-breadcrumb hd-breadcrumb-sticky",children:[s.jsx($,{to:"/hatch-guide",children:"Hatch Guide"}),s.jsx(Ut,{size:12}),s.jsx($,{to:`/hatch-guide/${r}`,children:f.name.split(" (")[0]}),s.jsx(Ut,{size:12}),s.jsx("span",{children:S.name})]}),s.jsxs("div",{className:"hd-sticky-actions",children:[s.jsx($,{to:`/hatch-guide/${r}`,className:"hd-sticky-back",children:"← All Stages"}),s.jsx($,{to:"/hatch-guide",className:"hd-sticky-back",children:"Hatch Guide"}),s.jsx($,{to:"/quiver",className:"hd-sticky-back hd-sticky-quiver",children:"The Quiver"})]})]})}),s.jsx("div",{className:"hd-header hd-header-pushed",children:s.jsxs("div",{className:"container",children:[s.jsxs("nav",{className:"hd-breadcrumb",children:[s.jsx($,{to:"/hatch-guide",children:"Hatch Guide"}),s.jsx(Ut,{size:12}),s.jsx($,{to:`/hatch-guide/${r}`,children:f.name.split(" (")[0]}),s.jsx(Ut,{size:12}),s.jsx("span",{children:S.name})]}),s.jsxs("span",{className:"hd-eyebrow",children:[f.name.split(" (")[0]," — Life Stage"]}),s.jsx("h1",{className:"hd-title",children:S.name}),s.jsx("p",{className:"hd-desc",children:S.description})]})}),s.jsxs("div",{className:"container hd-stage-grid",children:[s.jsxs("div",{className:"hd-left",children:[s.jsxs("div",{className:"hd-card",children:[s.jsx("h3",{className:"hd-card-label",children:"Tactical Approach"}),s.jsx("ul",{className:"hd-tactics-list",children:S.tactics.map((p,k)=>s.jsx("li",{children:p},k))})]}),s.jsxs("div",{className:"hd-card",children:[s.jsxs("div",{className:"hd-actionable-row",children:[s.jsx("h3",{className:"hd-card-label",children:"Confidence Rating"}),s.jsx("div",{className:"hd-stars",children:Array.from({length:5}).map((p,k)=>s.jsx("span",{className:k<S.confidenceRating?"star-on":"star-off",children:"★"},k))})]}),s.jsx("h3",{className:"hd-card-label mt-6",children:"When It Works"}),s.jsx("p",{className:"hd-body-text",children:S.whenItWorks}),s.jsx("h3",{className:"hd-card-label mt-6",children:"Rig Suggestion"}),s.jsx("p",{className:"hd-rig-text",children:S.rigSuggestion})]}),s.jsxs("div",{className:"hd-cta-stack",children:[s.jsxs("div",{className:"hd-cta-block",children:[s.jsx("p",{className:"hd-cta-label",children:"Not sure what to throw today?"}),s.jsx($,{to:"/find-your-fly",className:"btn-primary w-full text-center",children:"Open The Quiver"})]}),s.jsxs("div",{className:"hd-cta-block",children:[s.jsx("p",{className:"hd-cta-label",children:"Need these flies in your box?"}),s.jsx($,{to:"/shop-packs",className:"btn-secondary w-full text-center",children:"Shop Confidence Packs"})]})]})]}),s.jsxs("div",{className:"hd-right",children:[s.jsx("h2",{className:"hd-patterns-heading",children:"Recommended Patterns"}),s.jsx("p",{className:"hd-patterns-sub",children:"Tap any fly for the full breakdown and shop link."}),s.jsx("div",{className:"hd-patterns-list",children:S.flies.map(p=>s.jsxs($,{to:`/fly/${Bl(p.name)}?from=hatch&cat=${r}&stage=${u}`,className:"hd-fly-row",children:[s.jsxs("div",{className:"hd-fly-main",children:[s.jsx("span",{className:"hd-fly-name",children:p.name}),s.jsx("span",{className:"hd-fly-desc",children:p.description})]}),s.jsxs("div",{className:"hd-fly-right",children:[s.jsxs("span",{className:"hd-fly-sizes",children:["#",p.sizes]}),s.jsx(Ut,{size:14,className:"hd-fly-arrow"})]})]},p.id))}),s.jsx("div",{className:"hd-back-link",children:s.jsxs($,{to:`/hatch-guide/${r}`,children:[s.jsx(Qc,{size:14,style:{display:"inline",marginRight:"4px"}}),"Back to ",f.name.split(" (")[0]," overview"]})})]})]}),s.jsx("style",{children:wh})]});const v=f.stages.flatMap(p=>p.flies),C=o?v.filter(p=>p.name.toLowerCase().includes(o.toLowerCase())||p.description.toLowerCase().includes(o.toLowerCase())):null;return s.jsxs("div",{className:"hd-page",children:[s.jsx("div",{className:"hd-sticky-nav",children:s.jsxs("div",{className:"container hd-sticky-inner",children:[s.jsxs("nav",{className:"hd-breadcrumb hd-breadcrumb-sticky",children:[s.jsx($,{to:"/hatch-guide",children:"Hatch Guide"}),s.jsx(Ut,{size:12}),s.jsx("span",{children:f.name.split(" (")[0]})]}),s.jsxs("div",{className:"hd-sticky-actions",children:[s.jsx($,{to:"/hatch-guide",className:"hd-sticky-back",children:"← All Categories"}),s.jsx($,{to:"/quiver",className:"hd-sticky-back hd-sticky-quiver",children:"The Quiver"})]})]})}),s.jsx("div",{className:"hd-header hd-header-pushed",children:s.jsxs("div",{className:"container",children:[s.jsxs("nav",{className:"hd-breadcrumb",children:[s.jsx($,{to:"/hatch-guide",children:"Hatch Guide"}),s.jsx(Ut,{size:12}),s.jsx("span",{children:f.name.split(" (")[0]})]}),s.jsx("span",{className:"hd-eyebrow",children:"Hatch Guide"}),s.jsx("h1",{className:"hd-title",children:f.name.split(" (")[0]}),s.jsx("p",{className:"hd-desc hd-desc-wide",children:f.overview})]})}),s.jsxs("div",{className:"container hd-overview-body",children:[s.jsxs("div",{className:"hd-search-bar",children:[s.jsx(fr,{size:16,className:"hd-search-icon"}),s.jsx("input",{type:"text",placeholder:`Search ${f.name.split(" (")[0].toLowerCase()} patterns...`,value:o,onChange:p=>h(p.target.value),className:"hd-search-input"}),o&&s.jsx("button",{className:"hd-search-clear",onClick:()=>h(""),children:"✕"})]}),o&&C&&s.jsxs("div",{className:"hd-search-results",children:[s.jsxs("p",{className:"hd-search-count",children:[C.length," pattern",C.length!==1?"s":""," found"]}),s.jsx("div",{className:"hd-patterns-list",children:C.map(p=>s.jsxs($,{to:`/fly/${Bl(p.name)}?from=hatch&cat=${r}`,className:"hd-fly-row",children:[s.jsxs("div",{className:"hd-fly-main",children:[s.jsx("span",{className:"hd-fly-name",children:p.name}),s.jsx("span",{className:"hd-fly-desc",children:p.description})]}),s.jsxs("div",{className:"hd-fly-right",children:[s.jsxs("span",{className:"hd-fly-sizes",children:["#",p.sizes]}),s.jsx(Ut,{size:14,className:"hd-fly-arrow"})]})]},p.id))})]}),!o&&s.jsx("div",{className:"hd-stages",children:f.stages.map((p,k)=>{const H=m[p.id]??!0;return s.jsxs("div",{className:"hd-stage-block",children:[s.jsxs("div",{className:"hd-stage-header",children:[s.jsxs("button",{className:"hd-stage-toggle",onClick:()=>E(p.id),children:[s.jsxs("span",{className:"hd-stage-num",children:["0",k+1]}),s.jsx("span",{className:"hd-stage-name",children:p.name}),s.jsxs("span",{className:"hd-stage-count",children:[p.flies.length," patterns"]}),H?s.jsx(Zh,{size:16}):s.jsx(Xh,{size:16})]}),s.jsxs($,{to:`/hatch-guide/${r}/${p.id}`,className:"hd-stage-tactics-link",children:["Tactics & Timing ",s.jsx(Ut,{size:14})]})]}),H&&s.jsxs("div",{className:"hd-stage-body",children:[s.jsxs("div",{className:"hd-stage-meta",children:[s.jsxs("div",{className:"hd-meta-pill",children:[s.jsx("span",{className:"hd-meta-label",children:"Confidence"}),s.jsx("span",{className:"hd-meta-stars",children:Array.from({length:5}).map((U,B)=>s.jsx("span",{className:B<p.confidenceRating?"star-on":"star-off",children:"★"},B))})]}),s.jsxs("div",{className:"hd-meta-pill",children:[s.jsx("span",{className:"hd-meta-label",children:"When"}),s.jsx("span",{className:"hd-meta-text",children:p.whenItWorks})]})]}),s.jsx("div",{className:"hd-patterns-list",children:p.flies.map(U=>s.jsxs($,{to:`/fly/${Bl(U.name)}?from=hatch&cat=${r}&stage=${p.id}`,className:"hd-fly-row",children:[s.jsxs("div",{className:"hd-fly-main",children:[s.jsx("span",{className:"hd-fly-name",children:U.name}),s.jsx("span",{className:"hd-fly-desc",children:U.description})]}),s.jsxs("div",{className:"hd-fly-right",children:[s.jsxs("span",{className:"hd-fly-sizes",children:["#",U.sizes]}),s.jsx(Ut,{size:14,className:"hd-fly-arrow"})]})]},U.id))})]})]},p.id)})}),s.jsx("div",{className:"hd-bottom-cta",children:s.jsxs("div",{className:"hd-bottom-cta-inner",children:[s.jsx(Jh,{size:20,className:"hd-cta-icon"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Need these flies?"}),s.jsx("p",{children:"Get a pack curated for exactly these situations, or order individual patterns hand-tied to order."})]}),s.jsxs("div",{className:"hd-bottom-cta-btns",children:[s.jsx($,{to:"/shop-packs",className:"btn-primary",children:"Shop Packs"}),s.jsx($,{to:"/find-your-fly",className:"btn-secondary",children:"The Quiver"})]})]})})]}),s.jsx("style",{children:wh})]})}const wh=`
  .hd-page {
    padding-top: 80px;
    background: var(--bg-primary);
    min-height: 100vh;
  }

  /* Sticky nav */
  .hd-sticky-nav {
    position: sticky;
    top: 60px; /* sits just below the global navbar */
    z-index: 90;
    background: rgba(10, 11, 12, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .hd-sticky-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.65rem;
    padding-bottom: 0.65rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hd-breadcrumb-sticky {
    margin-bottom: 0 !important;
  }

  .hd-sticky-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .hd-sticky-back {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-decoration: none;
    padding: 0.35rem 0.75rem;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    transition: all 0.15s;
    white-space: nowrap;
  }

  .hd-sticky-back:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }

  .hd-sticky-quiver {
    color: var(--accent-green);
    border-color: rgba(74, 222, 128, 0.25);
  }

  .hd-sticky-quiver:hover {
    color: var(--accent-green);
    background: rgba(74, 222, 128, 0.08);
    border-color: rgba(74, 222, 128, 0.4);
  }

  /* Push header down below sticky nav */
  .hd-header-pushed {
    padding-top: 2.5rem !important;
  }

  .hd-error {
    padding: 8rem 2rem;
    text-align: center;
  }

  /* Header */
  .hd-header {
    padding: 4rem 0 3rem;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .hd-breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .hd-breadcrumb a {
    color: var(--accent-green);
    text-decoration: none;
  }

  .hd-breadcrumb a:hover { text-decoration: underline; }

  .hd-breadcrumb svg { color: var(--text-secondary); opacity: 0.4; flex-shrink: 0; }

  .hd-eyebrow {
    display: block;
    font-size: 0.73rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent-green);
    margin-bottom: 0.75rem;
  }

  .hd-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .hd-desc {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 680px;
    margin: 0;
  }

  /* Overview layout */
  .hd-overview-body {
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  /* Search */
  .hd-search-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 0.875rem 1.25rem;
    max-width: 560px;
    margin-bottom: 2.5rem;
    transition: border-color 0.2s;
  }

  .hd-search-bar:focus-within { border-color: var(--accent-green); }

  .hd-search-icon { color: var(--text-secondary); flex-shrink: 0; }

  .hd-search-input {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 1rem;
    outline: none;
    flex: 1;
    font-family: inherit;
  }

  .hd-search-input::placeholder { color: var(--text-secondary); opacity: 0.5; }

  .hd-search-clear {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }

  .hd-search-results { margin-bottom: 3rem; }

  .hd-search-count {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  /* Stages */
  .hd-stages {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .hd-stage-block {
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    overflow: hidden;
  }

  .hd-stage-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    background: rgba(255,255,255,0.02);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    flex-wrap: wrap;
  }

  .hd-stage-toggle {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: inherit;
    cursor: pointer;
    text-align: left;
    flex: 1;
    min-width: 0;
    transition: background 0.15s;
  }

  .hd-stage-toggle:hover { background: rgba(255,255,255,0.03); }

  .hd-stage-num {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--text-secondary);
    letter-spacing: 0.12em;
    flex-shrink: 0;
  }

  .hd-stage-name {
    font-size: 1rem;
    font-weight: 700;
    flex: 1;
    min-width: 0;
  }

  .hd-stage-count {
    font-size: 0.75rem;
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .hd-stage-tactics-link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--accent-green);
    text-decoration: none;
    border-left: 1px solid rgba(255,255,255,0.07);
    white-space: nowrap;
    transition: opacity 0.15s;
    flex-shrink: 0;
  }

  .hd-stage-tactics-link:hover { opacity: 0.75; }

  .hd-stage-body { padding: 1.5rem; }

  .hd-stage-meta {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .hd-meta-pill {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .hd-meta-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    font-weight: 600;
    padding-top: 2px;
    flex-shrink: 0;
  }

  .hd-meta-stars { display: flex; gap: 2px; }

  .hd-meta-text {
    font-size: 0.85rem;
    color: var(--text-primary);
    line-height: 1.4;
    max-width: 400px;
  }

  /* Fly rows — used in both views */
  .hd-patterns-list {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .hd-fly-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.875rem 1rem;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.15s;
  }

  .hd-fly-row:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.12);
    transform: translateX(3px);
  }

  .hd-fly-main {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
  }

  .hd-fly-name {
    color: var(--text-primary);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .hd-fly-desc {
    color: var(--text-secondary);
    font-size: 0.8rem;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hd-fly-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .hd-fly-sizes {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-green);
    white-space: nowrap;
  }

  .hd-fly-arrow { color: var(--text-secondary); opacity: 0.5; }

  .hd-fly-row:hover .hd-fly-arrow { color: var(--accent-green); opacity: 1; }

  /* Bottom CTA */
  .hd-bottom-cta {
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-top: 3rem;
  }

  .hd-bottom-cta-inner {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 2rem;
  }

  .hd-cta-icon { color: var(--accent-green); flex-shrink: 0; }

  .hd-bottom-cta-inner h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .hd-bottom-cta-inner p {
    color: var(--text-secondary);
    font-size: 0.88rem;
    line-height: 1.5;
    margin: 0;
    max-width: 400px;
  }

  .hd-bottom-cta-btns {
    display: flex;
    gap: 0.75rem;
    flex-shrink: 0;
    margin-left: auto;
    flex-wrap: wrap;
  }

  /* Stage detail layout */
  .hd-stage-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 900px) {
    .hd-stage-grid { grid-template-columns: 340px 1fr; }
  }

  .hd-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hd-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 1.5rem;
  }

  .hd-card-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--text-secondary);
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .hd-actionable-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  .hd-actionable-row .hd-card-label { margin-bottom: 0; }

  .mt-6 { margin-top: 1.5rem; }

  .hd-stars { display: flex; gap: 2px; font-size: 1.1rem; }

  .star-on { color: var(--accent-green); }
  .star-off { color: rgba(255,255,255,0.1); }

  .hd-body-text {
    color: var(--text-primary);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
  }

  .hd-rig-text {
    color: var(--text-primary);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
    padding: 0.75rem 1rem;
    background: rgba(74, 222, 128, 0.05);
    border-left: 3px solid rgba(74, 222, 128, 0.3);
    border-radius: 0 4px 4px 0;
  }

  .hd-tactics-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .hd-tactics-list li {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    padding-left: 1rem;
    position: relative;
  }

  .hd-tactics-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--accent-green);
    font-size: 0.75rem;
  }

  .hd-cta-stack { display: flex; flex-direction: column; gap: 0.75rem; }

  .hd-cta-block {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    padding: 1.25rem;
    text-align: center;
  }

  .hd-cta-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .hd-right h2, .hd-patterns-heading {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  .hd-patterns-sub {
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .hd-back-link {
    margin-top: 2rem;
    font-size: 0.85rem;
  }

  .hd-back-link a {
    color: var(--accent-green);
    text-decoration: none;
  }

  .w-full { width: 100%; }
  .text-center { text-align: center; }
  .mt-4 { margin-top: 1rem; }
  .inline-block { display: inline-block; }
`;function n1(){const{flyId:r}=_h(),[u]=a0(),f=Vc(),o=u.get("from"),h=u.get("cat"),m=u.get("stage"),y=r?K0[r]:null,[E,S]=T.useState(y?.colors?.[0]||null),v=()=>f(-1);if(!y)return s.jsx("div",{className:"fd-page",children:s.jsxs("div",{className:"container fd-not-found",children:[s.jsx("h1",{children:"Fly Not Found"}),s.jsx("p",{children:"We don't have a dedicated page for that fly yet — check back as we build out the archive."}),s.jsx("button",{onClick:v,className:"btn-secondary mt-4",children:"← Go Back"})]})});let C="← The Quiver",p="/quiver";return o==="hatch"&&(m&&h?(C="← Back to Stage",p=`/hatch-guide/${h}/${m}`):h?(C="← Back to Hatch Guide",p=`/hatch-guide/${h}`):(C="← Hatch Guide",p="/hatch-guide")),s.jsxs("div",{className:"fd-page",children:[s.jsxs("div",{className:"container fd-container",children:[s.jsxs("nav",{className:"fd-breadcrumb",children:[s.jsx($,{to:p,className:"fd-back-link",children:C}),y.hatchCategory&&o!=="hatch"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"fd-sep",children:"/"}),s.jsx($,{to:`/hatch-guide/${y.hatchCategory}`,className:"fd-crumb-link",children:"Hatch Guide"}),y.hatchStage&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"fd-sep",children:"/"}),s.jsx($,{to:`/hatch-guide/${y.hatchCategory}/${y.hatchStage}`,className:"fd-crumb-link",children:y.hatchStage.charAt(0).toUpperCase()+y.hatchStage.slice(1)})]})]}),s.jsx("span",{className:"fd-sep",children:"/"}),s.jsx("span",{className:"fd-current",children:y.name})]}),s.jsxs("div",{className:"fd-grid",children:[s.jsxs("div",{className:"fd-image-col",children:[s.jsx("div",{className:"fd-img-placeholder",children:"🪶"}),s.jsx("div",{className:"fd-type-badge",children:y.type}),s.jsxs("div",{className:"fd-size-badge",children:["Sizes: ",y.sizes]})]}),s.jsxs("div",{className:"fd-info-col",children:[s.jsx("h1",{className:"fd-name",children:y.name}),s.jsx("p",{className:"fd-desc",children:y.description}),s.jsxs("div",{className:"fd-when-card",children:[s.jsx("h3",{children:"When It Works"}),s.jsx("p",{children:y.whenItWorks})]}),y.hatchCategory&&s.jsxs("div",{className:"fd-connects",children:[s.jsx("h3",{children:"Connected to the Hatch Guide"}),s.jsxs("p",{children:["This fly is part of the ",s.jsx("strong",{children:y.hatchCategory.charAt(0).toUpperCase()+y.hatchCategory.slice(1)})," section. Dig deeper into lifecycle, tactics, and more patterns."]}),s.jsxs($,{to:y.hatchStage?`/hatch-guide/${y.hatchCategory}/${y.hatchStage}?from=fly&flyId=${r}`:`/hatch-guide/${y.hatchCategory}?from=fly&flyId=${r}`,className:"btn-secondary mt-4 inline-block",children:[s.jsx(y0,{size:14,style:{display:"inline",marginRight:"6px"}}),"View ",y.hatchCategory.charAt(0).toUpperCase()+y.hatchCategory.slice(1)," Hatch Guide"]})]}),y.colors&&s.jsxs("div",{className:"fd-colors-section",children:[s.jsx("h3",{className:"section-title",children:"Color Options"}),s.jsx("div",{className:"fd-color-grid",children:y.colors.map(k=>s.jsxs("button",{className:`fd-color-btn ${E?.name===k.name?"active":""}`,onClick:()=>S(k),title:k.name,children:[s.jsx("span",{className:"color-swatch",style:{backgroundColor:k.hex}}),s.jsx("span",{className:"color-name",children:k.name})]},k.name))})]}),s.jsxs("div",{className:"fd-cta-row",children:[o==="hatch"?s.jsxs($,{to:p,className:"btn-primary",children:[s.jsx(Qc,{size:15,style:{display:"inline",marginRight:"6px"}}),"Back to Hatch Guide"]}):s.jsxs($,{to:"/quiver",className:"btn-primary",children:[s.jsx(Qc,{size:15,style:{display:"inline",marginRight:"6px"}}),"Back to The Quiver"]}),s.jsxs($,{to:"/shop-packs",className:"btn-secondary",children:[s.jsx(Jh,{size:14,style:{display:"inline",marginRight:"6px"}}),"Shop Flies"]})]})]})]})]}),s.jsx("style",{children:`
        .fd-page {
          padding: 8rem 0 8rem;
          min-height: calc(100vh - 80px);
        }

        .fd-not-found {
          text-align: center;
          padding: 8rem 2rem;
        }

        .fd-container {
          max-width: 960px;
          margin: 0 auto;
        }

        .fd-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .fd-back-link {
          color: var(--accent-green);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .fd-back-link:hover { opacity: 0.75; }

        .fd-crumb-link {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .fd-crumb-link:hover { color: var(--accent-green); }

        .fd-sep {
          color: var(--text-secondary);
          opacity: 0.35;
        }

        .fd-current { color: var(--text-secondary); }

        .fd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .fd-grid { grid-template-columns: 260px 1fr; }
        }

        /* Left col */
        .fd-image-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .fd-img-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }

        .fd-type-badge {
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.25);
          color: var(--accent-green);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
        }

        .fd-size-badge {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Right col */
        .fd-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .fd-name {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.1;
        }

        .fd-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
          margin: 0;
        }

        .fd-when-card {
          background: rgba(74, 222, 128, 0.05);
          border: 1px solid rgba(74, 222, 128, 0.15);
          border-left: 4px solid var(--accent-green);
          padding: 1.25rem 1.5rem;
          border-radius: 0 6px 6px 0;
        }

        .fd-when-card h3 {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent-green);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .fd-when-card p {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .fd-connects {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .fd-connects h3 {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
          font-weight: 700;
        }

        .fd-connects p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }

        .fd-cta-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }

        .mt-4 { margin-top: 1rem; }
        .inline-block { display: inline-block; }

        /* Color Swatches */
        .fd-colors-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .section-title {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .fd-color-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .fd-color-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-secondary);
        }

        .fd-color-btn:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.2);
        }

        .fd-color-btn.active {
          background: rgba(74, 222, 128, 0.1);
          border-color: var(--accent-green);
          color: var(--text-primary);
        }

        .color-swatch {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .color-name {
          font-size: 0.85rem;
          font-weight: 500;
        }
      `})]})}function i1({onMenuClick:r,isMenuOpen:u}){return s.jsxs("nav",{className:"navbar",children:[s.jsxs("div",{className:"navbar-left",children:[s.jsx("button",{onClick:r,className:`menu-icon-trigger ${u?"open":""}`,"aria-label":"Open Selection Chart",children:s.jsx("img",{src:"/brand/logo-black-fish-white-arrow.png",alt:"Menu Icon",className:"navbar-icon-img"})}),s.jsx("span",{style:{width:"1rem"}}),s.jsx($,{to:"/",className:"brand-title",children:"ARROWHEAD FLIES"})]}),s.jsx("div",{className:"navbar-right",children:s.jsx("a",{href:"https://instagram.com/arrowheadflies",target:"_blank",rel:"noopener noreferrer",className:"social-link-icon","aria-label":"Instagram",children:s.jsx(Vh,{size:20})})}),s.jsx("style",{children:`
        .navbar-brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .brand-logo-full {
          height: 32px;
          width: auto;
          filter: brightness(1.2);
        }

        .navbar-left {
          display: flex;
          align-items: center;
        }

        .menu-icon-trigger {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          height: 52px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 1rem;
          overflow: hidden;
        }

        .trigger-visual {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-bars-icon {
          color: #FFFFFF;
          display: block;
          width: 22px;
          height: 22px;
          opacity: 0.8;
          transition: all 0.4s ease;
        }

        .menu-icon-trigger:hover .menu-bars-icon {
          opacity: 1;
          transform: scale(1.1);
        }

        .menu-icon-trigger:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }

        .menu-icon-trigger:hover .menu-bars-icon {
          color: var(--text-primary);
        }

        .menu-icon-trigger.open {
          border-color: var(--accent-green);
          background: rgba(74, 222, 128, 0.1);
        }

        .menu-icon-trigger.open .menu-bars-icon {
          color: var(--accent-green);
        }

        .navbar-icon-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-icon-trigger.open .navbar-icon-img {
          transform: rotate(90deg);
        }

        .social-link-icon {
          color: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }

        .social-link-icon:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .menu-icon-trigger {
            min-width: 60px;
            height: 48px;
            padding: 0 0.5rem;
          }
          .social-link-icon {
            padding: 0.4rem;
          }
          .navbar-icon-img {
            width: 36px;
            height: 36px;
          }
          .brand-logo-full {
            height: 24px;
          }
        }
      `})]})}const r1=({isOpen:r,onClose:u})=>{const f=[{title:"HOME",description:"The landing page & Arrowhead philosophy",icon:s.jsx(_0,{size:20}),path:"/",color:"#f87171"},{title:"THE QUIVER",description:"Fly Selection Matrix",icon:s.jsx(fr,{size:20}),path:"/quiver",color:"#38bdf8"},{title:"SHOP PACKS",description:"Curated Confidence Packs",icon:s.jsx($c,{size:20}),path:"/shop-packs",color:"#facc15"},{title:"HATCH GUIDE",description:"Tactical fly selection",icon:s.jsx(or,{size:20}),path:"/hatch-guide",color:"var(--accent-green)"},{title:"INSTAGRAM",description:"Latest patterns",icon:s.jsx(Vh,{size:20}),path:"https://instagram.com/arrowheadflies",external:!0,color:"#e879f9"}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`nav-drawer-backdrop ${r?"visible":""}`,onClick:u}),s.jsxs("div",{className:`nav-drawer ${r?"open":""}`,children:[s.jsx("div",{className:"nav-drawer-list",children:f.map((o,h)=>o.external?s.jsxs("a",{href:o.path,target:"_blank",rel:"noopener noreferrer",className:"nav-drawer-item",onClick:u,style:{"--delay":`${h*.1}s`},children:[s.jsx("div",{className:"item-icon",style:{color:o.color},children:o.icon}),s.jsxs("div",{className:"item-content",children:[s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.description})]})]},h):s.jsxs($,{to:o.path,className:"nav-drawer-item",onClick:u,style:{"--delay":`${h*.1}s`},children:[s.jsx("div",{className:"item-icon",style:{color:o.color},children:o.icon}),s.jsxs("div",{className:"item-content",children:[s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.description})]})]},h))}),s.jsx("div",{className:"nav-drawer-footer",children:s.jsx("p",{children:"Tactical gear for the technical angler."})}),s.jsx("style",{children:`
          .nav-drawer-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            z-index: 800;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
          }

          .nav-drawer-backdrop.visible {
            opacity: 1;
            pointer-events: auto;
          }

          .nav-drawer {
            position: fixed;
            top: 80px;
            left: -320px;
            width: 320px;
            height: calc(100% - 80px);
            background: #0A0B0C;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            z-index: 900;
            display: flex;
            flex-direction: column;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 20px 0 50px rgba(0, 0, 0, 0.5);
          }

          .nav-drawer.open {
            transform: translateX(320px);
          }

          .nav-drawer-header {
            padding: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-drawer-brand {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: 800;
            letter-spacing: 0.2em;
            color: var(--text-primary);
            font-size: 0.9rem;
          }

          .nav-drawer-logo {
            width: 32px;
            height: 32px;
            object-fit: contain;
            border-radius: 4px;
          }

          .nav-drawer-list {
            flex: 1;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .nav-drawer-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
            opacity: 0;
            transform: translateX(-20px);
          }

          .nav-drawer.open .nav-drawer-item {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) var(--delay);
          }

          .nav-drawer-item:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .item-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .item-content h3 {
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: var(--text-primary);
            margin: 0;
          }

          .item-content p {
            font-size: 0.7rem;
            color: var(--text-secondary);
            margin: 0.1rem 0 0 0;
            opacity: 0.7;
          }

          .nav-drawer-footer {
            padding: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            opacity: 0.4;
          }

          .nav-drawer-footer p {
            font-size: 0.65rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            text-align: center;
            margin: 0;
          }

          @media (max-width: 480px) {
            .nav-drawer {
              width: 280px;
              left: -280px;
              top: 72px;
              height: calc(100% - 72px);
            }
            .nav-drawer.open {
              transform: translateX(280px);
            }
          }
        `})]})]})};function s1(){const[r,u]=T.useState(!1);return s.jsx($y,{children:s.jsxs("div",{className:"app-container",children:[s.jsx(i1,{onMenuClick:()=>u(!r),isMenuOpen:r}),s.jsx(r1,{isOpen:r,onClose:()=>u(!1)}),s.jsx("main",{children:s.jsxs(Ey,{children:[s.jsx(na,{path:"/",element:s.jsx(J0,{})}),s.jsx(na,{path:"/quiver",element:s.jsx(bh,{})}),s.jsx(na,{path:"/quiver/:location",element:s.jsx(bh,{})}),s.jsx(na,{path:"/shop-packs",element:s.jsx(t1,{})}),s.jsx(na,{path:"/hatch-guide",element:s.jsx(l1,{})}),s.jsx(na,{path:"/hatch-guide/:category",element:s.jsx(Sh,{})}),s.jsx(na,{path:"/hatch-guide/:category/:stageId",element:s.jsx(Sh,{})}),s.jsx(na,{path:"/fly/:flyId",element:s.jsx(n1,{})})]})}),s.jsx("footer",{className:"footer",children:s.jsxs("div",{className:"container footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("img",{src:"/brand/logo-icon.jpg",alt:"Arrowhead",style:{height:"40px",marginBottom:"1rem"}}),s.jsx("span",{className:"brand-title-small",children:"ARROWHEAD FLIES"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"https://instagram.com/arrowheadflies",target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),s.jsx("a",{href:"mailto:arrowheadflies@gmail.com",children:"Contact"})]}),s.jsxs("div",{className:"footer-copyright",children:["© ",new Date().getFullYear()," Arrowhead Flies. All rights reserved."]})]})}),s.jsx("style",{children:`
          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          main {
            flex: 1;
          }

          .footer {
            background-color: #0A0B0C;
            padding: 4rem 0;
            border-top: 1px solid var(--border-color);
          }

          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .footer-content {
              flex-direction: row;
              justify-content: space-between;
            }
          }

          .brand-title-small {
            font-weight: 700;
            letter-spacing: 0.2em;
            font-size: 1rem;
          }

          .footer-links {
            display: flex;
            gap: 2rem;
          }

          .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s;
          }

          .footer-links a:hover {
            color: var(--text-primary);
          }

          .footer-copyright {
            color: var(--text-secondary);
            font-size: 0.85rem;
            opacity: 0.6;
          }
        `})]})})}Cg.createRoot(document.getElementById("root")).render(s.jsx(T.StrictMode,{children:s.jsx(s1,{})}));
