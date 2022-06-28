import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Collapse } from "antd-mobile";
import map from "../../../assets/images/map.png";
import { getIce } from '../../../api/request'
import IceBanner from './IceBanner'

const Nearby = () => {
  const [title, setTitle] = useState(true)
  const openMap = () => {
    setTitle(!title)
  };
  const [message, setMessage] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getIce()
      setMessage(data)
      // console.log(data)
    })()
  }, [])
  return (
    <Wrapper>
      <div className="shopList">
        <Collapse defaultActiveKey={["1"]} onChange={openMap}>
          <Collapse.Panel key="1" title={ title? '收起地图' : '展开地图' }>
            <img src={map} alt="" style={{ width: "100%" }} />
            <br />
          </Collapse.Panel>
        </Collapse>
      </div>
      <IceBanner message={message}/>
    </Wrapper>
  );
};

export default Nearby;
