import SelectBoxList, { ISelectItem } from "components/reviews/SelectBoxList";

export default {
  component: SelectBoxList,
};

export const Default = (args: {
  selectList: ISelectItem[];
  formId: string;
}) => (
  <div className="flex w-[328px]">
    <SelectBoxList {...args} />
  </div>
);

Default.args = {
  selectList: [
    { value: "EASY", display: "다루기 쉬워요" },
    { value: "HARD", display: "다루기 어려워요" },
  ],
  formId: "control",
};
