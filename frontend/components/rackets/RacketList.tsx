import Pagination from "components/common/Pagination";
import Racket from "components/rackets/Racket";
import { useRouter } from "next/router";
import { useRacketListQuery } from "query/rackets/rackets";
import { useEffect, useState } from "react";
import { debounce } from "utils/debounce";

const racketColConfig = {
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "md:grid-cols-4",
  "5": "md:grid-cols-4",
  "6": "md:grid-cols-4",
};

const RacketList = () => {
  const { data } = useRacketListQuery();
  const {
    query: { page: curPage },
  } = useRouter();

  return <RacketListView data={data} curPage={Number(curPage)} />;
};

export default RacketList;

export const RacketListView = ({ brand = "Yonex", data, curPage }) => {
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
    <div className="flex flex-col  max-w-[1200px] mx-auto ">
      <h1 className="text-3xl font-bold">{brand}</h1>
      <div
        className={`md:grid  md:gap-4 md:mx-auto  ${
          racketColConfig[String(Number.parseInt(clientWidth / 300))]
        }`}
      >
        {data.rackets.map((_, idx) => (
          <Racket key={idx} name={_.name} racketId={_.racketId} />
        ))}
      </div>
      <div className="sm:flex sm:justify-center">
        <Pagination
          totalPage={Number.parseInt(data.count / 10)}
          curPage={curPage}
        />
      </div>
    </div>
  );
};
