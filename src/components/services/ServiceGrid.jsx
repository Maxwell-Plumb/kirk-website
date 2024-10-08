import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceGrid = ({ services, onCardClick }) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`
              transition-all duration-300 ease-in-out 
              ${index % 3 === 1 ? 'lg:translate-y-8' : ''}
              hover:-translate-y-2 sm:hover:-translate-y-4 lg:hover:-translate-y-6
              ${index % 3 === 1 ? 'lg:hover:-translate-y-2' : ''}
            `}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              onClick={() => onCardClick(service)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;