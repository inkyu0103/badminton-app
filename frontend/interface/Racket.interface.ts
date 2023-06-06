export interface RacketProps {
  name: string;
  racketId: number;
  score: number;
}

export interface RacketResponse {
  count: number;
  rackets: IRacket[];
}

export interface RacketListViewProps {
  brand: string;
  data: RacketResponse;
  curPage: number;
}

export interface IRacket {
  id: number;
  brandId: number;
  name: string;
  rating: number;
  price: number;
  image: string | null;
  shaft: Tshaft;
  weight: Tweight[];
  balance: Tbalance;
  score: number;
}

export type Tshaft = "FLEXIBLE" | "MEDIUM" | "STIFF";
export type Tweight = "W3U" | "W4U" | "W5U";
export type Tbalance = "HEAD_HEAVY" | "HEAD_LIGHT" | "EVEN";
