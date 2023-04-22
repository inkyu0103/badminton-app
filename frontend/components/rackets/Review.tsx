import { ReviewProps } from "interface/Review.interface";
import { Rating } from "react-simple-star-rating";

const Review = ({
  review,
  value,
  createdAt,
  age,
  rank,
  isMyReview,
  handleDeleteReview,
  handleEditReview,
}: ReviewProps) => (
  <article className="w-full p-2 duration-300 ease-out border-2 rounded-md drop-shadow-sm hover:cursor-pointer hover:bg-slate-100">
    <div className="flex items-center justify-between">
      <Rating
        size={20}
        initialValue={value}
        readonly
        emptyStyle={{ display: "flex" }}
        fillStyle={{ display: "-webkit-inline-box" }}
      />
      <div className="flex gap-1">
        {isMyReview && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEditReview();
              }}
            >
              <p className="text-xs">수정</p>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.confirm("정말 삭제 하시겠습니까?") &&
                  handleDeleteReview();
              }}
            >
              <p className="text-xs">삭제</p>
            </button>
          </>
        )}
        <p className="text-xs">{createdAt}</p>
      </div>
    </div>

    <p className="text-xs">{`(${age} ${rank}조) `}</p>
    <p className="text-sm truncate">{review}</p>
  </article>
);
export default Review;
