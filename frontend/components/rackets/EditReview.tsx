import RacketReviewForm from "components/rackets/RacketReviewForm";
import { ICreateOrEditReview } from "interface/Review.interface";
import {
  useEditRacketReviewMutation,
  useRacketReview,
} from "query/reviews/reviews";
import { FormProvider, useForm } from "react-hook-form";

const getAverage = (data: ICreateOrEditReview) => {
  return Math.floor(
    (data.control + data.power + data.weight + data.design + data.durability) /
      5,
  );
};

const EditReview = ({ reviewId, handleCloseModal }) => {
  const { data } = useRacketReview(reviewId);
  const { mutate: editRacketReview } = useEditRacketReviewMutation(reviewId);

  const methods = useForm({
    defaultValues: {
      control: data?.control,
      power: data?.power,
      weight: data?.weight,
      design: data?.design,
      durability: data?.durability,
      review: data?.review,
    },
  });

  const handleSaveReview = () => {
    methods.handleSubmit((data) => {
      if (window.confirm("리뷰를 수정하시겠습니까?")) {
        editRacketReview({
          ...data,
          average: getAverage(data),
        });
        handleCloseModal();
        methods.reset();
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
export default EditReview;
