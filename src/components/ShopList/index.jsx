import React, { useEffect } from "react";
import propTyes from "prop-types";
import { NavLink } from "react-router-dom";
import Swiper from "swiper";
import { Wrapper } from "./style";
import { SearchBar } from "antd-mobile";

const ShopList = () => {
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
      desc: "附近门店",
      path: "/nearby",
    },
    {
      id: 2,
      desc: "常去门店",
      path: "/often",
    },
  ];
  return (
    <Wrapper>
      <div className="navbar swiper-container">
        <div className="nav-box swiper-wrapper">
          {List.map((item, index) => {
            return (
              <NavLink
                index={index}
                to={`/food${item.path}`}
                key={item.id}
                className="nav-item swiper-slide"
              >
                {item.desc}
              </NavLink>
            );
          })}
          <div className="box"></div>
          <div className="searchbar">
          <SearchBar className="search" placeholder="搜索门店"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

ShopList.propTyes = {
  id: propTyes.string.isRequired,
};

export default ShopList;
