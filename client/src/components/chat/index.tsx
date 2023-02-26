import React from 'react';
import { useChat } from '../../hooks/chat/chat.hook';
import { useInput } from '../../hooks/common/input.hook';
import * as S from './style';

const Chat = () => {
  const { changeHandler, inputData } = useInput();
  const { chatsend, chatHandle } = useChat(inputData);

  const clickHandler = (data: any) => {
    chatHandle();
  };

  console.log(inputData);
  return (
    <S.Container>
      <S.Window>
        <S.ChatContent>
          <S.Title>
            <p className="chat_content">채팅 내용</p>
          </S.Title>
          <input onChange={changeHandler} />
          <button onClick={() => clickHandler(inputData)}>버튼</button>
        </S.ChatContent>
      </S.Window>
    </S.Container>
  );
};

export default Chat;
