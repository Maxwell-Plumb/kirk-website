import React, { useState, useEffect, useRef } from 'react';
import FeedbackModal from './FeedbackModal';

const ConnectNowModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => setIsOpen(!isOpen);

  const closeFeedbackModal = () => {
    setIsFeedbackOpen(false);
    setFeedbackMessage('');
    setIsError(false);
  };

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formData = {
      fullName: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      message: e.target.elements.message.value,
    };
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFeedbackMessage('Your message has been sent successfully!');
        setIsError(false);
      } else {
        setFeedbackMessage('There was an error sending your message. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      setFeedbackMessage('There was an error sending your message. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsFeedbackOpen(true);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className="fixed bottom-6 right-6">
        <button
          className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 hover:shadow-xl transition-transform transform hover:scale-110 focus:outline-none"
          onClick={toggleModal}
        >
          Connect Now
        </button>
      </div>

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

            <div className="mb-6">
              <button
                type="button"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => window.location.href = '/path-to-your/contact.vcf'}
              >
                Download My Contact Info
              </button>
            </div>

            <p className="text-center text-gray-500 mb-4">- OR -</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Optional Message</label>
                <textarea
                  name="message"
                  placeholder="Write a short message..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md text-gray-800 hover:bg-gray-400"
                  onClick={toggleModal}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <FeedbackModal
        isOpen={isFeedbackOpen}
        isError={isError}
        message={feedbackMessage}
        onClose={closeFeedbackModal}
      />
    </div>
  );
};

export default ConnectNowModal;