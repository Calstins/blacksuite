import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedCTA = ({
  title,
  description,
  buttonText,
  buttonLink,
  className = '',
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`py-20 bg-gradient-to-r from-[#333446] to-[#7F8CAA] ${className}`}
  >
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-[#EAEFEF] mb-8 max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to={buttonLink}>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#EAEFEF',
              color: '#333446',
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#B8CFCE] text-[#333446] px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl"
          >
            {buttonText}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </motion.section>
);

export default AnimatedCTA;
