import { useState, useEffect } from 'react';
import * as dotenv from 'dotenv';
import { authAPI } from '../config/api.config';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

interface Responses {
  success: any;
  error: any;
}
type AuthType = 'login' | 'signup';

export const useAuth = (login_data: LoginData, api: AuthType): { success: any; error: any; authRequest: () => any } => {
  const [success, setSuccess] = useState<any>();
  const [error, setError] = useState<any>();
  const [tokens, setTokens] = useState<any>({});
  const navigate = useNavigate();
  const authRequest = async () => {
    try {
      const result = await authAPI.post(api, { data: login_data, type: 'general' });
      setTokens(result.data);

      if (api === 'signup') {
        return window.alert('회원가입 완료!');
      }

      return navigate('/main');
    } catch {
      const message = api === 'signup' ? '중복된 이메일 ' : '아이디와 비밀번호를 확인해주세요';

      return window.alert(message);
    }
  };

  useEffect(() => {
    authRequest();
  }, []);

  return { success, error, authRequest };
};


