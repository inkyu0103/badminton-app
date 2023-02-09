import EvaluateButton from "components/common/EvaluateButton";
import { RacketDetailProps } from "interface/RacketDetail.interface";
import Chart from "components/rackets/Chart";

const RacketDetail = ({ racketName }: RacketDetailProps) => (
  <div className="px-4 max-w-[1200px] mx-auto border-2">
    <h1 className="my-10 text-3xl font-bold">{racketName}</h1>
    <div className="justify-between mx-auto md:flex border-2 border-orange-100">
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
    <section className=" border-2 border-orange-300 mx-auto">
      <h1 className="my-10 text-1xl font-bold">리뷰</h1>
    </section>
  </div>
);

export default RacketDetail;
