import axios from 'axios';
import endpoints from './../constants/endpoints/index';

const baseUrl = process.env.NEXT_PUBLIC_API_ROOT;

export const getProducts = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_PRODUCTS}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data || [];
};

export const getProduct = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_PRODUCTS}/${id}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data;
};

export const makeOrder = async (obj) => {
  const options = {
    method: 'POST',
    url: `${baseUrl + endpoints.POST_ORDER}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: obj,
  };
  return (await axios(options)).data || [];
};
