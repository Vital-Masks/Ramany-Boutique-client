import { createContext, useEffect, useState } from 'react';
import { getJewellery } from '../services/jewellery';

export const JewelleryContext = createContext(null);
export const JewelleryContextProvider = ({ children }) => {
  const [jewelleries, setJewelleries] = useState([]);

  const fetchJewelleries = async () => {
    try {
      const productsResults = await getJewellery();
      setJewelleries(productsResults);
    } catch (error) {
      console.log(error);
    }
  };

  const value = { jewelleries };

  useEffect(() => {
    fetchJewelleries();
  }, []);

  return (
    <JewelleryContext.Provider value={value}>
      {children}
    </JewelleryContext.Provider>
  );
};
