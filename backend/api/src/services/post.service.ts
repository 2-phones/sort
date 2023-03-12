import { PostIdDto, PostStatusDto, UserIdDto } from './../dto/posts/posts.dto';
import { PostsRepository } from './../repositories/posts.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostsRepository) {}
  async getPosts() {
    return await this.postRepository.select();
  }

  async getPostId(post_id: string) {
    const postId = { post_id };
    const result = await this.postRepository.selectPostId(postId);
    if (!result) {
      throw new NotFoundException(`post_id ${post_id['post_id']} is Not Found`);
    }

    return result;
  }

  async getPostStatus(queryData: PostStatusDto) {
    const { status } = queryData;
    const result = await this.postRepository.selectStatus({ status });
    if (!result) {
      throw new NotFoundException(`post is Not Found`);
    }

    return result;
  }

  async createPost(post_data: any) {
    const { user_id } = post_data;

    if (!user_id) {
      throw new NotFoundException('user is Not Found');
    }

    const result = await this.postRepository.create(post_data);

    return result;
  }

  async editPost(post_data: any, id: any) {
    const { user_id } = id;

    if (!user_id) {
      throw new NotFoundException('user is Not Found');
    }

    const result = await this.postRepository.update(post_data, id);
    return result;
  }

  async deletePost(user_id: string, post_id: string) {
    if (!user_id) {
      throw new NotFoundException('user is Not Found');
    }

    const result = await this.postRepository.deleteQuery(user_id, post_id);

    return result;
  }
}
