import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseCount,
  deleteCart,
  deleteItem,
  increaseCount,
} from "../../store/shoppingSlice";
import Footer from "../../Components/Common Footer/Footer";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.shoppingData);
  const dispatch = useDispatch();
  const handleDecCount = (id) => {
    dispatch(decreaseCount(id));
  };
  const handleIncCount = (id) => {
    dispatch(increaseCount(id));
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  const handleDeleteCart = () => {
    dispatch(deleteCart());
  };
  if (cartList.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-3xl font-bold">
          Please add the Items to cart{" "}
          <button
            className="ml-10 rounded-full bg-blue-400 text-black text-center p-5 "
            onClick={() => {
              navigate("/");
            }}
          >
            Products Page
          </button>
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col  items-center  w-full">
      <button
        className="w-32  rounded bg-pink-300 mt-5 text-xl text-black font-bold"
        onClick={handleDeleteCart}
      >
        Delete All
      </button>
      <div className="flex flex-row items-start w-full flex-wrap gap-5 p-5">
        {cartList.map((item) => {
          const { id, name, price, quantity, imageUrl } = item;
          return (
            <div
              className="shadow-lg w-full  lg:w-5/12   rounded-lg flex flex-row justify-center items-center gap-x-10 h-60 overflow-hidden"
              key={id}
            >
              <img className="w-44" src={imageUrl} alt={`${imageUrl}`}></img>
              <div className="flex flex-col gap-y-5 ">
                <p className="text-3xl font-bold">{name}</p>
                <p>Price: {price} Rs</p>
                <div className="flex flex-row gap-x-3">
                  <button
                    className={`bg-blue-200 w-5 rounded ${
                      quantity === 1 && "opacity-40"
                    }`}
                    disabled={quantity === 1}
                    onClick={() => {
                      handleDecCount(id);
                    }}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="bg-red-200 w-5 rounded"
                    onClick={() => {
                      handleIncCount(id);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    handleDeleteItem(id);
                  }}
                  className="bg-red-300  text-black rounded-lg shadow-lg w-32"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer type="checkout" />
    </div>
  );
};

export default ShoppingCart;
