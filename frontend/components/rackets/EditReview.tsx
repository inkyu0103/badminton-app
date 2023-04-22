import RacketReviewForm from "components/rackets/RacketReviewForm";
import { IReviewResponse } from "interface/Review.interface";
import {
  useEditRacketReviewMutation,
  useRacketReview,
} from "query/reviews/reviews";
import { FormProvider, useForm } from "react-hook-form";

interface EditReviewProps {
  reviewId: number | null;
  handleCloseModal: () => void;
}

const EditReview = ({ reviewId, handleCloseModal }: EditReviewProps) => {
  const { data } = useRacketReview(reviewId);

  const methods = useForm<IReviewResponse>({
    defaultValues: {
      control: data?.control,
      power: data?.power,
      weight: data?.weight,
      starRating: data?.starRating,
      review: data?.review,
    },
  });

  const { mutate: editRacketReview } = useEditRacketReviewMutation(reviewId, {
    onSuccess: () => handleCloseModal(),
  });

  const handleSaveReview = () => {
    methods.handleSubmit((data) => {
      if (window.confirm("리뷰를 수정하시겠습니까?")) {
        editRacketReview(data);
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
