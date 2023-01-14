import { useEffect, useState } from 'react';
import { AuthData, createUser, signup, login } from '../api/auth.api';
import { useAppSelector } from './redux.hook';

export const useOauth = (access_token: string) => {
  const social_type = useAppSelector((state) => state.auth.social);
  const loginORsignup = useAppSelector((state) => state.auth.loginORsignup);
  const data = { access_token, social_type };
  window.alert(loginORsignup);
  //   loginORsignup === 'signup' ? useSignup(data, 'social') : useLogin(data, 'social');
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
        const result: any = await login(request);
        localStorage.getItem(result);
        location.replace('/main');
      } catch (err: any) {
        const message = err.response.data.message;
        window.alert(message);
        location.replace('/main');
      }
    };
    promiseCall();
  }, [data]);
};
