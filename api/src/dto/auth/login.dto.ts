import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  social_id: string;

  @IsString()
  @IsNotEmpty()
  social_type: string;
}
