import { PostsEntity } from './../entities/posts.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from 'src/dto/auth/signup.dto';
import { Repository } from 'typeorm';
import { PostIdDto, UserIdDto } from 'src/dto/posts/posts.dto';

@Injectable()
export class PostsRepository {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,
  ) {}

  async select(): Promise<any> {
    return this.postsRepository
      .createQueryBuilder()
      .select([
        'post_id',
        'title',
        'body',
        'price',
        'end_date',
        'seat_number',
        'region',
        'img_url',
        'status',
        'views',
      ])
      .getRawMany();
  }

  async selectPostId(post_id: PostIdDto): Promise<any> {
    return this.postsRepository
      .createQueryBuilder()
      .select([
        'title',
        'body',
        'price',
        'end_date',
        'seat_number',
        'region',
        'img_url',
        'status',
        'created_date',
        'views',
      ])
      .where(`post_id = :post_id`, post_id)
      .getRawMany();
  }

  async selectUserId(user_id: UserIdDto): Promise<any> {
    return this.postsRepository
      .createQueryBuilder()
      .select([
        'title',
        'body',
        'price',
        'end_date',
        'seat_number',
        'region',
        'img_url',
        'status',
        'created_date',
        'views',
      ])
      .where('user_id = :user_id ', user_id)
      .getMany();
  }
}
