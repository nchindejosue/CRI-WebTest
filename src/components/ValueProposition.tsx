import React from 'react';
import { motion } from 'framer-motion';
import { Users, Headphones, Heart } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Users,
      title: 'Stay Connected',
      description: 'Never miss important updates from your community. Get real-time notifications about events, announcements, and fellowship opportunities.',
      color: 'purple'
    },
    {
      icon: Headphones,
      title: 'Inspiration On-Demand',
      description: 'Access a rich library of sermons, teachings, and daily devotionals. Listen anytime, anywhere, and grow in your faith journey.',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Share Your Story',
      description: 'Connect with fellow community members, share prayer requests, and celebrate testimonies together in a safe, welcoming space.',
      color: 'purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose CRI-App?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed with your spiritual growth and community connection in mind
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  value.color === 'purple' 
                    ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' 
                    : 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                } transition-all duration-300`}
              >
                <value.icon size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;