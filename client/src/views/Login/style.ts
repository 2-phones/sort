import styled from 'styled-components';

interface ModalStyle {
  display: string;
}

const Container = styled.div`
  width: 100%;
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

const OptionSection = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 12px;
    color: #8d8d8d;
  }

  .search_pw:hover {
    cursor: pointer;
    color: black;
  }
`;
const KeepLoggedin = styled.div`
  display: flex;
  p {
    padding-left: 5px;
  }
`;

const ButtonSection = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  position: relative;
  .logo {
    display: flex;
    position: absolute;
    left: 10px;
    svg {
      width: 30px;
      height: 15px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-top: 15px;
`;

const SignupSection = styled.div`
  display: flex;
  padding: 40px 0;
  font-size: 11px;
  justify-content: center;
  .body {
    color: #bcbcbc;
    margin-right: 10px;
  }
  .signup {
    border-bottom: 1px solid;
    cursor: pointer;
  }
`;

export { Container, InputSection, InputBox, OptionSection, KeepLoggedin, ButtonSection, ButtonBox, SignupSection };
