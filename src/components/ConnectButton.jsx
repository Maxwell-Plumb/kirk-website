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
          setShowButton(true);
        } else {
          setShowButton(false);
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

  const generateVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:2.1
N;LANGUAGE=en-us:Seubert;Kirk
FN:Kirk Seubert
TEL;WORK;VOICE:(718) 279-4441
ADR;WORK;PREF:;;43-20 203rd Street;Bayside;NY;11361;United States
LABEL;WORK;PREF;ENCODING=QUOTED-PRINTABLE:43-20 203rd Street=0D=0A=
Bayside, NY  11361
X-MS-OL-DEFAULT-POSTAL-ADDRESS:2
EMAIL;PREF;INTERNET:kirk@maxwellplumb.com
X-MS-IMADDRESS:kirk@maxwellplumb.com
REV:20240813T202731Z
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kirk_Seubert.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            className="fixed bottom-6 right-6 flex flex-col space-y-2"
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

                  sm:py-3 sm:px-6 sm:text-sm
                  md:py-3 md:px-6 md:text-lg
                  lg:py-3.5 lg:px-7.5 lg:text-xl
                " style={{ zIndex: 999 }}
              >
                Connect Now
              </button>
            </Link>
            <button
              onClick={generateVCard}
              className="
                bg-green-500 text-white font-bold 
                py-2 px-4 rounded-lg shadow-lg 
                hover:bg-green-600 hover:shadow-xl 
                transition-all duration-300 
                transform hover:scale-110

                sm:py-2 sm:px-4 sm:text-xs
                md:py-2 md:px-4 md:text-sm
                lg:py-2.5 lg:px-5 lg:text-base
              " style={{ zIndex: 999 }}
            >
              Download Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConnectButton;