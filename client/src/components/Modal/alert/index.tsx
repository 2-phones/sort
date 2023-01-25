import React from 'react';
import { useAppSelector } from '../../../hooks/redux.hook';
import ProfileAlert from '../../../views/Profile/Alert';
import * as S from './style';

const AlertModal = () => {
  const { isOpen, modaltypes } = useAppSelector((state) => state.modal);

  return (
    <S.Container display={isOpen ? 'flex' : 'none'}>
      <S.ModalWindow>{modaltypes === 'delete' ? <ProfileAlert /> : null}</S.ModalWindow>
    </S.Container>
  );
};

export default AlertModal;
