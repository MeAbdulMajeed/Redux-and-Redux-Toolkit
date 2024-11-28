export default function WishlistReducer(state = [], action) {
  switch (action.type) {
    case "addToWishList":
      return [...state, action.payload];
    case "removeFromWishList":
      return state.filter(
        (wishList) => wishList.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
