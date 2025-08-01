import React from 'react';
import New from '../assets/new.gif';
import GraduateProgramFile from '../assets/Graduate-Trainee-Program.pdf';
import { motion } from 'framer-motion';

const GraduateProgram = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex justify-center items-center hover:text-sec cursor-pointer"
    >
      <a
        href={GraduateProgramFile}
        download="Graduate Training Program"
        className="flex justify-center items-center hover:text-sec cursor-pointer"
      >
        <span>Graduate Trainee Program</span>
        <img src={New} alt="new" className="w-[50px] h-[24px]" />
      </a>
    </motion.div>
  );
};

export default GraduateProgram;
