export function addToCart(productData) {
  return {
    type: "addToCart",
    payload: productData,
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

export function addToWishlist(productData) {
    return {
      type: "addToWishList",
      payload: productData,
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
  