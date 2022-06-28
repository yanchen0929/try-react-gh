import React from "react";
import { Wrapper } from "./style";
import { TravelOutline, PhoneFill } from "antd-mobile-icons";
import { Space } from "antd-mobile";

const IceBanner = ({ message }) => {
  const renderInfo = () => {
    return message.map((item) => (
      <div key={item.id} className="sale-box">
        <div className="left">
          <div className="name">{item.name}</div>
          <div className="address">{item.address}</div>
          <div className="time">{item.time}</div>
          <span>营业中</span>
        </div>
        <div className="right">
          <div className="distance">{item.distance}</div>
          <span className="icon1">
            <Space wrap style={{ fontSize: 36 }}>
              <TravelOutline color="var(--adm-color-danger)" />
            </Space>
          </span>
          <span className="icon2">
            <Space wrap style={{ fontSize: 36 }}>
              <PhoneFill color="var(--adm-color-danger)" />
            </Space>
          </span>
        </div>
      </div>
    ));
  };

  return (
    <Wrapper>
      <div className="bigbox">{renderInfo()}</div>
    </Wrapper>
  );
};

export default IceBanner;
