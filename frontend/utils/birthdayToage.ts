export const birthdayToAge = (birthday: Date): string => {
  const age = new Date().getFullYear() - birthday.getFullYear();
  return `${Math.floor(age / 10) * 10}대`;
};
