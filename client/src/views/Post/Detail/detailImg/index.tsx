import React from 'react';
import { Detail_Img } from './style';

const DetailImg = ({ img_url } : any) => {
  return (
    <Detail_Img>
      <img src={img_url} />
    </Detail_Img>
  );
};

export default DetailImg;
