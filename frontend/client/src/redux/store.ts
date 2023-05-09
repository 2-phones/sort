import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import CommonSlice from './slices/common.slice';
import LandingSlice from './slices/landing.slice';

const store = configureStore({
  reducer: {
    landing: LandingSlice.reducer,
    common: CommonSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type DispatchType = typeof store.dispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<DispatchType>();

export { store, useAppSelector, useAppDispatch };
