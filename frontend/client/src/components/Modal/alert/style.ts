import styled from 'styled-components';

interface StyledProbs {
  display: string;
}

const Container = styled.div<StyledProbs>`
  display: ${(props) => props.display || 'none'};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
`;

const ModalWindow = styled.div`
  width: 500px;
  height: 230px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export { Container, ModalWindow };
