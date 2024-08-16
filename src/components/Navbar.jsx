import React, { useState } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-black sticky top-0 left-0 right-0 flex justify-between items-center p-4 z-20 shadow-lg">
      <div className="text-2xl font-bold text-blue-500">
        <a href="/" className="transition-colors duration-300">
          Kirk Seubert
        </a>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-blue-500 transition-colors duration-300 focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-2 left-0 md:left-auto md:right-0 bg-black border border-gray-700 rounded-lg shadow-lg w-48">
                <li className="hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded-md">
                  <a href="/services/residential" className="text-white hover:text-blue-500">Residential Services</a>
                </li>
                <li className="hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded-md">
                  <a href="/services/commercial-hvac" className="text-white hover:text-blue-500">Commercial HVAC</a>
                </li>
                <li className="hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded-md">
                  <a href="/services/commercial-plumbing" className="text-white hover:text-blue-500">Commercial Plumbing</a>
                </li>
                <li className="hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded-md">
                  <a href="/services/fire-sprinklers" className="text-white hover:text-blue-500">Fire Sprinklers</a>
                </li>
                <li className="hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded-md">
                  <a href="/services/gas-lines" className="text-white hover:text-blue-500">Gas Lines</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-500 transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
