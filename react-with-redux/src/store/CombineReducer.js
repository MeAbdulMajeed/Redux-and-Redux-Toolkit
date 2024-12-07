import { combineReducers, createStore } from "redux";
import CartReducer from "./slices/CartSlice";
import WishlistReducer from "./slices/WishlistSlice";
import ProductReducer from "./slices/ProductSlice";
const reducer = combineReducers({
    products: ProductReducer,
    cartItems: CartReducer,
    wishList: WishlistReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())