import SelectBox from "components/reviews/SelectBox";

export default {
  component: SelectBox,
};

export const Default = () => (
  <div className="flex flex-col gap-4 w-[562px]">
    <div>
      <p>선택된 SelectBox</p>
      <SelectBox
        display="다루기 어려워요"
        id="control"
        isSelected
        handleSelectedBox={() => {}}
      />
    </div>

    <div>
      <p>선택되지 않은 SelectBox</p>
      <SelectBox
        display="다루기 쉬워요"
        id="control"
        handleSelectedBox={() => {}}
      />
    </div>
  </div>
);
