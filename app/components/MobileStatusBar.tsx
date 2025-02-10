"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MobileStatusBar: React.FC = () => {
  const [location, setLocation] = useState({ state: "Unknown", town: "Unknown" });
  const [battery, setBattery] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  // Fetch Location (Using Geolocation API)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const data = await response.json();
            setLocation({
              state: data.address?.state || "Unknown",
              town: data.address?.town || data.address?.city || "Unknown",
            });
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        },
        (error) => console.warn("Geolocation error:", error)
      );
    }
  }, []);

  useEffect(() => {
     if ((navigator as any).getBattery) {
       (navigator as any).getBattery().then((battery: any) => {
         const updateBattery = () => {
           const level = Math.round(battery.level * 100);
           setBattery(level);
         };
   
         updateBattery();
         battery.addEventListener("levelchange", updateBattery);
   
         return () => {
           battery.removeEventListener("levelchange", updateBattery);
         };
       });
     }
   }, []);
   

  // Update Network Status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Update Current Time Every Second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-black text-white text-sm flex items-center justify-between px-4 py-2 md:hidden rounded-b-lg shadow-xl"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Location */}
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
        📍 {location.town}, {location.state}
      </motion.div>

      {/* Time */}
      <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
        🕒 {currentTime}
      </motion.div>

      {/* Battery */}
      <motion.div animate={{ opacity: [1, 0.8, 1] }} transition={{ duration: 1, repeat: Infinity }}>
        🔋 {battery !== null ? `${battery}%` : "--%"}
      </motion.div>

      {/* Network Status */}
      <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 1, repeat: Infinity }}>
        {isOnline ? "📶 Online" : "❌ Offline"}
      </motion.div>
    </motion.div>
  );
};

export default MobileStatusBar;
