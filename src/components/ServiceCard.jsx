import React from 'react';

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <a href={link} className="block h-full no-underline"> {/* Changed to anchor tag */}
      <div className="relative p-2 h-full">
        <div className="relative rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl aspect-[3/4] group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-indigo-900 opacity-60 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-30 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <div className="max-w-[65%]">
              <h3 className="text-2xl font-extrabold mb-2 text-white leading-tight uppercase tracking-wide group-hover:text-blue-500">
                {title}
              </h3>
              <p className="text-sm font-medium text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
