import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            From Our Community
          </h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full opacity-50 -translate-y-16 translate-x-16"
            />

            <Quote className="text-purple-600 mx-auto mb-6" size={48} />
            
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
              "The CRI-App has transformed my daily spiritual routine. Having access to teachings 
              and staying connected with my community has brought so much peace and growth to my life. 
              It's like having a spiritual companion in my pocket."
            </blockquote>

            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Star className="text-yellow-400 fill-current" size={24} />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="font-semibold text-gray-900">Sarah M.</p>
              <p className="text-gray-600">Community Member since 2022</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;