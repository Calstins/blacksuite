import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiTwitterXLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <div className="flex justify-start  gap-x-5 text-lg  ">
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link
          to="https://www.facebook.com/profile.php?id=61579355490791"
          className="hover:text-sec transition-all duration-300"
          target="_blank"
        >
          <RiFacebookLine />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link
          to="https://www.linkedin.com/company/blacksuit-solicitors"
          className="hover:text-sec transition-all duration-300"
          target="_blank"
        >
          <RiLinkedinLine />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link
          to="https://www.instagram.com/blacksuit_solicitors"
          className="hover:text-sec transition-all duration-300"
          target="_blank"
        >
          <RiInstagramLine />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link
          to="https://x.com/Blacksuit_legal"
          className="hover:text-sec transition-all duration-300"
          target="_blank"
        >
          <RiTwitterXLine />
        </Link>
      </motion.div>
    </div>
  );
};

export default Socials;
