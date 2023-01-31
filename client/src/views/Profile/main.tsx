import React from 'react';
import { useSelector } from 'react-redux';
import { Containers, CustomerContents, CustomerWithdraws } from './mainstyle';
import SideBar from './SideBar';
import MyProfile from './MyProfile';
import MyReview from './MyReview';
import MySell from './MySellBuy/MySell';
import MyWish from './MyWish';
import MyResion from './MyResion';
import Withdraw from './Withdraw';
import MyinfoMain from './MyinfoMain';
import { useGetProfile, useGetUserPosts } from '../../hooks/user/profile.hook';
import Sellbtn from '../../components/Button/Sellbtn';

const Myinfo = () => {
  const pageNum = useSelector((state: any) => state.page.pageNumber);
  const profile = useGetProfile();
  const { posts } = useGetUserPosts();
  const pages = [
    <MyinfoMain profile={profile} posts={posts} />,
    <MySell posts={posts} />,
    <MyWish posts={[]} />,
    <MyProfile profile={profile} />,
    <MyReview />,
    <MyResion />,
    <Withdraw />,
  ];
  return (
    <Containers>
      <Sellbtn />
      <SideBar />
      {pages[pageNum]}
      {/* <MyReview /> */}
      {/* <MySell /> */}
    </Containers>
  );
};

export default Myinfo;
