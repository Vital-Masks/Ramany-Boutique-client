import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categories";

export const CategoryContext = createContext(null);
export const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const categoriesResults = await getCategories();
        setCategories(categoriesResults)
    };

    const value = { categories };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    );
};
