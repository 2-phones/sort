import { UsersRepository } from './../repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenModule } from './token.module';
import { UserController } from './../controllers/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { UsersEntity } from 'src/entities/users.entity';
import { PostModule } from './post.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), TokenModule, PostModule],
  providers: [UserService, UsersRepository],
  controllers: [UserController],
})
export class UserModule {}
