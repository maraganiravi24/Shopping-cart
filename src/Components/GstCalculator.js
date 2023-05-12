import React from "react";
import { useSelector } from "react-redux";

const GstCalculator = () => {
  const { cartList } = useSelector((state) => state.shoppingData);
  const totalSum = cartList.reduce((acc, val) => {
    return acc + val.quantity * val.price;
  }, 0);
  console.log(totalSum);
  return (
    <div className="flex flex-col gap-y-5">
      <p>SGST : 2.5%</p>
      <p>CGST : 2.5%</p>
      <p>Total Price : {totalSum + totalSum * (5 / 100)} </p>
    </div>
  );
};

export default GstCalculator;
