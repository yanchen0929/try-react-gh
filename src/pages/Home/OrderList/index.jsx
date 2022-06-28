import React from "react";
import { Wrapper } from "./style";
import { EnvironmentOutline } from "antd-mobile-icons";
import { Space } from "antd-mobile";
import { Link } from "react-router-dom";
import button from "../../../assets/images/button.png";
import drink from "../../../assets/images/drink.png";
import youhui from "../../../assets/images/youhui.png";
import zero from "../../../assets/images/zero.png";

const OrderList = () => {
  return (
    <Wrapper>
      <div className="nav">
        <div className="header">
          <Space wrap style={{ fontSize: 16 }}>
            <EnvironmentOutline />
          </Space>
          <span>南昌市910724店</span>
        </div>
        <div className="tab">
          <div className="left">
            <img
              className="img1"
              src="https://www.mxbc.com/assets/img/icon-14.svg"
              alt=""
            />
            <div className="up">立即点餐</div>
            <div className="down">
              <span className="up-left">手机点</span>
              <span className="up-zhong">到店取</span>
              <span className="up-right">免排队</span>
            </div>
            <Link to="/food" className="search">
              <img src={button} className="img2" alt="" />
            </Link>
          </div>
          <div className="right">
            <div className="drink">
              <span>今天喝点啥</span>
              <img src={drink} alt="" className="img3" />
            </div>
            <div className="youhui">
              <span>优惠券</span>
              <img src={youhui} alt="" className="img4" />
            </div>
            <div className="zero">
              <span>0元兑换</span>
              <img src={zero} alt="" className="img5" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderList;
