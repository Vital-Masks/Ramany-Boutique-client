import axios from 'axios';
import endpoints from './../constants/endpoints/index';

const baseUrl = process.env.NEXT_PUBLIC_API_ROOT;

export const registerCustomer = async (obj) => {
  const options = {
    method: 'POST',
    url: `${baseUrl + endpoints.POST_REGISTER}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: obj,
  };
  return (await axios(options)).data || [];
};

export const loginCustomer = async (obj) => {
  const { email, password } = obj;

  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_LOGIN}/${email}?password=${password}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data || [];
};

export const updateCustomer = async (id, obj) => {
  const options = {
    method: 'PUT',
    url: `${baseUrl + endpoints.POST_UPDATE_CUSTOMER}/${id}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: obj,
  };
  return (await axios(options)).data || [];
};
