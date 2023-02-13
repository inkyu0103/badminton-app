import CloseIcon from "components/icons/CloseIcon";
import { EvaluteProps } from "interface/Evaluate.interface";
import ReactStars from "react-rating-stars-component";

const factors = ["컨트롤", "힘 전달", "무게", "디자인", "추천 정도"];

const Evaluate = ({ handleReviewSave, handleCloseModal }: EvaluteProps) => (
  <div className=" min-w-[328px] md:w-[562px] bg-white rounded-md p-4">
    <div className="flex justify-between">
      <p className="font-bold text-xl">라켓 평가</p>
      <button
        className="w-6 h-6 hover:bg-slate-300 rounded-md duration-300 ease-out "
        onClick={handleCloseModal}
      >
        <CloseIcon />
      </button>
    </div>
    <div className="flex flex-col items-center w-full gap-y-1">
      {factors.map((factor) => (
        <section key={factor} className="text-center">
          <p className="font-bold">{factor}</p>
          <ReactStars count={5} size={30} />
        </section>
      ))}
      <section className="w-full">
        <p className="font-bold text-center">간단한 리뷰</p>
        <textarea
          className="w-full resize-none p-2 outline-none border-2 rounded-md text-sm hover:border-slate-300 duration-300 ease-out focus:border-slate-500 "
          placeholder="🏸 리뷰를 작성해주세요"
          rows={5}
        />
      </section>
      <button
        onClick={handleReviewSave}
        className="w-full h-8 bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-500 font-semibold"
      >
        리뷰 저장하기
      </button>
    </div>
  </div>
);
export default Evaluate;
