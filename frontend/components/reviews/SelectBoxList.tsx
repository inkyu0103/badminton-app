import SelectBox from "components/reviews/SelectBox";
import { REVIEW_VALUE_INDEX } from "constants/review";
import { formIdType,ISelectListValue } from "interface/SelectBox.interface";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const SelectBoxList = ({
  selectList,
  formId,
}: {
  selectList: ISelectListValue<formIdType>;
  formId: formIdType;
}) => {
  const { setValue, getValues } = useFormContext();

  const [selectedBoxIdx, setSelectedBoxIdx] = useState<number>(
    getValues()[formId],
  );

  const handleSelectedBox = (
    inputId: formIdType,
    selectIdx: number,
    value: number,
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
              handleSelectedBox(
                formId,
                idx,
                REVIEW_VALUE_INDEX[formId][select.value],
              )
            }
          />
        );
      })}
    </div>
  );
};
export default SelectBoxList;
