import { EvaluateButtonProps } from "interface/EvaluateButton.interface";

const EvaluateButton = ({ handleClick }: EvaluateButtonProps) => (
  <button
    className={`text-xl  border-2 rounded-md p-1 hover:bg-slate-100 duration-300`}
    onClick={handleClick}
  >
    평가하기
  </button>
);

export default EvaluateButton;
