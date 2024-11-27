import { createStore } from "redux";
import { productList } from "./products";

const initialState = {
  products: productList,
  cart: [],
  wishList: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "addToCart":
      return { ...state, cart: [...state.cart, action.payload] };
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case "addQuantity":
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        }),
      };
    case "decreaseQuantity":
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        }).filter(cartItem => cartItem.quantity > 0),
      };
    case "addToWishList":
      return { ...state, wishList: [...state.wishList, action.payload] };
    case "removeFromWishList":
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishList) => wishList.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch({ type: "addToCart", payload: { productId: 2, quantity: 4 } });
store.dispatch({ type: "addToCart", payload: { productId: 28, quantity: 2 } });
store.dispatch({ type: "addToCart", payload: { productId: 12, quantity: 3 } });
store.dispatch({ type: "addToCart", payload: { productId: 6, quantity: 6 } });
store.dispatch({ type: "removeFromCart", payload: { productId: 12 } });
store.dispatch({ type: "addQuantity", payload: { productId: 2 } });
store.dispatch({ type: "addQuantity", payload: { productId: 6 } });
store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });
store.dispatch({ type: "addToWishList", payload: { productId: 28 } });
store.dispatch({ type: "addToWishList", payload: { productId: 2 } });
store.dispatch({ type: "addToWishList", payload: { productId: 15 } });
store.dispatch({ type: "addToWishList", payload: { productId: 12 } });
store.dispatch({ type: "addToWishList", payload: { productId: 10 } });
store.dispatch({ type: "removeFromWishList", payload: { productId: 2 } });

store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });
store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });

