import React, { useState } from 'react';
import * as S from './style';

const LandingPostSkeleton = () => {
  return (
    <S.ItemBox>
      <S.ItemImg>
        <S.Shimmer />
      </S.ItemImg>
      <S.ItemTitle>
        <p></p>
      </S.ItemTitle>
      <S.ItemPrice>
        <p></p>
      </S.ItemPrice>
    </S.ItemBox>
  );
};

export default LandingPostSkeleton;
