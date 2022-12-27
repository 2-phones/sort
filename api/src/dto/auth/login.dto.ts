import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  data: any;

  @IsNotEmpty()
  @IsString()
  type: 'social' | 'general';
}

export class SocialDto {
  @IsString()
  @IsNotEmpty()
  access_token: string;

  @IsString()
  @IsNotEmpty()
  social_type: string;
}

export class GeneralDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
