import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/products";

export const ProductContext = createContext(null);
export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const productsResults = await getProducts();
    setProducts(productsResults);
  };

  const value = { products };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
