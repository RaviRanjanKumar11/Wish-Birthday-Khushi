"use client";

import { useState } from "react";
import BirthdayCard from "./components/BirthdayCard";
import ConfettiEffect from "./components/ConfettiEffect";
import ThemeSelector from "./components/ThemeSelector";
import UploadSection from "./components/UploadSection";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import ShareButtons from "./components/ShareButtons";
import Balloons from "./components/Balloons";
import CakeAnimation from "./components/CakeAnimation";
import RandomQuotes from "./components/RandomQuotes";
import ScreenshotButton from "./components/ScreenshotButton";
import Guestbook from "./components/Guestbook";
import LiveChat from "./components/LiveChat";
import Album from "./components/Album";
import CandleEffect from "./components/CandleEffect";
import MobileStatusBar from "./components/MobileStatusBar";
import BirthdayMusic from "./components/BirthdayMusic";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [music, setMusic] = useState<string | null>(null);
  const [theme, setTheme] = useState<"pink" | "blue" | "green" | "default">("default");
  const [showSurprise, setShowSurprise] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <div
  className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center relative px-2"
  style={{
    backgroundImage: "url('/khushi.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <MobileStatusBar />
  
<Countdown targetDate="2025-02-12" />
      <h1 className="md:text-5xl text-xl font-bold mb-1">🎂 Create a Birthday Wish! 🎈</h1>
  <CandleEffect />
      <input
        type="text"
        placeholder="Enter Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-2 py-1 rounded-md text-black"
      />

      <textarea
        placeholder="Write a personalized message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-2 px-2 py-0 rounded-md text-black w-full max-w-xs md:max-w-md"
      />

      <UploadSection setImage={setImage} setMusic={setMusic} />
      <ThemeSelector setTheme={setTheme} />

      {name && (
        <>
          <BirthdayCard name={name} message={message} image={image} theme={theme} />
          <ConfettiEffect />
          <Balloons />
          
          <RandomQuotes />
        </>
      )}

      {music && <MusicPlayer music={music} playMusic={playMusic} setPlayMusic={setPlayMusic} />}

      {name && (
        <>
          <button
            onClick={() => setShowSurprise(true)}
            className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          >
            🎁 Click for a Surprise!
          </button>

          <ScreenshotButton />
          <BirthdayMusic />
        </>
      )}

      {showSurprise && <CakeAnimation />}
     
      {name && <Guestbook />}
      {name && <LiveChat />}
      {name && <Album /> }
      {name && <ShareButtons name={name} message={message} />}
    </div>
  );
}
