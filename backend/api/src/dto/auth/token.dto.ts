import { IsNotEmpty, IsString } from 'class-validator';

export class TokensDto {
  @IsNotEmpty()
  @IsString()
  access_token: string;

  @IsNotEmpty()
  @IsString()
  refresh_token: string;
}

export class AccecssTokenDto {
  @IsNotEmpty()
  @IsString()
  access_token: string;
}

export class RefreshTokenDtok {
  @IsNotEmpty()
  @IsString()
  refresh_token: string;
}
