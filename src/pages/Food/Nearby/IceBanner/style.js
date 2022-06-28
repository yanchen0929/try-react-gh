import styled from "styled-components";

export const Wrapper = styled.div`
.bigbox {
    margin-top: 0.62rem;

}
  .sale-box {
    width: 95%;
    height: 9.37rem;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 0.62rem;
    border-radius: 0.62rem;
    box-shadow: 1px 1px 1.25rem rgba(0,0,0,0.2);
    .left {
        float: left;
        width: 75%;
        text-align: left;
        border-right: 1px solid rgba(0,0,0,0.1);
        .name {
            font-size: 17px;
            font-weight: 500;
            margin: 0.43rem;
        }
        .address {
            margin: 0.43rem;
        }
        .time {
            margin: 0.43rem;
        }
        span {
            font-size: 14px;
            color: #fff;
            display: inline-block;
            width: 3.75rem;
            height: 1.56rem;
            background-color: red;
            text-align: center;
            line-height: 1.56rem;
            border-radius: 5px;
            margin-top: 0.43rem;
            margin-left: 0.43rem;
        }
    }
    .right {
        float: right;
        .distance {
            margin-right: 0.62rem;
            margin-top: 1.875rem;
        }
        .icon1 {
            font-size: 19px;
            background-color: pink;
            display: inline-block;
            height: 1.875rem;
            width: 1.875rem;
            border-radius: 50%;
            margin-top:1.875rem;
            margin-right: 1rem;
        }
        .icon2 {
            font-size: 1.18rem;
            background-color: pink;
            display: inline-block;
            height: 1.875rem;
            width: 1.875rem;
            border-radius: 50%;
            margin-top: 1.875rem;
            margin-right: 0.62rem;
        }
    }
  }
`;
