import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart, Phone, Mail, MapIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WaysToConnect = () => {
  const { t } = useTranslation();

  const connections = [
    {
      icon: MapPin,
      title: t('connect.attend'),
      description: t('connect.attend_desc'),
      buttonText: t('connect.view_locations'),
      color: 'purple',
      link: '#locations'
    },
    {
      icon: Users,
      title: t('connect.small_group'),
      description: t('connect.small_group_desc'),
      buttonText: t('connect.find_group'),
      color: 'orange',
      link: '#groups'
    },
    {
      icon: Heart,
      title: t('connect.volunteer'),
      description: t('connect.volunteer_desc'),
      buttonText: t('connect.learn_volunteering'),
      color: 'purple',
      link: '#volunteer'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: t('connect.phone'),
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      label: t('connect.email'),
      value: 'contact@cri-community.org',
      link: 'mailto:contact@cri-community.org'
    },
    {
      icon: MapIcon,
      label: t('connect.address'),
      value: '123 Faith Street, Community City, CC 12345',
      link: 'https://maps.google.com/?q=123+Faith+Street+Community+City'
    }
  ];

  const handleLinkClick = (link: string) => {
    if (link.startsWith('#')) {
      // Scroll to section
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External link
      window.open(link, '_blank');
    }
  };

  return (
    <section id="connect" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-orange-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full blur-3xl"
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
            {t('connect.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('connect.subtitle')}
          </p>
        </motion.div>

        {/* Connection Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {connections.map((connection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                connection.color === 'purple' 
                  ? 'from-purple-500/5 to-purple-600/5' 
                  : 'from-orange-500/5 to-orange-600/5'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg ${
                    connection.color === 'purple' 
                      ? 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-600 group-hover:from-purple-600 group-hover:to-purple-700 group-hover:text-white' 
                      : 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 group-hover:text-white'
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
                  onClick={() => handleLinkClick(connection.link)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                    connection.color === 'purple'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                      : 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800'
                  }`}
                >
                  {connection.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-orange-50/50" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              {t('connect.contact_info')}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-100 to-orange-100 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-orange-600 transition-all duration-300"
                  >
                    <info.icon className="text-purple-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {info.label}
                    </p>
                    <p className="text-gray-900 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaysToConnect;