import { productList } from "./products";
import { createStore } from "redux";

const initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
};

function reducer(state = initialState, action) {
  console.log("state", state);
  switch (action.type) {
    case "ADD-TO-CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE-FROM-CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItems) => cartItems.productId !== action.payload.productId
        ),
      };
    case "CART-ITEM-INCREASE-QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        }),
      };
    case "CART-ITEM-DECREASE-QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("store", store);
store.dispatch({ type: "ADD-TO-CART", payload: { productId: 1, quantity: 1 } });
store.dispatch({
  type: "ADD-TO-CART",
  payload: { productId: 12, quantity: 3 },
});
store.dispatch({ type: "ADD-TO-CART", payload: { productId: 4, quantity: 5 } });
store.dispatch({ type: "ADD-TO-CART", payload: { productId: 8, quantity: 2 } });
store.dispatch({ type: "REMOVE-FROM-CART", payload: { productId: 4 } });
store.dispatch({type: "CART-ITEM-INCREASE-QUANTITY",payload: { productId: 8 }});
store.dispatch({type: "CART-ITEM-DECREASE-QUANTITY",payload: { productId: 12 }});
