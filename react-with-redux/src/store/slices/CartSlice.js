import { createSlice } from "@reduxjs/toolkit";
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
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      console.log("existing item index", existingItemIndex)
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },

    increaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },

    decreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0) {
        state.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  slice.actions;
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
