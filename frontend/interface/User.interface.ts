interface User {
  id: number;
  nickname: string;
  email: string;
  password: string;
  rank: Rank;
  gender: "MALE" | "FEMALE";
  birthday: Date;
}

export type Rank = "S" | "A" | "B" | "C" | "D";

export interface CreateUser extends Omit<User, "gender"> {
  passwordConfirm: string;
  gender: "남성" | "여성";
}

export interface FormattedCreateUser extends Omit<User, "birthday"> {
  birthday: string;
}

export type ReviewEmbedUser = Pick<
  User,
  "email" | "rank" | "birthday" | "gender" | "id" | "nickname"
>;

export type LoggedinUser = Pick<User, "id" | "email">;
