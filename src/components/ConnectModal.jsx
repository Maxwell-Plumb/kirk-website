import React, { useState, useEffect, useRef } from 'react';

const ConnectNowModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Close the modal if clicking outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Connect Now Button */}
      <div className="fixed bottom-6 right-6">
        <button
          className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 hover:shadow-xl transition-transform transform hover:scale-110 focus:outline-none"
          onClick={toggleModal} // Opens the modal
        >
          Connect Now
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-end justify-end md:items-end md:justify-end z-50">
          <div
            ref={modalRef}
            className={`bg-white p-6 rounded-t-lg md:rounded-lg shadow-lg w-full max-w-sm md:max-w-md transition-transform transform ${
              isOpen ? 'translate-y-0 md:translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-y-full'
            }`}
            style={{ transition: 'transform 0.3s ease-in-out' }}
          >
            <h2 className="text-xl font-semibold text-black mb-4">Connect with Us</h2>

            {/* Download Contact Info Section */}
            <div className="mb-6">
              <button
                type="button"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => window.location.href = '/path-to-your/contact.vcf'} // Update with your vCard path
              >
                Download My Contact Info
              </button>
            </div>

            <p className="text-center text-gray-500 mb-4">- OR -</p>

            {/* User Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Phone Number</label>
                <input
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Optional Message</label>
                <textarea
                  placeholder="Write a short message..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md text-gray-800 hover:bg-gray-400"
                  onClick={toggleModal} // Closes the modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectNowModal;
