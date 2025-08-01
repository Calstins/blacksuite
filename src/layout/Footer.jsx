import React from 'react';
import CopyrightYear from '../components/CopyrightYear';
import Socials from '../components/Socials';
import GraduateProgram from '../components/GraduateProgram';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Footer = () => {
  return (
    <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-xs">
      <div className="flex justify-between md:justify-start md:gap-4 text-[13px] md:text-[14px] items-end md:col-span-1 lg:col-span-1">
        <div className="">
          <h1 className="uppercase text-sec mb-1">Headquarters</h1>
          <p>
            Unit A51, The Mall, LUI 2TA Luton, <br />
            United Kingdom
          </p>
          <a href="mailto:reception@yehgs.co.uk">reception@yehgs.co.uk</a>
          <br />
          {/* <a href="tel:+447404493555">(+44)-7404-493555</a> */}
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <h1 className="uppercase text-sec mb-1">West African Office</h1>
          <p>
            3, Kafi Street, Alausa Ikeja, Lagos,
            <br />
            Nigeria
          </p>
          <a href="mailto:reception@yehgs.co.uk">reception@yehgs.co.uk</a>
          <br />
          {/* <a href="tel:+2347030292729">(+234)-7030-292729</a> */}
        </div>
      </div>
      <div className="lg:col-span-1 flex justify-between items-end  md:justify-end md:gap-4 md:col-span-1 text-[13px] md:text-[14px] gap-6">
        {/* <motion.div
          variants={fadeIn('down', 3.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <GraduateProgram />
        </motion.div> */}
        <Socials />
      </div>
      <div className="md:col-span-2 lg:col-span-2 flex justify-center text-[10px] items-end">
        <CopyrightYear className="copyright" />
      </div>
    </div>
  );
};

export default Footer;
