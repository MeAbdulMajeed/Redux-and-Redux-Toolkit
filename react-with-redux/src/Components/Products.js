import { useDispatch } from "react-redux"
import { addToWishlist } from "../store/Action"
import { addToCart } from "../store/slices/CartSlice"

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch()
    return (
      <div className="product">
        <div className="product-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="title-container">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
        <div className="price-rating-container">
          <p className="rating">{+rating} ★ ★ ★ ★</p>
          <p className="price">${price}</p>
        </div>
        <div className="cta-container">
          <button onClick={()=>dispatch(addToCart({productId}))}>Add to Cart</button>
          <button onClick={()=>dispatch(addToWishlist({productId, title, rating, price, imageUrl}))}>Add To Wishlist</button>
        </div>
      </div>
    )
  }