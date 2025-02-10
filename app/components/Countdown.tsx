"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const [isMounted, setIsMounted] = useState(false); // ✅ Prevent SSR mismatch
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthday: false,
  });

  // ✅ Ensure countdown only runs on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Calculate time left
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

  // ✅ Start countdown only after mounting
  useEffect(() => {
    if (!isMounted) return;

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isMounted, calculateTimeLeft]);

  // ✅ Prevent hydration error by rendering null initially
  if (!isMounted) return null;

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
