import { PostsRepository } from './../repositories/posts.repository';
import { UsersRepository } from './../repositories/users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TokenService } from './token.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly tokenService: TokenService,
    private readonly postRepository: PostsRepository,
  ) {}
  async getUser(token: string) {
    const { user_id } = await this.tokenService.decodeToken(token);
    const result = await this.userRepository.selectProfile({ user_id });
    return result;
  }
  async getPosts(token: string) {
    const { user_id } = await this.tokenService.decodeToken(token);
    const userID = { user_id };
    const result = await this.postRepository.selectUserId(userID);

    if (!result) {
      throw new NotFoundException(`user_id ${user_id['user_id']} is Not Found`);
    }

    return result;
  }
}
