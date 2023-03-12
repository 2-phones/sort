import React, { useState } from 'react';
import * as S from './style';

const PostSkeleton = () => {
  return (
    <S.ItemBox>
      <S.ItemImg>
        <S.Shimmer />
      </S.ItemImg>
      <S.ItemTitle>
        <p>
          <S.Shimmer />
        </p>
      </S.ItemTitle>
      <S.ItemPrice>
        <p></p>
      </S.ItemPrice>
      <S.SellInfo>
        <p></p>
      </S.SellInfo>
    </S.ItemBox>
  );
};

export default PostSkeleton;
