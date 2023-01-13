import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './style';
import ItemList from './ItemLIst/index';
import ViewMore from './ViewMore/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FilterBar from './PostsFilter';
import { usePosts } from '../../../hooks/usePosts.hook';
import { PostsType } from '../../../redux/InitialState/posts.initialState';
import { useSort } from '../../../hooks/filter.hook';

const ItemsMain = () => {
  const { posts } = usePosts();
  const dummyData = [0, 1, 2, 3, 4, 5, 6, 7];

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
