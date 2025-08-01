import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import DownloadButton from '../components/DownloadButton';
import { fadeIn } from '../utils/variants';

const Layout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 40;
  return (
    <div className="h-full w-full flex flex-col justify-center items-center -mt-10">
      <motion.div
        className="card flex justify-center items-center flex-col"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <motion.div
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <div
            className="text-red flex items-center justify-center flex-col "
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <h1 className="font-bold text-[5rem] uppercase md:text-[10rem] text-ter">
              YEhgS
            </h1>
            <p className="-mt-4 text-xl md:text-2xl text-ter">
              FMCG Coffee Partner Worldwide
            </p>
          </div>
        </motion.div>
        <div className="body">
          <div className="flex items-center justify-center flex-col">
            <h1 className="font-bold text-[5rem] uppercase md:text-[10rem]">
              YEHgS
            </h1>
            <p className="-mt-4 text-xl md:text-2xl ">
              FMCG Coffee Partner Worldwide
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('down', 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mt-5 md:mt-0"
      >
        <DownloadButton />
      </motion.div>
    </div>
  );
};

export default Layout;
