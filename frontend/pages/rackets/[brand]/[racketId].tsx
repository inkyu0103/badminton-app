import SSRSuspense from "components/common/SSRSuspense";
import Spinner from "components/common/Spinner";
///import RacketDetail from "components/rackets/RacketDetail";
import dynamic from "next/dynamic";

const RacketDetail = dynamic(() => import("components/rackets/RacketDetail"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Test = () => (
  <div>
    <SSRSuspense fallback={<Spinner />}>
      <RacketDetail racketName="Yonex Nanoray 700" />
    </SSRSuspense>
  </div>
);

export default Test;
