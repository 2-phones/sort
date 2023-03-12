import React from 'react';
import { SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/common/modal.hook';
import { tokenCheck } from '../../util/tokenCheck';
import { PostIcon } from '../Imgs/imgExport';

const Sellbtn = () => {
  const { clickHandler } = useModal();
  const navigate = useNavigate();
  const token = tokenCheck();
  return (
    <SellbtnComponent onClick={() => (token ? navigate('/write') : clickHandler('login'))}>
      <p>
        <PostIcon />
      </p>
    </SellbtnComponent>
  );
};

export default Sellbtn;
