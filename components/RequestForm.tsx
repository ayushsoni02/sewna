"use client";

import { useState, useRef, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type FormData = {
  fullName: string;
  email: string;
  designType: string;
  inspiration: File | null;
  notes: string;
};

type RequestFormProps = {
  onSubmit: (data: Omit<FormData, 'inspiration'> & { inspiration: string }) => void;
};

export default function RequestForm({ onSubmit }: RequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    designType: '',
    inspiration: null,
    notes: '',
  });
  const [preview, setPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const designTypes = [
    'Dress',
    'Suit',
    'Casual',
    'Wedding',
    'Accessories',
    'Other',
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        inspiration: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit({
        ...formData,
        inspiration: preview,
      });
    }, 1500);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-center bg-no-repeat" 
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url('/images/fashion-1.jpg'),
          url('/images/fashion-2.jpg')
        `,
        backgroundSize: '50% 100%, 50% 100%, 50% 100%',
        backgroundPosition: 'center, left, right',
      }}
    >
      <motion.div 
        className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Tell Us About Your Vision
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Id *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="designType" className="block text-sm font-medium text-gray-700">
              Design Type *
            </label>
            <select
              id="designType"
              name="designType"
              required
              value={formData.designType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
            >
              <option value="">Select a design type</option>
              {designTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Inspiration (Optional)
            </label>
            <div className="mt-1">
              <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                {preview ? (
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-48 mx-auto rounded-lg mb-4"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreview('');
                        setFormData(prev => ({ ...prev, inspiration: null }));
                      }}
                      className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex justify-center text-sm text-gray-600">
                      <span className="relative font-medium text-green-600 hover:text-green-700 cursor-pointer">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Tell us more about your vision *
            </label>
            <textarea
              id="notes"
              name="notes"
              required
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Describe what you're looking for, your style preferences, any specific requirements, etc."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Finding Your Designers...
              </span>
            ) : (
              'Submit'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
