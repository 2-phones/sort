import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  margin-left: 150px;
`;

const ContentTitle = styled.div`
  position: relative;
  width: 100%;
`;

const UserContainter = styled.div`
  align-items: center;
  display: flex;
  padding: 30px 0;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 50px;
  margin-bottom: 30px;
  margin-top: 10px;
  width: 100%;
  /* @media only screen and (max-width: 960px) {
    padding: 10px 0 10px 10px;
    margin-bottom: 15px;
  } */
`;

const UserUSer = styled.div`
  margin-left: 30px;
  img {
    width: 80px;
    height: 80px;
    margin-right: 30px;
    border-radius: 100%;
  }

  @media only screen and (max-width: 960px) {
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 100%;
    }
  }
`;

const UserInfo = styled.div`
  display: block;
`;

const UserID = styled.p`
  line-height: 30px;
  font-size: 22px;
  letter-spacing: -0.3px;
  font-weight: 400;

  @media only screen and (max-width: 960px) {
    font-size: 17px;
    line-height: 23px;
  }
`;

const UserEmail = styled.p`
  line-height: 25px;
  font-size: 14px;
  letter-spacing: -0.21px;
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

const UserRight = styled.div`
  margin-left: auto;
  margin-right: 30px;

  @media only screen and (max-width: 960px) {
    margin-right: 10px;
  }
`;

const ProfileButton = styled.button`
  color: rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 24px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
  height: 50px;
  letter-spacing: 0.3px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    color: black;
    font-weight: 400;
  }

  @media only screen and (max-width: 960px) {
    padding: 0 10px;
    font-size: 8px;
    height: 40px;
  }
`;

const Just = styled.div`
  left: 0;
`;

const TitleMore = styled.div`
  display: block;
  margin-top: 30px;
  max-width: 100%;
`;

const Title = styled.h3`
  font-weight: bold;
  letter-spacing: -0.3px;

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const More = styled.a`
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

const Posts = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 30px;
`;

const PostsBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;

  margin-top: 20px;
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
  margin-top: 20px;
  margin-right: 40px;
  cursor: pointer;
  img {
    width: 100%;
    height: 170px;
  }
  @media only screen and (max-width: 894px) {
    margin-right: 0;
  }
`;

export {
  ContentTitle,
  UserContainter,
  UserUSer,
  UserInfo,
  UserID,
  UserEmail,
  UserRight,
  ProfileButton,
  Just,
  TitleMore,
  Title,
  More,
  Container,
  Posts,
  PostsBody,
  PostsDefaultMsg,
  PostContainer,
};
