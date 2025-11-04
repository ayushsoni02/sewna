"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RequestForm from '../../components/RequestForm';
import DesignerList from '../../components/DesignerList';

type Designer = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  tags: string[];
  rating: number;
};

export default function NeedADesigner() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [designers, setDesigners] = useState<Designer[]>([]);

  const handleSubmit = (formData: any) => {
    // Mock API call simulation
    setTimeout(() => {
      const mockDesigners: Designer[] = [
        {
          id: 1,
          name: 'Alex Rivera',
          specialty: 'Modern Streetwear',
          image: '/designer1.jpg',
          tags: ['Streetwear', 'Urban', 'Modern'],
          rating: 4.9,
        },
        {
          id: 2,
          name: 'Sophie Chen',
          specialty: 'Elegant Evening Wear',
          image: '/designer2.jpg',
          tags: ['Evening', 'Formal', 'Luxury'],
          rating: 4.8,
        },
        {
          id: 3,
          name: 'Sophie Chen',
          specialty: 'Elegant Evening Wear',
          image: '/designer2.jpg',
          tags: ['Evening', 'Formal', 'Luxury'],
          rating: 4.8,
        },
        {
          id: 4,
          name: 'Sophie Chen',
          specialty: 'Elegant Evening Wear',
          image: '/designer2.jpg',
          tags: ['Evening', 'Formal', 'Luxury'],
          rating: 4.8,
        },
        {
          id: 5,
          name: 'James Wilson',
          specialty: 'Sustainable Fashion',
          image: '/designer3.jpg',
          tags: ['Eco-friendly', 'Minimalist', 'Contemporary'],
          rating: 4.7,
        },
      ];
      setDesigners(mockDesigners);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion-1.jpg')`
      }}>
      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/" className="block">
          <div className="text-3xl font-bold tracking-tight" style={{
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontWeight: 800,
            color: '#00b67f',
            letterSpacing: '-0.5px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            display: 'inline-block'
          }}>
            <span className="opacity-80">se</span><span className="opacity-100">W</span><span className="opacity-80">na</span><span className="opacity-60 text-sm">.</span>
          </div>
        </Link>
      </motion.div>

      {!isSubmitted ? (
        <RequestForm onSubmit={handleSubmit} />
      ) : (
        <motion.div
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-2">We've found your perfect matches!</h2>
              <p className="text-white text-lg">Here are designers that match your style</p>
            </div>
            <DesignerList designers={designers} />
            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00b67f] hover:bg-[#00996d] transition-colors duration-200"
              >
                Back to Home
              </a>
              </div>
            </div>
          </motion.div>
        )}
    </div>
  );
}
