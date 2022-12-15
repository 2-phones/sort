import { IsNotEmpty, IsString } from 'class-validator';

export class PostIdDto {
  @IsNotEmpty()
  @IsString()
  post_id: string;
}

export class UserIdDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;
}
