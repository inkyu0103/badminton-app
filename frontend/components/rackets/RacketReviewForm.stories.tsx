import RacketReviewForm from "components/rackets/RacketReviewForm";
import { RacketReviewFormProps } from "interface/RacketReviewForm.interface";

export default {
  component: RacketReviewForm,
};

export const Default = (args: RacketReviewFormProps) => (
  <RacketReviewForm {...args} />
);

Default.args = {
  handleCloseModal: () => {},
  handleCreateReview: () => {},
};
