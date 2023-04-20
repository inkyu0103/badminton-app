import CloseIcon from "components/icons/CloseIcon";
import SelectBoxList from "components/reviews/SelectBoxList";
import { factors, selectList } from "constants/review";
import { RacketReviewFormProps } from "interface/RacketReviewForm.interface";
import { useFormContext } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

const RacketReviewForm = ({
  handleSaveReview,
  handleCloseModal,
}: RacketReviewFormProps) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
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
      <div className="flex flex-col items-center w-full gap-y-2">
        <p className="text-lg font-bold">별점</p>
        <ReactStars
          count={5}
          size={30}
          value={getValues()["starRating"]}
          onChange={(rate: number) => setValue("starRating", rate)}
        />
        {factors.map((factor) => (
          <section key={factor.id} className="w-full">
            <p className="font-bold">{factor.name}</p>
            <SelectBoxList
              selectList={selectList[factor.id]}
              formId={factor.id}
            />
          </section>
        ))}
        <section className="w-full">
          <p className="font-bold">간단한 리뷰</p>
          <textarea
            className="w-full p-2 text-sm duration-300 ease-out border-2 rounded-md outline-none resize-none hover:border-slate-300 focus:border-slate-500 "
            placeholder="🏸 리뷰를 작성해주세요"
            rows={5}
            {...register("review", {
              required: {
                value: true,
                message: "리뷰를 작성해주세요",
              },
              minLength: {
                value: 10,
                message: "10자 이상의 리뷰를 작성해주세요",
              },
            })}
          />
          <p className="text-red-600">
            {errors["review"]?.message?.toString()}
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
