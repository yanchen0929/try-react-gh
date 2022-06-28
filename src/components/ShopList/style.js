import styled from "styled-components";

export const Wrapper = styled.div`
  .navbar {
    height: 2.81rem;
    background: #fff;
    border-bottom: 0.06rem solid #ccc;
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
      border-bottom: 1px solid #ebebeb;
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
    .box {
      width: 25%;
    }
    .searchbar {
      width: 25%;
      margin-right: 0.62rem;
      margin-top: 0.31rem;
      .adm-search-bar{
        .adm-search-bar-input-box {
        padding-left: 0.62rem;
        border-radius: 6.62rem;
      }
      }
    }
  }
`;
