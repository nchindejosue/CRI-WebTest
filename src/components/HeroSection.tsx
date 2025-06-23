import React from 'react';
import { motion } from 'framer-motion';
import { Download, Bell, Play, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  const handlePlayStoreClick = () => {
    const event = new CustomEvent('openPlayStoreModal');
    window.dispatchEvent(event);
  };

  const handleIOSWaitlist = () => {
    const event = new CustomEvent('openIOSModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-orange-100/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full blur-lg"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {t('hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 animate-pulse">
                {t('hero.inspiration')}
              </span>{' '}
              {t('hero.and_community')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayStoreClick}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"
                />
                <Smartphone size={24} />
                <span>{t('hero.get_on_playstore')}</span>
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(255, 143, 0, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleIOSWaitlist}
                className="border-2 border-gradient-to-r from-purple-600 to-orange-500 bg-gradient-to-r from-purple-50 to-orange-50 text-purple-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:from-purple-100 hover:to-orange-100 transition-all duration-300 relative overflow-hidden group"
                style={{
                  borderImage: 'linear-gradient(45deg, #6A1B9A, #FF8F00) 1'
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bell size={24} />
                </motion.div>
                <span>{t('hero.notify_ios')}</span>
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-gray-500 flex items-center justify-center lg:justify-start space-x-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span>{t('hero.free_download')}</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Phone Frame with enhanced styling */}
              <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Enhanced Status Bar */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-12 flex items-center justify-between px-6 text-white text-sm relative overflow-hidden">
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      9:41
                    </motion.div>
                    <span className="font-semibold">CRI-App</span>
                    <div className="flex items-center space-x-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 bg-white rounded-full"
                      />
                      <span>100%</span>
                    </div>
                    
                    {/* Animated background */}
                    <motion.div
                      animate={{ x: [-100, 400] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-20 -skew-x-12"
                    />
                  </div>
                  
                  {/* Enhanced App Content Preview */}
                  <div className="p-6 space-y-4 bg-gradient-to-b from-purple-50/50 to-orange-50/50">
                    <div className="text-center">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className="w-16 h-16 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                      >
                        <Play className="text-purple-600" size={24} />
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 mb-2">Daily Devotional</h3>
                      <p className="text-sm text-gray-600">Start your day with intention</p>
                    </div>
                    
                    <div className="space-y-3">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-purple-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-24 mb-1"></div>
                            <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-16"></div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-orange-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-32 mb-1"></div>
                            <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-20"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1.1, 0.8, 1.1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-lg"
              />
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  x: [5, -5, 5],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-orange-300 to-purple-300 rounded-full shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;