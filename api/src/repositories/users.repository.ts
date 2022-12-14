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

  async select(user_id: string): Promise<any> {
    return this.usersRepository.findOne({
      where: { user_id },
    });
  }
}
