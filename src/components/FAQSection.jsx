import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What Services Does Maxwell Plumb Offer?",
      answer: "Maxwell Plumb provides a wide range of services, including plumbing, HVAC installations and repairs, water heater services, and more for both residential and commercial clients."
    },
    {
      question: "How Often Should I Schedule Maintenance?",
      answer: "Annual maintenance is recommended for both HVAC and plumbing systems to extend their lifespan, improve efficiency, and prevent costly breakdowns."
    },
    {
      question: "What Are the Benefits of a Tankless Water Heater?",
      answer: "Tankless water heaters provide endless hot water on demand, save space, and are more energy-efficient compared to traditional water heaters."
    },
    {
      question: "What is a Backflow Prevention Device and Do I Need One?",
      answer: "Backflow prevention devices prevent contaminated water from flowing back into the public water supply. These are required for certain types of businesses and properties to comply with New York State regulations."
    },
    {
      question: "How Can I Schedule a Service with Maxwell Plumb?",
      answer: "You can schedule a service by contacting us directly through our website or by calling our office. We’ll arrange a visit from one of our licensed technicians to assess your needs and provide a guaranteed price before any work begins."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-5 bg-gray-900 text-white rounded-lg shadow-lg transition-all duration-300 ${
              openIndex === index ? 'ring-2 ring-gray-500' : ''
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                &#9662; {/* Downward arrow */}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex === index ? 'max-h-screen mt-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
