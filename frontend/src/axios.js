import axios from "axios";

// products
export const fetchAllProducts = async () => {
  return axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/products`);
};

export const fetchSingleProduct = async (id) => {
  return axios.get(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/product/${id}`
  );
};
export const createProduct = async (data) => {
  return axios.post(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/createProduct`,
    data
  );
};

export const uploadImage = async (formData) => {
  return axios.post(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/uploadImage`,
    formData
  );
};

// users
export const signup = async (data) => {
  return axios.post(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/register`,
    data
  );
};

export const login = async (data) => {
  return axios.post(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/login`,
    data
  );
};
