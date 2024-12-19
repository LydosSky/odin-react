import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./App";

function Links({ cartItemsCount }) {
  const { cartItems } = useContext(ShopContext);

  return (
    <ul>
      <li>
        <Link to="/">
          <span>Cart</span>
          <div className="cart-icon">{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ cartItemsCount }) {
  return (
    <header>
      <nav>
        <Links />
      </nav>
    </header>
  );
}
