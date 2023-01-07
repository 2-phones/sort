import { SignupDto } from 'src/dto/auth/signup.dto';
import { TokenService } from 'src/services/token.service';
import { AuthService } from './../services/auth.service';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { LoginDto } from 'src/dto/auth/login.dto';
import { Response } from 'express';

@Controller('sort/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}
  @Get()
  getAll() {
    return 'hi';
  }

  @Post('/token')
  async getToken(@Body() req: any) {
    const { access_token } = req;
    return await this.authService.tokensReissue(access_token);
  }

  @Post('/login')
  async login(@Body() req: LoginDto) {
    return await this.authService.login(req);
  }

  @Post('/signup')
  async signup(@Body() req: SignupDto, @Res() res: Response) {
    try {
      await this.authService.signup(req);
      return { message: 'success signup' };
    } catch (err) {
      return res.status(404).send({ message: err.sqlMessage });
    }
  }
}
