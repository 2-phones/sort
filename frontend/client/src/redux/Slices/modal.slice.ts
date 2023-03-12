import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface InitialState {
  isOpen: boolean;
  isExecute: boolean;
  alertMsg: string;
  modalCompoents: string | null;
  modaltypes: string;
}

const initialState: InitialState = {
  isOpen: false,
  isExecute: false,
  alertMsg: '',
  modalCompoents: '',
  modaltypes: '',
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openHandler: (state, action) => {
      state.modalCompoents = action.payload;
    },
    alertModalHandler: (state, action) => {
      state.isOpen = action.payload ? true : false;
      state.modaltypes = action.payload;
    },
    executeHandler: (state, action) => {
      state.isExecute = action.payload;
    },
    addAlertMsg: (state, action) => {
      state.alertMsg = action.payload;
    },
  },
});

export default ModalSlice;
export const { openHandler, alertModalHandler, executeHandler, addAlertMsg } = ModalSlice.actions;
