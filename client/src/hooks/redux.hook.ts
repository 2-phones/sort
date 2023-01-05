import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, DispatchType } from '../redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<DispatchType>();
