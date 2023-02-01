import { googleOauth } from './../api/auth.api';
import { useState } from 'react';
import { kakaoAuthCode } from '../api/auth.api';

interface ClickHooks {
  isClick: boolean;
  oneClickHandler: () => void;
  clickHandler: () => void;
}

export const useClick = (): ClickHooks => {
  const [isClick, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!isClick);
  };

  const oneClickHandler = () => {
    setClick(true);
  };

  return { isClick, clickHandler, oneClickHandler };
};

export const useAuthBtnClick = (social: string, auth: string) => {
  localStorage.setItem('auth', auth);
  social === 'kakao' ? kakaoAuthCode() : googleOauth();
};
