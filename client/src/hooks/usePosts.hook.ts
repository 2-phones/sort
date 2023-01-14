import { PostsType } from './../redux/InitialState/posts.initialState';
import { useAppSelector } from './redux.hook';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/posts.api';
import { useSort } from './filter.hook';

export const usePosts = (type: string | undefined) => {
  const [responsePosts, setPosts] = useState<any>([]);
  const viewMore = type === 'landing' ? 5 : useAppSelector((state) => state.posts.views);
  const statusAPI = useAppSelector((state) => state.posts.statusAPI);
  const selectSort = useAppSelector((state) => state.posts.selectSort);
  const { sortedPosts } = useSort(responsePosts);
  const posts = sortedPosts.slice(0, viewMore);

  useEffect(() => {
    const promiseCall = async () => {
      const result = await getPosts(`posts/${statusAPI}`);
      setPosts(result);
    };
    promiseCall();
  }, [viewMore, statusAPI, selectSort]);

  return { posts };
};

export const usePostId = (id: string | undefined) => {
  const [post, setPosts] = useState<any>({});
  useEffect(() => {
    const promiseCall = async () => {
      const result = await getPosts(`posts/id/${id}`);
      setPosts(result[0]);
    };
    promiseCall();
  }, [id]);

  return { post };
};
