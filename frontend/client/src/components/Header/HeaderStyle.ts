import styled from 'styled-components';

const AllSetting = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled(AllSetting)`
  position: sticky;
  width: 100%;
  height: 160px;
  flex-wrap: wrap;
  z-index: 10;
  background: #ffffff;
  @media only screen and (max-width: 300px) {
    margin-bottom: 20px;
  }
`;

export { Container };
