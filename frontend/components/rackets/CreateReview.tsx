import RacketReviewForm from "components/rackets/RacketReviewForm";
import { ICreateOrEditReview } from "interface/Review.interface";
import { useCreateRacketReviewMutation } from "query/reviews/reviews";
import { FormProvider, useForm } from "react-hook-form";

const getAverage = (data: ICreateOrEditReview) => {
  return Math.floor(
    (data.control + data.power + data.weight + data.design + data.durability) /
      5,
  );
};

const CreateReview = ({ handleCloseModal }) => {
  const { mutate: createReview } = useCreateRacketReviewMutation();

  const methods = useForm<ICreateOrEditReview>({
    defaultValues: {
      control: 0,
      power: 0,
      weight: 0,
      design: 0,
      durability: 0,
    },
  });

  const handleSaveReview = () => {
    methods.handleSubmit((data) => {
      if (window.confirm("리뷰를 저장하시겠습니까?")) {
        createReview(
          {
            ...data,
            average: getAverage(data),
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
