import styled from 'styled-components';

const AllSetting = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
`;

const Top = styled(AllSetting)`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid var(--lightgray);
  padding: 3px;

  @media only screen and (min-width: 600px) {
    display: block;
  }
`;

const Middle = styled(AllSetting)`
  padding: 10px 0;
  margin-left: 30px;
  width: 100%;
  left: 0;
  right: 0;

  @media only screen and (min-width: 600px) {
    text-align: center;
    display: block;
  }
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Bottom = styled(AllSetting)`
  width: 100%;
  transition: all 1s;
`;

const LoginSection = styled(AllSetting)`
  width: 90%;
  justify-content: end;
  font-size: 13px;
  color: #696969;
  p {
    cursor: pointer;
  }
  .log_left {
    padding-right: 30px;
    border-right: 1px solid var(--lightgray);
  }
  p:hover {
    color: black;
    transition-duration: 0.25s;
  }
`;

const LoginBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const LogoSection = styled(AllSetting)`
  height: 50px;

  img {
    width: 100%;
    height: 90%;
    cursor: pointer;
  }
`;

const SearchSection = styled(AllSetting)`
  height: 100%;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (min-width: 600px) {
    float: right;
    width: 150px;
    right: 0;
    margin: 0;
    flex-grow: 0;
  }
`;

const SearchMain = styled.div`
  width: 200px;
  margin-right: 180px;

  @media only screen and (min-width: 600px) {
    width: 300px;
    margin-right: 200px;
  }
`;

const ButtonSection = styled(AllSetting)`
  margin-left: -180px;
  width: 100px;
  margin-right: 20px;
  justify-content: space-around;
  display: flex;
  text-align: right;

  img {
    height: 20px;
    cursor: pointer;
    margin-right: 10px;
  }

  @media only screen and (min-width: 900px) {
    width: 160px;
    margin-right: 180px;
  }
`;

const CategorySection = styled(AllSetting)`
  width: 100%;
  transition: all 0.24s;
  justify-content: space-around;
  @media only screen and (min-width: 900px) {
    width: 50%;
    justify-content: space-around;
  }
`;

const BottomUnderLine = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CategoryMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60px;
  height: 58px;
  font-size: 12px;
  color: black;
  cursor: pointer;

  .category_text {
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }

  img {
    width: 25px;
    height: 25px;
  }
  .select_text {
    font-weight: 900;
    font-size: 14px;
    margin-top: 5px;
    color: black;
  }
  .select_img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    .category_text {
      transition: all 0.25s;
      color: rgba(0, 0, 0, 0.4);
      font-weight: 900;
    }
    img {
      transition: all 0.25s;
      opacity: 0.7;
      width: 28px;
      height: 28px;
    }
  }
`;

export {
  Container,
  Top,
  Middle,
  Main,
  Bottom,
  BottomUnderLine,
  LoginSection,
  LoginBox,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
  CategoryMain,
};
