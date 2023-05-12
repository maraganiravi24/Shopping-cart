import { createSlice } from "@reduxjs/toolkit";
import { productsInfo } from "../utils/dummyData";
const initialState = {
  cartList: [],
  productsList: [],
  cartItemsCount: 0,
  searchText: "",
};

const shoppingSlice = createSlice({
  name: "shoppingSlice",
  initialState,
  reducers: {
    setSearchText(state, { payload }) {
      state.searchText = payload;
    },
    addCartItem(state, { payload }) {
      let updatedCartList;
      const toggle = state.cartList.some((product) => {
        return product.id === payload.id;
      });
      if (toggle) {
        updatedCartList = state.cartList.map((product) => {
          if (product.id === payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return { ...product };
          }
        });
      } else {
        updatedCartList = [...state.cartList, { ...payload, quantity: 1 }];
      }
      state.cartList = updatedCartList;
      const cartCount = updatedCartList.reduce((acc, val) => {
        return acc + val.quantity;
      }, 0);
      state.cartItemsCount = cartCount;
    },
    increaseCount(state, { payload }) {
      state.cartList = state.cartList.map((product) => {
        const { id } = product;
        if (payload === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });
    },
    decreaseCount(state, { payload }) {
      state.cartList = state.cartList.map((product) => {
        const { id } = product;
        if (payload === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return { ...product };
      });
    },
    deleteItem(state, { payload }) {
      state.cartList = state.cartList.filter(
        (product) => product.id !== payload
      );
    },
    deleteCart(state) {
      state.cartList = [];
    },
    filterProductsList(state, { payload }) {
      state.productsList = productsInfo.filter((product) => {
        return product.name.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});
export const {
  addCartItem,
  increaseCount,
  decreaseCount,
  deleteItem,
  deleteCart,
  setSearchText,
  filterProductsList,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
