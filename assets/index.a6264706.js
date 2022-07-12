import{s as a,r as i,S as c,j as e,a as s,N as d,u as m,O as p}from"./index.4f2b28fa.js";import{p as l}from"./index.ce6a1c33.js";import{S as u}from"./index.5edfc3b7.js";import"./use-props-value.524ff333.js";import"./index.a8cd9ae2.js";import"./tslib.es6.618bc104.js";const h=a.div`
  .navbar {
    height: 2.24rem;
    background: #fff;
    border-bottom: 0.05rem solid #ccc;
    .nav-box {
      height: 1.74rem !important;
      line-height: 1.74rem !important;
    }
    .nav-item {
      width: auto !important;
      position: relative;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      justify-content: center;
      font-size: 0.8rem;
      color: #666;
      border-bottom: 1px solid #ebebeb;
      &.active::after {
        content: "";
        background-color: red;
        width: 2.4rem;
        height: 0.08rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .box {
      width: 25%;
    }
    .searchbar {
      width: 25%;
      margin-right: 0.5rem;
      margin-top: 0.24rem;
      .adm-search-bar{
        .adm-search-bar-input-box {
        padding-left: 0.5rem;
        border-radius: 0.6rem;
      }
      }
    }
  }
`,o=()=>{let r=null;return i.exports.useEffect(()=>{r||(r=new c(".navbar"))},[]),e(h,{children:e("div",{className:"navbar swiper-container",children:s("div",{className:"nav-box swiper-wrapper",children:[[{id:1,desc:"\u9644\u8FD1\u95E8\u5E97",path:"/nearby"},{id:2,desc:"\u5E38\u53BB\u95E8\u5E97",path:"/often"}].map((t,n)=>e(d,{index:n,to:`/food${t.path}`,className:"nav-item swiper-slide",children:t.desc},t.id)),e("div",{className:"box"}),e("div",{className:"searchbar",children:e(u,{className:"search",placeholder:"\u641C\u7D22\u95E8\u5E97"})})]})})})};o.propTyes={id:l.string.isRequired};const b=a.div`
    text-align: center;
`,y=()=>{const r=m();return i.exports.useEffect(()=>{r("/food/nearby")},[]),s(b,{children:[e("div",{className:"list",children:"\u95E8\u5E97\u5217\u8868"}),e(o,{}),e(p,{})]})};export{y as Food,y as default};
