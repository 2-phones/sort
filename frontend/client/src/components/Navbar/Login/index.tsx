import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../hooks/common/modal.hook';
import * as S from '../style';

const NavLogin = () => {
  const navigate = useNavigate();
  const { clickHandler } = useModal();

  return (
    <S.LoginSection>
      <S.LoginBox>
        <p className="log_left" onClick={() => clickHandler('signup')}>
          회원가입
        </p>
        <p className="log_right" onClick={() => clickHandler('login')}>
          로그인
        </p>
      </S.LoginBox>
    </S.LoginSection>
  );
};

export default NavLogin;
