import { TokenModule } from './token.module';
import { PostsRepository } from './../repositories/posts.repository';
import { PostsEntity } from './../entities/posts.entity';
import { PostService } from './../services/post.service';
import { PostController } from './../controllers/post.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity]), TokenModule],
  providers: [PostService, PostsRepository],
  controllers: [PostController],
  exports: [PostsRepository],
})
export class PostModule {}
