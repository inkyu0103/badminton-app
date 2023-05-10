import Spinner from "components/common/Spinner";
import SSRSuspense from "components/common/SSRSuspense";
import dynamic from "next/dynamic";

const RacketDetail = dynamic(() => import("components/rackets/RacketDetail"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Test = () => (
  <div>
    <SSRSuspense fallback={<Spinner />}>
      <RacketDetail />
    </SSRSuspense>
  </div>
);

export default Test;
