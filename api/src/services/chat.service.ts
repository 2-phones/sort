import { EventsGateway } from './../gateway/chat.gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  constructor(private readonly eventsGateway: EventsGateway) {}

  async createChatRoom(chatData: any) {
    return this.eventsGateway.handleMessage(chatData);
  }
}
