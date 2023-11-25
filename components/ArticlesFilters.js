import React, { useState, useCallback } from "react";
import { debounce } from "@/lib/utils";

const ArticlesFilters = ({ search, setSearch, sortBy, setSortBy }) => {
  const [inputValue, setInputValue] = useState(search);

  // Debounced handleSearch function
  const handleSearch = useCallback(
    debounce((event) => {
      setSearch(event.target.value);
    }, 300),
    []
  );

  const handleChange = (event) => {
    setInputValue(event.target.value);
    handleSearch(event);
  };

  // Debounced handleSort function
  const handleSort = useCallback(
    debounce((value) => {
      setSortBy(value);
    }, 300),
    []
  );

  const handleSortChange = (event) => {
    const value = event.target.value;
    handleSort(value);
  };

  return (
    <div className="flex md:justify-end mb-4">
      <div className="flex items-center gap-2">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white text-gray-800 focus:text-gray-900 border border-gray-400"
            placeholder="Search..."
          />
        </div>

        <select
          className="bg-white py-[9px] rounded-md border text-sm border-gray-400 text-gray-800"
          onChange={handleSortChange}
          value={sortBy}
        >
          <option value="">Sort by</option>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Published at</option>
        </select>
      </div>
    </div>
  );
};

export default ArticlesFilters;
