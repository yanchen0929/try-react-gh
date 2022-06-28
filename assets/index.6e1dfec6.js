import{s as i,r as a,S as n,j as e,N as d,u as c,a as p,O as l}from"./index.09cabdc6.js";import{p as u}from"./index.ce6a1c33.js";const m=i.div`
    
`,h=i.div`
  .navbar {
    height: 2.18rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .nav-box {
      height: 2.18rem !important;
      line-height: 2.18rem !important;
    }
    .nav-item {
      width: auto !important;
      position: relative;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      justify-content: center;
      font-size: 1rem;
      color: #666;
      border-bottom: 0.06rem solid #ebebeb;
      &.active::after {
        content: "";
        background-color: red;
        width: 3rem;
        height: 0.1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`,s=()=>{let t=null;return a.exports.useEffect(()=>{t||(t=new n(".navbar"))},[]),e(h,{children:e("div",{className:"navbar swiper-container",children:e("div",{className:"nav-box swiper-wrapper",children:[{id:1,desc:"\u8FDB\u884C\u4E2D",path:"/ing"},{id:2,desc:"\u5386\u53F2",path:"/history"},{id:3,desc:"\u9000\u5355",path:"/back"}].map((r,o)=>e(d,{index:o,to:`/order${r.path}`,className:"nav-item swiper-slide",children:r.desc},r.id))})})})};s.propTyes={id:u.string.isRequired};const v=()=>{const t=c();return a.exports.useEffect(()=>{t("/order/ing")},[]),p(m,{children:[e(s,{}),e(l,{})]})};export{v as Order,v as default};
