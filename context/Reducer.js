import {
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_CART_ITEM,
  FETCH_CART_ITEM,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
} from "../constants/actionTypes";
import { v4 as uuidv4 } from "uuid";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId, quantity, size } = action.payload;
      const cartItem = state.find(
        (item) => item.productId === productId && item.size === size
      );

      if (cartItem) {
        const item = state.map((cart) =>
          cart.productId === productId && cart.size === size
            ? { ...cart, quantity: cart.quantity + quantity }
            : cart
        );

        localStorage.setItem("cart", JSON.stringify(item));
        return item;
      } else {
        const item = [...state, { id: uuidv4(), productId, quantity, size }];
        localStorage.setItem("cart", JSON.stringify(item));
        return item;
      }
    case FETCH_CART_ITEM:
      return action.payload;
    case CLEAR_CART:
      return action.payload;
    case CLEAR_CART_ITEM:
      const filtered = state.filter((x) => x.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(filtered));
      return filtered;
    case FETCH_PRODUCTS:
      return action.payload;
    case FETCH_CATEGORIES:
      return action.payload;
  }
};
