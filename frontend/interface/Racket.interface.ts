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
  shaft: ("FLEXIBLE" | "MEDIUM" | "STIFF")[];
  weight: ("W3U" | "W4U" | "W5U")[];
  balance: ("HEAD_HEAVY" | "HEAD_LIGHT" | "EVEN")[];
  score: number;
}
