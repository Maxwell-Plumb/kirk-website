import React from 'react';

const SwipeIndicator = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="animate-bounce flex items-center space-x-2">
        <span className="text-gray-500">Swipe</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>

      </div>
    </div>
  );
};

export default SwipeIndicator;
