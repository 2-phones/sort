import React from 'react';
import { SubBanner_Container, Featuree } from './style';
import { endbannerImgs, endbannerText, imgName } from '../../../components/Imgs/randingImgs/imgExport';

const SubBanner = () => {
  return (
    <SubBanner_Container>
      {endbannerImgs.map((imgs, i) => {
        return (
          <Featuree key={i}>
            <img className={imgName[i]} src={imgs} />
            <p>{endbannerText[i]}</p>
          </Featuree>
        );
      })}
    </SubBanner_Container>
  );
};

export default SubBanner;
