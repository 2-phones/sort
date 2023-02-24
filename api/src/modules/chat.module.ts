import { Module } from '@nestjs/common';
import { EventsGateway } from '../gateway/chat.gateway';

@Module({
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class ChatModule {}
