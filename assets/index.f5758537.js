import{r as c,C as w,D as u,R as n,E as x,V as k,W as N,s as v,j as e,a as r,T as y,u as L,X as z,M as g,Y as E}from"./index.4f2b28fa.js";import{B as b}from"./index.a8cd9ae2.js";import{S as F}from"./index.5edfc3b7.js";import{g as B,a as S,R as C}from"./request.609a8627.js";import"./tslib.es6.618bc104.js";import"./use-props-value.524ff333.js";function T(t){return c.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),c.exports.createElement("g",{id:"LeftOutline-LeftOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.exports.createElement("g",{id:"LeftOutline-\u7F16\u7EC4"},c.exports.createElement("rect",{id:"LeftOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),c.exports.createElement("path",{d:"M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",id:"LeftOutline-\u8DEF\u5F84",fill:"currentColor",fillRule:"nonzero"}))))}const m="adm-nav-bar",_={back:"",backArrow:!0},D=t=>{const i=w(_,t),{back:s,backArrow:o}=i;return u(i,n.createElement("div",{className:x(m)},n.createElement("div",{className:`${m}-left`,role:"button"},s!==null&&n.createElement("div",{className:`${m}-back`,onClick:i.onBack},o&&n.createElement("span",{className:`${m}-back-arrow`},o===!0?n.createElement(T,null):o),n.createElement("span",{"aria-hidden":"true"},s)),i.left),n.createElement("div",{className:`${m}-title`},i.children),n.createElement("div",{className:`${m}-right`},i.right)))};var O=D;const A=t=>({type:k,data:t}),j=()=>t=>{B().then(i=>{t(A(i.data.shoplist))})},I=t=>({type:N,data:t}),M=()=>t=>{S().then(i=>{t(I(i.data.milklist))})},P=v.div`
    .bigbox {
        height: 4rem;
        .left {
            width: 50%;
            float: left;
            .left-up {
                font-size: 0.9rem;
                margin: 0.5rem;
            }
            .left-down {
                margin: 0.5rem;
            }
        }
        .right {
            float: right;
            margin: 0.5rem;
        }
    }
    .navbar {
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        .navbar-left {
            width: 20%;
            display: flex;
            img{
                width: 100%;
                height: 100%;
                margin: 0.1rem;
            }
        }
        .navbar-middle {
            flex: 1;
            position: relative;
            .navbar-middle-left {
                position: absolute;
                top: 40%;
                left: 5%;
                font-size: 0.8rem;
            }
            .navbar-middle-right {
                position: absolute;
                top: 37%;
                left: 28%;
                font-size: 1rem;
                font-weight: 700;
                color: #000;
            }
        }
        .navbar-right {
            background-color: #fff;
            float: right;
            width: 15%;
            display: flex;
            margin-top: 0.5rem;
            margin: 0.5rem;
            .btn {
                width: 8rem;
                font-size: 0.9rem;
            }
        }
    }
`,R=v.div`
  .sale-box {
    height: 40rem;
    overflow: hidden;
    background-color: #fff;
    background: #fff !important;
    .sale-main {
      display: -webkit-flex;
      display: flex;
      height: 100%;
      .sale-left {
        width: 7rem;
        overflow-y: auto;
        height: 100%;
        background-color: #f8f8f8;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 1.066667rem;
        padding-bottom: 10.666667vw;
        ul {
          flex: none;
          position: relative;
          z-index: 0;
          list-style: none;
          .sale-left-name {
            a {
              display: block;
              position: relative;
              padding: 0.466667rem 0.2rem;
              padding: 4.666667vw 2vw;
              font-size: 0.128rem;
              height: 5.65rem;
              text-align: center;
              line-height: 3.65rem;
              /* color: #f9e8a3; */
              background-color: #f8f8f8;
              color: #000;
              &:active {
                background-color: #fff;
              }
              span {
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }

  .sale-detail-box {
    position: relative;
    height: 100%;
    width: 18.9rem;
    // width: 31.8vw;
    .sale-detail {
      height: 100%;
      padding-bottom: 0.424rem;
      padding-bottom: 4.24vw;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  .menu-box {
    height: 100%;
    padding-bottom: 0.424rem;
    padding-bottom: 4.24vw;
    overflow-y: auto;
    .menu-detail {
      margin: 0;
      padding: 0;
      display: block;
      margin-block-start: 0.25em;
      margin-block-end: 0.25em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
  .menu-top {
    position: relative;
    margin-left: 0.1rem;
    margin-left: 1vw;
    padding: 0.08rem 0.32rem 0.08rem 0;
    padding: 0.8vw 0.32vw 0.8vw 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    .top-title {
      margin-right: 0.05rem;
      margin-right: 0.5vw;
      font-weight: 700;
      font-size: 0.828rem;
      color: #666;
      -webkit-flex: none;
      flex: none;
    }
    span {
      display: block;
      -webkit-flex: 1;
      flex: 1;
      color: #999;
      font-size: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .menu-item {
    height: auto !important;
    display: flex;
    section {
      -webkit-flex: 1;
      flex: 1;
      position: relative;
      padding-bottom: 0.666667rem;
      padding-bottom: 6.666667vw;
      padding-right: 0.4rem;
      padding-right: 4vw;
      .fooddetail-info {
        position: relative;
        padding-right: 0.4rem;
        padding-right: 4vw;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: start;
        align-items: start;
        span {
          font-weight: 700;
          /* overflow: hidden; */
          font-size: 0.9rem;
          white-space: nowrap;
          width: 1.6rem;
          width: 16vw;
          text-overflow: ellipsis;
        }
      }
      .fooddetail-sale {
        margin: 0.173333rem 0 !important;
        margin: 1.733333vw 0 !important;
        color: #999;
        font-size: 0.8rem;
        line-height: 1;
        min-height: 1em;
        span:nth-of-type(1) {
          vertical-align: middle;
        }
        span:nth-of-type(2) {
          margin-left: 1.066667vw;
          vertical-align: middle;
        }
      }
      .fooddetail-sale {
        display: flex;
      }
      .sale_price {
        font-size: 1rem;
        line-height: 0.426667rem;
        line-height: 4.266667vw;
        color: #ff5339;
        padding-bottom: 0.093333rem;
        padding-bottom: 0.933333vw;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: baseline;
        align-items: baseline;
        position: absolute;
        bottom: 0;
        span {
          margin-right: 0.266667vw;
        }
        .sale_price_right {
          font-size: 0.5rem;
          color: #999;
        }
      }
      .food-btn {
        position: absolute;
        right: 0.4rem;
        right: 4vw;
        bottom: 0.066667rem;
        bottom: 0.666667vw;
        span {
          padding-bottom: 0.2rem;
          display: inline-flex;
          font-size: 1.5rem;
          width: 1.5rem;
          height: 1.5rem;
          -webkit-align-items: center;
          align-items: center;
          justify-content: center;
          background: red;
          border-radius: 50%;
          color: #fff;
        }
      }
    }
  }
  .img-box {
    width: 2.533333rem;
    width: 25.333333vw;
    height: 2.8rem !important;
    height: 28vw !important;
    -webkit-flex: none;
    flex: none;
    margin-right: 0.266667rem;
    margin-right: 2.666667vw;
    position: relative;
  }
  .sale-img {
    width: 100%;
    border-radius: 0.053333rem;
    border-radius: 0.533333vw;
  }
  //footer
  .footer-box {
    z-index: 11;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61, 61, 63, 0.9);
    -webkit-backdrop-filter: blur(0.266667rem);
    -webkit-backdrop-filter: blur(2.666667vw);
    height: 1.28rem;
    height: 12.8vw;
    a {
      text-decoration: none;
      height: 100%;
      width: 2.8rem;
      width: 28vw;
      color: #fff;
      text-align: center;
      text-decoration: none;
      font-size: 0.2rem;
      font-weight: 700;
      -webkit-user-select: none;
      user-select: none;
      line-height: 1.28rem;
      line-height: 12.8vw;
    }
  }
  .footer-text {
    flex: 1;
    p:nth-of-type(1) {
      font-size: 0.2rem;
      line-height: normal;
      color: #fff;
      margin: 0;
      font-weight: 400;
      span {
        font-size: 0.7em;
        color: #999;
      }
    }
    p:nth-of-type(2) {
      color: #999;
      font-size: 0.1rem;
      margin: 0;
      font-weight: 400;
    }
  }
  .detail-send {
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 0.16rem;
    font-weight: 700;
    -webkit-user-select: none;
    user-select: none;
    line-height: 1.28rem;
    line-height: 12.8vw;
  }
  .footer-top {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    bottom: 1.8rem;
    bottom: 18vw;
    z-index: 11;
    section {
      background-color: #fffad6;
      border-top: 0.013333rem solid #f9e8a3;
      border-top: 0.133333vw solid #f9e8a3;
      opacity: 0.96;
      line-height: 0.533333rem;
      line-height: 5.333333vw;
      font-size: 0.1rem;
      text-align: center;
      span {
        color: #333333;
      }
    }
  }
`;function $({detail:t}){const i=()=>t.map(a=>e("div",{className:"sale-left-name",children:e("a",{onClick:()=>s(a.id),children:e("span",{children:a.name})})},a.id)),s=a=>{if(a){let d=document.getElementById(a);d&&d.scrollIntoView({block:"start",behavior:"smooth"})}},o=()=>t.map((a,d)=>r("div",{className:"menu-box-detail",children:[r("div",{className:"menu-top",children:[e("div",{className:"top-title",id:a.id,children:a.name}),e("span",{children:a.description})]}),e("div",{className:"menu-box",children:a.foods.map((l,f)=>e("div",{className:"menu-detail",children:e("div",{className:"menu-detail-box",children:r("div",{className:"menu-item",children:[e("div",{className:"img-box",children:e("img",{className:"sale-img",src:l.img,alt:""})}),r("section",{children:[e("p",{className:"fooddetail-info",children:e("span",{children:l.name})}),e("p",{className:"fooddetail-sale",children:e("span",{children:l.month_sales})}),e("div",{className:"fooddetails-space"}),r("span",{className:"sale_price",children:[r("span",{children:["\uFFE5",l.lowest_price]}),e("span",{className:"sale_price_right",children:"\u8D77"})]}),e("div",{className:"food-btn",children:e("span",{children:"+"})})]})]},f)})},f))})]},a.id));return e(R,{children:e("div",{className:"sale-box",children:r("div",{className:"sale-main",children:[e("div",{className:"sale-left",children:e("ul",{children:i()})}),e("div",{className:"sale-detail-box",children:e("div",{className:"sale-detail",children:o()})})]})})})}var W="/assets/shopping.aa00a215.png";const H=t=>{const{shopList:i,milkTeaList:s}=t,{getShowListDispatch:o,getMilkTeaListDispatch:a}=t,d=L();let{id:l}=z();if(!l){d("/home");return}return c.exports.useEffect(()=>{o(),a()},[]),r(P,{children:[e(O,{back:"",onBack:()=>d(-1),children:e(F,{className:"search",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D"})}),e("div",{className:"bigbox",children:(p=>{if(p.length>0)return p.filter(h=>h.id==l).map(h=>r("div",{children:[r("div",{className:"left",children:[r("div",{className:"left-up",children:[h.name,e(C,{})]}),r("div",{className:"left-down",children:[e(g,{wrap:!0,style:{fontSize:16},children:e(E,{})}),h.distance]})]}),e("div",{className:"right",children:e(g,{wrap:!0,children:e(b,{color:"danger",size:"mini",children:"\u81EA\u63D0"})})})]},h.id))})(i)}),e($,{detail:s}),r("div",{className:"navbar",children:[e("div",{className:"navbar-left",children:e("img",{src:W,alt:""})}),r("div",{className:"navbar-middle",children:[e("span",{className:"navbar-middle-left",children:"\u5408\u8BA1\uFF1A"}),e("span",{className:"navbar-middle-right",children:"\uFFE50"})]}),e("div",{className:"navbar-right",children:e(g,{wrap:!0,children:e(b,{color:"danger",size:"large",className:"btn",children:"\u53BB\u7ED3\u7B97"})})})]})]})},q=t=>({shopList:t.nearby.shopList,milkTeaList:t.orderdetail.milkTeaList}),G=t=>({getShowListDispatch(){t(j())},getMilkTeaListDispatch(){t(M())}});var U=y(q,G)(H);export{U as default};
