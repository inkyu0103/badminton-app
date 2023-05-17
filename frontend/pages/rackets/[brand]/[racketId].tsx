import Spinner from "components/common/Spinner";
import SSRSuspense from "components/common/SSRSuspense";
import dynamic from "next/dynamic";
import Head from "next/head";

const RacketDetail = dynamic(() => import("components/rackets/RacketDetail"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Test = () => (
  <div className="flex-1">
    <Head>
      <title>라켓 상세보기</title>
    </Head>
    <SSRSuspense fallback={<Spinner />}>
      <RacketDetail />
    </SSRSuspense>
  </div>
);

export default Test;
