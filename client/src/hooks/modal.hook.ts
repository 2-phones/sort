import { openHandler } from '../redux/Slices/modal.slice';
import Login from '../views/Login';
import Signup from '../views/Signup';
import { useAppSelector, useAppDispatch } from './redux.hook';

export const useModal = () => {
  const selector = useAppSelector((state) => state.modal.modalCompoents);
  const Component = selector === 'login' ? Login : selector === 'signup' ? Signup : '';

  const dispatch = useAppDispatch();
  const clickHandler = (type: string | null) => {
    dispatch(openHandler(type));
  };

  return { Component, clickHandler };
};
