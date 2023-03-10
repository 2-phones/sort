import { EventsGateway } from './../gateway/chat.gateway';
import { ChatService } from './../services/chat.service';
import { Body, Controller, Headers, Logger, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PostIdDto } from 'src/dto/posts/posts.dto';
import { TokenService } from 'src/services/token.service';

@Controller('sort/chat')
export class ChatController {
  private readonly logger = new Logger(ChatController.name);

  constructor(
    private readonly tokenService: TokenService,
    private readonly chatService: ChatService,
    private readonly enventsGateway: EventsGateway,
  ) {}

  @Post()
  async create(
    @Headers() headers: any,
    @Body() chatMessage: any,
    @Res() res: Response,
  ) {
    try {
      this.logger.log(chatMessage);
      const access_token = headers['authorization'].split(' ')[1];
      const { user_id } = await this.tokenService.decodeToken(access_token);
      const chatData = { user_id, ...chatMessage };
      await this.chatService.createChatRoom(chatData);
      return res.status(200).send(chatMessage);
    } catch (err) {
      return res.status(404).send(err);
    }
  }
}
