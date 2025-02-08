"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Fireworks = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded"
      >
        🎇 Fireworks!
      </button>
      {show && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎆🎇✨🔥
        </motion.div>
      )}
    </>
  );
};

export default Fireworks;
