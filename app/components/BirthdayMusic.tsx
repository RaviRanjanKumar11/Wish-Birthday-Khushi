import { useEffect } from "react";

const BirthdayMusic = () => {
  useEffect(() => {
    const audio = new Audio("/bday.mp3");
    audio.loop = true;

    const playMusic = () => {
      audio.play().catch((error) => console.error("Audio Play Error:", error));
    };

    playMusic(); // Play when component loads

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null; // No UI needed
};

export default BirthdayMusic;
