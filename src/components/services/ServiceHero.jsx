import React from 'react';

const ServiceHero = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{title}</h1>
        <p className="text-lg sm:text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceHero;