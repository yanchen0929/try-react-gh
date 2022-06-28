import React from "react";
import { Wrapper } from "./style";
import money from "../../../assets/images/xuewangbi.jpg";

const Vip = () => {
  return (
    <Wrapper>
      <div className="head">
        <div className="head-left">
          <img src="https://www.mxbc.com/assets/img/icon-11.svg" alt="" />
        </div>
        <div className="head-title">
          <div className="up">大雪人会员</div>
          <div className="zhong"></div>
          <span></span>
          <div className="down">在升一级可享【攒币加速】等9项权益</div>
        </div>
        <div className="head-right">
          <img src={money} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Vip;
