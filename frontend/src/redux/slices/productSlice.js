import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  allItems: [],
  cartItems: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allItems = [...action.payload];
    },
    addProductToStore: (state, action) => {
      state.allItems = [...state.allItems, action.payload];
    },
    addToCart: (state, action) => {
      const check = state.cartItems.some((el) => el._id === action.payload._id);
      if (!check) {
        toast(`${action.payload.name} added to cart`);
        state.cartItems = [
          ...state.cartItems,
          {
            ...action.payload,
            count: 1,
            totalPrice: action.payload.price,
          },
        ];
      } else {
        toast("item already exist in the cart");
      }
    },
    deleteItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (el) => el._id === action.payload
      );
      state.cartItems.splice(index, 1);
    },
    increaseItemCount: (state, action) => {
      const index = state.cartItems.findIndex(
        (el) => el._id === action.payload
      );
      if (index !== -1) {
        state.cartItems[index].count += 1;
        state.cartItems[index].totalPrice = Math.ceil(
          state.cartItems[index].price * state.cartItems[index].count
        );
      }
    },
    decreaseItemCount: (state, action) => {
      const index = state.cartItems.findIndex(
        (el) => el._id === action.payload
      );
      if (index !== -1 && state.cartItems[index].count > 1) {
        state.cartItems[index].count -= 1;
        state.cartItems[index].totalPrice = Math.ceil(
          state.cartItems[index].price * state.cartItems[index].count
        );
      }
    },
  },
});

export const {
  setAllProducts,
  addProductToStore,
  addToCart,
  deleteItem,
  increaseItemCount,
  decreaseItemCount,
} = productSlice.actions;

export default productSlice.reducer;
