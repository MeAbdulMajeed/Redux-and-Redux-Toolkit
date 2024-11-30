import Product from "./Components/Products";
import { Data } from "./store/Data";
import './App.css'
import { useSelector } from "react-redux";

function App() {
  const selector = useSelector((state)=> state.products)
  console.log(selector)
  return (
    <div className="products-container">
      {Data.map(({id, title, rating, price, image})=>(
    
        <Product key={id} title={title} rating={rating.rate} price={price} imageUrl={image}/>
      ))}
    </div>
  );
}

export default App;
