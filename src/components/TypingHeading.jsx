import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const TypingHeading = () => {
  const staticText = "Transforming Homes into ";
  const changingWords = useMemo(() => ["Sanctuaries", "Havens", "Retreats", "Oases"], []);

  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState(staticText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const tick = () => {
      const fullText = staticText + changingWords[currentWord];
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(3000); // Pause on the full word for 3000ms
      } else if (isDeleting && updatedText === staticText) {
        setIsDeleting(false);
        setCurrentWord((prevWord) => (prevWord + 1) % changingWords.length);
        setDelta(300); // Pause before starting the next word
      } else {
        setDelta(isDeleting ? 50 : 100); // Typing speed
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, text, currentWord, changingWords, isDeleting, staticText]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span>{staticText}</span>
      <span className="text-gold">{text.slice(staticText.length)}</span>
      <span className="text-white">|</span>
    </motion.div>
  );
};

export default TypingHeading;
