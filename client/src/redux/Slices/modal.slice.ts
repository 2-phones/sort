import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface InitialState {
  isOpen: boolean;
  modalCompoents: any;
}

const initialState: InitialState = {
  isOpen: false,
  modalCompoents: '',
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openHandler: (state, action) => {
      state.isOpen = action.payload;
      state.modalCompoents = action.payload;
    },
  },
});

export default ModalSlice;
export const { openHandler } = ModalSlice.actions;
