'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { section } from 'framer-motion/client';

interface FloatingIconProps {
  icon: ReactNode;
  className: string;
  delay?: number;
}

const FloatingIcon = ({ icon, className, delay = 0 }: FloatingIconProps) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ 
      duration: 0.8, 
      delay,
      type: 'spring',
      damping: 10,
      stiffness: 100
    }}
  >
    {icon}
  </motion.div>
);

export default function ConnectionAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const springConfig = { stiffness: 100, damping: 30 };
  const springY = useSpring(y, springConfig);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/images/fashion-1.jpg)' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00b67f]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bridging Creativity & Style
        </motion.h2>

        <motion.div 
          className="relative h-[500px] md:h-[600px]"
          style={{ opacity, y: springY, scale }}
        >
          {/* Designer Card */}
          <motion.div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-2xl shadow-xl w-56 md:w-72 backdrop-blur-sm bg-white/80 border border-white/20"
            initial={{ x: -100, opacity: 0, rotate: -2 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00b67f] to-emerald-400 rounded-2xl mb-6 flex items-center justify-center text-white text-2xl shadow-lg">
              🎨
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">For Designers</h3>
            <p className="text-gray-600 mb-4">Showcase your unique style and connect with clients who appreciate your vision.</p>
            <motion.button 
              className="text-sm font-medium text-[#00b67f] hover:text-emerald-600 transition-colors flex items-center group"
              whileHover={{ x: 5 }}
            >
              Get Started
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Connection Line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00b67f] to-emerald-400"
              style={{ 
                width: '100%',
                scaleX: pathLength,
                transformOrigin: 'left center',
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-0 w-4 h-4 -mt-2 -ml-2 bg-gradient-to-r from-[#00b67f] to-emerald-400 rounded-full shadow-lg"
              style={{
                x: useTransform(pathLength, [0, 1], ['0%', '100%']),
                opacity: pathLength,
              }}
            />
          </div>

          {/* Client Card */}
          <motion.div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-2xl shadow-xl w-56 md:w-72 backdrop-blur-sm bg-white/80 border border-white/20"
            initial={{ x: 100, opacity: 0, rotate: 2 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.4
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-400 rounded-2xl mb-6 flex items-center justify-center text-white text-2xl shadow-lg">
              👔
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">For Clients</h3>
            <p className="text-gray-600 mb-4">Discover talented designers and bring your fashion ideas to life with custom creations.</p>
            <motion.button 
              className="text-sm font-medium text-purple-600 hover:text-indigo-700 transition-colors flex items-center group"
              whileHover={{ x: 5 }}
            >
              Find Designers
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Floating Icons */}
          <FloatingIcon 
            icon={
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            } 
            className="top-1/4 left-1/4"
            delay={0.5}
          />
          <FloatingIcon 
            icon={
              <svg className="w-10 h-10 text-[#00b67f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            className="top-1/3 right-1/4"
            delay={0.7}
          />
          <FloatingIcon 
            icon={
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            }
            className="bottom-1/4 left-1/3"
            delay={0.9}
          />
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: '500+', label: 'Designers' },
            { value: '10K+', label: 'Creations' },
            { value: '98%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-lg backdrop-blur-sm bg-white/80 border border-white/20"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00b67f] to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-200 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Fashion Journey?</h3>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#00b67f] to-emerald-500 text-white rounded-full font-medium text-lg hover:shadow-lg transition-all hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Now - It's Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
