import styled from 'styled-components'

export const Wrapper = styled.div`
  .nav {
    .header {
      text-align: left;
      margin-left: 0.5rem;
      span {
        margin-left: 0.25rem;
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
      }
    }
    .tab {
      position: relative;
      .left {
        width: 95%;
        height: 9rem;
        background-color: #fff;
        border-radius: 0.5rem;
        margin: 0.5rem;
        box-shadow: 1px 0px 0.5rem rgba(0,0,0,0.3);
        .img1 {
          float: left;
          margin-top: 2.5rem;
          margin-left: 2.5rem;
        }
      }
      .up {
        float: left;
        font-size: 30px;
        margin-top: 3rem;
        margin-left: 2rem;
      }
      .down {
        position: absolute;
        top: 5.5rem;
        left: 8rem;
        span {
          margin: 0.24rem;
        }
      }
      .search {
        float: right;
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 2.5rem;
        .img2 {
          width: 100%;
          height: 90%;
          margin-top: 3.5rem;
        }
      }
    }
    .right {
      text-align: center;
      font-weight: 600;
      font-size: 18px;
      width: 95%;
      height: 4.5rem;
      margin: 0.5rem;
      .drink {
        border-radius: 0.5rem;
        box-shadow: 1px 1px 0.5rem rgba(0,0,0,0.3);
        float: left;
        width: 6.5rem;
        height: 100%;
        margin-right: 1.3rem;
        .img3 {
          width: 3.5rem;
          height: 2.5rem;
          float: right;
          margin-top: 0.3rem;
        }
      }
      .youhui {
        border-radius: 0.5rem;
        box-shadow: 1px 1px 0.5rem rgba(0,0,0,0.3);
        float: left;
        width: 6.5rem;
        height: 100%;
        margin-right: 1.3rem;
        .img4 {
          width: 3.5rem;
          height: 2.5rem;
          float: right;
          margin-top: 0.3rem;
        }
      }
      .zero {
        border-radius: 0.5rem;
        box-shadow: 1px 1px 0.5rem rgba(0,0,0,0.3);
        float: left;
        width: 6.5rem;
        height: 100%;
        .img5 {
          width: 3.5rem;
          height: 2.5rem;
          float: right;
          margin-top: 0.3rem;
        }
      }
    }
  }
`