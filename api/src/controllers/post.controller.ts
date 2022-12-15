import { PostIdDto, UserIdDto } from './../dto/posts/posts.dto';
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostService } from 'src/services/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async posts() {
    return await this.postService.getPosts();
  }

  @Get(':post_id')
  async postId(@Param() post_id: PostIdDto) {
    return await this.postService.getPostId(post_id);
  }

  @Get('/user')
  async userPosts(@Param() user_id: UserIdDto) {
    return await this.postService.getUserPosts(user_id);
  }

  @Post()
  create() {
    return 'post';
  }

  @Put()
  edit() {
    return 'put';
  }

  @Delete()
  delete() {
    return 'delete';
  }
}
