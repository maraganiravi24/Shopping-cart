export const countCartItem = (products) => {
  const cartCount = products.reduce((acc, val) => {
    return acc + val.quantity;
  }, 0);
  return cartCount;
};
