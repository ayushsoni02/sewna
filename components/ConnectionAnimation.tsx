'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ConnectionAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative h-64 md:h-96"
          style={{ opacity }}
        >
          {/* Designer Card */}
          <motion.div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-48 md:w-64"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-[#00b67f] rounded-full mb-4 flex items-center justify-center text-white">
              🎨
            </div>
            <h3 className="text-lg font-semibold mb-2">Designers</h3>
            <p className="text-sm text-gray-600">Showcase your unique style and connect with clients</p>
          </motion.div>

          {/* Connection Line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#00b67f]"
              style={{ 
                width: '100%',
                scaleX: pathLength,
                transformOrigin: 'left center',
              }}
            />
          </div>

          {/* Client Card */}
          <motion.div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-48 md:w-64"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-[#00b67f] rounded-full mb-4 flex items-center justify-center text-white">
              👔
            </div>
            <h3 className="text-lg font-semibold mb-2">Clients</h3>
            <p className="text-sm text-gray-600">Find the perfect designer to bring your vision to life</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
