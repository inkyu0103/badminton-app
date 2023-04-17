import { IsNumber, IsString } from 'class-validator';

export class EditReviewDto {
  @IsNumber()
  control?: number;

  @IsNumber()
  power?: number;

  @IsNumber()
  weight?: number;

  @IsNumber()
  design?: number;

  @IsNumber()
  durability?: number;

  @IsNumber()
  average?: number;

  @IsString()
  review?: string;
}