import { RefreshTokenRepository } from './../repositories/refreshToken.repository';
import { RefreshTokensEntity } from './../entities/refresh_tokens.entity';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenService } from 'src/services/token.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RefreshTokensEntity]),
    JwtModule.register({
      secret: process.env.SECRETKEY,
    }),
  ],
  providers: [TokenService, JwtService, RefreshTokenRepository],
  exports: [TokenService],
})
export class TokenModule {}
