export function addToCart(productId, quantity) {
  return {
    type: "addToCart",
    payload: {
      productId: productId,
      quantity: quantity,
    },
  };
}

export function removeFromCart(productId) {
  return {
    type: "removeFromCart",
    payload: {
      productId: productId,
    },
  };
}

export function increaseQuantity(productId) {
  return {
    type: "addQuantity",
    payload: {
      productId: productId,
    },
  };
}

export function decreaseQuantity(productId) {
  return {
    type: "decreaseQuantity",
    payload: {
      productId: productId,
    },
  };
}

export function addToWishlist(productId) {
    return {
      type: "addToWishList",
      payload: {
        productId: productId
      },
    };
  }
  
  export function removeFromWishlist(productId) {
    return {
      type: "removeFromWishList",
      payload: {
        productId: productId,
      },
    };
  }
  