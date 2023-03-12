import { EventsModule } from './events.module';
import { ChatService } from './../services/chat.service';
import { ChatController } from './../controllers/chat.controller';
import { Module } from '@nestjs/common';
import { EventsGateway } from '../gateway/chat.gateway';
import { TokenModule } from './token.module';

@Module({
  imports: [EventsModule, TokenModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
