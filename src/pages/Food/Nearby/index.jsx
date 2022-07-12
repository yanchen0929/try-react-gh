import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Collapse } from "antd-mobile";
import Map1 from "../../../assets/images/map.png";
import IceBanner from "./IceBanner";
import { connect } from "react-redux";
import { getShopList, getMapShow } from "./store/actionCreators";
import { Map, Marker, NavigationControl, InfoWindow } from "react-bmapgl";

const Nearby = (props) => {
  const { mapShow, shopList } = props;
  const { getShowListDispatch, getMapShowDispatch } = props;
  const openMap = () => {
    getMapShowDispatch(mapShow);
  };
  useEffect(() => {
    getShowListDispatch();
  }, []);
  return (
    <Wrapper>
      <div className="shopList">
        <Collapse defaultActiveKey={["1"]} onChange={openMap}>
          <Collapse.Panel key="1" title={mapShow ? "收起地图" : "展开地图"}>
            {/* <img src={Map1} alt="" style={{ width: "100%" }} /> */}
            <Map center={{ lng: 115.832777, lat: 28.724024 }} zoom="14" style={{ height: 300 }}>
            <Marker position={{ lng: 115.832777, lat: 28.724024 }} />
              <NavigationControl />
              <InfoWindow position={{ lng: 115.832777, lat: 28.724024 }} title="我的位置" text="东华理工大学" />
            </Map>
          </Collapse.Panel>
        </Collapse>
      </div>
      <IceBanner message={shopList} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    mapShow: state.nearby.mapShow,
    shopList: state.nearby.shopList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getShowListDispatch() {
      dispatch(getShopList());
    },
    getMapShowDispatch(mapShow) {
      dispatch(getMapShow(mapShow));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nearby);
