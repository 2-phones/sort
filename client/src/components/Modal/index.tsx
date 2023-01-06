import React, { ReactComponentElement, useState } from 'react';
import { ButtonUI } from '../Button/Button';
import { Input } from '../Input/Input';
import { Container, LogoSection, ModalWindow } from './momodalStyle';
import Kakao from '../../components/Imgs/kakao.svg';
import Google from '../../components/Imgs/google.svg';

const Modal = ({ Components }: any) => {
  return (
    <Container display={Components ? 'flex' : 'none'}>
      <ModalWindow>
        <p className="close"> &times;</p>

        {Components && Components ? <Components /> : null}
      </ModalWindow>
    </Container>
  );
};

export default Modal;
