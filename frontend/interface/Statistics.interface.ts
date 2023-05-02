export interface IReviewStatisticsResponse {
  criteria: {
    control: number;
    power: number;
    weight: number;
  };
  ranks: {
    S: number;
    A: number;
    B: number;
    C: number;
    D: number;
  };
  genders: {
    MALE: number;
    FEMALE: number;
  };
}

type gender = "남성" | "여성";
type rank = "S조" | "A조" | "B조" | "C조" | "D조";
type criteria = "컨트롤" | "파워" | "무게";

export interface ISelectedStatistics {
  name: gender | rank | criteria;
  value: number;
  filled: string;
}

export interface IStatistics {
  criteria: ISelectedStatistics[];
  genders: ISelectedStatistics[];
  ranks: ISelectedStatistics[];
}
