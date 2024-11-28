import { combineReducers, createStore } from "redux";
import CartReducer from "./CartReducer";
import WishlistReducer from "./WishlistReducer";
import ProductReducer from "./ProductReducer";
const reducer = combineReducers({
    products: ProductReducer,
    cartItems: CartReducer,
    wishList: WishlistReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
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

// store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });
// store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });

console.log(store.getState())