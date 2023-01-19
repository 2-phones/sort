import { googleOauth } from './../api/auth.api';
import { useState } from 'react';
import { kakaoAuthCode } from '../api/auth.api';

interface ClickHooks {
  isClick: boolean;
  clickHandler: () => void;
}

export const useClick = (): ClickHooks => {
  const [isClick, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!isClick);
  };

  return { isClick, clickHandler };
};

export const useAuthBtnClick = (social: string, auth: string) => {
  localStorage.setItem('auth', auth);
  social === 'kakao' ? kakaoAuthCode() : googleOauth();
};
