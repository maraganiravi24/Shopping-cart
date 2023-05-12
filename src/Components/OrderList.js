import React from "react";
import { useSelector } from "react-redux";

const OrderList = () => {
  const { cartList } = useSelector((state) => state.shoppingData);
  return (
    <div className="mt-10">
      <table className="border border-black border-solid">
        <thead>
          <tr>
            <th className="border border-black border-solid w-56">Product </th>
            <th className="border border-black border-solid w-56">Price</th>
            <th className="border border-black border-solid w-56">quantity</th>
            <th className="border border-black border-solid w-56">Cost</th>
          </tr>
        </thead>
        <tbody>
          {cartList?.map((product) => {
            const { id, name, price, quantity } = product;
            return (
              <tr key={id}>
                <td className="border border-black border-solid">{name}</td>
                <td className="border border-black border-solid">{price}</td>
                <td className="border border-black border-solid">{quantity}</td>
                <td className="border border-black border-solid">
                  {price * quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
