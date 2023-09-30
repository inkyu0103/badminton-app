import RacketSpec from "components/rackets/RacketSpec";
import RacketStatistics from "components/rackets/RacketStatistics";
import ReviewList from "components/reviews/ReviewList";
import { Tbalance, Tshaft, Tweight } from "interface/Racket.interface";
import { useRacketQuery } from "query/rackets/rackets";

const RacketDetail = () => {
  const { data: racket } = useRacketQuery();

  return (
    <div className="px-4 mb-9">
      <h1 className="my-10 text-3xl font-bold">{racket?.name}</h1>
      <RacketSpec
        balance={racket?.balance as Tbalance}
        score={racket?.score as number}
        shaft={racket?.shaft as Tshaft}
        weight={racket?.weight as Tweight[]}
      />
      <RacketStatistics />
      <ReviewList />
    </div>
  );
};

export default RacketDetail;
