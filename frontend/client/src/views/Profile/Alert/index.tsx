import React from 'react';
import { BasicBtn } from '../../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/common/redux.hook';
import { useMyPost } from '../../../hooks/user/post.hook';
import { alertModalHandler, executeHandler } from '../../../redux/Slices/modal.slice';
import * as S from './style';

const ProfileAlert = () => {
  const dispatch = useAppDispatch();
  const { isOpen, alertMsg } = useAppSelector((state) => state.modal);
  const { executeHandler, cancelHandler } = useMyPost();

  return (
    <S.Container>
      <S.AlertBody>
        <p>{alertMsg}</p>
      </S.AlertBody>
      <S.ButtonSection>
        <S.ButtonWrapper onClick={() => cancelHandler()}>
          <BasicBtn background="#edebeb" color="black" border="1px solid #d4d2d2">
            취소
          </BasicBtn>
        </S.ButtonWrapper>
        <S.ButtonWrapper onClick={() => executeHandler()}>
          <BasicBtn background="" border="1px solid #d4d2d2">
            삭제
          </BasicBtn>
        </S.ButtonWrapper>
      </S.ButtonSection>
    </S.Container>
  );
};

export default ProfileAlert;
