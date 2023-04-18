interface User {
  id: number;
  email: string;
  password: string;
  rank: string;
  gender: "MALE" | "FEMALE";
  birthday: Date;
}
export interface CreateUser extends Omit<User, "gender"> {
  passwordConfirm: string;
  gender: "남성" | "여성";
}

export interface FormattedCreateUser extends Omit<User, "birthday"> {
  birthday: string;
}

export type ReviewEmbedUser = Pick<
  User,
  "email" | "rank" | "birthday" | "gender" | "id"
>;

export type LoggedinUser = Pick<User, "id" | "email">;
