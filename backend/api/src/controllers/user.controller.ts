import { UserService } from './../services/user.service';
import { Controller, Get, Headers, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('sort/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/profile')
  async getProfile(@Headers() headers: any) {
    const token = headers['authorization'].split(' ')[1];

    return await this.userService.getUser(token);
  }

  @Get('/posts')
  async userPosts(@Headers() headers: any, @Res() res: Response) {
    try {
      const token = headers['authorization'].split(' ')[1];
      const result = await this.userService.getPosts(token);
      return res.status(200).send(result);
    } catch (err) {
      return res.status(404).send(err);
    }
  }
}
