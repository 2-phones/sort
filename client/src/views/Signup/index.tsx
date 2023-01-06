import React, { useState } from 'react';
import * as S from './style';
import { Input } from '../../components/Input/Input';
import { ButtonUI } from '../../components/Button/Button';
import { ReactComponent as Kakao } from '../../components/Imgs/kakao.svg';
import { ReactComponent as Google } from '../../components/Imgs/google.svg';
import { useInput } from '../../hooks/useInput';
import { useAuth } from '../../api/auth.api';
import { useClick } from '../../hooks/useClick';

const Signup = () => {
  const [userData, changehandler] = useInput();
  const [btnTypes, SetBtnTypes] = useState([
    { id: 0, name: '가입하기', background: '#222222', color: '#ffffff', hover: '', svg: '', userData },
    {
      id: 1,
      name: '카카오 회원가입',
      background: '#FEE900',
      color: '#000000',
      hover: '',
      svg: <Kakao />,
    },
    { id: 2, name: '구글 회원가입', background: '#ffffff', color: '#000000', hover: 'dark', svg: <Google /> },
  ]);
  const [InputTypes, setInPutTypes] = useState([
    { id: 0, name: 'email', label: '이메일', placeholder: '예) SORT@SORT.COM' },
    { id: 1, name: 'password', label: '비밀번호', placeholder: '' },
  ]);
  console.log(userData);
  const { isClick, clickHandler } = useClick();
  const { success, error, authRequest } = useAuth(userData, 'signup');
  console.log(success);
  return (
    <S.Container>
      <S.LogoSection>
        <p className="logo">회원가입</p>
        <p className="logo_description" color="true">
          올바른 티켓의 시작, SORT
        </p>
      </S.LogoSection>
      <S.InputSection>
        <S.AuthBtn>
          <ButtonUI background="black" fontsize="14px" hover="" color="white" height="100%">
            이메일 인증하기
          </ButtonUI>
        </S.AuthBtn>
        {InputTypes.map((li, i) => {
          return (
            <>
              <p>{li.label}</p>
              <S.InputBox key={li.id}>
                <Input name={li.name} placeholder={li.placeholder} onChange={changehandler} />
              </S.InputBox>
            </>
          );
        })}
      </S.InputSection>
      <S.ButtonSection>
        {btnTypes.map((li) => {
          return (
            <S.ButtonBox>
              <ButtonUI
                key={li.id}
                height="40px"
                background={li.background}
                color={li.color}
                fontsize="14px"
                hover={li.hover}
                onClick={() => authRequest()}
              >
                <p className="logo">{li.svg}</p>
                <p>{li.name}</p>
              </ButtonUI>
            </S.ButtonBox>
          );
        })}
      </S.ButtonSection>
      <S.LoginSection>
        <a className="login">로그인</a>
        <p className="body">으로 돌아가기</p>
      </S.LoginSection>
    </S.Container>
  );
};

export default Signup;
