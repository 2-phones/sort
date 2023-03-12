import React from 'react';
import { Detail_Img } from './style';

const DetailImg = ({ img_url, SoldOut }: any) => {
  return (
    <Detail_Img>
      <img src={img_url} />
      {SoldOut ? <SoldOut /> : null}
    </Detail_Img>
  );
};

export default DetailImg;
