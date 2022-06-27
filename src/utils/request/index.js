import axios from 'axios';

export const mainRequest = axios.create({
  baseURL: `https://tiktok.fullstack.edu.vn/api`,
});

export const get = async (path, options = {}) => {
  const response = await mainRequest.get(path, options);
  return {
    ...response,
    data: response.data.data,
  };
};
