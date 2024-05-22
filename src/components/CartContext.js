// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id);
    if (productExists) {
      setCart(currentCart => currentCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart(currentCart => [...currentCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(currentCart => currentCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(currentCart => currentCart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const saveForLater = (productId) => {
    setCart((currentCart) => {
      const product = currentCart.find((item) => item.id === productId);
      setSavedItems((currentSavedItems) => [...currentSavedItems, product]);
      return currentCart.filter((item) => item.id !== productId);
    });
  };


  const removeFromSaved = (productId) => {
    setSavedItems((currentSavedItems) => currentSavedItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, savedItems, saveForLater, removeFromSaved }}>
      {children}
    </CartContext.Provider>
  );
};