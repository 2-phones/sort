import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from 'src/dto/auth/signup.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async selectUser(user_data: any): Promise<any> {
    const { email, password } = user_data;

    return this.usersRepository
      .createQueryBuilder()
      .select(['user_id'])
      .where(`email = :email`, { email })
      .andWhere(`password = :password`, { password })
      .getRawOne();
  }

  async selectUserID(id: object): Promise<any> {
    return this.usersRepository
      .createQueryBuilder()
      .select(['user_id'])
      .where(
        id['user_id'] ? 'user_id = :user_id' : 'social_id = :social_id',
        id,
      )
      .getRawOne();
  }

  async selectProfile(id: object): Promise<any> {
    return this.usersRepository
      .createQueryBuilder()
      .select(['email', 'user_name', 'profile_url', 'created_at'])
      .where(
        id['user_id'] ? 'user_id = :user_id' : 'social_id = :social_id',
        id,
      )
      .getRawOne();
  }

  async insert(user_data: any): Promise<any> {
    const column = Object.keys(user_data);
    return this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(UsersEntity, column)
      .values(user_data)
      .execute();
  }

  async updateProfile(user_id: string): Promise<any> {
    return this.usersRepository
      .createQueryBuilder()
      .where(`user_id = :user_id`, { user_id })
      .getRawOne();
  }

  async deleteProfile(user_id: string): Promise<any> {
    return this.usersRepository
      .createQueryBuilder()
      .where(`user_id = :user_id`, { user_id })
      .getRawOne();
  }
}
