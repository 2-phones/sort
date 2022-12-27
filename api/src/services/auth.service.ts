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
      const result = await this.usersRepository.selectUser(user_data);
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

  // 토큰 재발급
  async tokensReissue(access_token: any) {
    const { user_id } = await this.tokenService.decodeToken(access_token);
    const result = await this.tokenService.createTokens({ user_id });
    return result;
  }
}
