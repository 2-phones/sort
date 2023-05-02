import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }

  @media screen and (max-width: 320px) {
    display: flex;
  }
`;

const ItemListBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10px;
  @media screen and (max-width: 620px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const ItemWrapper = styled.div`
  width: 278px;
  height: 340px;
  margin: 10px;
  img {
    width: 100%;
    height: 240px;
  }
  @media screen and (max-width: 633px) {
    width: 45%;
  }

  @media screen and (max-width: 480px) {
    width: 60%;
  }

  @media screen and (max-width: 350px) {
    width: 50%;
  }
`;

const ViewsBox = styled.div`
  width: 100%;
  height: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 1230px) {
    margin: 0 50px;
    width: 100%;
    font-size: 13px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 0px;
    width: 70%;
    font-size: 13px;
  }
`;

export { ItemContainer, ItemListBox, ViewsBox, ItemWrapper };
