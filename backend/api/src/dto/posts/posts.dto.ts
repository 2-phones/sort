import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class PostIdDto {
  @IsString()
  @IsNotEmpty()
  post_id: string;
}

export class QueryStringArrayTestDto {
  @IsString({ each: true })
  queryData: string[];
}

export class UserIdDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;
}

export class PostStatusDto {
  @IsNotEmpty()
  @IsString()
  status: '판매중' | '판매완료';
}
