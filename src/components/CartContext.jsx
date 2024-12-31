import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (item) => {
      setCart((prevCart) => {
        // Check if an item with the same id and price exists
        const existingItemIndex = prevCart.findIndex(
          (cartItem) => cartItem.id === item.id && cartItem.price === item.price
        );
  
        if (existingItemIndex !== -1) {
          // Update quantity and total price for the existing item
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex].quantity += 1;
          updatedCart[existingItemIndex].totalPrice =
            updatedCart[existingItemIndex].quantity * updatedCart[existingItemIndex].price;
          return updatedCart;
        } else {
          // Add as a new item to the cart
          return [
            ...prevCart,
            {
              ...item,
              quantity: 1,
              totalPrice: item.price,
            },
          ];
        }
      });
    };
  
    const removeFromCart = (id, price) => {
      setCart((prevCart) =>
        prevCart.filter(
          (cartItem) => !(cartItem.id === id && cartItem.price === price)
        )
      );
    };
  
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
        {children}
      </CartContext.Provider>
    );
  };
  