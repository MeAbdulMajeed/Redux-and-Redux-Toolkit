import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Products";
import { selectAllProducts, selectProductsError, selectProductsLoading } from "../store/slices/ProductSlice";

export default function Home() {
  const productsList = useSelector(selectAllProducts);
  const isLoading = useSelector(selectProductsLoading);
  const isError = useSelector(selectProductsError);
  // console.log("productsList", productsList);
  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : isError ? (
    <h2 style={{ textAlign: "center", color: "red" }}>{isError}</h2>
  ) : (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
