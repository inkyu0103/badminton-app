import CheckMounted from "components/common/CheckMounted";
import Spinner from "components/common/Spinner";
import SSRSuspense from "components/common/SSRSuspense";
import RacketList from "components/rackets/RacketList";
import seoConfig from "constants/seoConfig";
import { NextSeo } from "next-seo";

const RacketListWithBrand = () => {
  return (
    <SSRSuspense fallback={<Spinner />}>
      <NextSeo
        title={seoConfig.rackets.title}
        description={seoConfig.rackets.description}
      />
      <CheckMounted>
        <RacketList />
      </CheckMounted>
    </SSRSuspense>
  );
};
export default RacketListWithBrand;
