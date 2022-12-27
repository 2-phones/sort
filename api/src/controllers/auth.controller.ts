import { AuthService } from './../services/auth.service';
import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { LoginDto } from 'src/dto/auth/login.dto';

@Controller('sort/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  getAll() {
    return 'hi';
  }

  @Get('/token')
  async getToken(@Headers() data: any) {
    const token = data['authorization'].split(' ')[1];
    await this.authService.tokens(token);
    return token;
  }

  @Post('/login')
  async login(@Body() req: LoginDto) {
    return await this.authService.login(req);
  }
}
