export default function WishlistReducer(state = [], action) {
  switch (action.type) {
    case "addToWishList":
      const existingItem = state.find((item)=> item.productId === action.payload.productId)
      if(existingItem){
        return state
      }
      return [...state, action.payload];
    case "removeFromWishList":
      return state.filter(
        (wishList) => wishList.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
