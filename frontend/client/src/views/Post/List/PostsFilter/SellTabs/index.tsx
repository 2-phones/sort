import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/common/redux.hook';
import { isFocues, sellStatusHandle } from '../../../../../redux/Slices/posts.slice';
import { SellType } from './style';

const SellTabs = () => {
  const dispatch = useAppDispatch();
  const selltabs = useAppSelector((state) => state.posts.selltabs);
  const { sellType } = useAppSelector((state) => state.posts);

  return (
    <>
      {selltabs.map((tab) => {
        return (
          <SellType
            key={tab.id}
            color={sellType === tab.name ? 'black' : ''}
            onClick={() => dispatch(sellStatusHandle(tab.name))}
          >
            <p>{tab.name}</p>
          </SellType>
        );
      })}
    </>
  );
};

export default SellTabs;
