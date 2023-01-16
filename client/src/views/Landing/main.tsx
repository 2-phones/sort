import SubBanner from './SubBanner';
import ItemsView from './ItemsView/index';
import { getItems } from '../../util/requestItem';
import React from 'react';
import Lands from './mainStyle';
import { useNavigate } from 'react-router-dom';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoLogoInstagram } from 'react-icons/io';
import LandingCarousel from './Carousel/index';
import MainBanner from './MainBanner/index';
import Subscribe from './Subscribe/index';
import { useGetPosts } from '../../hooks/usePosts.hook';

const LandingMain = () => {
  const { posts } = useGetPosts('landing');
  const navigate = useNavigate();
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
