import { ReviewEmbedUser } from "interface/User.interface";

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
  control: number;
  power: number;
  weight: number;
  design: number;
  durability: number;
  review: string;
}

export type ICreateOrEditReview = IReviewForm & { average: number };

export interface IReviewResponse {
  id: number;
  control: number;
  power: number;
  weight: number;
  design: number;
  durability: number;
  average: number;
  review: string;
  createdAt: Date;
  user: ReviewEmbedUser;
}

export interface IReviewListResponse {
  count: number;
  reviewList: IReviewResponse[];
}
