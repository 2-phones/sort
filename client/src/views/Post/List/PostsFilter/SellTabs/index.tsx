import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/common/redux.hook';
import { isFocues } from '../../../../../redux/Slices/posts.slice';
import { SellType } from './style';

const SellTabs = () => {
  const dispatch = useAppDispatch();
  const selltabs = useAppSelector((state) => state.posts.selltabs);
  const isfocus = useAppSelector((state) => state.posts.focusTab);

  return (
    <>
      {selltabs.map((tab) => {
        return (
          <SellType
            key={tab.id}
            color={isfocus === tab.name ? 'black' : ''}
            onClick={() => dispatch(isFocues(tab.name))}
          >
            <p>{tab.name}</p>
          </SellType>
        );
      })}
    </>
  );
};

export default SellTabs;
