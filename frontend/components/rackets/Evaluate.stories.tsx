import Evaluate from "components/rackets/Evaluate";
import { EvaluteProps } from "interface/Evaluate.interface";

export default {
  component: Evaluate,
};

export const Default = (args: EvaluteProps) => <Evaluate {...args} />;

Default.args = {
  handleCloseModal: () => {},
  handleSaveReview: () => {},
};
