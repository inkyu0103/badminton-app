import RacketReviewForm from "components/rackets/RacketReviewForm";
import { FormProvider, useForm } from "react-hook-form";

const CreateReview = ({
  handleOpenModal,
  handleCloseModal,
}: {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}) => {
  const methods = useForm({
    defaultValues: {
      control: 0,
      power: 0,
      weight: 0,
      design: 0,
      durability: 0,
    },
  });

  const handleSaveReview = () => {
    handleOpenModal();
    methods.handleSubmit((data) => {
      console.log(data);
    })();
  };

  return (
    <FormProvider {...methods}>
      <RacketReviewForm
        handleCloseModal={handleCloseModal}
        handleSaveReview={handleSaveReview}
      />
    </FormProvider>
  );
};
export default CreateReview;
