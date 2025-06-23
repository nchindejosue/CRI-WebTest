import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/cri.community', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/cri.community', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@cri-community', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: t('footer.about_us'), href: '#about' },
    { label: t('features'), href: '#features' },
    { label: t('community'), href: '#community' },
    { label: t('footer.support'), href: '#support' },
    { label: t('footer.contact'), href: '#connect' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative">
                <img 
                  src="/LogoFixed 1 (1).png" 
                  alt="CRI Logo" 
                  className="h-12 w-12 drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))'
                  }}
                />
                <div className="absolute inset-0 bg-white rounded-full opacity-10 -z-10"></div>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-white">CRI</span>
                <span className="text-orange-400">-</span>
                <span className="text-white font-normal">App</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
            >
              {t('footer.description')}
            </motion.p>

            <motion.a
              href="mailto:contact@cri-community.org"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 w-fit"
            >
              <Mail size={20} />
              <span>contact@cri-community.org</span>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-6 text-white"
            >
              {t('footer.quick_links')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="block text-gray-300 hover:text-white transition-all duration-200 text-left"
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Social Media */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-6 text-white"
            >
              {t('footer.follow_us')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    rotate: [0, -5, 5, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          
          <div className="flex space-x-6 text-sm">
            <motion.button
              onClick={() => scrollToSection('#privacy')}
              whileHover={{ y: -2, scale: 1.05 }}
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              {t('footer.privacy')}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#terms')}
              whileHover={{ y: -2, scale: 1.05 }}
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              {t('footer.terms')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;