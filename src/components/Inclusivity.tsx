import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility, Globe } from 'lucide-react';

const Inclusivity = () => {
  const languages = ['English', 'Spanish', 'French', 'Portuguese', 'Swahili'];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to accessibility and inclusion ensures everyone can participate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Accessibility */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6"
            >
              <Accessibility className="text-purple-600" size={32} />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built for Everyone
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              We are committed to creating a digital experience accessible to all, including those 
              with visual or motor impairments, through high-contrast design and screen reader compatibility.
            </p>

            <div className="space-y-3">
              {['Screen Reader Compatible', 'High Contrast Mode', 'Large Text Options', 'Voice Navigation'].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Multi-language */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6"
            >
              <Globe className="text-orange-600" size={32} />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Speaking Your Language
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our community is global. Experience the app in multiple languages, with more on the way.
            </p>

            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {language}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: languages.length * 0.1 }}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                + More Coming Soon
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Inclusivity;