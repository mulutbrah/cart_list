import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/carts`;

export const get = async () => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};

export const getOne = async (id: any) => {
  try {
    const response = await axios.get(API_URL + '/' + id);

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};