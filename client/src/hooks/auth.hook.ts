import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData, createUser, signup, login, tokensReissue, kakaoAuthToken } from '../api/auth.api';
import { useAppSelector } from './redux.hook';

export const useOauth = (access_token: string, social_type: string) => {
  const data = { access_token, social_type };
  const authType = localStorage.getItem('auth');
  authType === 'signup' ? useSignup(data, 'social') : useLogin(data, 'social');
};

export const useSignup = (data: object, type: string) => {
  const request = { data, type };

  useEffect(() => {
    const promiseCall = async () => {
      try {
        const result = await signup(request);
        const message = result['data'];
        window.alert(message);
        location.replace('/main');
      } catch (err: any) {
        const message = err.response.data;
        window.alert(message);
        location.replace('/main');
      }
    };
    promiseCall();
  }, [data]);
};

export const useLogin = (data: object, type: string) => {
  const request = { data, type };
  useEffect(() => {
    const promiseCall = async () => {
      try {
        const result = await login(request);
        const { access_token, refresh_token } = result.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        location.replace('/main');
      } catch (err: any) {
        const message = err.response.data;
        window.alert(message.message);
        location.replace('/main');
      }
    };
    promiseCall();
  }, [data]);
};

export const useTokenReissue = () => {
  const [count, setCount] = useState(0);
  const refresh_token = localStorage.getItem('refresh_token') || '';

  useEffect(() => {
    const promiseCall = async () => {
      try {
        const result = await tokensReissue(refresh_token);
        const { access_token } = result.data || '';
        localStorage.setItem('access_token', access_token);
        setTimeout(() => setCount(count + 1), 890000);
      } catch {
        window.alert('세션 만료로 로그아웃 되었습니다.');
        localStorage.clear();
        location.replace('/main');
      }
    };
    promiseCall();
  }, [count]);
};

export const useKaKaoOAuth = (code: string, social_type: string) => {
  const [access_token, setResponse] = useState('');
  const naviagte = useNavigate();
  useEffect(() => {
    const promiseCall = async () => {
      try {
        const result = await kakaoAuthToken(code);
        const { access_token } = result.data;
        localStorage.setItem('kakaoToken', access_token);
        setResponse(access_token);
        naviagte('/oauth');
      } catch (err: any) {
        window.alert('카카오 정보 에러');
      }
    };
    promiseCall();
  }, []);

  return { access_token };
};
