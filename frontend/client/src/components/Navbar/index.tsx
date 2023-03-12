import React from 'react';
import * as S from './style';
import NavSearch from './Search';
import NavButtons from './Buttons';
import NavCategory from './Categories';
import { useNavigate } from 'react-router-dom';
import NavLogin from './Login';
import { tokenCheck } from '../../util/tokenCheck';
import NavLogout from './Logout';
import { SortLogo } from '../Imgs/imgExport';

const Navbar = () => {
  const navigate = useNavigate();
  const token = tokenCheck();
  return (
    <>
      <S.Top>{token ? <NavLogout /> : <NavLogin />}</S.Top>
      <S.Middle>
        <S.Main>
          <S.LogoSection>
            <p>
              <img src={SortLogo} onClick={() => navigate('/')} />
            </p>
          </S.LogoSection>
          <NavSearch />
          <NavButtons />
        </S.Main>
      </S.Middle>
      <S.Bottom>
        <NavCategory />
      </S.Bottom>
    </>
  );
};

export default Navbar;
