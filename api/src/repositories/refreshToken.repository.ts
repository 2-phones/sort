import { RefreshTokensEntity } from './../entities/refresh_tokens.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from 'src/dto/auth/signup.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RefreshTokenRepository {
  constructor(
    @InjectRepository(RefreshTokensEntity)
    private readonly refreshTokenRepository: Repository<RefreshTokensEntity>,
  ) {}

  async create(user_data: any): Promise<any> {
    return this.refreshTokenRepository
      .createQueryBuilder()
      .insert()
      .values([user_data])
      .execute();
  }

  async select(user_id: any): Promise<any> {
    return this.refreshTokenRepository
      .createQueryBuilder()
      .select(['token'])
      .where(`user_id = :user_id`, user_id)
      .getRawOne();
  }
}
