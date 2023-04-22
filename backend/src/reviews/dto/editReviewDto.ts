import { IsIn, IsString, MinLength } from 'class-validator';
import {
  controlValue,
  powerValue,
  starRatingValue,
  weightValue,
} from 'reviews/review.interface';

export class EditReviewDto {
  @IsIn([0, 1], {
    message: '올바른 control 값을 입력해주세요',
  })
  control?: controlValue;

  @IsIn([0, 1], {
    message: '올바른 power 값을 입력해주세요',
  })
  power?: powerValue;

  @IsIn([0, 1, 2], {
    message: '올바른 weight 값을 입력해주세요',
  })
  weight?: weightValue;

  @IsIn([0, 1, 2, 3, 4, 5], {
    message: '올바른 별점을 입력해주세요',
  })
  starRating?: starRatingValue;

  @IsString()
  @MinLength(10, {
    message: '리뷰는 10자 이상 입력해주세요',
  })
  review?: string;
}
