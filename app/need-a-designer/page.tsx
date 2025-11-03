"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen bg-gray-50">
      {/* Intro Banner */}
      <motion.div 
        className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's bring your vision to life.</h1>
          <p className="text-lg text-gray-600">
            Share your ideas, upload inspiration, and get matched with designers who get your style.
          </p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!isSubmitted ? (
          <RequestForm onSubmit={handleSubmit} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">We've found your perfect matches!</h2>
              <p className="text-gray-600">Here are designers that match your style</p>
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
          </motion.div>
        )}
      </div>
    </div>
  );
}
