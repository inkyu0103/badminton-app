export interface ReviewProps {
  createdAt: string;
  title: string;
  userId: string;
  content: string;
  value: number;
  age?: number;
  rank: string;
}

export interface ICreateReview {
  control: number;
  power: number;
  weight: number;
  design: number;
  durability: number;
  average: number;
  review: string;
}
