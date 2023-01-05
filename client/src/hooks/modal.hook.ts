import { useDispatch, useSelector } from 'react-redux';
import { openHandler } from '../redux/Slices/modal.slice';
import Login from '../views/Login';
import { useAppSelector, useAppDispatch } from './redux.hook';

const useOpen = (Compoents : any) => {
  const isOpen = useAppSelector((state) => state.modal.modalCompoents);
  const clickHandler = useAppDispatch(openHandler(Compoents));

  return { isOpen, clickHandler };
};
