import React from 'react';

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <a href={link} className="block h-full no-underline"> {/* Changed to anchor tag */}
      <div className="relative p-2 h-full">
        <div className="relative rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl aspect-[3/4] group h-full">
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}></div>
          <div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <div className="max-w-[65%]">
              <h3 className="text-2xl font-extrabold mb-2 text-white leading-tight uppercase tracking-wide">{title}</h3>
              <p className="text-sm font-medium text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;