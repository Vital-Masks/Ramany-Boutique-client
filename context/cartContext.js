import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const maxFive = (cartQty, qty) => {
    let result;
    let total = cartQty + qty;
    result = total < 5 ? total : 5;
    return result;
  };

  const addToCart = (values) => {
    const { productId, quantity, size } = values;
    const cartItem = cart.find(
      (item) => item.productId === productId && item.size === size
    );

    if (cartItem) {
      const item = cart.map((cart) =>
        cart.productId === productId && cart.size === size
          ? {
              ...cart,
              quantity: maxFive(cart.quantity, quantity),
            }
          : cart
      );

      localStorage.setItem('cart', JSON.stringify(item));
      setCart(item);
    } else {
      const item = [...cart, { id: uuidv4(), productId, quantity, size }];
      localStorage.setItem('cart', JSON.stringify(item));
      setCart(item);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearCartItem = (id) => {
    const filtered = cart.filter((x) => x.id !== id);
    localStorage.setItem('cart', JSON.stringify(filtered));
    setCart(filtered);
  };

  const getCardItem = async () => {
    const data = await JSON.parse(localStorage?.cart);
    if (data) {
      setCart(data);
    }
  };

  useEffect(() => {
    if (localStorage.cart) {
      getCardItem();
    }
  }, []);

  const value = { cart, addToCart, clearCartItem, clearCart, getCardItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
