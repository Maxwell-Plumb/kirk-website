import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';



const ConnectButton = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowButton(true); // Show the button when HeroSection is not visible
        } else {
          setShowButton(false); // Hide the button when HeroSection is visible
        }
      },
      { threshold: 0 }
    );

    const heroSection = document.querySelector('#HeroSection');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            className="fixed bottom-6 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link to="/contact">
              <button
                className="
                  bg-brand-color text-white font-bold 
                  py-2 px-4 rounded-lg shadow-lg 
                  hover:bg-blue-600 hover:shadow-xl 
                  transition-all duration-300 
                  transform hover:scale-110

                  sm:py-3 sm:px-6 sm:text-lg
                  md:py-3 md:px-6 md:text-lg
                  lg:py-3.5 lg:px-7.5 lg:text-xl
                "
              >
                Connect Now
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConnectButton;
