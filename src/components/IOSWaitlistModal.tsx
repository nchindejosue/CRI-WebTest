import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { addToWaitlist } from '../lib/supabase';

const IOSWaitlistModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openIOSModal', handleOpenModal);
    return () => window.removeEventListener('openIOSModal', handleOpenModal);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      await addToWaitlist(email, 'ios');
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      setIsLoading(false);
      console.error('Error submitting email:', error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 opacity-50" />
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Mail className="text-purple-600" size={32} />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('ios_modal.title')}
                  </h2>
                  
                  <p className="text-gray-600">
                    {t('ios_modal.subtitle')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('modal.email_placeholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                      />
                    ) : (
                      t('modal.notify_me')
                    )}
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center relative z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="text-green-600" size={32} />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('modal.success_title')}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {t('modal.success_message')}
                </p>

                <motion.button
                  onClick={handleClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg"
                >
                  {t('modal.close')}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IOSWaitlistModal;