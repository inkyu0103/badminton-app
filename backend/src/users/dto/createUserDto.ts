import { IsEmail, MinLength, IsDate, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;

  rank: string;
  gender: string;
  birthday: string;
}
