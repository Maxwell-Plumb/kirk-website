import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-4 pr-4 pl-2 pb-20">
      <div className="relative h-full w-full rounded-3xl overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1666299429593-4da062e5e341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/70 to-transparent"></div>
        </div>
        
        {/* Content container */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-16">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Solutions. Effortless Living.
          </motion.h1>
          <motion.button 
            className="bg-[#DC143C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 w-max"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;