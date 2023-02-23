import { useState, useEffect } from 'react';
import { socket } from '../../config/chat.config';

export const useChat = () => {
  const [room, setRoom] = useState<any>('');

  const chatHandle = async () => {
    try {
      const result = socket.emit('hello', { data: '채팅메세지' });
      setRoom(result);
      console.log(result);
    } catch (err: any) {
      console.log(err);
    }
  };
  chatHandle();
};
