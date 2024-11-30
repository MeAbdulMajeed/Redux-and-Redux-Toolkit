import { combineReducers, createStore } from "redux";
import CartReducer from "./CartReducer";
import WishlistReducer from "./WishlistReducer";
import ProductReducer from "./ProductReducer";
import { addToCart, addToWishlist, decreaseQuantity, increaseQuantity, removeFromCart, removeFromWishlist } from "./Action";
const reducer = combineReducers({
    products: ProductReducer,
    cartItems: CartReducer,
    wishList: WishlistReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// store.dispatch({ type: "addToCart", payload: { productId: 2, quantity: 4 } });
// store.dispatch({ type: "addToCart", payload: { productId: 28, quantity: 2 } });
// store.dispatch({ type: "addToCart", payload: { productId: 12, quantity: 3 } });
// store.dispatch({ type: "addToCart", payload: { productId: 6, quantity: 6 } });
// store.dispatch({ type: "removeFromCart", payload: { productId: 12 } });
// store.dispatch({ type: "addQuantity", payload: { productId: 2 } });
// store.dispatch({ type: "addQuantity", payload: { productId: 6 } });
// store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });
// store.dispatch({ type: "addToWishList", payload: { productId: 28 } });
// store.dispatch({ type: "addToWishList", payload: { productId: 2 } });
// store.dispatch({ type: "addToWishList", payload: { productId: 15 } });
// store.dispatch({ type: "addToWishList", payload: { productId: 12 } });
// store.dispatch({ type: "addToWishList", payload: { productId: 10 } });
// store.dispatch({ type: "removeFromWishList", payload: { productId: 2 } });

// store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });
// store.dispatch({ type: "decreaseQuantity", payload: { productId: 28 } });

console.log(store.getState())

// Using Action creaters
store.dispatch(addToCart(2,4))
store.dispatch(addToCart(28,2))
store.dispatch(addToCart(12,3))
store.dispatch(addToCart(6,6))
store.dispatch(removeFromCart(12))
store.dispatch(increaseQuantity(2))
store.dispatch(increaseQuantity(6))
store.dispatch(decreaseQuantity(28))
store.dispatch(decreaseQuantity(28))
store.dispatch(addToWishlist(28))
store.dispatch(addToWishlist(2))
store.dispatch(addToWishlist(15))
store.dispatch(addToWishlist(12))
store.dispatch(addToWishlist(10))
store.dispatch(removeFromWishlist(2))