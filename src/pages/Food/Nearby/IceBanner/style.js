import styled from "styled-components";

export const Wrapper = styled.div`
.bigbox {
    margin-top: 0.5rem;
    text-align: center;
}
  .sale-box {
    width: 95%;
    height: 8rem;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 1rem rgba(0,0,0,0.2);
    .left {
        float: left;
        width: 75%;
        text-align: left;
        border-right: 1px solid rgba(0,0,0,0.1);
        .name {
            font-size: 17px;
            font-weight: 500;
            margin: 0.34rem;
        }
        .address {
            margin: 0.7rem 0.34rem;
        }
        .time {
            margin: 0.6rem 0.34rem;
        }
        span {
            font-size: 14px;
            color: #fff;
            display: inline-block;
            width: 3rem;
            height: 1.24rem;
            background-color: red;
            text-align: center;
            line-height: 1.24rem;
            border-radius: 5px;
            margin-top: 0.34rem;
            margin-left: 0.34rem;
        }
    }
    .right {
        float: right;
        .distance {
            margin-right: 0.5rem;
            margin-top: 1.5rem;
        }
        .icon1 {
            font-size: 19px;
            background-color: pink;
            display: inline-block;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            margin-top:1.5rem;
            margin-right: 0.8rem;
        }
        .icon2 {
            font-size: 1.18rem;
            background-color: pink;
            display: inline-block;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            margin-top: 1.5rem;
            margin-right: 0.5rem;
        }
    }
  }
`;
