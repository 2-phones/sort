import { TokenService } from 'src/services/token.service';
import { PostStatusDto } from './../dto/posts/posts.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { PostService } from 'src/services/post.service';
import { Response } from 'express';

@Controller('/sort/posts')
export class PostController {
  private readonly logger = new Logger();
  constructor(
    private postService: PostService,
    private readonly tokenService: TokenService,
  ) {}

  @Get()
  async posts() {
    return await this.postService.getPosts();
  }

  @Get('/id/:post_id')
  async postId(@Param('post_id') post_id: string) {
    return await this.postService.getPostId(post_id);
  }

  @Get('/status')
  async status(@Query() queryData: PostStatusDto) {
    return await this.postService.getPostStatus(queryData);
  }

  @Post()
  async create(
    @Headers() headers: any,
    @Body() data: any,
    @Res() res: Response,
  ) {
    try {
      this.logger.log(data);
      const access_token = headers['authorization'].split(' ')[1];
      const { user_id } = await this.tokenService.decodeToken(access_token);
      const post_data = { user_id, ...data };
      this.postService.createPost(post_data);
      return res.status(200).send('success posted');
    } catch (err) {
      return res.status(404).send(err);
    }
  }

  @Put('/:post_id')
  async edit(
    @Headers() headers: any,
    @Body() data: any,
    @Param('post_id') post_id: string,
    @Res() res: Response,
  ) {
    try {
      const access_token = headers['authorization'].split(' ')[1];
      const { user_id } = await this.tokenService.decodeToken(access_token);
      const id = { user_id, post_id };

      await this.postService.editPost(data, id);
      return res.status(200).send('success updated');
    } catch (err) {
      return res.status(404).send(err);
    }
  }

  @Delete('/:post_id')
  async delete(
    @Headers() headers: any,
    @Param('post_id') post_id: string,
    @Res() res: Response,
  ) {
    try {
      const access_token = headers['authorization'].split(' ')[1];
      const { user_id } = await this.tokenService.decodeToken(access_token);
      await this.postService.deletePost(user_id, post_id);
      return res.status(200).send('success deleted');
    } catch (err) {
      return res.status(404).send(err);
    }
  }
}
