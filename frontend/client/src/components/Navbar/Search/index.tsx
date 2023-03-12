import React from 'react';
import { useDispatch } from 'react-redux';
import { NavbarInput } from '../../Input/Input';
import * as S from '../style';

const NavSearch = () => {
  const dispatch = useDispatch();

  return (
    <S.SearchSection>
      <S.SearchMain>
        <NavbarInput placeholder="검색" radius="20px" border="none" color="black" padding="15px" width="140px" />
      </S.SearchMain>
    </S.SearchSection>
  );
};

export default NavSearch;
