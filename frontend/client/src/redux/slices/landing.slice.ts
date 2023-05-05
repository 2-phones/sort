import { createSlice } from '@reduxjs/toolkit';
import { LandingState } from '../initialState/landing.initialState';
import * as Img from '../../assets/imgs/image';

const initialState: LandingState = {
  features: [
    { id: 0, text: '거래하고 싶은사람과 대화', src: Img.chat },
    { id: 1, text: '합리적인 가격과 만족감', src: Img.handshake },
    { id: 2, text: '지역 인증을 통한 가까운곳 찾기', src: Img.region },
    { id: 3, text: '원하는 키워드 즉시 검색', src: Img.search },
  ],
};

const LandingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    openHandler: (state, action) => {},
  },
});

export const {} = LandingSlice.actions;

export default LandingSlice;
