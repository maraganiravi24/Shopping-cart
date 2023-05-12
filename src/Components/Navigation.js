import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import homeIcon from "../assets/icons8-home.svg";
import Home from "../Containers/Home/Home";
import ShoppingCart from "../Containers/Cart/ShoppingCart";
import cartIcon from "../assets/322427_cart_icon.svg";
import { useSelector } from "react-redux";
import OrderPage from "../Containers/Order/OrderPage";
const Navigation = () => {
  const { cartItemsCount } = useSelector((state) => state.shoppingData);
  return (
    <div>
      <div className="flex flex-row  justify-between items-center h-16 bg-red-100 px-20">
        <p className="text-3xl font-bold text-blue-500">E-commerce</p>
        <div className="flex flex-row items-center gap-x-10">
          <Link to="/">
            <img src={homeIcon} alt="Home" />
          </Link>{" "}
          |
          <div className="relative h-12 flex items-center">
            <Link to="/shoppingcart">
              <img src={cartIcon} alt="shopping cart" />
            </Link>{" "}
            {cartItemsCount !== 0 && (
              <div className="absolute flex justify-center items-center top-0 right-0 rounded-full w-5 h-5 bg-red-400 border-2 border-white">
                <p className="text-black font-bold">{cartItemsCount} </p>
              </div>
            )}
          </div>
          |
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </div>
  );
};

export default Navigation;
