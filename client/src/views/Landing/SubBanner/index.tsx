import React from 'react';
import { useAppSelector } from '../../../hooks/redux.hook';
import { SubBanner_Container, Featuree } from './style';

const SubBanner = () => {
  const introIcons = useAppSelector((state) => state.landing.icons);
  const introDescription = useAppSelector((state) => state.landing.intro);
  return (
    <SubBanner_Container>
      {introIcons.map((imgs, i) => {
        return (
          <Featuree key={i}>
            <img className={imgs} src={imgs} />
            <p>{introDescription[i]}</p>
          </Featuree>
        );
      })}
    </SubBanner_Container>
  );
};

export default SubBanner;
