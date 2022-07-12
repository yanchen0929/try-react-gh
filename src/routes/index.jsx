import { lazy } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
const Order = lazy(() => import("../pages/Order"));
const Food = lazy(() => import("../pages/Food"));
const Mine = lazy(() => import("../pages/Mine"));
const Nearby = lazy(() => import("../pages/Food/Nearby"));
const Often = lazy(() => import("../pages/Food/Often"));
const Conduct = lazy(() => import("../pages/Order/Conduct"));
const History = lazy(() => import("../pages/Order/History"));
const Back = lazy(() => import("../pages/Order/Back"));
const OrderDetail = lazy(() => import("../pages/Orderdetail"))

export default function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />}>
          <Route path="/order/ing" element={<Conduct />}/>
          <Route path="/order/history" element={<History />}/>
          <Route path="/order/back" element={<Back />}/>
        </Route>
        <Route path="/food" element={<Food />}>
          <Route path="/food/nearby" element={<Nearby />} />
          <Route path="/food/often" element={<Often />} />
        </Route>
        <Route path="/mine" element={<Mine />} />
        <Route path="/orderdetail/:id" element={<OrderDetail />}/>
      </Routes>
    </>
  );
}
