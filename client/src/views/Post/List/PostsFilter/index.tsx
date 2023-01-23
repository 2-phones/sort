import React from 'react';
import * as S from './style';
import Sellbtn from '../../../../components/Button/Sellbtn';
import SellTabs from './SellTabs';
import SortDropdown from './SortDropdown';

const FilterBar = () => {
  return (
    <S.FilterSection>
      <S.FilterBox>
        <S.FilterTopBox>
          <S.FilterLeft>
            <SellTabs />
          </S.FilterLeft>
          <S.FilterRight>
            {/* <SearchFilter tagInputHandler={tagInputHandler} /> */}
            <Sellbtn />
            <SortDropdown />
          </S.FilterRight>
        </S.FilterTopBox>
        <S.FilterBottomBox></S.FilterBottomBox>
      </S.FilterBox>
    </S.FilterSection>
  );
};

export default FilterBar;
