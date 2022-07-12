import styled from "styled-components";

export const Wrapper = styled.div`
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
`;
