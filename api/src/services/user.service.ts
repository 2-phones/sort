import { UsersRepository } from './../repositories/users.repository';
import { Injectable } from '@nestjs/common';
import { TokenService } from './token.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly tokenService: TokenService,
  ) {}
  async getUser(token: string) {
    const { user_id } = await this.tokenService.decodeToken(token);
    const result = await this.userRepository.selectProfile({ user_id });
    return result;
  }
}
