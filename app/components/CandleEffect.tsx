"use client";

import { useState } from "react";

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
          <div key={index} className="relative cursor-pointer" onClick={() => blowOutCandle(index)}>
            {/* Candle Stick */}
            <div className="w-5 h-12 bg-pink-500 rounded-b-lg"></div>

            {/* Flame */}
            {lit ? (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-5 bg-yellow-400 rounded-full animate-flicker"></div>
              </div>
            ) : (
              /* Smoke */
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-8 bg-gray-400 opacity-50 rounded-full animate-smoke"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {allBlownOut && (
        <p className="mt-1 text-sm text-green-600 animate-fade-in">✨ Make a wish! ✨</p>
      )}
    </div>
  );
};

export default CandleEffect;
