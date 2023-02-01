import styled from 'styled-components';

const Content = styled.div`
  margin: 0;
  padding: 0;
  float: left;
  box-sizing: border-box;
`;

const ItemList = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
  padding: 30px 0 30px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  #checkbox {
    margin-right: 30px;
  }
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  img {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }

  @media only screen and (max-width: 960px) {
    width: 80%;
  }
`;

const ItemDetail = styled.div`
  display: inline-block;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 300px;
  }
  @media only screen and (max-width: 960px) {
    margin-left: 15px;
  }
`;

const ItemName = styled.a`
  cursor: pointer;
  font-size: 14px;
  height: 25px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.3px;

  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

const ItemSeller = styled.p`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.1px;
  margin-top: 5px;
  color: #aaa;
  @media only screen and (max-width: 960px) {
    font-size: 7px;
    line-height: 14px;
  }
`;

const ItemPrice = styled.span`
  margin-top: auto;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  @media only screen and (max-width: 960px) {
    font-size: 8px;
  }
`;
const BtnSection = styled.div`
  display: flex;
  justify-content: center;
`;

const AcitonBtn = styled.div`
  display: block;
  width: 150px;
  height: 50px;
  margin: 0 30px;
`;

const Container = styled.div`
  width: 70%;
  margin-top: 70px;
  margin-left: 70px;
  height: 700px;
  display: flex;
  flex-direction: column;
`;

const Posts = styled.div`
  width: 100%;
  max-height: 565px;
  min-height: 350px;
  margin: 30px 0;
`;

const PostsBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  padding-left: 20px;

  @media only screen and (max-width: 894px) {
    justify-content: space-around;
  }
`;

const PostsDefaultMsg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #ababab;
  }
`;

const PostContainer = styled.div`
  width: 180px;
  height: 240px;
  margin: 40px 20px 40px 0;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  @media only screen and (max-width: 894px) {
    margin-right: 0;
  }
`;

const PostWrappper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  border-radius: 10px;
  input {
    position: absolute;
    left: 5px;
    top: 5px;
    zoom: 1.2;
    z-index: 2;
    cursor: pointer;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export {
  Content,
  ItemList,
  Item,
  ItemDetail,
  ItemName,
  ItemSeller,
  ItemPrice,
  BtnSection,
  AcitonBtn,
  Container,
  PostContainer,
  Posts,
  PostWrappper,
  PostsBody,
  PostsDefaultMsg,
};
