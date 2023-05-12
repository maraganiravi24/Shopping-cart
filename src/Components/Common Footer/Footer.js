import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart, resetShoppingCart } from "../../store/shoppingSlice";

const Checkout = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButton = () => {
    if (type === "checkout") {
      navigate("/order");
    } else {
      alert(
        "Thank you for shopping with us, your order has been successfully placed"
      );
      navigate("/");
      dispatch(resetShoppingCart());
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-16 bg-blue-300 fixed bottom-0">
      <button
        onClick={handleButton}
        className="text-xl font-bold  text-black bg-red-200 rounded p-3"
      >
        {type}
      </button>
    </div>
  );
};

export default Checkout;
