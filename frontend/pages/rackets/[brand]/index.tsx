import CheckMounted from "components/common/CheckMounted";
import Spinner from "components/common/Spinner";
import SSRSuspense from "components/common/SSRSuspense";
import RacketList from "components/rackets/RacketList";
import Head from "next/head";

const RacketListWithBrand = () => {
  return (
    <SSRSuspense fallback={<Spinner />}>
      <Head>
        <title>라켓 리스트</title>
      </Head>
      <CheckMounted>
        <RacketList />
      </CheckMounted>
    </SSRSuspense>
  );
};
export default RacketListWithBrand;
