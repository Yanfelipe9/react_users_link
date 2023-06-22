import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20c3.042 0 5.824-1.135 7.938-3l-2.647-3A7.962 7.962 0 0112 16v4zm5.291-10H20c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0116 12h4zm-10 0a7.962 7.962 0 013-5.291l-3-2.647A9.963 9.963 0 0012 4V0C5.373 0 0 5.373 0 12h4zm5.291 10a7.962 7.962 0 01-5.291-3l-2.647 3A9.963 9.963 0 0012 20v-4zm-5.291-10H4c0 3.042 1.135 5.824 3 7.938l3-2.647A7.962 7.962 0 014 12zm2-5.291A7.962 7.962 0 0112 4v4a9.963 9.963 0 00-3 5.291l2.647 3z"
        ></path>
      </svg>
      <span className="text-gray-900">Carregando....</span>
    </div>
  );
}

export default Loading;