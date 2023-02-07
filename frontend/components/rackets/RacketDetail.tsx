import EvaluateButton from "components/common/EvaluateButton";
import { RacketDetailProps } from "interface/RacketDetail.interface";

const RacketDetail = ({ racketName }: RacketDetailProps) => (
  <div className="px-4">
    <h1 className="my-10 text-3xl font-bold">{racketName}</h1>
    <div className="container justify-between mx-auto md:flex mx-w-[1200px]">
      <div className="">
        <img
          alt="racket"
          src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
          className="w-[328px] mx-auto border-2 "
        />
      </div>
      <div className="md:w-1/2">
        <div>그래프</div>
        <EvaluateButton />
      </div>
    </div>
    <section>리뷰들</section>
  </div>
);

export default RacketDetail;
