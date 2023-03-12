import styled from 'styled-components';

const SellType = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  border-bottom: 5px solid ${(prop) => prop.color || 'none'};
  font-size: 20px;

  p {
    cursor: pointer;
    color: ${(prop) => prop.color || 'gray'};
  }

  @media screen and (max-width: 450px) {
    display: flex;
    height: 40px;
    justify-content: center;
    width: 55px;
    padding: 0 0px;
    p {
      font-size: 13px;
    }
  }
`;

export { SellType };
