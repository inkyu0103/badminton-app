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
  brand: string;
  name: string;
  rating: number;
  price: number;
  image: string | null;
  shaft: string;
  weight: string;
  score: number;
}
