import { useState } from "react";

const BirthdayMusic = () => {
  const [audio] = useState(new Audio("/bday.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error("Play Error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={toggleMusic} 
      className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
      {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
    </button>
  );
};

export default BirthdayMusic;
