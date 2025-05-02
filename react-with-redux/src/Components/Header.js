import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateAllProducts } from "../store/slices/ProductSlice";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const wishlistItems = useSelector((state) => state.wishList);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log("store data", data);
      dispatch(updateAllProducts(data));
    };
    fetchProducts();
  }, []);
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
