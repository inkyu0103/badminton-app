export interface RacketProps {
  name: string;
  racketId: number;
}

export interface RacketResponse {
  count: number;
  rackets: Racket[];
}

export interface RacketListViewProps {
  brand: string;
  data: RacketResponse;
  curPage: number;
}

interface Racket {
  id: number;
  brand: string;
  name: string;
  rating: 5;
  price: number;
  image: string | null;
  shaft: string;
  weight: string;
  score: number;
}
