import { CSSProperties } from "react";
import { useCart } from "../contexts/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header style={rootStyle}>
      <span>Hello World</span>
      <span>🛒{cart.length}</span>
    </header>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  background: "#86A838",
  padding: ".4rem 1rem",
};

export default Header;
