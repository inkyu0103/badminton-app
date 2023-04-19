import { useFormContext } from "react-hook-form";
import deepFreeze from "utils/deepFreeze";

export interface ISelectBoxProps {
  display: string;
  id: string;
  isSelected?: boolean;
  handleSelectedBox: () => void;
}

const selectBoxCssConfig = deepFreeze({
  background: {
    selected: "bg-indigo-600",
    notSelected: "bg-white",
  },
  color: {
    selected: "text-white",
    notSelected: "text-black",
  },
});

const SelectBox = ({
  display,
  id,
  isSelected,
  handleSelectedBox,
}: ISelectBoxProps) => {
  const { register } = useFormContext();
  const selectedCss = isSelected
    ? selectBoxCssConfig["color"]["selected"] +
      " " +
      selectBoxCssConfig["background"]["selected"]
    : selectBoxCssConfig["color"]["notSelected"] +
      " " +
      selectBoxCssConfig["background"]["notSelected"];

  return (
    <div
      onClick={handleSelectedBox}
      className={`flex items-center justify-center w-full h-8 transition-all hover:cursor-pointer hover:bg-indigo-600 ${selectedCss}`}
    >
      <label className="hover:cursor-pointer" htmlFor={id}>
        {display}
      </label>
      <input
        className="hidden"
        type="radio"
        id={id}
        {...register(id, {
          required: {
            value: true,
            message: "해당 항목을 입력해주세요",
          },
        })}
      />
    </div>
  );
};
export default SelectBox;
