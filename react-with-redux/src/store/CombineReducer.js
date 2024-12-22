import { combineReducers, createStore } from "redux";
import CartReducer from "./slices/CartSlice";
import WishlistReducer from "./slices/WishlistSlice";
import ProductReducer from "./slices/ProductSlice";
import { produce } from "immer";
const reducer = combineReducers({
  products: ProductReducer,
  cartItems: CartReducer,
  wishList: WishlistReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const users = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 19,
//   },
//   {
//     id: 2,
//     name: "abc",
//     age: 24,
//   },
//   {
//     id: 3,
//     name: "xyz",
//     age: 15,
//   },
// ];


// directly mutating
// users[1].age = 28
// console.log(users)

// but in functional programming we don't directly mutate instead we return a new object

// const modifiedUsers = users.map((user, index)=>{
//   if(index === 1){
//     return {...user, age: 20}
//   }
//   return user
// })

// console.log("modified users",modifiedUsers)

// // with the produce method we can write mutating code and it will return a new array/ object
// const newUsers = produce(users, (userCopy)=>{
//   userCopy[1].age = 33
// })
// console.log("new users", newUsers)