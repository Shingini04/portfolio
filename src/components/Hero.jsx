import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import me from './me.jpg';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Hello! I'm Shingini Lahiri, a passionate Front-End Developer dedicated to creating engaging and user-friendly web experiences.";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        textRef.current.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-blue via-dark-purple to-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05 }} // Scale on hover
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.img 
              src={me}
              alt="Shingini Lahiri" 
              className="rounded-full w-full h-full object-cover shadow-2xl"
              initial={{ opacity: 0, x: -100 }} // Slide in from left
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 10 }} // Zoom and rotate on hover
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-white opacity-50"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>
        </motion.div>
        <div className="md:w-1/2">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, textShadow: "0px 0px 10px rgba(255,149,5,0.7)" }} // Scale and glow effect
          >
            Shingini Lahiri
          </motion.h1>
          <motion.p 
            ref={textRef}
            className="text-xl md:text-2xl text-gray-300" // Changed color to standard gray
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;