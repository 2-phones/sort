import React from 'react';
import { MainContainer, MainContent } from './style';
import ItemList from './ItemLIst/index';
import ViewMore from './ViewMore/index';
import FilterBar from './PostsFilter';
import { useGetPosts } from '../../../hooks/post/posts.hook';
import { useAppSelector } from '../../../hooks/redux.hook';

const ItemsMain = () => {
  const { posts } = useGetPosts('');
  const dummyData = useAppSelector((state) => state.posts.dummyData);

  return (
    <MainContainer>
      <FilterBar />
      <MainContent>
        <ItemList posts={posts} dummyData={dummyData} />
        <ViewMore />
      </MainContent>
    </MainContainer>
  );
};
export default ItemsMain;
