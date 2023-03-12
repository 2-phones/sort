import React, { useState } from 'react';
import * as S from './style';
import { Input } from '../../components/Input/Input';
import { ButtonUI } from '../../components/Button/Button';
import { usePostInput } from '../../hooks/post/postInput.hook';
import { useAuthBtnClick, useClick } from '../../hooks/common/click.hook';
import { useModal } from '../../hooks/common/modal.hook';
import { useAppSelector } from '../../hooks/common/redux.hook';

const Signup = () => {
  const [userData, changehandler] = usePostInput();
  const buttonInfo = useAppSelector((state) => state.auth.buttonInfo);
  const inputInfo = useAppSelector((state) => state.auth.inputInfo);
  const { clickHandler } = useModal();

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
                <Input name={li.name} padding="" placeholder={li.placeholder} onChange={changehandler} />
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
                onClick={() => useAuthBtnClick(li.social, 'signup')}
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
