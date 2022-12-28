import { createid } from './../util/randomString.util';
import { SocialSignupDto } from './../dto/auth/signup.dto';
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

  // 회원가입
  async signup(req: SignupDto) {
    const { data } = req;

    return req.type === 'social'
      ? await this.socialSignup(data)
      : await this.generalSignup(data);
  }

  async generalSignup(data: GeneralDto) {
    const user_id = createid();
    const user_data = { user_id, ...data };
    const result = await this.usersRepository.insert(user_data);

    if (!result) {
      throw new NotFoundException(`This is a registered account.`);
    }

    return result;
  }

  async socialSignup(data: SocialDto) {
    const socialdata = await getSocialData(data);

    const user_id = createid();
    const user_data = { user_id, ...socialdata };

    const result = await this.usersRepository.insert(user_data);

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  // 로그인
  async login(req: LoginDto) {
    const { data } = req;

    return req.type === 'social'
      ? await this.socialLogin(data)
      : await this.generalLogin(data);
  }

  async generalLogin(user_data: GeneralDto) {
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

  async socialLogin(req: SocialDto) {
    const { social_id } = await getSocialData(req);
    const result = await this.usersRepository.selectProfile({ social_id });
    if (!result) {
      throw new NotFoundException('user not found');
    }
    return result;
  }

  // 토큰 재발급
  async tokensReissue(access_token: any) {
    const { user_id } = await this.tokenService.decodeToken(access_token);
    const result = await this.tokenService.createTokens({ user_id });
    return result;
  }
}
