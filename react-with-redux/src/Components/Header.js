import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import {
  fetchCartItemsData
} from "../store/slices/CartSlice";
import {
  fetchAllProductsData
} from "../store/slices/ProductSlice";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const wishlistItems = useSelector((state) => state.wishList);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    // dispatch(
    //   fetchData({
    //     url: "products",
    //     onStart: fetchProducts.type,
    //     onSuccess: updateAllProducts.type,
    //     onError: fetchProductsError.type,
    //   })
    // );
    // dispatch(
    //   fetchData({
    //     url: "carts/5",
    //     onStart: fetchCartItems.type,
    //     onSuccess: loadCartItems.type,
    //     onError: fetchCartError.type,
    //     transformRespone: (data) => data.products,
    //   })
    // );
    dispatch(fetchAllProductsData())
    dispatch(fetchCartItemsData());

    // const fetchProductsApi = async () => {
    //   try {
    //     dispatch(fetchProducts());
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     // console.log("store data", data);
    //     dispatch(updateAllProducts(data));
    //   } catch (error) {
    //     dispatch(fetchProductsError());
    //     // console.log("Error fetching products:", error);
    //   }
    // };
    // const fetchCartItemsApi = async () => {
    //   try {
    //     dispatch(fetchCartItems());
    //     const response = await fetch("https://fakestoreapi.com/carts/5");
    //     const data = await response.json();
    //     // console.log("cart data", data.products);
    //     dispatch(loadCartItems(data.products));
    //   } catch (error) {
    //     dispatch(fetchCartError());
    //     console.log("Error fetching cart data:", error);
    //   }
    // };
    // fetchProductsApi();
    // fetchCartItemsApi();
  }, []);
  // console.log(wishlistItems);
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
            {cartItems.list.reduce((acc, current) => acc + current.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
