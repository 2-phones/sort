import { AuthService } from './../services/auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from 'src/dto/auth/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  getAll() {
    return 'hi';
  }

  @Post('/login')
  async login(@Body() req: LoginDto) {
    return await this.authService.login(req);
  }
}
