import styled from "styled-components";

export const Wrapper = styled.div`
  .head {
    margin: 0;
    padding: 0;
    position: relative;
    height: 5rem;
    background-color: #fff;
    margin: 0 0.75rem;
    border-radius: 10px;
    border-bottom-left-radius: 10px;
    position: relative;
    top: -1.25rem;
    z-index: 9999;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);
    .head-left {
      position: relative;
      top: 1rem;
      left: 0.5rem;
      background-color: pink;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      img {
        text-align: center;
        width: 80%;
        height: 80%;
        position: absolute;
        top: 0.4rem;
        left: 0.3rem;
      }
    }
    .head-title {
      background-color: white;
      position: absolute;
      left: 4.5rem;
      top: 0;
      .up {
        text-align: left;
        margin-top: 1.1rem;
      }
      .zhong {
        background-color: red;
        width: 3.5rem;
        height: 0.15rem;
        border-bottom-left-radius:2px;
        border-top-left-radius:2px;
        display: inline-block;
        text-align: left;
      }
      span {
        display: inline-block;
        width: 7.5rem;
        height: 0.15rem;
        background-color: rgb(222,225,230);
        border-bottom-right-radius:2px;
        border-top-right-radius:2px;
      }
      .down {
        font-size: 8px;
        margin-top: 0.25rem;
      }
    }

    .head-right {
      width: 4rem;
      height: 4rem;
      float: right;
      margin-right: 0.5rem;
      position: relative;
      bottom: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
