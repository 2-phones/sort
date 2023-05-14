import * as S from '@/styles/header/topNav.style';

const TopNav = () => {
  return (
    <S.TopNavLayOut>
      <S.AuthNavigation>
        <p>회원가입</p>
        <p className="blank_center"></p>
        <p>로그인</p>
      </S.AuthNavigation>
    </S.TopNavLayOut>
  );
};

export default TopNav;
