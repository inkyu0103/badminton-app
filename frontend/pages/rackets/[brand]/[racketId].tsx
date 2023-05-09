import Spinner from "components/common/Spinner";
import SSRSuspense from "components/common/SSRSuspense";
///import RacketDetail from "components/rackets/RacketDetail";
import dynamic from "next/dynamic";

const RacketDetail = dynamic(() => import("components/rackets/RacketDetail"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Test = () => (
  <div>
    <SSRSuspense fallback={<Spinner />}>
      <RacketDetail racketName="asdfasdfA" />
    </SSRSuspense>
  </div>
);

export default Test;
