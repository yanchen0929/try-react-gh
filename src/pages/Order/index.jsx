import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { useNavigate, Outlet } from "react-router-dom";
import OrderList from '../../components/OrderList'

export const Order = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/order/ing`);
  }, []);
  return (
    <Wrapper>
      <OrderList/>
      <Outlet />
    </Wrapper>
  );
};
export default Order;
