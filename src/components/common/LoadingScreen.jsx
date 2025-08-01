import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#333446] flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-[#B8CFCE] border-t-transparent rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-[#EAEFEF] mb-2">
        Blacksuit Solicitors
      </h2>
      <p className="text-[#7F8CAA]">Loading Excellence...</p>
    </motion.div>
  </div>
);

export default LoadingScreen;
