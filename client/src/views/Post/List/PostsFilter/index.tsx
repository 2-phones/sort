import React, { useState } from 'react';
import { DownIcon, CancelIcon, SearchIcon } from '../../../../components/Icons/Icons';
import { TagComponent } from '../../../../components/Tag/style';
import * as S from './style';
import { createTag, deleteTag, selectSort, openDropbar, selectFilter } from '../../../../redux/itemslice';
import Sellbtn from '../../../../components/Button/Sellbtn';
import SellTabs from './SellTabs';
import SortDropdown from './SortDropdown';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.hook';

const FilterBar = () => {
  const [selectOP, setSelectOP] = useState(['인기순', '최신순', '정확도순', '오래된순']);
  const [selectindex, setSelectindex] = useState(1);
  const [isSelect, setIsSelect] = useState(false);
  const [tabFocus, setTabFocus] = useState(1);
  const sellTypeTab = ['전체', '판매중', '판매완료'];
  const categorydata = useAppSelector((state) => state.items.category);
  const tagList = useAppSelector((state) => state.items['tags']);

  const dispatch = useAppDispatch();
  const tagInputHandler = (e) => {
    const inputs = e.target.value;
    e.key === 'Enter' && !tagList.includes(inputs) && inputs
      ? (dispatch(createTag(inputs)), (e.target.value = ''))
      : null;
  };

  const tabHandler = (i) => {
    setTabFocus(i);
  };

  return (
    <S.FilterSection>
      <S.FilterBox>
        <S.FilterTopBox>
          <S.FilterLeft>
            <SellTabs tabFocus={tabFocus} sellTypeTab={sellTypeTab} tabHandler={tabHandler} />
          </S.FilterLeft>
          <S.FilterRight>
            {/* <SearchFilter tagInputHandler={tagInputHandler} /> */}
            <Sellbtn />
            <SortDropdown
              selectOP={selectOP}
              selectindex={selectindex}
              setSelectindex={setSelectindex}
              isSelect={isSelect}
              setIsSelect={setIsSelect}
            />
          </S.FilterRight>
        </S.FilterTopBox>
        <S.FilterBottomBox>
          <TagFilter tagList={tagList} />
        </S.FilterBottomBox>
      </S.FilterBox>
    </S.FilterSection>
  );
};

const TagFilter = ({ tagList }) => {
  const dispatch = useAppDispatch();
  return (
    <S.TagSection>
      {tagList &&
        tagList.map((tags, index) => {
          return (
            <TagComponent key={index} display={tags ? 'flex' : ''}>
              <p className="tag_text">{tags}</p>
              <p className="cancel_icon" onClick={() => dispatch(deleteTag(tags))}>
                <CancelIcon />
              </p>
            </TagComponent>
          );
        })}
    </S.TagSection>
  );
};

export default FilterBar;
