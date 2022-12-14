import { IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  social_id: string;

  @IsString()
  @IsNotEmpty()
  social_type: string;

  @IsString()
  user_name: string;

  @IsString()
  profile_url: string;
}
