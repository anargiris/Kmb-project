import React from "react";

const Pagination = ({ isLoading, totalPages, page, setPage }) => {
  const handleGoBackPage = () => {
    if (isLoading) return;
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleGoNextPage = () => {
    if (isLoading) return;
    if (page !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-800">displaying page</div>
        <div className="flex items-center">
          <div
            className="border border-gray-400 cursor-pointer  px-4 py-1"
            onClick={() => handleGoBackPage()}
          >
            {"<"}
          </div>
          <div className="border border-gray-900 px-4 py-1 font-medium">
            {page}
          </div>
        </div>
        <div>of {totalPages}</div>{" "}
        <div
          className="border border-gray-400 cursor-pointer  px-4 py-1"
          onClick={() => handleGoNextPage()}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
