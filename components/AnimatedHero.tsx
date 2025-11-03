'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedHero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });

  // Parallax effect for the background
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  // Opacity for the content
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={targetRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/sewing-process.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated SVG Lines (as a fallback) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,10 50,50 T100,50"
            fill="none"
            stroke="white"
            strokeWidth="0.2"
            strokeDasharray="1 0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
        style={{ opacity, scale }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Your Perfect Fit
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From sketch to stitch, we bring your fashion vision to life with precision and care.
        </motion.p>
        <motion.div className="flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <motion.button
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            I'm a Designer
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            I Need a Designer
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
