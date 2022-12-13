import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth.controller';
import { ChatController } from './controllers/chat.controller';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ChatController],
  providers: [AppService, AuthService, ChatService],
})
export class AppModule {}
