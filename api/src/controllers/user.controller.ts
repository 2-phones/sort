import { UserService } from './../services/user.service';
import { Controller, Get, Headers } from '@nestjs/common';

@Controller('sort/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/profile')
  async getProfile(@Headers() headers: any) {
    const token = headers['authorization'].split(' ')[1];

    return await this.userService.getUser(token);
  }
}
