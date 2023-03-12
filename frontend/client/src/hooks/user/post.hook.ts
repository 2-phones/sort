import { useAppDispatch, useAppSelector } from './../common/redux.hook';
import { useNavigate } from 'react-router-dom';
import { useDeletePost } from '../post/posts.hook';
import { addAlertMsg, alertModalHandler } from '../../redux/Slices/modal.slice';
import { checkedPost } from '../../redux/Slices/user.slice';
import { useState, useEffect } from 'react';
import ProfileAlert from '../../views/Profile/Alert';

export const useMyPost = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isExecute, isOpen } = useAppSelector((state) => state.modal);
  const postID = useAppSelector((state) => state.user.postID);

  const editPostHandler = (post_id: string) => {
    post_id ? navigate(`/mypage/sell/edit/${post_id}`) : null;
  };

  const deleteHandler = () => {
    dispatch(alertModalHandler('delete'));
    dispatch(addAlertMsg('정말로 삭제 하시겠습니까?'));
  };

  const executeHandler = () => {
    return useDeletePost(postID);
  };

  const cancelHandler = () => {
    return dispatch(alertModalHandler(false));
  };

  const checkedHandler = (post_id: string) => {
    dispatch(checkedPost(post_id));
  };

  return { editPostHandler, deleteHandler, checkedHandler, executeHandler, cancelHandler };
};
