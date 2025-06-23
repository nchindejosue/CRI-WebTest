import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Download, CheckCircle, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { addToWaitlist, getLatestAPK, getAPKDownloadUrl } from '../lib/supabase';

const PlayStoreModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openPlayStoreModal', handleOpenModal);
    return () => window.removeEventListener('openPlayStoreModal', handleOpenModal);
  }, []);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      await addToWaitlist(email, 'playstore');
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      setIsLoading(false);
      console.error('Error submitting email:', error);
    }
  };

  const handleAPKDownload = async () => {
    setIsDownloading(true);
    
    try {
      const latestAPK = await getLatestAPK();
      if (latestAPK) {
        const downloadUrl = await getAPKDownloadUrl(latestAPK.file_path);
        if (downloadUrl) {
          window.open(downloadUrl, '_blank');
        }
      }
    } catch (error) {
      console.error('Error downloading APK:', error);
    } finally {
      setIsDownloading(false);
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
                    <Smartphone className="text-purple-600" size={32} />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('modal.playstore_title')}
                  </h2>
                  
                  <p className="text-gray-600">
                    {t('modal.playstore_subtitle')}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Notify Option */}
                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-4 rounded-xl border border-purple-100">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Mail className="mr-2 text-purple-600" size={20} />
                      {t('modal.notify_playstore')}
                    </h3>
                    <form onSubmit={handleNotifySubmit} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('modal.email_placeholder')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mx-auto"
                          />
                        ) : (
                          t('modal.notify_me')
                        )}
                      </motion.button>
                    </form>
                  </div>

                  {/* Download APK Option */}
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-4 rounded-xl border border-orange-100">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Download className="mr-2 text-orange-600" size={20} />
                      {t('modal.download_apk')}
                    </h3>
                    <motion.button
                      onClick={handleAPKDownload}
                      disabled={isDownloading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm"
                    >
                      {isDownloading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mx-auto"
                        />
                      ) : (
                        t('modal.download')
                      )}
                    </motion.button>
                  </div>
                </div>
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
                  className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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

export default PlayStoreModal;