import styled from "styled-components";

export const Wrapper = styled.div`
  .home_info_img {
    width: 100%;
    height: 20rem;
    background: #fff;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
    }
  }
  .home_info_banners {
    .swiper-pagination {
      .swiper-pagination-bullet {
        border-radius: 0;
        height: 0.2rem;
      }
    }
    .getAptitude {
      z-index: 10;
      padding: 0 0.5rem;
      border-radius: 0.5rem;
      background: rgba(20, 20, 20, 0.7);
      color: #fff;
    }
  }
`;
