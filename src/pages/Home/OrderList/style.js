import styled from 'styled-components'

export const Wrapper = styled.div`
  .nav {
    .header {
      text-align: left;
      margin-left: 0.625rem;
      span {
        margin-left: 0.31rem;
        display: inline-block;
        height: 1.25rem;
        line-height: 1.25rem;
      }
    }
    .tab {
      position: relative;
      .left {
        width: 95%;
        height: 11.25rem;
        background-color: #fff;
        border-radius: 0.625rem;
        margin: 0.625rem;
        box-shadow: 1px 0px 0.625rem rgba(0,0,0,0.3);
        .img1 {
          float: left;
          margin-top: 3.125rem;
          margin-left: 3.125rem;
        }
      }
      .up {
        float: left;
        font-size: 1.875rem;
        margin-top: 3.75rem;
        margin-left: 1.56rem;
      }
      .down {
        position: absolute;
        top: 6.875rem;
        left: 8.43rem;
        span {
          margin: 0.31rem;
        }
      }
      .search {
        float: right;
        width: 3.125rem;
        height: 3.125rem;
        margin-right: 3.125rem;
        .img2 {
          width: 100%;
          height: 90%;
          margin-top: 4.375rem;
        }
      }
    }
    .right {
      font-weight: 600;
      font-size: 18px;
      width: 95%;
      height: 5rem;
      margin: 0.625rem;
      .drink {
        border-radius: 0.625rem;
        box-shadow: 1px 1px 0.625rem rgba(0,0,0,0.3);
        float: left;
        width: 7.5rem;
        height: 100%;
        margin-right: 0.93rem;
        .img3 {
          width: 4.375rem;
          height: 3.125rem;
          float: right;
        }
      }
      .youhui {
        border-radius: 0.625rem;
        box-shadow: 1px 1px 0.625rem rgba(0,0,0,0.3);
        float: left;
        width: 7.5rem;
        height: 100%;
        margin-right: 0.93rem;
        .img4 {
          width: 4.375rem;
          height: 3.125rem;
          float: right;
        }
      }
      .zero {
        border-radius: 0.625rem;
        box-shadow: 1px 1px 0.625rem rgba(0,0,0,0.3);
        float: left;
        width: 7.5rem;
        height: 100%;
        .img5 {
          width: 4.375rem;
          height: 3.125rem;
          float: right;
        }
      }
    }
  }
`