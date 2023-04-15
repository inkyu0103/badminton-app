import { ReviewProps } from "interface/Review.interface";
import ReactStars from "react-rating-stars-component";

const Review = ({
  userId,
  content,
  value,
  createdAt,
  title,
  age,
  rank,
}: ReviewProps) => (
  <article
    className="w-full p-2 duration-300 ease-out border-2 rounded-md drop-shadow-sm hover:cursor-pointer hover:bg-slate-100"
    onClick={() => console.log("나는 리뷰야")}
  >
    <div className="flex items-center justify-between">
      <ReactStars edit={false} value={value} />
      <div className="flex gap-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("나는 수정이야");
          }}
        >
          <p className="text-xs">수정</p>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.confirm("정말 삭제 하시겠습니까?") &&
              console.log("삭제하였습니다.");
          }}
        >
          <p className="text-xs">삭제</p>
        </button>
        <p className="text-xs">{createdAt}</p>
      </div>
    </div>
    <p className="font-bold">{title}</p>
    <p className="text-xs">{`${userId} (${age}대 ${rank}조) `}</p>
    <p className="text-sm truncate">{content}</p>
  </article>
);
export default Review;
