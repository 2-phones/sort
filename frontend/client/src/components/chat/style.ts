import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  z-index: 4;
  border: 2px solid;
`;

const Window = styled.div`
  display: flex;
  width: 650px;
  height: 500px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: #ffffff;
`;

const ChatList = styled.div`
  width: 45%;
  border-right: 1px solid;
`;

const ChatContent = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
  .chat_content {
    width: 80%;
    text-align: center;
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid;
`;

export { Container, Window, ChatList, ChatContent, Profile, Title };
