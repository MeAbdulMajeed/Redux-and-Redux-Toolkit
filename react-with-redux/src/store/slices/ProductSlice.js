import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../Data";

// export default function ProductReducer(state = [],){
//     return state
// }

const ProductSlice = createSlice({
  initialState: [],
  name: "products",
  reducers: {
    updateAllProducts(state, action) {
      return action.payload;
    },
  },
});

export const { updateAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
