import { useAppSelector } from './redux.hook';

export const useSort = (posts: []) => {
  const dropdownList = useAppSelector((state) => state.posts.dropdownList);
  const selectSort = useAppSelector((state) => state.posts.selectSort);
  const { key } = dropdownList.filter((li) => li.name === selectSort)[0];
  const dummy = [0, 1, 2, 3, 4, 5, 6, 7];

  const action =
    selectSort === '정확순' || selectSort === '오래된순'
      ? posts || dummy.sort((a: any, b: any) => (a[key] < b[key] ? -1 : 1))
      : posts || dummy.sort((a: any, b: any) => (a[key] < b[key] ? 1 : -1));
  const sortHandler = posts ? action : null;
  return { sortHandler };
};
