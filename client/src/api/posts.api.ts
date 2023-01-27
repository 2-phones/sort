import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { PostsAPI } from '../config/api.config';

export const createPost = async (data: any) => {
  const access_token = localStorage.getItem('access_token');

  if (!access_token) {
    return;
  }

  await PostsAPI.post('posts', data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
const editPosts = async () => {};
const deltePosts = async () => {};

export const getPosts = async (api: string) => {
  try {
    const result = await PostsAPI.get(api);
    return result['data'];
  } catch {
    return null;
  }
};

export const getPostId = async (api: string) => {
  try {
    const result = await PostsAPI.get(api);
    return result['data'];
  } catch {}
};
