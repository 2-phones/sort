import { LoginDto } from 'src/dto/auth/login.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  //   constructor() {}
  async checkUser(req: LoginDto) {
    return 'social_id';
  }
}
