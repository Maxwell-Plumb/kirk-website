import React from 'react';

const FeedbackModal = ({ isOpen, isError, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm transition-transform transform scale-100">
        <h2 className={`text-xl font-semibold mb-4 ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {isError ? 'Error' : 'Success'}
        </h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          type="button"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
