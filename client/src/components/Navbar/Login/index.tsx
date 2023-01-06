import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../../views/Login';
import Modall from '../../Modal';
import * as S from '../style';

const NavLogin = () => {
  const navigate = useNavigate();

  return (
    <S.LoginSection>
      <S.LoginBox>
        <p className="log_left" onClick={() => <Modall Components={Login} />}>
          회원가입
        </p>
        <p className="log_right" onClick={() => null}>
          로그인
        </p>
      </S.LoginBox>
    </S.LoginSection>
  );
};

export default NavLogin;
