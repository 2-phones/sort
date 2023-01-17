import {
  PostIdDto,
  PostStatusDto,
  UserIdDto,
  FindUserIdDto,
  QueryStringArrayTestDto,
} from './../dto/posts/posts.dto';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { PostService } from 'src/services/post.service';

@Controller('/sort/posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async posts() {
    return await this.postService.getPosts();
  }

  @Get('/id/:post_id')
  async postId(@Param('post_id') post_id: string) {
    console.log(post_id);
    return await this.postService.getPostId(post_id);
  }

  @Get('/user')
  async userPosts(@Param() user_id: UserIdDto) {
    return await this.postService.getUserPosts(user_id);
  }

  @Get('/status')
  async status(@Query() queryData: PostStatusDto) {
    return await this.postService.getPostStatus(queryData);
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
