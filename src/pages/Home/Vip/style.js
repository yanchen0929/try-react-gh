import styled from "styled-components";

export const Wrapper = styled.div`
  .head {
    margin: 0;
    padding: 0;
    position: relative;
    height: 100px;
    background-color: #fff;
    margin: 0 15px;
    border-radius: 10px;
    border-bottom-left-radius: 10px;
    position: relative;
    top: -25px;
    z-index: 9999;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);
    .head-left {
      position: relative;
      top: 20px;
      left: 10px;
      background-color: pink;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      img {
        text-align: center;
        width: 80%;
        height: 80%;
        position: absolute;
        top: 8px;
        left: 6px;
      }
    }
    .head-title {
      background-color: white;
      position: absolute;
      left: 75px;
      top: 0;
      .up {
        text-align: left;
        margin-top: 22px;
      }
      .zhong {
        background-color: red;
        width: 50px;
        height: 3px;
        border-bottom-left-radius:2px;
        border-top-left-radius:2px;
        display: inline-block;
        text-align: left;
      }
      span {
        display: inline-block;
        width: 150px;
        height: 3px;
        background-color: rgb(222,225,230);
        border-bottom-right-radius:2px;
        border-top-right-radius:2px;
      }
      .down {
        font-size: 8px;
        margin-top: 5px;
      }
    }

    .head-right {
      width: 70px;
      height: 70px;
      float: right;
      margin-right: 10px;
      position: relative;
      bottom: 45px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
