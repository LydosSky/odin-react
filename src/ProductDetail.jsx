import { useContext } from "react";
import { ShopContext } from "./App";

export default function ProductDetail({ products, addToCart }) {
  const { products, addToCart} = useContext(ShopContext)
  
  return (
    <div>
      <div>
        <button type="button"onClick{addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
