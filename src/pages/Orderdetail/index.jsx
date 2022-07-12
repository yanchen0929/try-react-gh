import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { NavBar } from "antd-mobile";
import { useNavigate, useParams } from "react-router-dom";
import { SearchBar } from "antd-mobile";
import SaleDetail from "../../components/SaleDetail";
import { connect } from "react-redux";
import { getShopList, getMilkTeaList } from "./store/actionCreators";
import { EnvironmentOutline } from "antd-mobile-icons";
import { Button, Space } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import shopping from "../../assets/images/shopping.png";

const Orderdetail = (props) => {
  const { shopList, milkTeaList } = props;
  const { getShowListDispatch, getMilkTeaListDispatch } = props;
  const navigate = useNavigate();
  let { id } = useParams();
  // console.log(id);
  if (!id) {
    navigate("/home");
    return;
  }
  useEffect(() => {
    getShowListDispatch(), getMilkTeaListDispatch();
  }, []);

  const renderInfo = (shopList) => {
    if (shopList.length > 0) {
      const res = shopList.filter(
        (item) =>
          // 外层不能加{}，对象包对象筛不出来
          item.id == id
      );
      return res.map((item) => (
        <div key={item.id}>
          <div className="left">
            <div className="left-up">
              {item.name}
              <RightOutline />
            </div>
            <div className="left-down">
              <Space wrap style={{ fontSize: 16 }}>
                <EnvironmentOutline />
              </Space>
              {item.distance}
            </div>
          </div>
          <div className="right">
            <Space wrap>
              <Button color="danger" size="mini">
                自提
              </Button>
            </Space>
          </div>
        </div>
      ));
    }
  };
  return (
    <Wrapper>
      <NavBar
        back=""
        onBack={() => navigate(-1)}
        //   -1 向上走一级 出栈
      >
        <SearchBar className="search" placeholder="请输入商品名" />
      </NavBar>
      <div className="bigbox">{renderInfo(shopList)}</div>
      <SaleDetail detail={milkTeaList} />
      <div className="navbar">
        <div className="navbar-left">
          <img src={shopping} alt="" />
        </div>
        <div className="navbar-middle">
          <span className="navbar-middle-left">合计：</span>
          <span className="navbar-middle-right">￥0</span>
        </div>
        <div className="navbar-right">
          <Space wrap>
            <Button color="danger" size="large" className="btn">
              去结算
            </Button>
          </Space>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    shopList: state.nearby.shopList,
    milkTeaList: state.orderdetail.milkTeaList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getShowListDispatch() {
      dispatch(getShopList());
    },
    getMilkTeaListDispatch() {
      dispatch(getMilkTeaList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orderdetail);
