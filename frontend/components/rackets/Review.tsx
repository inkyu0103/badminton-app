import { ReviewProps } from "interface/Review.interface";
import ReactStars from "react-rating-stars-component";

const Review = ({ userId, content, value, createdAt, title }: ReviewProps) => (
  <article className="w-full border-2 rounded-md drop-shadow-sm p-2 hover:cursor-pointer hover:bg-slate-100 duration-300 ease-out ">
    <div className="flex justify-between">
      <ReactStars edit={false} value={value} />
      <p className="text-xs">{createdAt}</p>
    </div>
    <p className="font-bold">{title}</p>
    <p className="text-xs">{userId}</p>
    <p className="text-sm truncate">{content}</p>
  </article>
);
export default Review;
