import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8081, { namespace: 'chat', cors: { origin: '*' } })
export class EventsGateway {
  @WebSocketServer() public server: Server;
  private readonly logger = new Logger(EventsGateway.name);

  @SubscribeMessage('hello')
  handleMessage(@MessageBody() message: string) {
    console.log(message);
    this.server.emit('hello', message);
  }

  // 초기화 후 실행
  afterInit(server: Server): void {
    this.logger.log('socket init');
  }
  // 소켓 연결시 실행
  handleConnection(@ConnectedSocket() socket: Socket): void {
    this.logger.log(
      `connection {${socket.nsp.name} , socket ID : ${socket.id}}`,
    );
  }

  // 소켓 연결이 끊기면 실행
  handleDisconnect(@ConnectedSocket() socket: Socket): any {
    this.logger.log(
      `disconnect {${socket.nsp.name} , socket ID : ${socket.id}}`,
    );
  }
}
