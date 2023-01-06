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

const LandingMain = () => {
  const latestDatas = getItems('landing');
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Lands.Container>
        <MainBanner />
        <SubBanner />
        <ItemsView latestDatas={latestDatas} />
        <Subscribe />
      </Lands.Container>
      <LandingCarousel />
    </>
  );
};

export default LandingMain;
