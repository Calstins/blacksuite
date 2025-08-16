import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PageTitleHero = ({ title, subtitle, quote, author, backgroundImage }) => (
  <section className="relative h-96 overflow-hidden -mt-20">
    <div className="h-20"></div>
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#333446]/90 to-[#333446]/70" />

    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[#EAEFEF] mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
          {quote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="border-l-4 border-[#B8CFCE] pl-6"
            >
              {/* <Quote className="w-8 h-8 text-[#B8CFCE] mb-2" />
              <blockquote className="text-lg italic text-[#B8CFCE] mb-2">
                "{quote}"
              </blockquote>
              {author && (
                <cite className="text-[#7F8CAA] font-semibold">— {author}</cite>
              )} */}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  </section>
);

export default PageTitleHero;
