import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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
      <nav className="flex items-center">
        <ul className="flex space-x-8">
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-blue-500 transition-colors duration-300 focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <motion.ul 
                className={`absolute left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg ${isMobile ? 'w-screen' : 'w-48'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/services/residential" className="text-white hover:text-gray-300">Residential Services</a>
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
              </motion.ul>
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