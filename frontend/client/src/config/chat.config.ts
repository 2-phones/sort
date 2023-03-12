import { io } from 'socket.io-client';

const url = process.env.SOCKETIO_API || '';
export const socket = io(url);
