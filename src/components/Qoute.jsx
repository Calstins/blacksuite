import React from 'react';
import CompanyProfile from '../assets/Yehgs-Co-Ltd-Company-Profile.pdf';
import { motion } from 'framer-motion';

const Quote = ({ text, author }) => {
  return (
    <div className=" md:w-[40vw] md:text-[10px] lg:text-[12px] lg:w-[30vw] text-sm">
      <blockquote className="italic font-thin">
        <p>{text}</p>
        <motion.footer whileHover={{ scale: 1.1 }} className="text-sec">
          <a href={CompanyProfile} download="Yehgs Co Ltd Company Profile">
            {author}
          </a>
        </motion.footer>
      </blockquote>
    </div>
  );
};

export default Quote;
