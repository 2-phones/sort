import { io } from 'socket.io-client';

const url = process.env.CHAT_API || '';
export const socket = io(url);
