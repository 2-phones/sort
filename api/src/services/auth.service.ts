import { TokenService } from './token.service';
import { getSocialData } from './../util/axios.social';
import { SignupDto } from 'src/dto/auth/signup.dto';
import { GeneralDto, LoginDto, SocialDto } from 'src/dto/auth/login.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly tokenService: TokenService,
  ) {}
  async signup(req: SignupDto) {
    return req;
  }

  async login(req: LoginDto) {
    const { data } = req;

    return req.type === 'social'
      ? await this.social(data)
      : await this.general(data);
  }

  async general(user_data: GeneralDto) {
    try {
      const result = await this.usersRepository.select(user_data);
      const tokens = await this.tokenService.createTokens(result);

      if (!result) {
        throw new NotFoundException(
          `user_data ${user_data['email']} is not found`,
        );
      }

      return tokens;
    } catch (err) {
      return err;
    }
  }

  async social(req: SocialDto) {
    // const result = await this.usersRepository.select(user_id);
    const result = await getSocialData(req);
    // if (!result) {
    //   throw new NotFoundException();
    // }
    console.log(result);
    return result;
  }

  async tokens(req: any) {
    const result = await this.tokenService.decodeToken(req);
    console.log(result);
  }
}
