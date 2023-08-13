import { Gender, Rank } from '@prisma/client';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsIn,
  IsDateString,
} from 'class-validator';

export class SignupForm {
  @IsEmail()
  email!: string;

  @IsString()
  nickname!: string;

  @IsNotEmpty()
  @MinLength(8)
  password!: string;

  @IsIn(['S', 'A', 'B', 'C', 'D', 'E'], { message: 'Property must be in S~E' })
  rank!: Rank;

  @IsIn(['MALE', 'FEMALE'])
  gender!: Gender;

  @IsDateString()
  birthday!: Date;
}
