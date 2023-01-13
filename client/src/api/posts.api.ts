import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { PostsAPI } from '../config/api.config';

const createPost = async () => {};
const editPosts = async () => {};
const deltePosts = async () => {};

export const getPosts = async (api: string) => {
  try {
    const result = await PostsAPI.get(api);
    return result['data'];
  } catch {
    return 'server Error';
  }
};

export const getPostId = async (api: string) => {
  try {
    const result = await PostsAPI.get(api);
    return result['data'];
  } catch {}
};
