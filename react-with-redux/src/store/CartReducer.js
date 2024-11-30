export default function CartReducer(state = [], action) {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];

    case "removeFromCart":
      return state.filter((cartItem) => cartItem.productId !== action.payload.productId)

    case "addQuantity":
      return state.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        })

    case "decreaseQuantity":
      return state.map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0)

    default:
      return state;
  }
}
