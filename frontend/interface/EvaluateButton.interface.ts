import { Dispatch, SetStateAction } from "react";

export interface EvaluateButtonProps {
  handleClick: Dispatch<SetStateAction<boolean>>;
}
