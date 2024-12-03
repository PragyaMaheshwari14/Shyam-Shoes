import React from "react";
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="marquee h-[15vw] py-12 flex overflow-hidden whitespace-nowrap">
      <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="text-[10vw] font-krona tracking-tight leading-none font-extrabold pr-10"
      >
        Style. Comfort. Trend.
      </motion.h1>

      <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="text-[10vw] font-krona tracking-tight leading-none font-extrabold pr-10"
      >
        Style. Comfort. Trend.
      </motion.h1>
    </div>
  );
};

export default Marquee;
