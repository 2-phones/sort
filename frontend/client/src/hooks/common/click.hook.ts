import { googleOauth } from '../../api/auth.api';
import { useState } from 'react';
import { kakaoAuthCode } from '../../api/auth.api';

interface ClickHooks {
  isClick: boolean;
  oneClickHandler: () => void;
  handleClick: () => void;
}

export const useClick = (): ClickHooks => {
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClick);
  };

  const oneClickHandler = () => {
    setClick(true);
  };

  return { isClick, handleClick, oneClickHandler };
};

export const useAuthBtnClick = (social: string, auth: string) => {
  localStorage.setItem('auth', auth);
  social === 'kakao' ? kakaoAuthCode() : googleOauth();
};
