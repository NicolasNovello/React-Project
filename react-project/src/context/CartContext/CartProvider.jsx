import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };
  const isInCart = (productId) => {
    return cart.some((item) => item.product.id === productId);
  };
  const clearCart = () => {
    setCart([]);
  };
  const priceCart = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };
  const totalProducts = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const removeCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        clearCart,
        priceCart,
        totalProducts,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
