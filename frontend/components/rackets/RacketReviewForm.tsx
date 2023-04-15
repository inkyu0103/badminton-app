import CloseIcon from "components/icons/CloseIcon";
import { RacketReviewFormProps } from "interface/RacketReviewForm.interface";
import { useFormContext } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

const factors = [
  { name: "컨트롤", id: "control" },
  { name: "파워", id: "power" },
  { name: "무게", id: "weight" },
  { name: "디자인", id: "design" },
  { name: "내구도", id: "durability" },
];

const RacketReviewForm = ({
  handleSaveReview,
  handleCloseModal,
}: RacketReviewFormProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className=" min-w-[328px] md:w-[562px] bg-white rounded-md p-4">
      <div className="flex justify-between">
        <p className="text-xl font-bold">라켓 평가</p>
        <button
          className="w-6 h-6 duration-300 ease-out rounded-md hover:bg-slate-300 "
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col items-center w-full gap-y-1">
        {factors.map((factor) => (
          <section key={factor.id} className="text-center">
            <p className="font-bold">{factor.name}</p>
            <ReactStars
              count={5}
              size={30}
              onChange={(value: number) => {
                setValue(factor.id, value);
              }}
            />
          </section>
        ))}
        <section className="w-full">
          <p className="font-bold text-center">간단한 리뷰</p>
          <textarea
            className="w-full p-2 text-sm duration-300 ease-out border-2 rounded-md outline-none resize-none hover:border-slate-300 focus:border-slate-500 "
            placeholder="🏸 리뷰를 작성해주세요"
            rows={5}
            {...register("content", {
              required: {
                value: true,
                message: "리뷰를 작성해주세요",
              },
            })}
          />
          <p className="text-red-600">
            {errors["content"]?.message?.toString()}
          </p>
        </section>
        <button
          onClick={handleSaveReview}
          className="w-full h-8 bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-500 font-semibold"
        >
          리뷰 저장하기
        </button>
      </div>
    </div>
  );
};
export default RacketReviewForm;
