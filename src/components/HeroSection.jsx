import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TypingHeading from './TypingHeading';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div id="HeroSection" className="relative w-full h-screen bg-black p-4">
      <div className="relative h-full w-full rounded-3xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-indigo-900 animate-bgShift"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ 
            backgroundImage: `url('https://kirk-website.s3.us-east-2.amazonaws.com/Kirk+Seubert+-+Headshot.webp')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        <motion.div className="absolute inset-0 bg-black opacity-30"></motion.div>
        
        <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
          <div className="w-3/4 md:w-1/2">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <TypingHeading />
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              NYC's premier plumbing & HVAC specialists since 1990
            </motion.p>
            <motion.button 
              className="bg-blue-500 text-white px-8 py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transform hover:scale-110"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              onClick={handleClick}
            >
              Connect Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
