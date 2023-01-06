import React, { useState } from 'react';
import { NavbarInput } from '../Input/Input';
import NavIcon from '../Imgs/navbarimg';
import * as S from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
import { closeCategory, selectCategory, createTag } from '../../redux/itemslice';
import { useDispatch, useSelector } from 'react-redux';
import { imgname, sortlogo } from '../Imgs/headerImgs/imgExport';
import Modal from '../Modal/Modal';
import Login from '../auth/General/Login';
import Signup from '../auth/SignUp/Signup';
import Find from '../auth/Find';
import { checkLogin, keepLogin, postLogout, chekckLocal, localLogout, keeplocalLogin } from '../../util/requestLogin';
import axios from 'axios';
import Navbar from '../Navbar';

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <Navbar />
      </S.Container>
    </>
  );
};

export default Header;
