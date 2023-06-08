import { EnGender } from "interface/User.interface";

const enToKrGender = (enGender: EnGender) => {
  if (enGender === "MALE") return "남성";
  return "여성";
};
export default enToKrGender;
