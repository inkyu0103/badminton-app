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
import { Tooltip } from "react-tooltip";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";
import { birthdayToAge } from "utils/birthdayToage";

const MODAL_TYPE = Object.freeze({
  CLOSE: null,
  CREATE: "CREATE",
  EDIT: "EDIT",
});

/*
{user && (
              <EvaluateButton
                handleClick={() => setModalState(MODAL_TYPE.CREATE)}
              />
            )}
*/

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
        <section className="flex justify-between mx-auto max-md:flex max-md:flex-col max-md:items-center gap-y-4">
          <div className="border-2 w-mb h-mb">
            <Image
              width={328}
              height={328}
              alt="racket"
              src="https://staging-mobae-image.s3.ap-northeast-2.amazonaws.com/racket.jpg"
              className="mx-auto border-2 "
            />
          </div>

          <div className="flex items-center justify-center border-2 w-mb h-mb">
            <div className="flex flex-col items-center justify-center gap-y-4">
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
          </div>

          <div className="flex flex-col border-2 w-mb h-mb gap-y-4">
            <p className="text-2xl font-bold">라켓 정보</p>
            <Tooltip id="weight">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>U 앞에 붙은 숫자가 클수록 가벼운 라켓입니다.</span>
                <span>일반적으로 4U라켓을 사용합니다.</span>
              </div>
            </Tooltip>
            <div data-tooltip-id="weight">
              <p className="text-xl font-bold ">무게</p>
              <div className="flex">
                <p className="flex-1 py-1 text-center bg-blue-200">3U</p>
                <p className="flex-1 py-1 text-center">4U</p>
                <p className="flex-1 py-1 text-center">5U</p>
              </div>
            </div>

            <Tooltip id="balance">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>밸런스는 라켓의 중심점을 의미합니다.</span>
                <span>
                  {" "}
                  동일한 무게라도 밸런스에 따라 다른 느낌을 줄 수 있습니다.
                </span>
                <ul style={{ listStyle: "inside" }}>
                  <li>헤드 라이트 : 수비형</li>
                  <li>이븐 밸런스 : 올라운드 형</li>
                  <li>헤드 헤비 : 공격형</li>
                </ul>
              </div>
            </Tooltip>
            <div data-tooltip-id="balance">
              <p className="text-xl font-bold">밸런스</p>
              <div className="flex">
                <p className="flex-1 py-1 text-center">헤드 라이트</p>
                <p className="flex-1 py-1 text-center bg-blue-200">
                  이븐 밸런스
                </p>
                <p className="flex-1 py-1 text-center">헤드 헤비</p>
              </div>
            </div>

            <Tooltip id="flexibility">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>유연성은 샤프트의 휘어짐의 정도를 의미합니다.</span>
                <ul style={{ listStyle: "inside" }}>
                  <li>유연한 라켓일수록 적은 힘으로 멀리 보낼 수 있습니다.</li>
                  <li>단단한 라켓일수록 힘을 정확하게 전달할 수 있습니다.</li>
                </ul>
                <br />
                <span>초보자 분들께는 부드러운 라켓사용을 추천드립니다.</span>
              </div>
            </Tooltip>
            <div data-tooltip-id="flexibility">
              <p className="text-xl font-bold">탄성</p>
              <div className="flex">
                <p className="flex-1 py-1 text-center bg-blue-200">부드러움</p>
                <p className="flex-1 py-1 text-center">중간</p>
                <p className="flex-1 py-1 text-center">단단함</p>
              </div>
            </div>
          </div>
        </section>

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
