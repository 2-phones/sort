import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import itemSlice from './itemslice';
import userSlice from './loginslice';
import pageSlice from './MYPageSlice';
import ModalSlice from './Slices/modal.slice';
import PostsSlice from './Slices/posts.slice';
import AuthSlice from './Slices/auth.slice';
import LandingSlice from './Slices/landing.slice';

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    account: userSlice.reducer,
    mypage: pageSlice.reducer,
    modal: ModalSlice.reducer,
    auth: AuthSlice.reducer,
    posts: PostsSlice.reducer,
    landing: LandingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
