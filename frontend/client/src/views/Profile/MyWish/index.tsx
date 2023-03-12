import React, { useState } from 'react';
import MypageCompoent from '../../../components/Mypage';

// 판매상품이 있을 때
function MyWish({ posts }: any) {
  return (
    <>
      <MypageCompoent posts={posts} pagetitle={'찜 리스트'} defaultMsg={'찜한 상품이 없습니다.'} />
    </>
  );
}

export default MyWish;
