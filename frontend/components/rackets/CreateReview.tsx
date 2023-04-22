import RacketReviewForm from "components/rackets/RacketReviewForm";
import { REVIEW_VALUE_INDEX } from "constants/review";
import { ICreateOrEditReview } from "interface/Review.interface";
import { useCreateRacketReviewMutation } from "query/reviews/reviews";
import { FormProvider, useForm } from "react-hook-form";

const CreateReview = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const { mutate: createReview } = useCreateRacketReviewMutation();

  const methods = useForm<ICreateOrEditReview>({
    defaultValues: {
      control: REVIEW_VALUE_INDEX["control"]["EASY"],
      power: REVIEW_VALUE_INDEX["power"]["EASY"],
      weight: REVIEW_VALUE_INDEX["weight"]["LIGHT"],
      starRating: 0,
    },
  });

  const handleSaveReview = () => {
    methods.handleSubmit((data) => {
      if (window.confirm("리뷰를 저장하시겠습니까?")) {
        createReview(
          {
            ...data,
          },
          {
            onSuccess: handleCloseModal,
          },
        );
      }
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
