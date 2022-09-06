import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { mockedProducts } from "../data";

function Main() {
  const [products] = useState(mockedProducts);
  const { addToCart } = useCart();

  return (
    <main>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </main>
  );
}

export default Main;
