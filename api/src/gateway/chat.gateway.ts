import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8081, { namespace: 'chat', cors: { origin: '*' } })
export class ChatGateway {
  @WebSocketServer() public server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string) {
    console.log(data);
    this.server.emit('hello', data);
    return 'Hello world!';
  }
}
