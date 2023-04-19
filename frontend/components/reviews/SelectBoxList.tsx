import { useState } from "react";
import SelectBox from "components/reviews/SelectBox";
import { useFormContext } from "react-hook-form";

export interface ISelectItem {
  id: string;
  value: string;
  display: string;
}

const SelectBoxList = ({ selectList }: { selectList: ISelectItem[] }) => {
  const [selectedBoxIdx, setSelectedBoxIdx] = useState<number>(0);
  const { setValue } = useFormContext();

  const handleSelectedBox = (
    inputId: string,
    selectIdx: number,
    value: string,
  ) => {
    setSelectedBoxIdx(selectIdx);
    setValue(inputId, value);
  };

  return (
    <div className="flex flex-1 w-full">
      {selectList.map((select, idx) => {
        return (
          <SelectBox
            key={idx}
            id={select.id}
            display={select.display}
            isSelected={selectedBoxIdx === idx}
            handleSelectedBox={() =>
              handleSelectedBox(select.id, idx, select.value)
            }
          />
        );
      })}
    </div>
  );
};
export default SelectBoxList;
