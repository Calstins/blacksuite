import React from 'react';
import Logo from '../assets/yehgs-co-logo.svg';
import Quote from '../components/Qoute';
import { fadeIn } from '../utils/variants';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="card flex  justify-center md:justify-between items-start w-full fixed top-0 ">
      <div className="flex justify-center items-center gap-2">
        <img src={Logo} alt="company logo" className="w-[61px] h-[30px]" />
        <span className="text-4xl capitalize font-semibold">YEHGS</span>
      </div>
      <motion.div
        variants={fadeIn('down', 3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:block"
      >
        <Quote
          text="Our vision is an ambitious and inspiring goal, guiding the company towards a beer future,both commercially and socially."
          author="YEHGS CO LTD"
        />
      </motion.div>
    </div>
  );
};

export default Header;
