"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const [isClient, setIsClient] = useState(false); // Track if component is mounted
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthday: false,
  });

  useEffect(() => {
    setIsClient(true); // Set after mounting to avoid SSR mismatch
  }, []);

  const calculateTimeLeft = useCallback(() => {
    if (!isClient) return timeLeft; // Prevent calculation before mount

    const now = new Date();
    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0); // Ensure target is at midnight

    const difference = target.getTime() - now.getTime();
    const isBirthdayToday =
      now.getFullYear() === target.getFullYear() &&
      now.getMonth() === target.getMonth() &&
      now.getDate() === target.getDate();

    if (isBirthdayToday) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
    }

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: false };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isBirthday: false,
    };
  }, [targetDate, isClient]);

  useEffect(() => {
    if (!isClient) return;

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient, calculateTimeLeft]);

  // Prevent SSR mismatch by rendering nothing until mounted
  if (!isClient) return null;

  return (
    <div className="text-3xl font-bold flex items-center space-x-3">
      {!timeLeft.isBirthday && (
        <div className="flex space-x-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
        </div>
      )}
      <span>
        {timeLeft.isBirthday
          ? "🎉 It's Khushi's Birthday! 🎂"
          : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s until Khushi's birthday! 🎉`}
      </span>
    </div>
  );
};

export default Countdown;
