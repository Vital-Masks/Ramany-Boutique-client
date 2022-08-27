import axios from 'axios';
import endpoints from './../constants/endpoints/index';

const baseUrl = process.env.NEXT_PUBLIC_API_ROOT;

export const getOrders = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_ORDERS}/${id}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data || [];
};
