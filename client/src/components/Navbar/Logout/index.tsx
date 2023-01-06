import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modall from '../../Modal';
import * as S from '../style';

const NavLogout = () => {
  const navigate = useNavigate();

  return (
    <S.LoginSection>
      <S.LoginBox>
        <p className="log_left" onClick={() => navigate('/mypage')}>
          마이페이지
        </p>
        <p className="log_right" onClick={() => null}>
          로그아웃
        </p>
      </S.LoginBox>
    </S.LoginSection>
  );
};

export default NavLogout;
