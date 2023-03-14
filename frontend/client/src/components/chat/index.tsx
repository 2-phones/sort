import React from 'react';
import { useChat, useConnectToChat } from '../../hooks/chat/chat.hook';
import { useInput } from '../../hooks/common/input.hook';
import { useAppSelector } from '../../hooks/common/redux.hook';
import * as S from './style';

const Chat = () => {
  const { changeHandler, inputData } = useInput();
  const { chatsend, chatHandle } = useChat(inputData);
  const { postId } = useAppSelector((state) => state.posts);
  const { connectToChat } = useConnectToChat(postId);

  return (
    <S.Container>
      <S.Window>
        <S.ChatContent>
          <S.Title>
            <p className="chat_content">채팅 내용</p>
          </S.Title>
          <input onChange={changeHandler} />
          <button onClick={connectToChat}>버튼</button>
        </S.ChatContent>
      </S.Window>
    </S.Container>
  );
};

export default Chat;
