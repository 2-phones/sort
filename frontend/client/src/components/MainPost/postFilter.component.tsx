import { tabHandler } from '@/redux/slices/post.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import * as S from '@/styles/mainPage/postFilter.style';

const PostFilter = () => {
  const { filterTabs, selectedTab } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  return (
    <S.PostFilterLayOut>
      <S.TabsBox>
        {filterTabs.map((tab) => {
          const isTabSelected = selectedTab === tab.name;
          return (
            <S.FilterTabs
              key={tab.id}
              onClick={() => dispatch(tabHandler(tab.name))}
              border={isTabSelected}
              isColor={isTabSelected}
            >
              <p>{tab.name}</p>
            </S.FilterTabs>
          );
        })}
      </S.TabsBox>
    </S.PostFilterLayOut>
  );
};

export default PostFilter;
