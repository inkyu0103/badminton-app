import { atom } from "recoil";

export enum LoginState {
  PENDING = "PENDING",
  NO_LOGIN = "NO_LOGIN",
  LOGGED_IN = "LOGGED_IN",
}

export const loginStateAtom = atom<LoginState>({
  key: "loginStateAtom",
  default: LoginState["PENDING"],
});
