import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/contact')
  }
  return (
    <div id="HeroSection" className="relative w-full overflow-hidden p-4 pb-8 bg-black">
      <div className="relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-8rem)] md:h-[calc(100vh-8rem)] w-full rounded-3xl overflow-hidden">
        {/* Background image with gradient overlay */}
        <div rel="preload" as="image" className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1666299429593-4da062e5e341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/70 to-transparent"></div>
        </div>
        
        {/* Content container */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:p-16">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white leading-tight w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Solutions. Effortless Living.
          </motion.h1>
          <motion.button 
            className="bg-brand-color text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 w-max"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onClick={handleClick}
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;