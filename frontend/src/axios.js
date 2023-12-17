import axios from "axios";

export const fetchAllProducts = async () => {
  return axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/products`);
};

export const fetchSingleProduct = async (id) => {
  return axios.get(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/product/${id}`
  );
};

// export const fetchAllProducts = async () => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/products`
//     );
//     return response;
//   } catch (error) {
//     return error.message;
//   }
// };
