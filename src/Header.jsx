import { useContext } from "react";
import { Link } from "react-router-dom";

function Links({ cartItemsCount }) {
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
