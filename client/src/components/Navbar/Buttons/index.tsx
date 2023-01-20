import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from '../style';
import * as NavIcon from '../../Imgs/imgExport';
import { useModal } from '../../../hooks/modal.hook';
import { tokenCheck } from '../../../util/tokenCheck';

const NavButtons = () => {
  const { clickHandler } = useModal();
  const token = tokenCheck();
  const navigate = useNavigate();
  const [buttons, setButtons] = useState([
    { id: 0, className: 'manIcon', src: NavIcon.UserIcon, path: '/mypage', click: 'login' },
    { id: 1, className: 'msgIcon', src: NavIcon.ChatIcon, path: '', click: 'login' },
    { id: 2, className: 'menuIcon', src: NavIcon.MenuIcon, path: '', click: null },
  ]);
  return (
    <S.ButtonSection>
      {/* {signUpModalOn ? <Modal /> : null} */}
      {buttons.map((li) => {
        return (
          <p key={li.id} onClick={() => (token ? navigate(li.path) : clickHandler(li.click))}>
            <img className={li.className} src={li.src} />
          </p>
        );
      })}
    </S.ButtonSection>
  );
};

export default NavButtons;
