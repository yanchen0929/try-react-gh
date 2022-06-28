import React, { useEffect, useState } from "react";
import Home from "../../pages/Home";
import { useLocation } from "react-router";
import { pageTitle } from '../../config'

const Header = (props) => {
  const [title, setTitle] = useState("首页");
  const { pathname = "/" } = useLocation();
  useEffect(() => {
    let _title = pageTitle[pathname] || '';
    setTitle(_title);
  });
  return <div></div>;
};

export default Header;
