import { atom } from "recoil";

export enum LoginState {
  PENDING = "PENDING",
  NO_LOGIN = "NO_LOGIN",
}

export const accessTokenState = atom<string>({
  key: "accessTokenState",
  default: LoginState["PENDING"],
});
