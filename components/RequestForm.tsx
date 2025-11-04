"use client";

import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="min-h-screen w-full flex items-center justify-center p-4" style={{
            background: `
                linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                url('/images/fashion-1.jpg') left/50% 100% no-repeat,
                url('/images/fashion-2.jpg') right/50% 100% no-repeat
            `,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            minHeight: '100vh'
        }}>
            <motion.div
                className="backdrop-blur-sm bg-white/80 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl mx-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tell Us About Your Vision</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b67f] focus:border-transparent transition-all duration-200"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b67f] focus:border-transparent transition-all duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="designType" className="block text-sm font-medium text-gray-700 mb-1">
                                What are you looking to design? *
                            </label>
                            <select
                                id="designType"
                                name="designType"
                                required
                                value={formData.designType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b67f] focus:border-transparent transition-all duration-200 bg-white"
                            >
                                <option value="">Select a design type</option>
                                {designTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Inspiration (Optional)
                            </label>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <div
                                onClick={triggerFileInput}
                                className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[#00b67f] transition-colors duration-200"
                            >
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
                                        <div className="flex text-sm text-gray-600">
                                            <span className="relative cursor-pointer rounded-md font-medium text-[#00b67f] hover:text-[#00996d] focus-within:outline-none">
                                                Upload a file
                                            </span>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                                Tell us more about your vision *
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                required
                                rows={4}
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b67f] focus:border-transparent transition-all duration-200"
                                placeholder="Describe what you're looking for, your style preferences, any specific requirements, etc."
                            />
                        </div>

                        <div className="pt-4">
                            <motion.button
                                type="submit"
                                className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#00b67f] hover:bg-[#00996d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00b67f] transition-colors duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Finding Your Designers...
                                    </>
                                ) : (
                                    <span>Submit</span>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
    );
}
