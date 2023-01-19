import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../../hooks/redux.hook';
import { selltabsType, DropdownType } from '../InitialState/posts.initialState';

interface InitialState {
  selltabs: selltabsType[];
  dropdownList: DropdownType[];
  focusTab: string;
  selectSort: string;
  views: number;
  dummyData: number[];
  statusAPI: string;
}

const initialState: InitialState = {
  selltabs: [
    { id: 0, name: '전체' },
    { id: 1, name: '판매중' },
    { id: 2, name: '판매완료' },
  ],
  dropdownList: [
    { id: 0, name: '정확순', key: 'title' },
    { id: 1, name: '인기순', key: 'views' },
    { id: 2, name: '최신순', key: 'created_at' },
    { id: 3, name: '오래된순', key: 'created_at' },
  ],
  dummyData: [0, 1, 2, 3, 4, 5, 6, 7],
  focusTab: '판매중',
  selectSort: '정확순',
  views: 8,
  statusAPI: `status?status=판매중`,
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    isFocues: (state, action) => {
      const focus = action.payload;
      const api = focus === '전체' ? '' : `status?status=${focus}`;

      state.focusTab = focus;
      state.statusAPI = api;
    },
    viewCount: (state, action) => {
      state.views = state.views + action.payload;
    },
    dropDownSelect: (state, aciton) => {
      state.selectSort = aciton.payload;
    },
  },
});

export default PostsSlice;
export const { isFocues, viewCount, dropDownSelect } = PostsSlice.actions;
