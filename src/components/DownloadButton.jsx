import React from 'react';
import { motion } from 'framer-motion';
import companyProfile from '../assets/Yehgs-Co-Ltd-Company-Profile.pdf';

const DownloadButton = () => {
  return (
    <motion.button
      className=" px-6 py-2 rounded-md relative radial-gradient border border-spacing-1"
      initial={{ '--x': '100%', scale: 1 }}
      animate={{ '--x': '-100%' }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <a download="Yehgs Co Ltd Company Profile" href={companyProfile}>
        <span className="uppercase text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask text-xs md:text-sm">
          download company profile
        </span>
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </a>
    </motion.button>
  );
};

export default DownloadButton;
