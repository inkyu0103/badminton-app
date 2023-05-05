import { EvaluateButtonProps } from "interface/EvaluateButton.interface";

const EvaluateButton = ({ handleClick }: EvaluateButtonProps) => (
  <button
    onClick={handleClick}
    className="w-full h-8 duration-300 ease-out bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-mb hover:bg-blue-500"
  >
    평가하기
  </button>
);

export default EvaluateButton;
