import { Link } from "react-router-dom";
import "./App.css";
import { createContext } from "react";
import Header from "./Header";
import ProductDetail from "./ProductDetail";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  return (
    <div>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Header />
        <ProductDetail />
      </ShopContext.Provider>
    </div>
  );
}
