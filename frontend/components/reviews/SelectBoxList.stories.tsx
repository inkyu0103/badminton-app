import SelectBoxList, { ISelectItem } from "components/reviews/SelectBoxList";

export default {
  component: SelectBoxList,
};

export const Default = (args: { selectList: ISelectItem[] }) => (
  <div className="flex w-[328px]">
    <SelectBoxList {...args} />
  </div>
);

Default.args = {
  selectList: [
    { id: "control", value: "EASY", display: "다루기 쉬워요" },
    { id: "weight", value: "HARD", display: "다루기 어려워요" },
  ],
};
