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
  recommend: number;

  @IsString()
  review: string;
}
