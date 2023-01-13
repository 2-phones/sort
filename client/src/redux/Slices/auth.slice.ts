import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import KaKao from '../../components/Imgs/kakao.svg';
import Google from '../../components/Imgs/google.svg';
import { ButtonsTypes, InputTypes } from '../InitialState/auth.initialState';

interface InitialState {
  buttonInfo: ButtonsTypes[];
  inputInfo: InputTypes[];
  social: string;
  modalCompoents: string | null;
  loginORsignup: string;
}

const initialState: InitialState = {
  buttonInfo: [
    {
      id: 0,
      name: '',
      background: '#222222',
      color: '#ffffff',
      hover: '',
      social: '',
      svg: '',
    },
    {
      id: 1,
      name: '카카오',
      background: '#FEE900',
      color: '#000000',
      hover: '',
      social: 'kakao',
      svg: KaKao,
    },
    {
      id: 2,
      name: '구글',
      background: '#ffffff',
      color: '#000000',
      hover: 'dark',
      social: 'google',
      svg: Google,
    },
  ],
  inputInfo: [
    { id: 0, name: 'email', label: '이메일', placeholder: '예) SORT@SORT.COM' },
    { id: 1, name: 'password', label: '비밀번호', placeholder: '' },
  ],
  social: '',
  loginORsignup: '',
  modalCompoents: '',
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    socialCheck: (state, action) => {
      state.social = action.payload;
    },
    authType: (state, action) => {
      console.log(action.payload);
      state.loginORsignup = action.payload;
    },
  },
});

export default AuthSlice;
export const { socialCheck, authType } = AuthSlice.actions;
