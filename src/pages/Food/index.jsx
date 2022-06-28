import React, { useEffect } from "react";
import ShowList from "../../components/ShopList";
import { Wrapper } from "./style";
import { useNavigate, Outlet } from "react-router-dom";

export const Food = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/food/nearby`);
  }, []);
  return (
    <Wrapper>
      <div className="list">门店列表</div>
      <ShowList />
      <Outlet />
    </Wrapper>
  );
};
export default Food;
