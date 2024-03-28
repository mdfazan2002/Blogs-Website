import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages, theme } = useContext(
    AppContext
  );

  if (!totalPages) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 py-2 border-t-2 border-t-gray-300 ${
        theme === "light" ? "bg-white" : "bg-black text-white"
      }`}
    >
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
      {page > 1 && (
  <button
    onClick={() => handlePageChange(page - 1)}
    className={`border-2 border-gray-300 py-1 px-4 rounded-md hover:bg-${theme === 'light' ? 'gray-100' : 'gray-800'} hover:text-${theme === 'light' ? 'black' : 'white'} transition-colors duration-300`}
  >
    Previous
  </button>
)}

{page < totalPages && (
  <button
    onClick={() => handlePageChange(page + 1)}
    className={`border-2 border-gray-300 py-1 px-4 rounded-md hover:bg-${theme === 'light' ? 'gray-100' : 'gray-800'} hover:text-${theme === 'light' ? 'black' : 'white'} transition-colors duration-300`}
  >
    Next
  </button>
)}

        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
