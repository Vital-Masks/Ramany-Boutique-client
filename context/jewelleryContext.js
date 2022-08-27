import { createContext, useEffect, useState } from 'react';
import { getJewellery } from '../services/jewellery';

export const JewelleryContext = createContext(null);
export const JewelleryContextProvider = ({ children }) => {
  const [jewelleries, setJewelleries] = useState([]);

  const fetchJewelleries = async () => {
    const productsResults = await getJewellery();
    setJewelleries(productsResults);
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
