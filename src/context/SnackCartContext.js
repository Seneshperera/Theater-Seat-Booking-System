import React, { createContext, useState } from 'react';

export const SnackCartContext = createContext();

export const SnackCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (snack) => {
    const existingItem = cart.find(item => item.id === snack.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === snack.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...snack, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (snackId) => {
    const existingItem = cart.find(item => item.id === snackId);
    
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.id !== snackId));
    } else {
      setCart(cart.map(item => 
        item.id === snackId 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    }
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Function to get quantity of specific item in cart
  const getItemQuantity = (snackId) => {
    const item = cart.find(item => item.id === snackId);
    return item ? item.quantity : 0;
  };

  return (
    <SnackCartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice, getItemQuantity }}>
      {children}
    </SnackCartContext.Provider>
  );
};
