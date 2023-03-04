import axios from 'axios';

export const authAPI = axios.create({
  baseURL: process.env.AUTH_API,
});

export const PostsAPI = axios.create({
  baseURL: process.env.SERVER_API,
});

export const GoogleAPI = axios.create({
  baseURL: process.env.GOOGLE_API,
});

export const UserAPI = axios.create({
  baseURL: process.env.USER_API,
});

export const ServerAPI = axios.create({
  baseURL: process.env.SERVER_API,
});

export const KaKaoAPI = axios.create({
  baseURL: process.env.KAKAO_TOKEN,
  headers: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export const ChatAPI = axios.create({
  baseURL: process.env.CHAT_API,
});
