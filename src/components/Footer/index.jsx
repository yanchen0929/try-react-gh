import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FooterWrapper } from "./style";
import classnames from "classnames";
import { isPathPartlyExisted } from '../../utils'

const Footer = () => {
  var foodReg = /^(\/food)(\/\w+)?/;
  var orderReg = /^(\/order)(\/\w+)?/;
  const { pathname } = useLocation();
  if (isPathPartlyExisted(pathname)) return
  return (
    <FooterWrapper>
      <Link 
        to="/food" 
        className={classnames({ active: foodReg.test(pathname)})}
      >
        <i className="iconfont icon-faxian"></i>
        <span>点餐</span>
      </Link>
      <Link
        to="/order"
        className={classnames({ active: orderReg.test(pathname)})}
      >
        <i className="iconfont icon-shouye1"></i>
        <span>订单</span>
      </Link>
    </FooterWrapper>
  );
};

export default Footer;
