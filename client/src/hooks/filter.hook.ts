import { useAppSelector } from './redux.hook';

export const useSort = (posts: any) => {
  const dropdownList = useAppSelector((state) => state.posts.dropdownList);
  const selectSort = useAppSelector((state) => state.posts.selectSort);
  const { key } = dropdownList.filter((li) => li.name === selectSort)[0];
  const sortedPosts =
    selectSort === '정확순' || selectSort === '오래된순'
      ? posts.sort((a: any, b: any) => (a[key] < b[key] ? -1 : 1))
      : posts.sort((a: any, b: any) => (a[key] < b[key] ? 1 : -1));
  return { sortedPosts };
};
