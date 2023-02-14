import Review from "components/rackets/Review";
import { ReviewProps } from "interface/Review.interface";

export default {
  component: Review,
};

export const Default = (args: ReviewProps) => (
  <div className="max-w-[1200px]">
    <Review {...args} />
  </div>
);

Default.args = {
  userId: "test-user",
  content: "정말 최고의 라켓입니다.",
  value: 4,
  title: "최고의 라켓",
  createdAt: "1시간 전",
  age: 20,
  rank: "A",
};
