import styled from 'styled-components';

interface ModalStyle {
  display: string;
}

const CommonStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled(CommonStyle)<ModalStyle>`
  display: ${(props) => props.display || 'none'};
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 4;
`;

const ModalBackground = styled(CommonStyle)``;

const ModalWindow = styled.div`
  position: relative;
  width: 380px;
  height: 550px;
  background: white;
  padding: 0 30px;
  animation: modaldown 0.5s;

  @keyframes modaldown {
    from {
      transform: translateY(-10%);
    }
    to {
      transform: translateY(0);
    }
  }

  .close {
    position: absolute;
    right: 15px;
    top: 5px;
    cursor: pointer;
    font-size: 25px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  .logo {
    font-size: 25px;
  }
  .logo_description {
    font-size: 12px;
  }
`;

export { Container, ModalBackground, ModalWindow, LogoSection };
