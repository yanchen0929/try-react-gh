import React, { useEffect } from "react";
import { Wrapper } from "./style";
import Swiper from "swiper";
import LemonWater from "../../../assets/images/LemonWater.jpg";
import putao from "../../../assets/images/putao.jpg";
import yellowPeach from "../../../assets/images/yellowPeach.jpg";
import yeye from "../../../assets/images/yeye.jpg";

const SetMeal = () => {
  useEffect(() => {
    new Swiper(".home_info_banners", {
      loop: true,
      autoplay: {
        delay: 2000,
      },
    });
  }, []);
  return (
    <Wrapper>
      <div className="home_info_img">
        <div className="home_info_banners swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <p>
                <img width="100%" src={LemonWater} alt="" />
              </p>
            </div>
            <div className="swiper-slide">
              <p>
                <img width="100%" src={putao} alt="" />
              </p>
            </div>
            <div className="swiper-slide">
              <p>
                <img width="100%" src={yellowPeach} alt="" />
              </p>
            </div>
            <div className="swiper-slide">
              <p>
                <img width="100%" src={yeye} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SetMeal;
