import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../store/shoppingSlice";
const ProductsList = () => {
  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addCartItem({ ...product }));
  };
  const { productsList } = useSelector((state) => state.shoppingData);
  if (productsList.length === 0) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <p className="text-xl font-bold bg-blue-300 rounded-lg p-7">
          No Items Found with this Name , please Search with other Name
        </p>
      </div>
    );
  }
  return (
    <div className="p-20 flex flex-row flex-wrap gap-20 flex-1">
      {productsList.map((product) => {
        const { id, name, price, imageUrl } = product;
        return (
          <div class="w-60 rounded overflow-hidden shadow-lg" key={id}>
            <img className="w-full h-48 " src={imageUrl} alt={`${imageUrl}`} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{name}</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div class="flex justify-between px-6">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Price:{price} Rs
              </span>
              <button
                onClick={() => {
                  handleAddItem(product);
                }}
                class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
