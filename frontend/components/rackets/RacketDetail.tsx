/* eslint-disable @next/next/no-img-element */
import HalfPieChart from "components/charts/HalfPieChart";
import SimpleBarChart from "components/charts/SimpleBarChart";
import EvaluateButton from "components/common/EvaluateButton";
import Modal from "components/common/Modal";
import Pagination from "components/common/Pagination";
import CreateReview from "components/rackets/CreateReview";
import EditReview from "components/rackets/EditReview";
import Review from "components/rackets/Review";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { useRouter } from "next/router";
import { useRacketQuery } from "query/rackets/rackets";
import {
  useDeleteRacketReviewMutation,
  useReviewList,
} from "query/reviews/reviews";
import { useReviewStatistics } from "query/reviews/statistics";
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
  const { data: racket } = useRacketQuery();
  const { data: reviewList } = useReviewList();
  const { data: reviewStatistics } = useReviewStatistics();

  const user = useRecoilValue(userState);
  const [modalState, setModalState] = useState<null | string>(MODAL_TYPE.CLOSE);
  const [reviewId, setReviewId] = useState<null | number>(null);
  const router = useRouter();

  const { mutate: deleteRacketReview } = useDeleteRacketReviewMutation();

  const curPage = Number.parseInt(router.query.page as string) || 1;

  return (
    <Fragment>
      <div className="px-4 max-w-[1200px] mx-auto mb-9">
        <h1 className="my-10 text-3xl font-bold">{racket.name}</h1>
        <div className="justify-between mx-auto md:flex ">
          <section className="my-4 md:w-1/2">
            <img
              alt="racket"
              src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
              className="mx-auto border-2 w-mb "
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
            {true && (
              <EvaluateButton
                handleClick={() => setModalState(MODAL_TYPE.CREATE)}
              />
            )}
          </section>
        </div>

        <section className="mx-auto max-md:flex max-md:flex-col max-md:items-center">
          <p className="my-4 text-2xl font-bold">라켓 데이터</p>
          <div className="md:flex md:justify-between">
            <HalfPieChart
              data={reviewStatistics?.genders}
              title="남녀 성별 비율"
            />
            <HalfPieChart
              data={reviewStatistics?.ranks}
              title="사용 급수 비율"
            />
            <SimpleBarChart
              data={reviewStatistics?.criteria}
              title="라켓 선택 이유"
            />
          </div>
        </section>

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
                  })}
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
        {reviewList?.count > 7 ? (
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
