import styled from 'styled-components';

interface ModalStyle {
  display: string;
}

const Container = styled.div`
  width: 100%;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;

  .logo {
    font-size: 25px;
  }
  .logo_description {
    font-size: 12px;
    color: #969595;
  }
`;
const InputSection = styled.div`
  p {
    margin-top: 15px;
    font-size: 13px;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthBtn = styled.div`
  position: absolute;
  width: 120px;
  height: 40px;

  right: 20px;
  margin-top: 15px;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  position: relative;
  margin-top: 23px;
  .logo {
    display: flex;
    position: absolute;
    left: 10px;
    img {
      width: 30px;
      height: 15px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-top: 15px;
`;

const LoginSection = styled.div`
  display: flex;
  padding: 35px 0;
  font-size: 11px;
  justify-content: center;
  .body {
    color: #bcbcbc;
    margin-right: 10px;
  }
  .login {
    border-bottom: 1px solid;
    margin-right: 5px;
    cursor: pointer;
  }
`;

export { Container, LogoSection, InputSection, InputBox, AuthBtn, ButtonSection, ButtonBox, LoginSection };
