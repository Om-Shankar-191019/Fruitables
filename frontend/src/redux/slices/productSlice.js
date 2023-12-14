import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allItems = [...action.payload];
    },
  },
});

export const { setAllProducts } = productSlice.actions;

export default productSlice.reducer;
