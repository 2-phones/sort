import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from '../style';
import NavIcon from '../../Imgs/navbarimg/index';
const NavButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoad = useSelector((state) => state.items.isLoad);
  return (
    <S.ButtonSection>
      {/* {signUpModalOn ? <Modal /> : null} */}
      <p>
        <img className="manIcon" src={NavIcon.user} />
      </p>
      <p>
        <img src={NavIcon.message3} />
      </p>
      <p>
        <img src={NavIcon.menu} />
      </p>
    </S.ButtonSection>
  );
};

export default NavButtons;
