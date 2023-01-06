import React from 'react';
import { useSelector } from 'react-redux';
import { betaPostUserInfo } from '../../util/userInfo';
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

const Myinfo = () => {
  const userEmail = useSelector((state) => state.account.userinfo);
  const pageNum = useSelector((state) => state.mypage.pageNumber);
  const { email, name } = betaPostUserInfo();
  const pages = [
    <MyinfoMain />,
    <MyBuy />,
    <MySell />,
    <MyWish />,
    <MyProfile />,
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
