import { styled } from '@/styles/global.style';

const CommonStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomNavLayOut = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomNavSection = styled.section`
  display: flex;
  width: 80%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoImage = styled(CommonStyle)`
  width: 200px;
  height: 50px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SerachBar = styled(CommonStyle)`
  width: 150px;
  height: 40px;
  position: absolute;
  right: 250px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border-radius: 15px;
  }
`;

const UserNavButtons = styled(CommonStyle)`
  width: 80px;
`;

const CommonNavStyle = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserNav = styled(CommonNavStyle)``;
const ChatNav = styled(CommonNavStyle)``;

export { BottomNavLayOut, BottomNavSection, LogoImage, SerachBar, UserNavButtons, UserNav, ChatNav };
