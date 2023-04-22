import { User } from 'auth/types/auth.interface';

export type controlValue = 0 | 1;
export type powerValue = 0 | 1;
export type weightValue = 0 | 1 | 2;
export type starRatingValue = 0 | 1 | 2 | 3 | 4 | 5;

export interface IReview {
  control: controlValue;
  power: powerValue;
  weight: weightValue;
  starRating: starRatingValue;
  review: string;
}

export type IReviewReponse = IReview & {
  user: User;
};

export type ITransformEditReview = Partial<IReview>;
