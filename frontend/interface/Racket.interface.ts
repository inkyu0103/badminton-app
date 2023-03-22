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
  racketId: number;
  brand: string;
  image: string | null;
  name: string;
  price: number;
  rating: 5;
  shatf: string;
  weight: string;
}
