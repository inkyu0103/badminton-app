import EvaluateButton from "components/common/EvaluateButton";
import Modal from "components/common/Modal";
import Pagination from "components/common/Pagination";
import CreateReview from "components/rackets/CreateReview";
import EditReview from "components/rackets/EditReview";
import Review from "components/rackets/Review";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { TAuthState, useAuth } from "hooks/useAuth";
import useUser from "hooks/useUser";
import { IReviewListResponse } from "interface/Review.interface";
import { User } from "interface/User.interface";
import { useRouter } from "next/router";
import {
  useDeleteRacketReviewMutation,
  useReviewList,
} from "query/reviews/reviews";
import { useState } from "react";
import { birthdayToAge } from "utils/birthdayToage";

const MODAL_TYPE = Object.freeze({
  CLOSE: null,
  CREATE: "CREATE",
  EDIT: "EDIT",
});

export interface ReviewListViewProps {
  rewiewList: IReviewListResponse;
  user: User | undefined;
  curPage: number;
  handleDeleteReview: (reviewId: string) => void;
  auth: TAuthState;
}

const isModalOpen = (value: null | string) => value !== null;

const ReviewList = () => {
  const { data: reviewList } = useReviewList();
  const auth = useAuth();
  const [, user] = useUser();
  const router = useRouter();
  const curPage = Number.parseInt(router.query.page as string) || 1;
  const { mutate: deleteRacketReview } = useDeleteRacketReviewMutation();
  const handleDeleteReview = (reviewId: string) => deleteRacketReview(reviewId);

  return (
    <ReviewListView
      reviewList={reviewList}
      auth={auth}
      user={user}
      curPage={curPage}
      handleDeleteReview={handleDeleteReview}
    />
  );
};
export default ReviewList;

export const ReviewListView = ({
  auth,
  reviewList,
  user,
  curPage,
  handleDeleteReview,
}: ReviewListViewProps) => {
  const [modalState, setModalState] = useState<null | string>(MODAL_TYPE.CLOSE);
  const [reviewId, setReviewId] = useState<null | number>(null);

  return (
    <>
      <section className="mx-auto">
        <div className="flex items-center justify-between">
          <p className="my-4 text-2xl font-bold">리뷰</p>
          {auth === "authenticated" && (
            <EvaluateButton
              handleClick={() => setModalState(MODAL_TYPE.CREATE)}
            />
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          {reviewList?.reviewList?.length ? (
            reviewList?.reviewList?.map((review) => (
              <Review
                key={review.id}
                review={review.review}
                isMyReview={review.user.id === user?.id}
                createdAt={formatDistanceToNow(new Date(review.createdAt), {
                  locale: ko,
                  addSuffix: true,
                })}
                nickname={review.user.nickname}
                rank={review.user.rank}
                age={birthdayToAge(new Date(review.user.birthday))}
                value={review.starRating}
                handleDeleteReview={() => {
                  handleDeleteReview(review.id);
                }}
                handleEditReview={() => {
                  setReviewId(review.id);
                  setModalState(MODAL_TYPE.EDIT);
                }}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl font-semibold">아직 리뷰가 없습니다 😥</p>
              <p>첫 번째 리뷰를 작성해 주세요!</p>
            </div>
          )}
        </div>
      </section>
      {reviewList && reviewList?.count > 7 ? (
        <div className="sm:flex sm:justify-center sm:mt-4">
          <Pagination
            curPage={curPage}
            totalPage={Math.ceil(reviewList?.count / 7)}
          />
        </div>
      ) : null}
      <Modal isOpen={isModalOpen(modalState)}>
        {modalState === MODAL_TYPE.CREATE ? (
          <CreateReview
            handleCloseModal={() => setModalState(MODAL_TYPE.CLOSE)}
          />
        ) : (
          <EditReview
            reviewId={reviewId}
            handleCloseModal={() => setModalState(MODAL_TYPE.CLOSE)}
          />
        )}
      </Modal>
    </>
  );
};
