import RacketReviewForm from "components/rackets/RacketReviewForm";
import { RacketReviewFormProps } from "interface/RacketReviewForm.interface";
import { FormProvider, useForm } from "react-hook-form";

export default {
  component: RacketReviewForm,
};

export const Default = (args: RacketReviewFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <RacketReviewForm {...args} />
    </FormProvider>
  );
};

Default.args = {
  handleCloseModal: () => {},
  handleCreateReview: () => {},
};
