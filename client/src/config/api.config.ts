import axios from 'axios';

export const authAPI = axios.create({
  baseURL: process.env.TEST_API,
});
