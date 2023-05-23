import { createSlice } from '@reduxjs/toolkit';
import { PostState } from '@/redux/initialState/post.initalState';

const initialState: PostState = {
  filterTabs: [
    { id: 0, name: '전체' },
    { id: 1, name: '판매중' },
    { id: 2, name: '판매완료' },
  ],
  selectedTab: '판매중',
};

const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    openHandler: (state, action) => {},
    tabHandler: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { tabHandler } = PostSlice.actions;

export default PostSlice;
