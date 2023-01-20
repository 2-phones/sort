import { createSlice } from '@reduxjs/toolkit';
import { DoubleChatIcon, GpsIcon, HandShakeIcon, SearchIcon } from '../../components/Imgs/imgExport';

interface InitialState {
  intro: string[];
  icons: string[];
}

const initialState: InitialState = {
  intro: [
    '거래하고 싶은사람과 대화',
    '합리적인 가격과 만족감',
    '지역 인증을 통한 가까운곳 찾기',
    '원하는 키워드 즉시 검색',
  ],
  icons: [DoubleChatIcon, HandShakeIcon, GpsIcon, SearchIcon],
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const LandingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    openHandler: (state, action) => {},
  },
});

export default LandingSlice;
export const { openHandler } = LandingSlice.actions;
