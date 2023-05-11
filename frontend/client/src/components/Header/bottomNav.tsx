import * as S from '@/styles/header/bottomNav.style';
import * as Img from '@/assets/imgs/image';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <S.BottomNavLayOut>
      <S.BottomNavSection>
        <S.LogoImage onClick={() => navigate('/')}>
          <img src={Img.sortlogo} />
        </S.LogoImage>
        <S.SerachBar>
          <input placeholder="검색" />
        </S.SerachBar>
        <S.UserNavButtons>
          <S.UserNav>
            <img src={Img.userIcon} />
          </S.UserNav>
          <S.ChatNav>
            <img src={Img.chatIcon} />
          </S.ChatNav>
        </S.UserNavButtons>
      </S.BottomNavSection>
    </S.BottomNavLayOut>
  );
};

export default BottomNav;
