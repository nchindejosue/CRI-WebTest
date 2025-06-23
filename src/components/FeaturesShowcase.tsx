import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Volume2 } from 'lucide-react';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Volume2,
      title: 'A Library of Teachings at Your Fingertips',
      description: 'Access hundreds of sermons, Bible studies, and inspirational messages. Download for offline listening and never miss a moment of spiritual growth.',
      image: '/api/placeholder/600/400',
      reverse: false
    },
    {
      icon: BookOpen,
      title: 'Start Your Day with Intention',
      description: 'Begin each morning with carefully curated daily devotionals, scripture readings, and reflection questions designed to center your heart and mind.',
      image: '/api/placeholder/600/400',
      reverse: true
    },
    {
      icon: Calendar,
      title: 'Never Miss a Moment',
      description: 'Stay updated with all community events, special services, and fellowship opportunities. Set reminders and invite friends to join you.',
      image: '/api/placeholder/600/400',
      reverse: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Faith Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to stay connected and grow spiritually
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={feature.reverse ? 'lg:col-start-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="text-purple-600" size={32} />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {feature.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Image/Mockup */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${feature.reverse ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
                  {/* Phone mockup content */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-48 h-80 bg-gray-900 rounded-3xl p-1 shadow-xl"
                    >
                      <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
                        <div className="bg-purple-600 h-8 flex items-center justify-center">
                          <div className="w-12 h-1 bg-white rounded-full opacity-50"></div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-center space-x-3">
                            <feature.icon className="text-purple-600" size={20} />
                            <div className="h-3 bg-gray-200 rounded flex-1"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded w-full"></div>
                            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="h-2 bg-purple-200 rounded w-full mb-2"></div>
                            <div className="h-2 bg-purple-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-4 right-4 w-6 h-6 bg-orange-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute bottom-4 left-4 w-8 h-8 bg-purple-400 rounded-full opacity-40"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;