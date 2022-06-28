import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FooterWrapper } from "./style";
import classnames from "classnames";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <FooterWrapper>
      <Link
        to="/home"
        className={classnames({
          active: pathname == "/home" || pathname == "/",
        })}
      >
        <i className="iconfont icon-shouye"></i>
        <span>首页</span>
      </Link>
      <Link to="/food" className={classnames({ active: pathname == "/food" || pathname == "/food/nearby" || pathname == "/food/often"})}>
        <i className="iconfont icon-faxian"></i>
        <span>点餐</span>
      </Link>
      <Link
        to="/order"
        className={classnames({ active: pathname == "/order" || pathname == "/order/ing" || pathname == "/order/back" || pathname == "/order/history"})}
      >
        <i className="iconfont icon-shouye1"></i>
        <span>订单</span>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == "/mine" })}>
        <i className="iconfont icon-wode"></i>
        <span>我的</span>
      </Link>
    </FooterWrapper>
  );
};

export default Footer;
