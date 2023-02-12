import EvaluateButton from "components/common/EvaluateButton";
import { RacketDetailProps } from "interface/RacketDetail.interface";
import Chart from "components/rackets/Chart";
import Review from "components/rackets/Review";
import { ReviewProps } from "interface/Review.interface";
import { Fragment, useState } from "react";
import Modal from "components/common/Modal";

const testReivew: ReviewProps[] = [
  {
    createdAt: "1시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
    age: 20,
    rank: "A",
  },
  {
    createdAt: "2시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
    age: 20,
    rank: "A",
  },
  {
    createdAt: "3시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
    age: 30,
    rank: "D",
  },
  {
    createdAt: "4시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
    age: 20,
    rank: "C",
  },
];

const RacketDetail = ({ racketName }: RacketDetailProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      <div className="px-4 max-w-[1200px] mx-auto mb-9">
        <h1 className="my-10 text-3xl font-bold">{racketName}</h1>
        <div className="justify-between mx-auto md:flex ">
          <section className="md:w-1/2 my-4">
            <img
              alt="racket"
              src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
              className="w-[328px] mx-auto border-2 "
            />
          </section>
          <section className="w-[328px] mx-auto md:w-1/2 md:flex md:flex-col md:items-center  ">
            <div className="w-[328px] h-[328px] border-2 my-4 flex items-center">
              <Chart />
            </div>
            <EvaluateButton handleClick={() => setIsModalOpen(true)} />
          </section>
        </div>
        <section className="mx-auto">
          <p className="my-4 text-2xl font-bold">리뷰</p>
          <div className="flex flex-col gap-y-2">
            {testReivew.map((ele, idx) => (
              <Review key={idx} {...ele} />
            ))}
          </div>
        </section>
      </div>
      <Modal isOpen={isModalOpen}>
        <div className=" min-w-[328px] md:w-[562px]   bg-white rounded-md">
          안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요
          안뇽하세요 안뇽하세요안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요
          안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요안뇽하세요 안뇽하세요
          안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요
          안뇽하세요안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요
          안뇽하세요 안뇽하세요 안뇽하세요안뇽하세요 안뇽하세요 안뇽하세요
          안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요 안뇽하세요
        </div>
      </Modal>
    </Fragment>
  );
};

export default RacketDetail;
