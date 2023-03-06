import { RefreshTokenRepository } from './../repositories/refreshToken.repository';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { TokensDto } from 'src/dto/auth/token.dto';
import { getDate } from 'src/util/createDate';

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
    const { user_id } = payload;
    const result = await this.refreshTokenRepo.select({ user_id });
    const expired_at = getDate();

    if (!result) {
      const refresh_token = this.jwtService.sign(
        {},
        {
          secret: process.env.SECRETKEY,
          expiresIn: '14d',
        },
      );

      const user_data = { user_id, refresh_token, expired_at };
      await this.refreshTokenRepo.create(user_data);
      return refresh_token;
    }

    return result['refresh_token'];
  }

  async tokensReissue(refresh_token: object) {
    const user_id = await this.refreshTokenRepo.selectToken({ refresh_token });
    const access_token = await this.accessToken(user_id);
    return { access_token };
  }

  async decodeToken(tokens: string) {
    const { user_id } = this.jwtService.verify(tokens, {
      secret: process.env.SECRETKEY,
    });

    if (!user_id) {
      throw new Error('accessToken is not found');
    }

    return user_id;
  }
}
