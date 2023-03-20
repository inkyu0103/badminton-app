import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const backgroundColor = {
  disable: "bg-slate-200",
  able: "bg-white",
};

const textColor = {
  current: "bg-indigo-600 text-white",
  notCurrent: "bg-white text-gray-900 ring-1 ring-inset ring-gray-300",
};

const Pagination = ({
  totalPage,
  curPage,
}: {
  totalPage: number;
  curPage: number;
}) => {
  const background = curPage === 1 ? "disable" : "able";

  return (
    <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href="#"
          className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${backgroundColor[background]}`}
        >
          Previous
        </Link>
        <Link
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {Array(totalPage)
              .fill(0)
              .map((_, idx) => {
                const cur = idx + 1 === curPage ? "current" : "notCurrent";
                return (
                  <Link
                    key={idx}
                    href={`/rackets/yonex?page=${idx + 1}`}
                    aria-current="page"
                    className={`relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${textColor[cur]}`}
                  >
                    {idx + 1}
                  </Link>
                );
              })}

            <Link
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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
