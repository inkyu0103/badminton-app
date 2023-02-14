import EvaluateButton from "components/common/EvaluateButton";
import { EvaluateButtonProps } from "interface/EvaluateButton.interface";

export default {
  component: EvaluateButton,
};

export const Default = (args: EvaluateButtonProps) => (
  <EvaluateButton {...args} />
);

Default.args = {
  handleClick: () => {},
};

Default.argTypes = {
  handleClick: { disable: true },
};
