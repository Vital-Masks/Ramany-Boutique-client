import axios from "axios";
import endpoints from './../constants/endpoints/index';

const baseUrl = process.env.NEXT_PUBLIC_API_ROOT;

export const getCategories = async () => {
  const options = {
    method: "GET",
    url: `${baseUrl + endpoints.GET_CATEGORIES}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return (await axios(options)).data || [];
};

export const getProductsByCategory = async (id) => {
  const options = {
    method: "GET",
    url: `${baseUrl + endpoints.GET_PRODUCTS_BY_CATEGORY}/${id}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return (await axios(options)).data || [];
};