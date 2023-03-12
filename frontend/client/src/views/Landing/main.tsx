import SubBanner from './SubBanner';
import ItemsView from './ItemsView/index';
import React from 'react';
import Lands from './mainStyle';
import { useNavigate } from 'react-router-dom';
import LandingCarousel from './Carousel/index';
import MainBanner from './MainBanner/index';
import Subscribe from './Subscribe/index';
import { useGetPosts } from '../../hooks/post/posts.hook';

const LandingMain = () => {
  const { posts } = useGetPosts('landing');
  return (
    <>
      <Lands.Container>
        <MainBanner />
        <SubBanner />
        <ItemsView posts={posts} />
        <Subscribe />
      </Lands.Container>
      <LandingCarousel />
    </>
  );
};

export default LandingMain;
