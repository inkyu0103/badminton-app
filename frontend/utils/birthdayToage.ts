import { differenceInYears } from "date-fns";

export const birthdayToAge = (birthday: Date): string => {
  const age = differenceInYears(new Date(), birthday);
  return `${Math.floor(age / 10) * 10}대`;
};
