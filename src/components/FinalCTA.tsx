import React from 'react';
import { motion } from 'framer-motion';
import { Download, Bell, Smartphone } from 'lucide-react';

const FinalCTA = () => {
  const handlePlayStoreClick = () => {
    const event = new CustomEvent('openPlayStoreModal');
    window.dispatchEvent(event);
  };

  const handleIOSWaitlist = () => {
    const event = new CustomEvent('openIOSModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-20 bg-purple-600 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400 opacity-20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to begin your journey?
          </h2>

          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join thousands of community members who have already transformed their spiritual life with CRI-App
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayStoreClick}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:bg-gray-50 transition-all duration-300"
            >
              <Smartphone size={24} />
              <span>Get on Play Store</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleIOSWaitlist}
              className="bg-white border-2 border-white text-purple-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-purple-50 transition-all duration-300"
            >
              <Bell size={24} />
              <span>Notify Me on iOS</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;