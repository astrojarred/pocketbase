import{S as v,i as y,s as w,F as x,c as C,m as g,t as $,a as L,d as H,R as M,G as P,E as S,g as r,o as a,e as u,b as _,f,u as b,y as p}from"./index.2a48c906.js";function T(o){let t,s,e,n,l;return{c(){t=u("div"),t.innerHTML=`<div class="icon"><i class="ri-error-warning-line"></i></div> 
            <div class="content txt-bold"><p>Invalid or expired verification token.</p></div>`,s=_(),e=u("button"),e.textContent="Close",f(t,"class","alert alert-danger"),f(e,"type","button"),f(e,"class","btn btn-secondary btn-block")},m(i,c){r(i,t,c),r(i,s,c),r(i,e,c),n||(l=b(e,"click",o[4]),n=!0)},p,d(i){i&&a(t),i&&a(s),i&&a(e),n=!1,l()}}}function F(o){let t,s,e,n,l;return{c(){t=u("div"),t.innerHTML=`<div class="icon"><i class="ri-checkbox-circle-line"></i></div> 
            <div class="content txt-bold"><p>Successfully verified email address.</p></div>`,s=_(),e=u("button"),e.textContent="Close",f(t,"class","alert alert-success"),f(e,"type","button"),f(e,"class","btn btn-secondary btn-block")},m(i,c){r(i,t,c),r(i,s,c),r(i,e,c),n||(l=b(e,"click",o[3]),n=!0)},p,d(i){i&&a(t),i&&a(s),i&&a(e),n=!1,l()}}}function I(o){let t;return{c(){t=u("div"),t.innerHTML='<div class="loader loader-lg"><em>Please wait...</em></div>',f(t,"class","txt-center")},m(s,e){r(s,t,e)},p,d(s){s&&a(t)}}}function R(o){let t;function s(l,i){return l[1]?I:l[0]?F:T}let e=s(o),n=e(o);return{c(){n.c(),t=S()},m(l,i){n.m(l,i),r(l,t,i)},p(l,i){e===(e=s(l))&&n?n.p(l,i):(n.d(1),n=e(l),n&&(n.c(),n.m(t.parentNode,t)))},d(l){n.d(l),l&&a(t)}}}function V(o){let t,s;return t=new x({props:{nobranding:!0,$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){C(t.$$.fragment)},m(e,n){g(t,e,n),s=!0},p(e,[n]){const l={};n&67&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){L(t.$$.fragment,e),s=!1},d(e){H(t,e)}}}function q(o,t,s){let{params:e}=t,n=!1,l=!1;i();async function i(){s(1,l=!0);const d=new M("../");try{const m=P(e==null?void 0:e.token);await d.collection(m.collectionId).confirmVerification(e==null?void 0:e.token),s(0,n=!0)}catch{s(0,n=!1)}s(1,l=!1)}const c=()=>window.close(),k=()=>window.close();return o.$$set=d=>{"params"in d&&s(2,e=d.params)},[n,l,e,c,k]}class G extends v{constructor(t){super(),y(this,t,q,V,w,{params:2})}}export{G as default};
