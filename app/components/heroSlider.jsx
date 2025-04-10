'use client';

import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const games = [
  '/hero_slider_img/Valorant-capa.jpg',
  '/hero_slider_img/warzone-img.jpeg',
  '/hero_slider_img/Warframe-poster.png',
]

const FadeInSlider = () => {
  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={games[index]}
          src={games[index]}
          alt="Slider Image"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute z-50 items-center shadow-black bottom-4 left-1/2 transform -translate-x-1/2 flex  space-x-2">
        {games.map((_, i) => (
           <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-[#92A8F4] w-3 h-3' : 'bg-[#2A54A9]'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FadeInSlider;
