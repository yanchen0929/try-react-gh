import React, { useEffect } from "react";
import propTyes from "prop-types";
import { NavLink } from "react-router-dom";
import Swiper from "swiper";
import { Wrapper } from "./style";

const OrderList = () => {
  let swiper = null;
  useEffect(() => {
    if (swiper) {
      return;
    }
    swiper = new Swiper(".navbar");
  }, []);
  let List = [
    {
      id: 1,
      desc: "进行中",
      path: "/ing",
    },
    {
      id: 2,
      desc: "历史",
      path: "/history",
    },
    {
        id: 3,
        desc: "退单",
        path: "/back",
    }
  ];
  return (
    <Wrapper>
      <div className="navbar swiper-container">
        <div className="nav-box swiper-wrapper">
          {List.map((item, index) => {
            return (
              <NavLink
                index={index}
                to={`/order${item.path}`}
                key={item.id}
                className="nav-item swiper-slide"
              >
                {item.desc}
              </NavLink>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

OrderList.propTyes = {
  id: propTyes.string.isRequired,
};

export default OrderList;
