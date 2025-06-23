import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart } from 'lucide-react';

const WaysToConnect = () => {
  const connections = [
    {
      icon: MapPin,
      title: 'Attend a Gathering',
      description: 'Join us for weekly services and special events in your area.',
      buttonText: 'View Locations & Times',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Join a Small Group',
      description: 'Connect with others in intimate fellowship and Bible study.',
      buttonText: 'Find a Group',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Volunteer With Us',
      description: 'Make a difference by serving in our community outreach programs.',
      buttonText: 'Learn About Volunteering',
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
    <section id="connect" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Us In Person and Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While our app keeps you connected digitally, we'd love to meet you in person too
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {connections.map((connection, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  connection.color === 'purple' 
                    ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' 
                    : 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                } transition-all duration-300`}
              >
                <connection.icon size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {connection.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {connection.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  connection.color === 'purple'
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
              >
                {connection.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WaysToConnect;