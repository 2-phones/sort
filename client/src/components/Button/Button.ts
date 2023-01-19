import styled from 'styled-components';

interface BasicBtnType {
  width: string;
  height: string;
  border: string;
  background: string;
  shadow: string;
  color: string;
  size: string;
  left: string;
  hoverbackground: string;
  hovercolor: string;
}

interface ButtonType {
  height: string;
  background: string;
  color: string;
  fontsize: string;
  hover: string | undefined;
}

// ---테스트 버튼모음
const XXBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px;
  width: 120px;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: inset 3px 3px 10px;
  background: var(--lightgray);
`;

const XXBtn2 = styled(XXBtn)`
  box-shadow: inset -0.2rem -0.2rem 1rem gray;
`;

const BasicBtn = styled.div`
  width: ${(prop) => prop.width || '100%'};
  height: ${(prop) => prop.height || '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--b-small);
  border: ${(prop) => prop.border || 'none'};
  background: ${(prop) => prop.background || 'black'};
  box-shadow: ${(prop) => prop.shadow || ''};
  color: ${(prop) => prop.color || 'white'};
  font-size: ${(props) => props.size || ''};
  margin-left: ${(prop) => prop.left || ''};
  ${BasicBtn}:hover {
    background: ${(prop) => prop.hoverbackground || '#b0aeae'};
    color: ${(prop) => prop.hovercolor || ''};
    transition-duration: 0.3s;
  }
  p {
    margin-left: 10px;
  }
`;
const Button2 = styled(BasicBtn)`
  box-shadow: -2px -2px 10px, 10px 3px 15px var(--gray);
  background: ${(prop) => prop.background};
  color: ${(prop) => prop.color || 'white'};

  & :active {
    box-shadow: inset 3px 3px 10px;
    background: var(--lightgray);
  }
`;
const SellbtnComponent = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  right: 50px;
  bottom: 90px;
  border-radius: 50%;
  background: #1e00a3;
  z-index: 4;
  cursor: pointer;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.5);
  color: #2e2d2d;
  &:hover {
    //background: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.7);
    color: #ffffff;
  }

  svg {
    fill: white;
    /* fill: black; */
    width: 23px;
    height: 23px;
  }
  @media screen and (max-width: 450px) {
    right: 10px;
    bottom: 20px;
  }
`;

const ButtonUI = styled.div<ButtonType>`
  width: 100%;
  display: flex;
  height: ${(props) => props.height || '20px'};
  background: ${(props) => props.background || ''};
  color: ${(props) => props.color || ''};
  font-size: ${(props) => props.fontsize || ''};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px 1px #dedcdc;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    background: ${(props) => (props.hover ? '#edebeb' : '')};
  }
`;

/// -------------------------------------- ///

export { XXBtn, XXBtn2, BasicBtn, SellbtnComponent, ButtonUI };
