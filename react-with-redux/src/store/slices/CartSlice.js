import { createSelector, createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";
// import { produce } from "immer";
// export default function CartReducer(orignalState = [], action) {
//   return produce(orignalState, (state) => {
//     const existingItemIndex = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     );

//     switch (action.type) {
//       case "addToCart":
//         if (existingItemIndex !== -1) {
//           state[existingItemIndex].quantity += 1;
//           break;
//         }
//         state.push({ ...action.payload, quantity: 1 });
//         break;

//       case "removeFromCart":
//         state.splice(existingItemIndex, 1);
//         break;

//       case "addQuantity":
//         state[existingItemIndex].quantity += 1;
//         break;

//       case "decreaseQuantity":
//         state[existingItemIndex].quantity -= 1;
//         if (state[existingItemIndex].quantity === 0) {
//           state.splice(existingItemIndex, 1);
//         }
//         break;
//     }
//     return state;
//   });
// }
// action Types

// Toolkit
const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchCartItems: (state) => {
      state.loading = true;
    },
    fetchCartError: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    },
    loadCartItems: (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
    addToCart(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      console.log("existing item index", existingItemIndex);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },

    increaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },

    decreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0) {
        state.list.splice(existingItemIndex, 1);
      }
    },
  },
});

const selectCartItems = (state) => {
  return state?.cartItems?.list
    .map((cartItem) => {
      const cartProduct = state.products.list.find(
        (product) => product.id === cartItem.productId
      );
      // console.log("cartProduct", cartProduct)
      return { ...cartProduct, quantity: cartItem.quantity };
    })
    .filter(({ title }) => title);
};

export const selectMemoizedCartItems = createSelector(
  selectCartItems,
  (state) => state
);
export const selectCartLoading = (state) => state.cartItems.loading;
export const selectCartError = (state) => state.cartItems.error;

export const fetchCartItemsData = () => (dispatch) => {
  dispatch(fetchCartItems());
  fetch(`https://fakestoreapi.com/carts/5`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(loadCartItems(data.products));
    })
    .catch(() => {
      dispatch(fetchCartError());
    });
};

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  loadCartItems,
  fetchCartError,
  fetchCartItems,
} = slice.actions;
export default slice.reducer;
// export default function CartReducer(state = [], action) {
//   switch (action.type) {
//     case "addToCart":
//       const existingItem = state.find(
//         (cartItem) => cartItem.productId === action.payload.productId
//       );
//       if (existingItem) {
//         return state.map((cartItem) => {
//           if (cartItem.productId === existingItem.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 };
//           }
//           return cartItem;
//         });
//       }
//       return [...state, { ...action.payload, quantity: 1 }];

//     case "removeFromCart":
//       return state.filter(
//         (cartItem) => cartItem.productId !== action.payload.productId
//       );

//     case "addQuantity":
//       return state.map((cartItem) => {
//         if (cartItem.productId === action.payload.productId) {
//           return { ...cartItem, quantity: cartItem.quantity + 1 };
//         }
//         return cartItem;
//       });

//     case "decreaseQuantity":
//       return state
//         .map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity - 1 };
//           }
//           return cartItem;
//         })
//         .filter((cartItem) => cartItem.quantity > 0);

//     default:
//       return state;
//   }
// }
