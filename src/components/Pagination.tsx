import React from "react";

const Pagination = () => {
  return (
    <div className="absolute bottom-0 flex items-center justify-between w-full px-5 py-5 bg-gray-600">
      <div className="flex items-center w-1/2 h-full overflow-x-auto">
        <a
          href="#"
          className="px-3 py-2 mx-1 text-white bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 active"
        >
          1
        </a>
        
      </div>
      <div>
        <a
          href="#"
          className="px-8 py-2 mx-1 text-white bg-gray-200 rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
        >
          Prev
        </a>
        <a
          href="#"
          className="px-8 py-2 mx-1 text-white bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
