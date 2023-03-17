import { SignupDto } from 'src/dto/auth/signup.dto';
import { TokenService } from 'src/services/token.service';
import { AuthService } from './../services/auth.service';
import {
  Body,
  Controller,
  Get,
  Headers,
  Logger,
  Post,
  Res,
} from '@nestjs/common';

import { LoginDto } from 'src/dto/auth/login.dto';
import { Response } from 'express';

@Controller('sort/auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(
    private authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}
  @Get()
  getAll() {
    return 'hi';
  }

  @Post('/token')
  async getToken(@Headers() headers: any, @Res() res: Response) {
    try {
      const refresh_token = headers['authorization'].split(' ')[1];
      const result = await this.tokenService.tokensReissue(refresh_token);
      return res.status(200).send(result);
    } catch (err) {
      return res.status(401).send(err);
    }
  }

  @Post('/login')
  async login(@Body() req: LoginDto, @Res() res: Response) {
    try {
      this.logger.log(req);
      const result = await this.authService.login(req);
      return res.status(200).send(result);
    } catch (err) {
      return res.status(404).send(err);
    }
  }

  @Post('/signup')
  async signup(@Body() req: SignupDto, @Res() res: Response) {
    try {
      await this.authService.signup(req);
      return res.status(200).send('success signup');
    } catch {
      return res.status(401).send('This is a registered account');
    }
  }
}
