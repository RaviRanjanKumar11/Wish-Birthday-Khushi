"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const ConfettiEffect: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} />;
};

export default ConfettiEffect;
