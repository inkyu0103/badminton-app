import { ISelectBoxProps } from "interface/SelectBox.interface";
import deepFreeze from "utils/deepFreeze";

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
  isSelected,
  handleSelectedBox,
}: ISelectBoxProps) => {
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
      {display}
    </div>
  );
};
export default SelectBox;
