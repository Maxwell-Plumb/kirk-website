import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  const {
    title,
    description,
    image,
    longDescription,
    features,
    callToAction,
    additionalContent
  } = service;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="absolute right-0 top-0 pr-4 pt-4 z-10">
                  <button
                    type="button"
                    className="rounded-md bg-gray-900 brand-color hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:text-left w-full">
                    <div className="relative">
                      <img src={image} alt={title} className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <Dialog.Title as="h3" className="text-3xl font-bold leading-6 text-white mb-2">
                          {title}
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-8">
                      <p className="text-gray-300 mb-6">{description}</p>
                      {longDescription && <p className="text-gray-300 mb-6">{longDescription}</p>}
                      {features && features.length > 0 && (
                        <>
                          <h4 className="text-xl font-semibold mb-4 text-white">Key Features:</h4>
                          <ul className="space-y-2 mb-6">
                            {features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {additionalContent && (
                        <div className="mt-6">
                          {additionalContent}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 px-6 py-4 sm:flex sm:flex-row-reverse">
                  {callToAction ? (
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      onClick={callToAction.onClick}
                    >
                      {callToAction.text}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ServiceModal;