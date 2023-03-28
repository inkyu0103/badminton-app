export interface CreateUser {
  email: string;
  password: string;
  passwordConfirm?: string;
  birthday: Date;
  gender: "남성" | "여성";
  rank: string;
}

export interface FormattedCreateUser
  extends Omit<CreateUser, "gender" | "birthday"> {
  gender: "MALE" | "FEMALE";
  birthday: string;
}
