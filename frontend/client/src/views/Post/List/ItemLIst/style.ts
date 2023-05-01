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
`;

const ItemWrapper = styled.div`
  width: 278px;
  height: 340px;
  margin: 10px 10px;
  img {
    width: 100%;
    height: 240px;
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