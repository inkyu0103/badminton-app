import CheckMounted from "components/common/CheckMounted";
import Spinner from "components/common/Spinner";
import SSRSuspense from "components/common/SSRSuspense";
import RacketList from "components/rackets/RacketList";

const RacketListWithBrand = () => {
  return (
    <SSRSuspense fallback={<Spinner />}>
      <CheckMounted>
        <RacketList />
      </CheckMounted>
    </SSRSuspense>
  );
};
export default RacketListWithBrand;
