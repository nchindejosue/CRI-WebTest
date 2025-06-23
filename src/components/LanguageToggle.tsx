import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-100 to-orange-100 text-purple-700 hover:from-purple-200 hover:to-orange-200 transition-all duration-300 shadow-sm"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? t('language.french') : t('language.english')}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;