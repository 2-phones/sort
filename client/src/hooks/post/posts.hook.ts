import { PostsType } from '../../redux/InitialState/posts.initialState';
import { useAppSelector } from '../common/redux.hook';
import { useEffect, useState } from 'react';
import { createPost, getPosts, editPost, deletePost } from '../../api/posts.api';
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
  const post_data = { ...data, status: '판매중' };
  const promiseCall = async () => {
    try {
      const result = await createPost(post_data);
      window.alert('게시물이 등록 되었습니다.');
      return location.replace('/mypage');
    } catch (err) {
      return window.alert('게시물 등록 실패했습니다. 재시도 해주세요');
    }
  };
  promiseCall();
};

export const useEditPost = (data: any, post_id: string) => {
  const promiseCall = async () => {
    try {
      const result = await editPost(data, post_id);
      window.alert('게시물이 수정 되었습니다.');
      return location.replace('/mypage');
    } catch {
      window.alert('수정 실패했습니다. 재시도 해주세요');
      return location.reload();
    }
  };
  promiseCall();
};

export const useDeletePost = (post_id: string) => {
  console.log(post_id);
  const promiseCall = async () => {
    try {
      const result = await deletePost(post_id);
      window.alert('게시물이 삭제 되었습니다.');
      return location.replace('/mypage');
    } catch (err) {
      window.alert('삭제 실패했습니다. 재시도 해주세요');
      return location.reload();
    }
  };
  promiseCall();
};
