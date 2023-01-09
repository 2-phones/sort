import { sellButton } from '../Imgs/mainImgs/imgExport';
import React from 'react';
import { BasicBtn, SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';
import { chekckLocal } from '../../util/requestLogin';
import Modal from '../Modal';
import Login from '../../views/Login';
import { useModal } from '../../hooks/modal.hook';

const Sellbtn = () => {
  const { clickHandler } = useModal();
  const navigate = useNavigate();

  return (
    <SellbtnComponent onClick={() => clickHandler('login')}>
      <p>상</p>
      <p>품</p>
      <p>등</p>
      <p>록</p>
    </SellbtnComponent>
  );
};

export default Sellbtn;
