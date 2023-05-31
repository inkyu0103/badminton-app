import EvaluateButton from "components/common/EvaluateButton";
import Modal from "components/common/Modal";
import Pagination from "components/common/Pagination";
import CreateReview from "components/rackets/CreateReview";
import EditReview from "components/rackets/EditReview";
import RacketStatistics from "components/rackets/RacketStatistics";
import Review from "components/rackets/Review";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRacketQuery } from "query/rackets/rackets";
import {
  useDeleteRacketReviewMutation,
  useReviewList,
} from "query/reviews/reviews";
import { Fragment, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";
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

  const user = useRecoilValue(userState);
  const router = useRouter();

  const { data: racket } = useRacketQuery();
  const { data: reviewList } = useReviewList();

  const { mutate: deleteRacketReview } = useDeleteRacketReviewMutation();

  const curPage = Number.parseInt(router.query.page as string) || 1;

  return (
    <Fragment>
      <div className="px-4 max-w-[1200px] mx-auto mb-9">
        <h1 className="my-10 text-3xl font-bold">{racket.name}</h1>
        <div className="justify-between mx-auto md:flex ">
          <section className="my-4 md:w-1/2">
            <Image
              width={328}
              height={328}
              alt="racket"
              src="https://staging-mobae-image.s3.ap-northeast-2.amazonaws.com/racket.jpg"
              className="mx-auto border-2 w-mb"
            />
          </section>
          <section className="mx-auto w-mb md:w-1/2 md:flex md:flex-col md:items-center ">
            <div className="flex flex-col items-center justify-center my-4 w-mb h-mb gap-y-4">
              <p className="text-2xl font-bold">평균 별점</p>
              <Rating
                initialValue={racket.score}
                readonly
                allowFraction
                emptyStyle={{ display: "flex" }}
                fillStyle={{ display: "-webkit-inline-box" }}
              />
              <p className="text-3xl font-bold">{racket.score}</p>
            </div>
            {user && (
              <EvaluateButton
                handleClick={() => setModalState(MODAL_TYPE.CREATE)}
              />
            )}
          </section>
        </div>

        <RacketStatistics />

        <section className="mx-auto">
          <p className="my-4 text-2xl font-bold">리뷰</p>
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
    </Fragment>
  );
};

export default RacketDetail;
