import { ChatAPI } from '../config/api.config';
import { ChatDataInterface } from '../interfaces/chat.inteface';

export const createChat = async (chatData: ChatDataInterface) => {
  const access_token = localStorage.getItem('access_token');

  if (!access_token) {
    return;
  }

  return await ChatAPI.post('', chatData, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
