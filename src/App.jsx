import "./App.css";
import ReducerComponent from "./reducers";

// const ShopContext = createContext({
//   products: [],
//   cartItems: [],
//   addToCart: () => {},
// });

export default function App() {
  return (
    <div>
      <ReducerComponent />
    </div>
  );
}
