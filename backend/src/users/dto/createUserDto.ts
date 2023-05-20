import {
  IsEmail,
  MinLength,
  IsDate,
  IsNotEmpty,
  IsIn,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  nickname: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsIn(['S', 'A', 'B', 'C', 'D', 'E'], { message: 'Property must be in S~E' })
  rank: string;

  @IsIn(['MALE', 'FEMALE'])
  gender: string;

  @IsDate()
  birthday: Date;
}
