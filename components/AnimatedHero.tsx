'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AnimatedHero() {
  const router = useRouter();
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
      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-3xl font-bold tracking-tight" style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontWeight: 800,
          color: '#00b67f',
          letterSpacing: '-0.5px',
          lineHeight: '1.1',
          textTransform: 'uppercase'
        }}>
          <span className="opacity-80">se</span><span className="opacity-100">W</span><span className="opacity-80">na</span><span className="opacity-60">.</span>
        </div>
      </motion.div>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/sewna-1.mp4" type="video/mp4" />
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
        <motion.div 
          className="flex flex-wrap gap-6 mt-8 max-w-2xl mx-auto" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {/* Primary Button - Solid */}
          <motion.button
            className="relative px-10 py-3.5 text-base font-extrabold overflow-hidden group"
            style={{
              borderRadius: '4px',
              background: 'white',
              color: '#000000',
              border: '1px solid #ffffff',
              transition: 'all 0.3s ease',
              minWidth: '220px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontSize: '0.8rem'
            }}
            whileHover={{
              y: -4,
              x: [0, -2, 2, -1, 1, 0],
              scale: 1.02,
              boxShadow: [
                '0 5px 15px rgba(0,0,0,0.1)',
                '0 8px 20px rgba(0,0,0,0.15)',
                '0 5px 15px rgba(0,0,0,0.1)'
              ],
              transition: {
                duration: 0.6,
                x: {
                  repeat: Infinity,
                  duration: 0.2,
                  repeatType: 'reverse'
                },
                boxShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }
            }}
            whileTap={{ 
              scale: 0.97,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25,
              delay: 0.1
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              I'm a Designer
            </span>
          </motion.button>

          {/* Secondary Button - Outlined */}
          <motion.button
            onClick={() => router.push('/need-a-designer')}
            className="relative px-10 py-3.5 text-base font-extrabold overflow-hidden group cursor-pointer"
            style={{
              borderRadius: '4px',
              background: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderColor: 'white',
              transition: 'all 0.3s ease',
              minWidth: '220px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontSize: '0.8rem',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{
              y: -4,
              x: [0, -2, 2, -1, 1, 0],
              scale: 1.02,
              color: '#000000',
              backgroundColor: 'white',
              borderColor: '#ffffff',
              boxShadow: [
                '0 5px 15px rgba(0,0,0,0.1)',
                '0 8px 25px rgba(0,0,0,0.2)',
                '0 5px 15px rgba(0,0,0,0.1)'
              ],
              transition: {
                duration: 0.6,
                x: {
                  repeat: Infinity,
                  duration: 0.1,
                  repeatType: 'reverse'
                },
                boxShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                },
                backgroundColor: {
                  duration: 0.3
                },
                color: {
                  duration: 0.3
                },
                borderColor: {
                  duration: 0.3
                }
              }
            }}
            whileTap={{ 
              scale: 0.97,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25,
              delay: 0.1
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              I Need a Designer
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div 
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
      </motion.div> */}
    </div>
  );
}
