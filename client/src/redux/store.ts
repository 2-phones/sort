import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import itemSlice from './itemslice';
import userSlice from './loginslice';
import pageSlice from './MYPageSlice';
import ModalSlice from './Slices/modal.slice';

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    account: userSlice.reducer,
    mypage: pageSlice.reducer,
    modal: ModalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
