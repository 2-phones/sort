import { Injectable } from '@nestjs/common';
import { TokenService } from './token.service';

@Injectable()
export class UserService {
  constructor(private readonly tokenService: TokenService) {}
  async getUser() {
    return 'ds';
  }
}
