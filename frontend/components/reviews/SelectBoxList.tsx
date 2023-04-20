import { useState } from "react";
import SelectBox from "components/reviews/SelectBox";
import { useFormContext } from "react-hook-form";

export interface ISelectItem {
  value: string;
  display: string;
}

const SelectBoxList = ({
  selectList,
  formId,
}: {
  selectList: ISelectItem[];
  formId: "control" | "power" | "weight";
}) => {
  const { setValue, getValues } = useFormContext();

  const [selectedBoxIdx, setSelectedBoxIdx] = useState<number>(
    getValues()[formId],
  );

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
            display={select.display}
            isSelected={selectedBoxIdx === idx}
            handleSelectedBox={() =>
              handleSelectedBox(formId, idx, select.value)
            }
          />
        );
      })}
    </div>
  );
};
export default SelectBoxList;
