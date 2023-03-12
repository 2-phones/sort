import React from 'react';
import * as S from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/index';

const Header = () => {
  return (
    <>
      <S.Container>
        <Navbar />
      </S.Container>
    </>
  );
};

export default Header;
