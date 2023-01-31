import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CommonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertBody = styled(CommonStyle)`
  width: 100%;
  height: 70%;
`;

const ButtonSection = styled(CommonStyle)`
  width: 100%;
  height: 50px;
`;

const ButtonWrapper = styled.div`
  width: 100px;
  height: 40px;
  margin: 0 30px;
`;

export { Container, AlertBody, ButtonSection, ButtonWrapper };
