import React from 'react';
import { useSelector } from 'react-redux';
import { Containers, CustomerContents, CustomerWithdraws } from './mainstyle';
import SideBar from './SideBar';
import MyProfile from './MyProfile';
import MyReview from './MyReview';
import MySell from './MySellBuy/MySell';
import MyBuy from './MySellBuy/MyBuy';
import MyWish from './MyWish';
import MyResion from './MyResion';
import Withdraw from './Withdraw';
import MyinfoMain from './MyinfoMain';
import { useGetProfile } from '../../hooks/userProfile.hook';

const Myinfo = () => {
  const userEmail = useSelector((state) => state.account.userinfo);
  const pageNum = useSelector((state) => state.mypage.pageNumber);
  const profile = useGetProfile();
  const pages = [
    <MyinfoMain profile={profile} />,
    <MyBuy />,
    <MySell />,
    <MyWish />,
    <MyProfile profile={profile} />,
    <MyReview />,
    <MyResion />,
    <Withdraw />,
  ];
  return (
    <Containers>
      <SideBar />
      {pages[pageNum]}
      {/* <MyReview /> */}
      {/* <MySell /> */}
    </Containers>
  );
};

export default Myinfo;
