import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Facebook, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Community = () => {
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      name: 'Telegram',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      members: '2.5K+',
      description: 'Daily discussions and prayer requests',
      link: 'https://t.me/cri_community'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      members: '1.8K+',
      description: 'Community updates and fellowship',
      link: 'https://chat.whatsapp.com/cri_community'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      members: '5.2K+',
      description: 'Events, testimonies, and community news',
      link: 'https://facebook.com/cri.community'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'from-red-500 to-red-600',
      members: '3.1K+',
      description: 'Sermons, teachings, and live streams',
      link: 'https://youtube.com/@cri-community'
    }
  ];

  const stats = [
    { number: '8,500+', label: t('community.members') },
    { number: '45+', label: t('community.countries') },
    { number: '12+', label: t('community.languages') }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-300 to-orange-300 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('community.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <platform.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`community.${platform.name.toLowerCase()}`)}
                </h3>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {platform.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500">
                    {platform.members} members
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                </div>

                <motion.a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${platform.color} text-white py-3 px-4 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-300`}
                >
                  Join Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Connect?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Choose your favorite platform and join thousands of believers in meaningful fellowship
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <Users size={20} />
                <span>Join Our Community</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;