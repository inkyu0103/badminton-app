import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import deepFreeze from "utils/deepFreeze";

const paginationCssConfig = deepFreeze({
  background: {
    disable: "bg-slate-200 pointer-events-none",
    able: "bg-white",
  },
  page: {
    currentPage: "bg-blue-300 text-white",
    notCurrentPage: "bg-white text-gray-900 ring-1 ring-inset ring-gray-300",
  },
});

const Pagination = ({
  totalPage,
  curPage,
}: {
  totalPage: number;
  curPage: number;
}) => {
  const firstPageCss =
    curPage === 1
      ? paginationCssConfig["background"]["disable"]
      : paginationCssConfig["background"]["able"];
  const lastPageCss =
    curPage === totalPage
      ? paginationCssConfig["background"]["disable"]
      : paginationCssConfig["background"]["able"];

  const isCurrentPage = (page: number): boolean => page === curPage;

  const router = useRouter();
  const defaultPath = router.asPath.replace(/\?page=[0-9]/, "");

  return (
    <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6 ">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href="#"
          className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${firstPageCss}`}
        >
          Previous
        </Link>
        <Link
          href="#"
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${lastPageCss}`}
        >
          Next
        </Link>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              href={`/rackets/yonex?page=${curPage - 1}`}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${firstPageCss}`}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {Array(totalPage)
              .fill(0)
              .map((_, idx) => {
                const curPageCss = isCurrentPage(idx + 1)
                  ? paginationCssConfig["page"]["currentPage"]
                  : paginationCssConfig["page"]["notCurrentPage"];
                return (
                  <Link
                    key={idx}
                    href={`${defaultPath}?page=${idx + 1}`}
                    aria-current="page"
                    className={`relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${curPageCss}`}
                  >
                    {idx + 1}
                  </Link>
                );
              })}

            <Link
              href={`/rackets/yonex?page=${curPage + 1}`}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${lastPageCss} `}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
