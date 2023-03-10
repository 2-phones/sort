import { IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  data: any;

  @IsNotEmpty()
  @IsString()
  type: 'social' | 'general';
}

export class SocialSignupDto {
  @IsString()
  @IsNotEmpty()
  social_id: string;

  @IsString()
  @IsNotEmpty()
  social_type: string;

  @IsString()
  user_name: string | null;

  @IsString()
  profile_url: string | null;
}
