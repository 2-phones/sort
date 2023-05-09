import { CommonState } from '@/redux/initialState/common.initialState';
import { createSlice } from '@reduxjs/toolkit';
import { LandingState } from '../initialState/landing.initialState';
import * as Img from '../../assets/imgs/image';

const initialState: CommonState = {
  footer_nav: [
    { id: 0, title: 'SORT', name: '' },
    { id: 1, title: 'About', name: 'Team' },
    { id: 2, title: 'Contact', name: 'Send Email' },
  ],
  footer_description:
    '솔트 서비스 내 상품을 제외한 모든 상품은 개인 간 거래로 이루어지며, 구매 및 판매 시 신중하게 진행하시길바랍니다. 이에 관한 법적 책임을 지지 않습니다.',
};

const CommonSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    openHandler: (state, action) => {},
  },
});

export const {} = CommonSlice.actions;

export default CommonSlice;
