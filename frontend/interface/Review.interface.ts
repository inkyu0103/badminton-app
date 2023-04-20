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
  control: control_value;
  power: power_value;
  weight: weight_value;
  starRating: number;
  review: string;
}

export type ICreateOrEditReview = IReviewForm;

export interface IReviewResponse {
  id: number;
  control: control_value;
  power: power_value;
  weight: weight_value;
  review: string;
  createdAt: Date;
  user: ReviewEmbedUser;
}

export interface IReviewListResponse {
  count: number;
  reviewList: IReviewResponse[];
}

type control_value =
  | (typeof REVIEW_VALUE_INDEX)["control"]["EASY"]
  | (typeof REVIEW_VALUE_INDEX)["control"]["HARD"];
type power_value =
  | (typeof REVIEW_VALUE_INDEX)["power"]["EASY"]
  | (typeof REVIEW_VALUE_INDEX)["power"]["HARD"];
type weight_value =
  | (typeof REVIEW_VALUE_INDEX)["weight"]["LIGHT"]
  | (typeof REVIEW_VALUE_INDEX)["weight"]["MEIDUM"]
  | (typeof REVIEW_VALUE_INDEX)["weight"]["HEAVY"];
