import { winstonLogger } from './../config/logger.config';
import { EventsModule } from './events.module';
import { ChatModule } from './chat.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '../config/ormconfig';
import { AuthModule } from './auth.module';
import { PostModule } from './post.module';
import { UserModule } from './user.module';
import { TokenModule } from './token.module';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    AuthModule,
    WinstonModule.forRoot(winstonLogger),
    TypeOrmModule.forRoot(ormConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    PostModule,
    UserModule,
    TokenModule,
    ChatModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
