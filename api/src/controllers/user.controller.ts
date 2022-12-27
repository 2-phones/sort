import { Controller, Get, Headers } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getProfile(@Headers() headers: any) {
    const token = headers['authorization'].split(' ')[1];
    return token;
  }
}
