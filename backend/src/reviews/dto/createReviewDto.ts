import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  control: number;

  @IsNumber()
  power: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  design: number;

  @IsNumber()
  average: number;

  @IsNumber()
  durability: number;

  @IsString()
  review: string;
}
