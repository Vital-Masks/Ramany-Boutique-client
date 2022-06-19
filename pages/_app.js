import React, { createContext, useEffect, useReducer, useState } from "react";
import "../styles/globals.css";

import Layout from "../components/Layout";
import { Reducer } from "../context/Reducer";
import {
  FETCH_CART_ITEM,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
} from "../constants/actionTypes";
import { getProducts } from "../services/products";
import { getCategories } from "../services/categories";

export const CartSystem = createContext();
export const ProductSystem = createContext();
export const CategorySystem = createContext();

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [state, dispatch] = useReducer(Reducer, cart);
  const [productsState, dispatchProducts] = useReducer(Reducer, products);
  const [categoriesState, dispatchCategories] = useReducer(Reducer, categories);

  const getCardItem = async () => {
    const data = await JSON.parse(localStorage?.cart);
    if (data) {
      dispatch({ type: FETCH_CART_ITEM, payload: data });
    }
  };

  const fetchProducts = async () => {
    const productsResults = await getProducts();
    if (productsResults) {
      dispatchProducts({ type: FETCH_PRODUCTS, payload: productsResults });
    }
  };

  const fetchCategories = async () => {
    const categoriesResults = await getCategories();
    if (categoriesResults) {
      dispatchCategories({
        type: FETCH_CATEGORIES,
        payload: categoriesResults,
      });
    }
  };

  useEffect(() => {
    if (localStorage.cart) {
      dispatch(getCardItem());
    }
  }, []);

  useEffect(() => {
    dispatchProducts(fetchProducts());
    dispatchCategories(fetchCategories());
  }, []);

  return (
    <CartSystem.Provider value={{ state, dispatch }}>
      <CategorySystem.Provider value={{ categoriesState, dispatchCategories }}>
        <ProductSystem.Provider value={{ productsState, dispatchProducts }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductSystem.Provider>
      </CategorySystem.Provider>
    </CartSystem.Provider>
  );
}

export default MyApp;
