import RacketReviewForm from "components/rackets/RacketReviewForm";

const EditReview = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const handleEditReview = () => {};

  return (
    <EditReviewView
      handleCloseModal={handleCloseModal}
      handleSaveReview={handleEditReview}
    />
  );
};
export default EditReview;

export const EditReviewView = ({ handleCloseModal, handleSaveReview }) => {
  return (
    <RacketReviewForm
      handleCloseModal={handleCloseModal}
      handleSaveReview={handleSaveReview}
    />
  );
};
