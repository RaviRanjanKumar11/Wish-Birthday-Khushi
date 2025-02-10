"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CandleEffect: React.FC = () => {
  const [candles, setCandles] = useState([true, true, true, true]); // 4 candles lit

  const blowOutCandle = (index: number) => {
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);
  };

  const allBlownOut = candles.every((candle) => !candle);

  return (
    <div className="flex flex-col items-center justify-center h-32">
      <div className="flex space-x-6">
        {candles.map((lit, index) => (
          <motion.div 
            key={index}  // ✅ Added key inside motion.div
            className="relative cursor-pointer"
            animate={{ y: [0, -3, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => blowOutCandle(index)}
          >
            {/* Candle Stick */}
            <div className="w-5 h-12 bg-pink-500 rounded-b-lg"></div>

            {/* Flame or Smoke */}
            {lit ? (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-5 bg-yellow-400 rounded-full animate-flicker"></div>
              </div>
            ) : (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-8 bg-gray-400 opacity-50 rounded-full animate-smoke"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {allBlownOut && (
        <p className="mt-1 text-sm text-green-600 animate-fade-in">✨ Make a wish! ✨</p>
      )}
    </div>
  );
};

export default CandleEffect;
