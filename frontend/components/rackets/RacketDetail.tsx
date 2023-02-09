import EvaluateButton from "components/common/EvaluateButton";
import { RacketDetailProps } from "interface/RacketDetail.interface";
import Chart from "components/rackets/Chart";
import Review from "components/rackets/Review";

const testReivew = [
  {
    createdAt: "1시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
  },
  {
    createdAt: "2시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
  },
  {
    createdAt: "3시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
  },
  {
    createdAt: "4시간 전",
    title: "와하하",
    userId: "test-user",
    content: "이 라켓은 정말 최고입니다. 와하하 정말 후회하지 않으십니다요",
    value: 5,
  },
];

const RacketDetail = ({ racketName }: RacketDetailProps) => (
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
        <EvaluateButton />
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
);

export default RacketDetail;
