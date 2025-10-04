import useGetData from "@/components/Hooks/useGetData";
import { truncateWords } from "@/components/UtilityFuncMaxWord";
import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const PublishExp = ({ searchData, setSearchData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { experimentsData, experimentsLoading, experimentsError } = useGetData(
    null,
    currentPage,
    20
  );
  const [order, setOrder] = useState("");

  const ItemSkeleton = () => (
    <div className="border border-cyan-500/90 bg-[#161823] shadow-sm py-3 px-4 rounded-md flex flex-col gap-2 animate-pulse">
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
      <div className="flex justify-between items-center">
        <div className="h-3 bg-gray-600 rounded w-1/2"></div>
        <div className="h-3 bg-gray-600 rounded w-1/4"></div>
      </div>
    </div>
  );

  const sortedItems = useMemo(() => {
    if (order === "A-Z") {
      return (
        experimentsData?.content &&
        [...experimentsData.content].sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      );
    } else if (order === "Z-A") {
      return (
        experimentsData?.content &&
        [...experimentsData.content].sort((a, b) =>
          b.title.localeCompare(a.title)
        )
      );
    }
    return experimentsData?.content;
  }, [order, experimentsData?.content]);

  // Pagination functions
  const totalPages = experimentsData?.totalPages || 0;
  const totalElements = experimentsData?.totalElements || 0;
  const pageSize = experimentsData?.size || 20;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // You'll need to update your useGetData hook to accept page parameter
  };

  const getVisiblePages = () => {
    const pages = [];
    const total = totalPages;

    // Always show first page
    pages.push(0);

    // Show pages around current page
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(total - 2, currentPage + 1);
      i++
    ) {
      if (i > 0 && i < total - 1) {
        pages.push(i);
      }
    }

    // Always show last page
    if (total > 1) {
      pages.push(total - 1);
    }

    // Remove duplicates and sort
    return [...new Set(pages)].sort((a, b) => a - b);
  };

  if (experimentsError)
    return (
      <p className="text-3xl flex-center text-red-500 min-h-screen">
        Error. couldn't get the data. Please try again.
      </p>
    );

  const displayedData = sortedItems ? sortedItems : experimentsData?.content;
  const finalDisplayedData = searchData ? searchData : displayedData;
  return (
    <div>
      <div className="flex justify-between items-center gap-5 mb-6">
        <h1 className="bg-[#141c2a] py-2 sm:px-4 px-2 w-fit rounded-md border border-[#bcbaba] sm:text-lg">
          Publication and Experiments Explorer
        </h1>
        <span className="bg-[#141c2a] py-2 px-2 sm:px-4 w-fit rounded-md border border-[#bcbaba] sm:text-lg">
          <label htmlFor="order">Sort By</label>
          <select
            name="order"
            id="order"
            className="text-blue-300 cursor-pointer bg-transparent"
            onChange={(e) => setOrder(e.target.value)}
            value={order}
          >
            <option value="">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </span>
      </div>

      {/* Results Count */}
      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-400">
        {experimentsData?.numberOfElements === 0 ? (
          "No results found"
        ) : (
          <>
            Showing {currentPage * pageSize + 1} to{" "}
            {Math.min((currentPage + 1) * pageSize, totalElements)} of{" "}
            {totalElements} results
          </>
        )}
      </div>

      {/* Content */}
      {experimentsLoading ? (
        <div className="categoryItems flex flex-col gap-4.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <ItemSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="categoryItems flex flex-col gap-4.5 mb-8">
            {finalDisplayedData.length ? (
              finalDisplayedData?.map((item, i) => (
                <NavLink to={`/experiments/${item.id}`} key={i}>
                  <div className="border border-cyan-500/90 bg-[#161823] shadow-sm hover:shadow-md cursor-pointer shadow-cyan-500/50 py-3 px-4 rounded-md flex flex-col gap-2 transition-all duration-300 hover:border-cyan-300">
                    <h1 className="font-semibold text-cyan-100">
                      {truncateWords(item.title, 1)}
                    </h1>
                    <div className="text-sm text-[#ddd] flex justify-between items-center gap-3">
                      <p className="flex-1">{item.title}</p>
                      <p className="text-cyan-300 flex-shrink-0">
                        {truncateWords(item.authors, 2)}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))
            ) : (
              <p className="text-green-500 text-center text-3xl my-7">
                No Items Found
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 p-4 bg-[#141c2a] rounded-lg border border-[#bcbaba]">
              {/* Page Info */}
              <div className="text-sm text-gray-300">
                Page {currentPage + 1} of {totalPages}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center space-x-2">
                {/* First Page */}
                <button
                  onClick={() => handlePageChange(0)}
                  disabled={currentPage === 0}
                  className="p-2 rounded-md border border-[#bcbaba] bg-[#1a2436] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#243047] transition-colors"
                  title="First page"
                >
                  <ChevronsLeft size={16} />
                </button>

                {/* Previous Page */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 0}
                  className="flex items-center px-3 py-2 rounded-md border border-[#bcbaba] bg-[#1a2436] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#243047] transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span className="ml-1 hidden sm:inline">Previous</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {getVisiblePages().map((page, index, array) => {
                    const showEllipsis =
                      index > 0 && page - array[index - 1] > 1;

                    return (
                      <div key={page} className="flex items-center">
                        {showEllipsis && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                        <button
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-md border transition-colors ${
                            currentPage === page
                              ? "bg-cyan-600 border-cyan-500 text-white"
                              : "border-[#bcbaba] bg-[#1a2436] text-white hover:bg-[#243047]"
                          }`}
                        >
                          {page + 1}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Next Page */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                  className="flex items-center px-3 py-2 rounded-md border border-[#bcbaba] bg-[#1a2436] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#243047] transition-colors"
                >
                  <span className="mr-1 hidden sm:inline">Next</span>
                  <ChevronRight size={16} />
                </button>

                {/* Last Page */}
                <button
                  onClick={() => handlePageChange(totalPages - 1)}
                  disabled={currentPage === totalPages - 1}
                  className="p-2 rounded-md border border-[#bcbaba] bg-[#1a2436] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#243047] transition-colors"
                  title="Last page"
                >
                  <ChevronsRight size={16} />
                </button>
              </div>

              {/* Page Size Info */}
              <div className="text-sm text-gray-300 hidden sm:block">
                {pageSize} per page
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PublishExp;
