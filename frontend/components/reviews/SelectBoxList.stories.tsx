import SelectBoxList from "components/reviews/SelectBoxList";
import { formIdType, ISelectListValue } from "interface/SelectBox.interface";

export default {
  component: SelectBoxList,
};

export const Default = (args: {
  selectList: ISelectListValue<formIdType>;
  formId: formIdType;
}) => (
  <div className="flex w-mb">
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
