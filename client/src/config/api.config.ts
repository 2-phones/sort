import axios from 'axios';

export const authAPI = axios.create({
  baseURL: process.env.AUTH_API,
});

export const PostsAPI = axios.create({
  baseURL: process.env.POST_API,
});

export const GoogleAPI = axios.create({
  baseURL: process.env.GOOGLE_API,
});
