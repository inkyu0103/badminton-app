import { LoggedinUser } from "interface/User.interface";
import { atom } from "recoil";

export const userState = atom<LoggedinUser | null>({
  key: "userState",
  default: null,
});
