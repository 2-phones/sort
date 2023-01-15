import { sellButton } from '../Imgs/mainImgs/imgExport';
import React from 'react';
import { BasicBtn, SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';
import { chekckLocal } from '../../util/requestLogin';
import Modal from '../Modal';
import Login from '../../views/Login';
import { useModal } from '../../hooks/modal.hook';
import { tokenCheck } from '../../util/tokenCheck';

const Sellbtn = () => {
  const { clickHandler } = useModal();
  const navigate = useNavigate();
  const token = tokenCheck();
  return (
    <SellbtnComponent onClick={() => (token ? navigate('/write') : clickHandler('login'))}>
      <p>상</p>
      <p>품</p>
      <p>등</p>
      <p>록</p>
    </SellbtnComponent>
  );
};

export default Sellbtn;
