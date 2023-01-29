import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { MypageInputs } from '../InitialState/page.initialState';
import { DispatchType } from '../store';

type InitialState = {
  trade: [{ id: number; name: string }, { id: number; name: string }];
  myInfo: [
    { id: number; name: string },
    { id: number; name: string },
    { id: number; name: string },
    { id: number; name: string },
  ];
  pageNumber: number;
  writePageInputs: MypageInputs[];
};

const initialState: InitialState = {
  trade: [
    { id: 1, name: '판매상품' },
    { id: 2, name: '찜리스트' },
  ],
  myInfo: [
    { id: 3, name: '내프로필' },
    { id: 4, name: '거래후기' },
    { id: 5, name: '지역인증' },
    { id: 6, name: '회원탈퇴' },
  ],
  pageNumber: 0,
  writePageInputs: [
    {
      id: 0,
      type: 'text',
      label: '제목',
      required: '*',
      name: 'title',
      placeholder: '제목을 입력해주세요.',
      error: '상품 제목을 입력해주세요',
    },
    {
      id: 1,
      type: 'text',
      label: '카테고리',
      required: '*',
      name: 'categories',
      placeholder: '제목을 입력해주세요.',
      error: '상품 카테고리를 선택해주세요',
    },
    {
      id: 2,
      type: 'text',
      label: '가격',
      required: '*',
      name: 'price',
      placeholder: '가격을 입력해주세요.',
      error: '상품 가격을 입력해주세요',
    },
    {
      id: 3,
      type: 'text',
      label: '좌석',
      required: '',
      name: 'seat',
      placeholder: '좌석을 입력해주세요.',
      error: '',
    },
    {
      id: 4,
      type: 'date',
      label: '사용일',
      required: '*',
      name: 'end_date',
      placeholder: '',
      error: '상품 유효기간을 입력해주세요',
    },
    {
      id: 5,
      type: 'text',
      label: '티켓설명',
      required: '*',
      name: 'body',
      placeholder: '구매자에게 필요한 티켓 정보를 포함하여 작성하면 구매 문의를 줄일 수 있습니다 :)',
      error: '상품 내용을 입력해주세요',
    },
    { id: 6, type: 'text', label: '태그', required: '', name: 'tag', placeholder: '태그를 입력해주세요.', error: '' },
  ],
};

const pageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {
    menuChoice: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export default pageSlice;
export const { menuChoice } = pageSlice.actions;
export const menuChoiceData = () => useDispatch<DispatchType>();
