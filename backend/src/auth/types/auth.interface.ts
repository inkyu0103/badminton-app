export interface User {
  userId: number;
  email: string;
  password: string | null;
  rank: string;
  gender: string;
  birthday: Date;
}

export interface LoginFormData {
  email: string;
  password: string;
}
