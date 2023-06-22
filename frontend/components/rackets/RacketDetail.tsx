import EvaluateButton from "components/common/EvaluateButton";
import Modal from "components/common/Modal";
import Pagination from "components/common/Pagination";
import CreateReview from "components/rackets/CreateReview";
import EditReview from "components/rackets/EditReview";
import RacketSpec from "components/rackets/RacketSpec";
import RacketStatistics from "components/rackets/RacketStatistics";
import Review from "components/rackets/Review";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import useUser from "hooks/useUser";
import { Tbalance, Tshaft, Tweight } from "interface/Racket.interface";
import { isNil } from "lodash";
import { useRouter } from "next/router";
import { useRacketQuery } from "query/rackets/rackets";
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

const isModalOpen = (value: null | string) => value !== null;

const RacketDetail = () => {
  const [modalState, setModalState] = useState<null | string>(MODAL_TYPE.CLOSE);
  const [reviewId, setReviewId] = useState<null | number>(null);

  const router = useRouter();

  const [, user] = useUser();

  const { data: racket } = useRacketQuery();
  const { data: reviewList } = useReviewList();

  const { mutate: deleteRacketReview } = useDeleteRacketReviewMutation();

  const curPage = Number.parseInt(router.query.page as string) || 1;

  return (
    <div>
      <div className="px-4 max-w-[1200px] mx-auto mb-9">
        <h1 className="my-10 text-3xl font-bold">{racket?.name}</h1>

        <RacketSpec
          balance={racket?.balance as Tbalance}
          score={racket?.score as number}
          shaft={racket?.shaft as Tshaft}
          weight={racket?.weight as Tweight[]}
        />
        <RacketStatistics />

        <section className="mx-auto">
          <div className="flex items-center justify-between">
            <p className="my-4 text-2xl font-bold">리뷰</p>
            {!isNil(user) && (
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
                    deleteRacketReview(review.id);
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
      </div>

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
    </div>
  );
};

export default RacketDetail;
