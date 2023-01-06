import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%;
  height: 150%;
  position: absolute;
  z-index: 11;
  background: #545454;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;

const Modalwindow = styled.div`
  width: 450px;
  height: 250px;
  margin-top: 250px;
  background: white;
  opacity: none;
  border-radius: 10px;
`;
const ModalTitle = styled.div`
  display: flex;
  padding: 0 25px;
  align-items: flex-end;
  margin: 0 10px;
  height: 60px;
`;
const ModalDescription = styled.div`
  display: flex;
  padding: 0 35px;
  align-items: center;
  color: #b0aeae;
  height: 80px;
  font-size: 15px;
`;

const BtnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 70px;
`;

const ModalBtn = styled.div`
  width: 120px;
  height: 45px;
  margin: 0 10px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
  z-index: 101;
  background-color: rgb(0, 0, 0, 0.4);

  .modal-overlay > .modal {
    width: 300%;
    max-width: 450px;
    margin: auto;
    background-color: #fefefe;
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.6);
    animation-duration: 0.22s;
    animation-timing-function: ease-out;
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal.close {
    animation-name: fadeOut;
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    width: 300%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    overflow: hidden;
    animation-duration: 0.22s;
    animation-timing-function: ease-out;
    animation-name: slideUp;
    animation-fill-mode: forwards;
  }
  .modal.close > section {
    animation-name: slideDown;
  }

  .modal > section > header button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    color: #111;
    background-color: transparent;
  }

  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes slideUp {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-100px);
    }
  }
`;

export { ModalContainer, Modalwindow, ModalTitle, ModalDescription, ModalBtn, BtnSection, ModalOverlay };
