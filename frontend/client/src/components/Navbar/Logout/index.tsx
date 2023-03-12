import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTokenReissue } from '../../../hooks/auth/auth.hook';
import { tokendelete } from '../../../util/tokenCheck';
import * as S from '../style';

const NavLogout = () => {
  const navigate = useNavigate();

  useTokenReissue();
  return (
    <S.LoginSection>
      <S.LoginBox>
        <p className="log_left" onClick={() => navigate('/mypage')}>
          마이페이지
        </p>
        <p className="log_right" onClick={() => tokendelete()}>
          로그아웃
        </p>
      </S.LoginBox>
    </S.LoginSection>
  );
};

export default NavLogout;
