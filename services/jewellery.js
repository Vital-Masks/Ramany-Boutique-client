import axios from 'axios';
import endpoints from './../constants/endpoints/index';

const baseUrl = process.env.NEXT_PUBLIC_API_ROOT;

export const getJewellery = async () => {
  try {
    const options = {
      method: 'GET',
      url: `${baseUrl + endpoints.GET_JEWELLERY}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    return (await axios(options)).data || [];
  } catch (error) {
    throw error;
  }
};

export const getJewelleryById = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_JEWELLERY}/${id}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data || [];
};

export const getJewelleryByCategory = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_JEWELLERY_BY_CATEGORY}/${id}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data || [];
};

export const getJewelleryByOccasion = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl + endpoints.GET_JEWELLERY_BY_OCCASION_TYPE}/${id}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return (await axios(options)).data || [];
};
