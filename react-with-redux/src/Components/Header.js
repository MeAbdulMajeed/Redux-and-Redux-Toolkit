import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishlistItems = useSelector((state) => state.wishList);
  console.log(wishlistItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        
        <Link className="cart-icon">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{wishlistItems.length}</div>
        </Link>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((acc, current) => acc + current.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
