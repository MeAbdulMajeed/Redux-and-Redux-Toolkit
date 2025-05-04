import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../Data";

// export default function ProductReducer(state = [],){
//     return state
// }

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
  },
});

export const { updateAllProducts, fetchProducts, fetchProductsError } = ProductSlice.actions;
export default ProductSlice.reducer;
