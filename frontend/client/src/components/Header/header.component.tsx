import BottomNav from '@/components/Header/bottomNav';
import TopNav from '@/components/Header/topNav.component';
import * as S from '@/styles/header/header.style';

const Header = () => {
  return (
    <S.HeaderLayOut>
      <TopNav />
      <BottomNav />
    </S.HeaderLayOut>
  );
};

export default Header;
