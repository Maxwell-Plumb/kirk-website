import React, { useState } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-black sticky top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
      <div className="text-xl font-bold brand-color">
        <a href="/">Kirk Seubert</a>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/services/residential" className="text-white hover:text-gray-300">Residental Services</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/services/commercial-hvac" className="text-white hover:text-gray-300">Commercial HVAC</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/services/commercial-plumbing" className="text-white hover:text-gray-300">Commercial Plumbing</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/services/fire-sprinklers" className="text-white hover:text-gray-300">Fire Sprinklers</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/services/gas-lines" className="text-white hover:text-gray-300">Gas Lines</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
