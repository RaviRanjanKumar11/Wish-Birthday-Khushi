"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isBirthday: false,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, calculateTimeLeft]);

  return (
    <div className="text-3xl font-bold flex items-center space-x-3">
      {/* 🔄 Animated Loader */}
      {!timeLeft.isBirthday && (
        <div className="flex space-x-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
        </div>
      )}

      {/* ⏳ Countdown Text */}
      <span>
        {timeLeft.isBirthday
          ? "🎉 It's Khushi's Birthday! 🎂"
          : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s until Khushi's birthday! 🎉`}
      </span>
    </div>
  );
};

export default Countdown;
