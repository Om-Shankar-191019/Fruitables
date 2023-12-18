import { createSlice } from "@reduxjs/toolkit";

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
    addToCart: (state, action) => {
      const index = state.cartItems.indexOf(action.payload);
      if (index === -1) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, count: 1, totalPrice: action.payload.price },
        ];
      }
    },
    deleteItem: (state, action) => {
      const index = state.cartItems.indexOf(action.payload);
      if (index !== -1) {
        state.cartItems = [
          ...state.cartItems.slice(0, index),
          ...state.cartItems.slice(index + 1),
        ];
      }
    },
    increaseItemCount: (state, action) => {
      const index = state.cartItems.indexOf(action.payload);
      if (index !== -1) {
        state.cartItems[index].count += 1;
        state.cartItems[index].totalPrice =
          state.cartItems[index].price * state.cartItems[index].count;
      }
    },
    decreaseItemCount: (state, action) => {
      const index = state.cartItems.indexOf(action.payload);
      if (index !== -1 && state.cartItems[index].count > 1) {
        state.cartItems[index].count -= 1;
        state.cartItems[index].totalPrice =
          state.cartItems[index].price * state.cartItems[index].count;
      }
    },
  },
});

export const {
  setAllProducts,
  addToCart,
  deleteItem,
  increaseItemCount,
  decreaseItemCount,
} = productSlice.actions;

export default productSlice.reducer;
