"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="text-3xl font-bold flex items-center space-x-3">
      {/* 🔄 Dot Wave Loader */}
      <div className="flex space-x-1 animate-spin">
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-400"></span>
      </div>

      {/* ⏳ Countdown Text */}
      <span>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s until Khushi's birthday! 🎉
      </span>
    </div>
  );
};

export default Countdown;
