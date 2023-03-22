import NoResult from "components/common/NoResult";
import Pagination from "components/common/Pagination";
import Racket from "components/rackets/Racket";
import { RacketListViewProps } from "interface/Racket.interface";
import { useRouter } from "next/router";
import { useRacketListQuery } from "query/rackets/rackets";
import { useEffect, useState } from "react";
import { debounce } from "utils/debounce";

const racketColConfig = {
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "md:grid-cols-4",
};

const setColNumber = (width: number): string | undefined => {
  const columns = Math.floor(width / 300);

  if (columns >= 4) {
    return racketColConfig["4"];
  }

  if (columns === 3) {
    return racketColConfig["3"];
  }

  if (columns === 2) {
    return racketColConfig["2"];
  }

  return undefined;
};

const RacketList = () => {
  const { data } = useRacketListQuery();
  const {
    query: { brand, page: curPage = "1" },
  }: any = useRouter();

  if (!data.rackets.length) return <NoResult />;

  return (
    <RacketListView
      brand={brand}
      data={data}
      curPage={Number.parseInt(curPage)}
    />
  );
};

export default RacketList;

export const RacketListView = ({
  brand = "yonex",
  data,
  curPage,
}: RacketListViewProps) => {
  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth,
  );

  const handleResize = () =>
    setClientWidth(document.documentElement.clientWidth);

  useEffect(() => {
    addEventListener("resize", debounce(handleResize));

    return removeEventListener("resize", () => {});
  }, []);

  return (
    <div className="flex flex-col  max-w-[1200px] mx-auto  ">
      <h1 className="text-3xl font-bold my-4">{brand}</h1>
      <div
        className={`md:grid  md:gap-4 md:mx-auto  ${setColNumber(clientWidth)}`}
      >
        {data.rackets.map((racket) => (
          <Racket
            key={racket.racketId}
            name={racket.name}
            racketId={racket.racketId}
          />
        ))}
      </div>
      <div className="sm:flex sm:justify-center sm:mt-4">
        <Pagination totalPage={Math.ceil(data.count / 12)} curPage={curPage} />
      </div>
    </div>
  );
};
