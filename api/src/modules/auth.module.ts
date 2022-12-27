import { UsersEntity } from 'src/entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';
import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenModule } from './token.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), TokenModule],
  providers: [AuthService, UsersRepository],
  controllers: [AuthController],
})
export class AuthModule {}
