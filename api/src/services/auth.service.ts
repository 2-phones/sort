import { JwtService } from '@nestjs/jwt';
import { getSocialData } from './../util/axios.social';
import { SignupDto } from 'src/dto/auth/signup.dto';
import { LoginDto } from 'src/dto/auth/login.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}
  async signup(req: SignupDto) {
    return req;
  }

  async login(req: LoginDto) {
    // const result = await this.usersRepository.select(user_id);
    const result = await getSocialData(req);
    // if (!result) {
    //   throw new NotFoundException();
    // }
    console.log(result);
    return result;
  }
}
