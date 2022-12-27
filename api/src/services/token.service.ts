import { RefreshTokenRepository } from './../repositories/refreshToken.repository';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { TokensDto } from 'src/dto/auth/token.dto';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly refreshTokenRepo: RefreshTokenRepository,
  ) {}

  async createTokens(payload: object) {
    const access_token = await this.accessToken(payload);
    const refresh_token = await this.refreshToken(payload);

    return { access_token, refresh_token };
  }

  async accessToken(payload: object) {
    const result = this.jwtService.sign(payload, {
      secret: process.env.SECRETKEY,
      expiresIn: '15m',
    });

    return result;
  }

  async refreshToken(payload: any) {
    const result = await this.refreshTokenRepo.select(payload);
    if (!result) {
      return this.jwtService.sign(
        { payload: '' },
        {
          secret: process.env.SECRETKEY,
          expiresIn: '14d',
        },
      );
    }

    return result;
  }

  async decodeToken(tokens: string) {
    return this.jwtService.verify(tokens, {
      secret: process.env.SECRETKEY,
    });
  }
}
