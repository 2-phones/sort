import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../../hooks/common/redux.hook';
import { selltabsType, DropdownType } from '../InitialState/posts.initialState';

interface InitialState {
  selltabs: selltabsType[];
  postID: string;
}

const initialState: InitialState = {
  selltabs: [
    { id: 0, name: '전체' },
    { id: 1, name: '판매중' },
    { id: 2, name: '판매완료' },
  ],
  postID: '',
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkedPost: (state, action) => {
      const  post_id  = action.payload;
      state.postID = post_id;
    },
  },
});

export default UserSlice;
export const { checkedPost } = UserSlice.actions;
