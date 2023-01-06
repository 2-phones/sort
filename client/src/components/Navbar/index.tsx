import React from 'react';
import * as S from './style';
import { sortlogo } from '../Imgs/headerImgs/imgExport';
import NavSearch from './Search';
import NavButtons from './Buttons';
import NavCategory from './Categories';
import { useNavigate } from 'react-router-dom';
import NavLogin from './Login';
import Modall from '../Modal';
import Login from '../../views/Login';
import Signup from '../../views/Signup';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Top>
        <NavLogin />
      </S.Top>
      <S.Middle>
        <S.Main>
          <S.LogoSection>
            <p>
              <img src={sortlogo} onClick={() => navigate('/')} />
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
