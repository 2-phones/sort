import { TokenModule } from './token.module';
import { UserController } from './../controllers/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [TokenModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
