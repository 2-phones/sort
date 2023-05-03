import React from 'react';
import { DownIcon } from '../../../../../components/Icons/Icons';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/common/redux.hook';
import { useClick } from '../../../../../hooks/common/click.hook';
import { openDropbar, selectSort } from '../../../../../redux/itemslice';
import { dropDownSelect } from '../../../../../redux/Slices/posts.slice';
import * as S from './style';

const SortDropdown = () => {
  const dropdown = useAppSelector((state) => state.posts.selectSort);
  const dropdownList = useAppSelector((state) => state.posts.dropdownList);
  const dispatch = useAppDispatch();
  const { isClick, handleClick } = useClick();

  return (
    <S.SortSection>
      <S.SortByOption>
        <h4 className="select_text">{dropdown}</h4>
        <p className={isClick ? 'select_icon open' : 'select_icon'} onClick={() => handleClick()}>
          <DownIcon />
        </p>
      </S.SortByOption>
      <S.SortOpDropbar display={isClick ? 'flex' : 'none'}>
        {dropdownList.map((option) => {
          return (
            <p
              className="opitons"
              key={option.id}
              onClick={() => {
                dispatch(dropDownSelect(option.name));
                handleClick();
              }}
            >
              {option.name}
            </p>
          );
        })}
      </S.SortOpDropbar>
    </S.SortSection>
  );
};

export default SortDropdown;
