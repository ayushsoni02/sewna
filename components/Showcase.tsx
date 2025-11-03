import { motion } from 'framer-motion';

const features = [
  {
    icon: '✂️',
    title: 'Custom Designs',
    description: 'Get one-of-a-kind pieces that reflect your personal style and story.'
  },
  {
    icon: '🤝',
    title: 'Tailored Collaborations',
    description: 'Work directly with designers who understand your vision and needs.'
  },
  {
    icon: '📖',
    title: 'Unique Stories',
    description: 'Every creation has a story. Be part of something meaningful and authentic.'
  }
];

export default function Showcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The SEWNA Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a new way to connect with fashion that tells your story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-6 group-hover:text-[#00b67f] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
