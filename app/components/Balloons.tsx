"use client";

import React from "react";
import { motion } from "framer-motion";

const balloonVariants = {
  float: {
    y: [10, -30, 10],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Balloons = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-end gap-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className={`w-12 h-16 bg-red-500 rounded-full`}
          variants={balloonVariants}
          animate="float"
          style={{
            backgroundColor: ["#FF5733", "#33FF57", "#5733FF", "#FF33A8", "#FFD700"][index],
            marginLeft: `${index * 30}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Balloons;
