import React from 'react';
import * as S from './style';

const Chat = () => {
  return (
    <S.Container>
      <S.Window>
        <S.ChatContent>
          <S.Title>
            <p className="chat_content">채팅 내용</p>
          </S.Title>
        </S.ChatContent>
      </S.Window>
    </S.Container>
  );
};

export default Chat;
