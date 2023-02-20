import { ChatModule } from './chat.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '../config/ormconfig';
import { AuthModule } from './auth.module';
import { PostModule } from './post.module';
import { UserModule } from './user.module';
import { TokenModule } from './token.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(ormConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    PostModule,
    UserModule,
    TokenModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
