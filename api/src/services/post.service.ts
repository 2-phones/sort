import { PostIdDto, UserIdDto } from './../dto/posts/posts.dto';
import { PostsRepository } from './../repositories/posts.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostsRepository) {}
  async getPosts() {
    return await this.postRepository.select();
  }

  async getPostId(post_id: PostIdDto) {
    const result = await this.postRepository.selectPostId(post_id);
    if (!result) {
      throw new NotFoundException(`post_id ${post_id['post_id']} is Not Found`);
    }
    return result;
  }

  async getUserPosts(user_id: UserIdDto) {
    const result = await this.postRepository.selectUserId(user_id);

    if (!result) {
      throw new NotFoundException(`user_id ${user_id['user_id']} is Not Found`);
    }

    return result;
  }
}
