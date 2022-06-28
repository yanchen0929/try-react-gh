import React from "react";
import { Wrapper } from "./style";
import empty from "../../../assets/images/empty.png";
import { Button, Space } from "antd-mobile";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <Wrapper>
      <div className="box">
        <div className="title">
          <img src={empty} alt="" />
          <div className="quick">您还没有订单，快去选一杯喜欢的饮品把~</div>
        </div>
        <div className="button">
          <Link to="/food">
            <Space wrap>
              <Button shape="default" color="danger">
                去喝一杯
              </Button>
            </Space>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Back;
