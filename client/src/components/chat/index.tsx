import React from 'react';
import { useChat } from '../../hooks/chat/chat.hook';
import * as S from './style';

const Chat = () => {
  return (
    <S.Container>
      <S.Window>
        <S.ChatContent>
          <S.Title onClick={() => useChat()}>
            <p className="chat_content">채팅 내용</p>
          </S.Title>
        </S.ChatContent>
      </S.Window>
    </S.Container>
  );
};

export default Chat;
