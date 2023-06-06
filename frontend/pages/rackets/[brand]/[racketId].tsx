import Spinner from "components/common/Spinner";
import dynamic from "next/dynamic";
import Head from "next/head";

const RacketDetail = dynamic(() => import("components/rackets/RacketDetail"), {
  loading: () => <Spinner />,
  ssr: false,
});

const RacketDetailPage = () => (
  <div className="flex-1">
    <Head>
      <title>라켓 상세보기</title>
    </Head>
    <RacketDetail />
  </div>
);

export default RacketDetailPage;
