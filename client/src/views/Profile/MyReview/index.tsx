import React from 'react';
import MypageCompoent from '../../../components/Mypage';

// 상점 후기가 있을 때
const MyReview = () => {
  return (
    <>
      <MypageCompoent posts={''} pagetitle={'거래후기'} defaultMsg={'거래 후기가 없습니다.'} />
    </>
  );
};

export default MyReview;
