import { PostsEntity } from './../entities/posts.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from 'src/dto/auth/signup.dto';
import { Repository } from 'typeorm';
import { PostIdDto, PostStatusDto, UserIdDto } from 'src/dto/posts/posts.dto';

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
        'created_at',
        'views',
      ])
      .getRawMany();
  }

  async selectPostId(postId: PostIdDto): Promise<any> {
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
        'created_at',
        'views',
      ])
      .where(`post_id = :post_id`, postId)
      .getRawMany();
  }

  async selectUserId(userID: UserIdDto): Promise<any> {
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
        'created_at',
        'views',
      ])
      .where('user_id = :user_id ', userID)
      .getRawMany();
  }

  async selectStatus(status: PostStatusDto): Promise<any> {
    return await this.postsRepository
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
        'created_at',
        'views',
      ])
      .where('status = :status', status)
      .getRawMany();
  }

  async create(post_data: any) {
    const column = Object.keys(post_data);
    return await this.postsRepository
      .createQueryBuilder()
      .insert()
      .into(PostsEntity, column)
      .values(post_data)
      .execute();
  }

  async update(post_data: any, id: any) {
    const { user_id } = id;
    const { post_id } = id;
    return this.postsRepository
      .createQueryBuilder()
      .update()
      .set(post_data)
      .where('user_id = :user_id ', { user_id })
      .andWhere(`post_id = :post_id`, { post_id })
      .execute();
  }

  async deleteQuery(user_id: string, post_id: string) {
    return this.postsRepository
      .createQueryBuilder()
      .delete()
      .where('user_id = :user_id ', { user_id })
      .andWhere(`post_id = :post_id`, { post_id })
      .execute();
  }
}
