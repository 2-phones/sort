import React, { useState } from 'react';
import * as S from './style';
import { Input } from '../../components/Input/Input';
import { ButtonUI } from '../../components/Button/Button';
import { ReactComponent as Kakao } from '../../components/Imgs/kakao.svg';
import { ReactComponent as Google } from '../../components/Imgs/google.svg';
import { useInput } from '../../hooks/useInput';
import { googleOauth, useAuth } from '../../api/auth.api';
import { useClick } from '../../hooks/useClick';
import { useModal } from '../../hooks/modal.hook';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { authType, socialCheck } from '../../redux/Slices/auth.slice';

const Signup = () => {
  const [userData, changehandler] = useInput();
  const buttonInfo = useAppSelector((state) => state.auth.buttonInfo);
  const inputInfo = useAppSelector((state) => state.auth.inputInfo);
  const { success, error, authRequest } = useAuth();
  const { clickHandler } = useModal();
  const dispatch = useAppDispatch();

  const signupBtnClick = (social: string) => {
    dispatch(socialCheck(social));
    dispatch(authType('login'));
    googleOauth();
  };
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
        {inputInfo.map((li, i) => {
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
        {buttonInfo.map((li) => {
          return (
            <S.ButtonBox>
              <ButtonUI
                key={li.id}
                height="40px"
                background={li.background}
                color={li.color}
                fontsize="14px"
                hover={li.hover}
                onClick={() => signupBtnClick(li.social)}
              >
                <p className="logo">
                  <img src={li.svg} />
                </p>
                <p>{li.name} 가입하기</p>
              </ButtonUI>
            </S.ButtonBox>
          );
        })}
      </S.ButtonSection>
      <S.LoginSection>
        <a className="login" onClick={() => clickHandler('login')}>
          로그인
        </a>
        <p className="body">으로 돌아가기</p>
      </S.LoginSection>
    </S.Container>
  );
};

export default Signup;
