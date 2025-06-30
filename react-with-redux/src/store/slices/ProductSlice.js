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

export const selectAllProducts = (state) => state.products.list;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

export const fetchAllProductsData = () => (dispatch) => {
  dispatch(fetchProducts())
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => dispatch(updateAllProducts(data)))
    .catch((error) => dispatch(fetchProductsError()));
};

export const { updateAllProducts, fetchProducts, fetchProductsError } =
  ProductSlice.actions;
export default ProductSlice.reducer;
