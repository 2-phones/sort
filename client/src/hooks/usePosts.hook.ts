import { PostsType } from './../redux/InitialState/posts.initialState';
import { useAppSelector } from './redux.hook';
import { useEffect, useState } from 'react';
import { createPost, getPosts } from '../api/posts.api';
import { useSort } from './filter.hook';

export const useGetPosts = (type: string | undefined) => {
  const [responsePosts, setPosts] = useState<any>([]);
  const viewMore = type === 'landing' ? 5 : useAppSelector((state) => state.posts.views);
  const statusAPI = useAppSelector((state) => state.posts.statusAPI);
  const selectSort = useAppSelector((state) => state.posts.selectSort);
  const { sortHandler } = useSort(responsePosts);
  const posts = sortHandler ? sortHandler.slice(0, viewMore) : null;

  useEffect(() => {
    const promiseCall = async () => {
      try {
        const result = await getPosts(`posts/${statusAPI}`);
        setPosts(result);
      } catch {}
    };
    promiseCall();
  }, [viewMore, statusAPI, selectSort]);

  return { posts };
};

export const useGetPostId = (id: string | undefined) => {
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

export const useCreatePost = (data: any) => {
  console.log(data);
  const post_data = { ...data, status: '판매중' };
  const promiseCall = async () => {
    try {
      const result = await createPost(post_data);
      console.log(result);

      window.alert('게시물이 등록 되었습니다.');
      location.replace('/main');
    } catch (err) {
      console.log(err);
    }
  };
  promiseCall();
};
