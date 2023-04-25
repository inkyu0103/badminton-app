import EvaluateButton from "components/common/EvaluateButton";
import { RacketDetailProps } from "interface/RacketDetail.interface";
import { Rating } from "react-simple-star-rating";

import Review from "components/rackets/Review";
import { Fragment, useState } from "react";
import Modal from "components/common/Modal";
import CreateReview from "components/rackets/CreateReview";
import EditReview from "components/rackets/EditReview";
import {
  useDeleteRacketReviewMutation,
  useReviewList,
} from "query/reviews/reviews";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";
import { formatDistanceToNow } from "date-fns";
import { birthdayToAge } from "utils/birthdayToage";
import { ko } from "date-fns/locale";
import Pagination from "components/common/Pagination";
import { useRouter } from "next/router";
import HalfPieChart from "components/charts/HalfPieChart";
import SimpleBarChart from "components/charts/SimpleBarChart";

const MODAL_TYPE = Object.freeze({
  CLOSE: null,
  CREATE: "CREATE",
  EDIT: "EDIT",
});

const data01 = [
  { name: "남성", value: 10, filled: "#6366F1" },
  { name: "여성", value: 4, filled: "#F43F5E" },
];

const data02 = [
  { name: "S조", value: 10, filled: "#FF8042" },
  { name: "A조", value: 4, filled: "#FFBB28" },
  { name: "B조", value: 4, filled: "#00C49F" },
  { name: "C조", value: 4, filled: "#0088FE" },
  { name: "D조", value: 4, filled: "#F43F5E" },
];

const data03 = [
  { name: "컨트롤이 좋아요", value: 83, filled: "#FFBB28" },
  { name: "파워가 좋아요", value: 10, filled: "#00C49F" },
  { name: "무게가 가벼워요", value: 32, filled: "#F43F5E" },
];

const isModalOpen = (value: null | string) => value !== null;

const RacketDetail = ({ racketName }: RacketDetailProps) => {
  const { data } = useReviewList();

  const user = useRecoilValue(userState);
  const [modalState, setModalState] = useState<null | string>(MODAL_TYPE.CLOSE);
  const [reviewId, setReviewId] = useState<null | number>(null);
  const router = useRouter();

  const { mutate: deleteRacketReview } = useDeleteRacketReviewMutation();

  const curPage = Number.parseInt(router.query.page as string) || 1;

  /**
   * {user && (
              <EvaluateButton
                handleClick={() => setModalState(MODAL_TYPE.CREATE)}
              />
            )}



   */
  return (
    <Fragment>
      <div className="px-4 max-w-[1200px] mx-auto mb-9">
        <h1 className="my-10 text-3xl font-bold">{racketName}</h1>
        <div className="justify-between mx-auto md:flex ">
          <section className="my-4 md:w-1/2">
            <img
              alt="racket"
              src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
              className="w-[328px] mx-auto border-2 "
            />
          </section>
          <section className="w-[328px] mx-auto md:w-1/2 md:flex md:flex-col md:items-center  ">
            <div className="w-[328px] h-[328px]  my-4 flex flex-col items-center justify-center gap-y-4">
              <p className="text-2xl font-bold">평균 별점</p>
              <Rating
                initialValue={4.4}
                readonly
                allowFraction
                emptyStyle={{ display: "flex" }}
                fillStyle={{ display: "-webkit-inline-box" }}
              />
              <p className="text-3xl font-bold">4.4</p>
            </div>
          </section>
        </div>

        <section className="">
          <p className="my-4 text-2xl font-bold">라켓 데이터</p>
          <div className="md:flex md:justify-between">
            <HalfPieChart data={data01} title="남녀 성별 비율" />
            <HalfPieChart data={data02} title="사용 급수 비율" />
            <SimpleBarChart data={data03} title="라켓 기능 평가" />
          </div>
        </section>

        <section className="mx-auto">
          <p className="my-4 text-2xl font-bold">리뷰</p>
          <div className="flex flex-col gap-y-2">
            {data?.reviewList?.length ? (
              data?.reviewList?.map((review) => (
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
        <div className="sm:flex sm:justify-center sm:mt-4">
          <Pagination
            curPage={curPage}
            totalPage={Math.ceil(data?.count / 7)}
          />
        </div>
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
