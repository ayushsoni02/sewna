import { motion, AnimatePresence } from 'framer-motion';

type Designer = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  tags: string[];
  rating: number;
};

type DesignerListProps = {
  designers: Designer[];
};

export default function DesignerList({ designers }: DesignerListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Placeholder image URL - in a real app, you'd use actual designer images
  const getPlaceholderImage = (id: number) => `https://i.pravatar.cc/300?img=${id + 10}`;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence>
        {designers.map((designer) => (
          <motion.div
            key={designer.id}
            variants={item}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 bg-gray-100">
              <img
                src={getPlaceholderImage(designer.id)}
                alt={designer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{designer.name}</h3>
                    <p className="text-gray-200 text-sm">{designer.specialty}</p>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-medium text-sm">{designer.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {designer.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00b67f]/10 text-[#007a56]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button className="text-sm font-medium text-[#00b67f] hover:text-[#008a63] transition-colors flex items-center">
                  View Portfolio
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button className="px-4 py-2 bg-[#00b67f] text-white text-sm font-medium rounded-lg hover:bg-[#00996d] transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
