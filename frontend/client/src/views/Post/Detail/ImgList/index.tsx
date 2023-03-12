import React from 'react';
import { Detail_ImgList, Detail_NextImg } from './style';
import { LeftIcon, RightIcon, CheckIcon } from '../../../../components/Icons/Icons';

const ImgList = ({ img_url }) => {
  return (
    <Detail_ImgList>
      <div className="list_icon">
        <LeftIcon />
      </div>
      <Detail_NextImg>
        <img src={img_url} />
      </Detail_NextImg>
      <Detail_NextImg />
      <Detail_NextImg />
      <Detail_NextImg />
      <div className="list_icon">
        <RightIcon />
      </div>
    </Detail_ImgList>
  );
};

export default ImgList;
