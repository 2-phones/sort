import { EventsGateway } from './../gateway/chat.gateway';
import { Module } from '@nestjs/common';

@Module({
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class EventsModule {}
