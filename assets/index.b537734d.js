import{r as b,C as f,D as g,j as n,E as v,F as h,a as x}from"./index.09cabdc6.js";function y(e,l,o,r){function c(d){return d instanceof o?d:new o(function(i){i(d)})}return new(o||(o=Promise))(function(d,i){function m(a){try{s(r.next(a))}catch(u){i(u)}}function p(a){try{s(r.throw(a))}catch(u){i(u)}}function s(a){a.done?d(a.value):c(a.value).then(m,p)}s((r=r.apply(e,l||[])).next())})}const w="adm-dot-loading",k={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},$={color:"default"},z=b.exports.memo(e=>{var l;const o=f($,e);return g(o,n("div",{style:{color:(l=k[o.color])!==null&&l!==void 0?l:o.color},className:v("adm-loading",w),children:n("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"},children:n("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:n("g",{transform:"translate(-100.000000, -71.000000)",children:n("g",{transform:"translate(95.000000, 71.000000)",children:n("g",{transform:"translate(5.000000, 0.000000)",children:[0,1,2].map(r=>n("rect",{fill:"currentColor",x:20+r*26,y:"16",width:"8",height:"8",rx:"2",children:n("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:`${r*.2}s`,repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"})},r))})})})})})}))});var C=z;function D(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}function I(){return h?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}const t="adm-button",L={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:n(C,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},T=b.exports.forwardRef((e,l)=>{const o=f(L,e),[r,c]=b.exports.useState(!1),d=b.exports.useRef(null),i=o.loading==="auto"?r:o.loading,m=o.disabled||i;b.exports.useImperativeHandle(l,()=>({get nativeElement(){return d.current}}));const p=s=>y(void 0,void 0,void 0,function*(){if(!o.onClick)return;const a=o.onClick(s);if(D(a))try{c(!0),yield a,c(!1)}catch(u){throw c(!1),u}});return g(o,n("button",{ref:d,type:o.type,onClick:p,className:v(t,o.color?`${t}-${o.color}`:null,{[`${t}-block`]:o.block,[`${t}-disabled`]:m,[`${t}-fill-outline`]:o.fill==="outline",[`${t}-fill-none`]:o.fill==="none",[`${t}-mini`]:o.size==="mini",[`${t}-small`]:o.size==="small",[`${t}-large`]:o.size==="large",[`${t}-loading`]:i},`${t}-shape-${o.shape}`),disabled:m,onMouseDown:o.onMouseDown,onMouseUp:o.onMouseUp,onTouchStart:o.onTouchStart,onTouchEnd:o.onTouchEnd,children:i?x("div",{className:`${t}-loading-wrapper`,children:[o.loadingIcon,o.loadingText]}):o.children}))});var N=T;export{N as B,I as i};