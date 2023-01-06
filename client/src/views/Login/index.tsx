import React, { useState } from 'react';
import { ButtonUI } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import {
  Container,
  InputSection,
  InputBox,
  OptionSection,
  KeepLoggedin,
  ButtonSection,
  ButtonBox,
  SignupSection,
} from './style';
import { ReactComponent as Kakao } from '../../components/Imgs/kakao.svg';
import { ReactComponent as Google } from '../../components/Imgs/google.svg';
import { useAuth } from '../../api/auth.api';
import { useInput } from '../../hooks/useInput';

const Login = () => {
  const [userData, changehandler] = useInput();
  const [btnTypes, SetBtnTypes] = useState([
    { id: 0, name: '로그인', background: '#222222', color: '#ffffff', hover: '', svg: '' },
    {
      id: 1,
      name: '카카오 로그인',
      background: '#FEE900',
      color: '#000000',
      hover: '',
      svg: <Kakao />,
    },
    { id: 2, name: '구글 로그인', background: '#ffffff', color: '#000000', hover: 'dark', svg: <Google /> },
  ]);
  const [InputTypes, setInPutTypes] = useState([
    { id: 0, label: '이메일', name: 'email', placeholder: '예) SORT@SORT.COM' },
    { id: 1, label: '비밀번호', name: 'password', placeholder: '' },
  ]);

  const { success, error, authRequest } = useAuth(userData, 'login');

  return (
    <Container>
      <InputSection>
        {InputTypes.map((li) => {
          return (
            <>
              <p>{li.label}</p>
              <InputBox key={li.id}>
                <Input name={li.name} placeholder={li.placeholder} onChange={changehandler} />
              </InputBox>
            </>
          );
        })}
      </InputSection>
      <OptionSection>
        <KeepLoggedin>
          <input type="checkbox" />
          <p>로그인 유지하기</p>
        </KeepLoggedin>
        <p className="search_pw">비밀번호 찾기</p>
      </OptionSection>
      <ButtonSection>
        {btnTypes.map((li) => {
          return (
            <ButtonBox>
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
            </ButtonBox>
          );
        })}
      </ButtonSection>
      <SignupSection>
        <p className="body">회원이 아니신가요?</p>
        <a className="signup">회원가입</a>
      </SignupSection>
    </Container>
  );
};

export default Login;
