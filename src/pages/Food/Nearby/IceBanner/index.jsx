import React from "react";
import { Wrapper } from "./style";
import { TravelOutline, PhoneFill } from "antd-mobile-icons";
import { Space } from "antd-mobile";
import { Link } from "react-router-dom";

const IceBanner = ({ message }) => {
  const renderInfo = () => {
    return message.map((item) => (
      <Link 
        className="milkTeaList" 
        to={`/orderdetail/${item.id}`}
        key={item.id}
      >
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
              <Space wrap style={{ fontSize: 18 }}>
                <TravelOutline color="var(--adm-color-danger)" />
              </Space>
            </span>
            <span className="icon2">
              <Space wrap style={{ fontSize: 18 }}>
                <PhoneFill color="var(--adm-color-danger)" />
              </Space>
            </span>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <div className="bigbox">{renderInfo()}</div>
    </Wrapper>
  );
};

export default IceBanner;
