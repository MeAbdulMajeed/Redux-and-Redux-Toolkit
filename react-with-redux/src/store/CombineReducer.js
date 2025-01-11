import { combineReducers, createStore } from "redux";
import Cart from "./slices/CartSlice";
import WishlistReducer from "./slices/WishlistSlice";
import ProductReducer from "./slices/ProductSlice";
import { produce } from "immer";
import { configureStore } from "@reduxjs/toolkit";
// const reducer = combineReducers({
//   products: ProductReducer,
//   cartItems: Cart,
//   wishList: WishlistReducer,
// });

// function logger(store){
//   return function(next){
//     return function(action){
//       console.log("store",store)
//       console.log("next",next)
//       console.log("next",action)
//       next(action) // without this action will not dispatch because by default middleware stops action dispatching
//     }
//   }
// }
// using arrow function

const logger = (store)=> (next)=> (action)=>{
  console.log("store",store)
  return next(action)
} 
export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cartItems: Cart,
    wishList: WishlistReducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(logger)
  
})

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

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