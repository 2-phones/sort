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

  async create(user_info: SignupDto): Promise<any> {
    return this.usersRepository.save(user_info);
  }

  async select(user_data: any): Promise<any> {
    const { email, password } = user_data;

    return this.usersRepository
      .createQueryBuilder()
      .select(['user_id'])
      .where(`email = :email`, { email })
      .andWhere(`password = :password`, { password })
      .getRawOne();
  }
}
