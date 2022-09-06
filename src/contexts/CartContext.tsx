/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Product } from "../data";

interface ContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevState) => [...prevState, product]);
  };

  const removeFromCart = (product: Product) => {
    // TODO: add implementation
    throw new Error("implement is missing: " + product.id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

/** Custom hook to consume the cart context */
export const useCart = () => useContext(CartContext);

export default CartProvider;
