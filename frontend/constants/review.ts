export const REVIEW_VALUE_INDEX = {
  control: {
    EASY: 0,
    HARD: 1,
  },
  power: {
    EASY: 0,
    HARD: 1,
  },
  weight: {
    LIGHT: 0,
    MEIDUM: 1,
    HEAVY: 2,
  },
} as const;

export const factors = [
  { name: "컨트롤", id: "control" },
  { name: "파워", id: "power" },
  { name: "무게", id: "weight" },
] as const;

export const selectList = {
  control: [
    { value: "EASY", display: "다루기 쉬워요" },
    { value: "HARD", display: "다루기 어려워요" },
  ],
  power: [
    { value: "EASY", display: "힘이 잘 실려요" },
    { value: "HARD", display: "힘이 잘 안 실려요" },
  ],
  weight: [
    { value: "LIGHT", display: "가벼워요" },
    { value: "MEDIUM", display: "적당해요" },
    { value: "HEAVY", display: "무거워요" },
  ],
};
