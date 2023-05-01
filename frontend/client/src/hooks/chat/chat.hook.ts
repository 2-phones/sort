import { useAppSelector } from './../common/redux.hook';
import { useState, useEffect } from 'react';
import { createChat } from '../../api/chat.api';
import { socket } from '../../config/chat.config';

export const useChat = (chatMessage: any) => {
  const [room, setRoom] = useState<any>('');
  const access_token = localStorage.getItem('access_token');
  const chatData = { access_token, chatMessage };

  useEffect(() => {
    socket.on('sdsds', (res) => {
      console.log(res);
    });
  }, []);

  const chatHandle = () => {
    socket.emit('hello', chatData);
  };
  const chatsend = () => {
    socket.emit('hello', chatData);
    console.log('클릭!!!!');
  };
  return { chatHandle, chatData, chatsend };
};

export const useConnectToChat = (post_id: string) => {
  const chatData = { post_id, message: 'gee' };
  const [receiveMsg, setReceiveMsg] = useState('');
  const connectToChat = async () => {
    try {
      const result = await createChat(chatData);
      const { postId, message } = result?.data;
      // useSendMessage(post_id, message);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return { connectToChat };
};

const useSendMessage = (post_id: string, message: string) => {
  socket.emit(post_id, message);
};