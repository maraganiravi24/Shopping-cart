import React from "react";
import OrderList from "../../Components/OrderList";
import GstCalculator from "../../Components/GstCalculator";
import Footer from "../../Components/Common Footer/Footer";
const OrderPage = () => {
  return (
    <div className="">
      <OrderList />
      <div>
        <GstCalculator />
      </div>
      <Footer type="order" />
    </div>
  );
};

export default OrderPage;
