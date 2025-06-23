import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const leaders = [
    {
      name: 'Pastor John Smith',
      title: 'Senior Pastor',
      quote: 'Technology should serve our mission to spread love and build community.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Director of Community Outreach',
      quote: 'Every person who joins our digital community is a blessing to us all.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rev. David Johnson',
      title: 'Youth Pastor',
      quote: 'Connecting with our younger generation through technology opens new doors for ministry.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
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
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated servants committed to fostering spiritual growth and community connection
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-50 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative mb-6"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-4 border-purple-200"
                />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {leader.name}
              </h3>
              
              <p className="text-purple-600 font-semibold mb-4">
                {leader.title}
              </p>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{leader.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;