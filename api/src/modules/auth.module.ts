import { UsersEntity } from 'src/entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';
import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: '15m',
      },
    }),
  ],
  providers: [AuthService, UsersRepository],
  controllers: [AuthController],
})
export class AuthModule {}
