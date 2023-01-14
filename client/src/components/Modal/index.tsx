import React from 'react';
import { Container, ModalBackground, ModalWindow } from './style';
import { useModal } from '../../hooks/modal.hook';

const Modal = ({ Components }: any) => {
  const { Component, clickHandler } = useModal();
  return (
    <Container display={Component ? 'flex' : 'none'}>
      <ModalBackground onClick={() => clickHandler(null)} />
      <ModalWindow>
        <p className="close" onClick={() => clickHandler(null)}>
          &times;
        </p>
        {Component && Component ? <Component /> : null}
      </ModalWindow>
    </Container>
  );
};

export default Modal;
