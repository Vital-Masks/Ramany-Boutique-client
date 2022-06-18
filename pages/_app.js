import React, { createContext, useEffect, useReducer, useState } from "react";
import "../styles/globals.css";

import Layout from "../components/Layout";
import { CartReducers } from "../context/reducer/CartReducer";
import { FETCH_CART_ITEM } from "../constants/actionTypes";

export const CartSystem = createContext();

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(CartReducers, cart);

  const getCardItem = async () => {
    const data = await JSON.parse(localStorage?.cart);
    if (data) {
      dispatch({ type: FETCH_CART_ITEM, payload: data });
    }
  };

  useEffect(() => {
    if (localStorage.cart) {
      dispatch(getCardItem());
    }
  }, []);

  return (
    <CartSystem.Provider value={{ state, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartSystem.Provider>
  );
}

export default MyApp;
