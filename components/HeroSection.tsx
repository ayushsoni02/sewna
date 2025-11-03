import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Where Imagination Meets Craft.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Connect with independent designers to create your signature look.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link 
            href="/designer"
            className="px-8 py-4 bg-[#00b67f] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#00b67f]/30 transition-all duration-300 transform hover:scale-105"
          >
            🧵 I'm a Designer
          </Link>
          <Link 
            href="/client"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            ✨ I Need a Designer
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </motion.div>
    </section>
  );
}
