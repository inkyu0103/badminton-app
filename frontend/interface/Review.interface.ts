import { ReviewEmbedUser } from "interface/User.interface";
import { REVIEW_VALUE_INDEX } from "constants/review";

export interface ReviewProps {
  createdAt: string;
  review: string;
  value: number;
  age: string;
  rank: string;
  isMyReview: boolean;
  handleDeleteReview: () => void;
  handleEditReview: () => void;
}

export interface IReviewForm {
  control: controlValue;
  power: powerValue;
  weight: weightValue;
  starRating: number;
  review: string;
}

export type ICreateOrEditReview = IReviewForm;

export interface IReviewResponse {
  id: number;
  control: controlValue;
  power: powerValue;
  weight: weightValue;
  review: string;
  createdAt: Date;
  user: ReviewEmbedUser;
  starRating: number;
}

export interface IReviewListResponse {
  count: number;
  reviewList: IReviewResponse[];
}

type controlValue =
  | (typeof REVIEW_VALUE_INDEX)["control"]["EASY"]
  | (typeof REVIEW_VALUE_INDEX)["control"]["HARD"];
type powerValue =
  | (typeof REVIEW_VALUE_INDEX)["power"]["EASY"]
  | (typeof REVIEW_VALUE_INDEX)["power"]["HARD"];
type weightValue =
  | (typeof REVIEW_VALUE_INDEX)["weight"]["LIGHT"]
  | (typeof REVIEW_VALUE_INDEX)["weight"]["MEDIUM"]
  | (typeof REVIEW_VALUE_INDEX)["weight"]["HEAVY"];
